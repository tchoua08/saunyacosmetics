import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../utils/helpers/must-match.validator';
import { AuthService } from '../../auth.service';

import {Select, Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {UserState} from '../../user.state';
import {AddUser, SetSelectedUser, UpdateUser} from '../../store/actions/user.action';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../store/models/user.model';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { AlertController } from '@ionic/angular';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.page.html',
  styleUrls: ['./creercompte.page.scss'],
})
export class CreercomptePage implements OnInit {
  checkboxes: any;
  indeterminateState: boolean;
  checkParent: boolean;
  registerForm: any;
  submitted = false;
  start = 'non';
  @Select(UserState.getSelectedUser) selectedUser!: Observable<User>;
  constructor(
    private navService: NavService,
    public alertController: AlertController,
    private route: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {

  }



  ngOnInit() {


    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        numTel : ['', Validators.required],
        communication : ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );

    this.checkboxes = [
      {
        value: 'SMS',
        isItemChecked: false
      },
      {
        value: 'Notification sur l\'application mobile',
        isItemChecked: false
      },
      {
        value: 'Email',
        isItemChecked: false
      },
      {
        value: 'J\'accepte les conditions g??n??rales',
        isItemChecked: false
      }
    ];
  }

  checkCheckbox() {
    setTimeout(() => {
      this.checkboxes.forEach(item => {
        item.isItemChecked = this.checkParent;
      });
    });
  }

  verifyEvent() {
    const allItems = this.checkboxes.length;
    let selected = 0;

    this.checkboxes.map(item => {
      if (item.isItemChecked) {selected++; }
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.checkParent = false;
    } else if (selected === allItems) {
      // All item selected
      this.checkParent = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.checkParent = false;
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  async messageEnreg(msg: string){
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

   onSubmit(user: any) {

    this.submitted = true;
    /*if (this.registerForm.invalid) {

      return;
    }*/

    this.start = 'oui';
    console.log("name:"+user.lastName);
    console.log("email:"+user.email);
    console.log("password:"+user.password);
    this.authService.signUp(user.lastName, user.email, user.password).subscribe(resultat => {

      const oneUser: User = {
        id: 0,
        name: user.lastName,
        type: '',
        email:  user.email,
        avatar: '',
        avatar_original: '',
        address: '',
        city: '',
        country: '',
        postal_code: '',
        phone: ''
     };

      this.start = 'non';
      this.messageEnreg('Cr??ation de compte avec succ??s.Veuillez consulter votre bo??te mail pour valider votre email');
      this.authService.RegisterUser(user.email, user.password)
      .then((res) => {

        this.authService.SendVerificationMail();

      }).catch((error) => {

      })
      this.store.dispatch(new AddUser(oneUser));

      this.route.navigateByUrl('/tabs/profil', { replaceUrl: true });

    }, err => {
      this.messageEnreg('Erreur de cr??ation de compte ou compte d??j?? existant');

      this.registerForm.reset();
      this.start = 'non';
    });




  }

}

