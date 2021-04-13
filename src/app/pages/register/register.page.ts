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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  checkboxes: any;
  indeterminateState: boolean;
  checkParent: boolean;
  registerForm: any;
  submitted = false;
  start = 'non';
  @Select(UserState.getSelectedUser) selectedUser!: Observable<User>;
  constructor(
    public alertController: AlertController,
    private route: Router,
    private navService:NavService,
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
        value: 'J\'accepte les conditions générales',
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
    console.log("name1:"+user.lastName);
    console.log("email1:"+user.email);
    console.log("password1:"+user.password);
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
      this.messageEnreg('Création de compte avec succès.Veuillez consulter votre boîte mail pour valider votre email');

      this.authService.RegisterUser(user.email, user.password)
      .then((res) => {

        this.authService.SendVerificationMail();

      }).catch((error) => {

      })

      this.store.dispatch(new AddUser(oneUser));

      this.route.navigateByUrl('/login', { replaceUrl: true });

    }, err => {
      this.messageEnreg('Erreur de création de compte ou compte déjà existant');

      this.registerForm.reset();
      this.start = 'non';
    });




  }

}
