import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../utils/helpers/must-match.validator';
import { AuthService } from '../../auth.service';

import {Select, Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {UserState} from '../../user.state';
import {AddUser,GetUsers, SetSelectedUser, UpdateUser} from '../../store/actions/user.action';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../store/models/user.model';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { AlertController } from '@ionic/angular';
import { NavService } from 'src/app/nav.service';
@Component({
  selector: 'app-modifierprofil',
  templateUrl: './modifierprofil.page.html',
  styleUrls: ['./modifierprofil.page.scss'],
})
export class ModifierprofilPage implements OnInit {
  checkboxes: any;
  indeterminateState: boolean;
  checkParent: boolean;
  registerForm: any;
  submitted = false;
  start = 'non';
  item:any =null;
  @Select(UserState.getSelectedUser) selectedUser!: Observable<User>;

  @Select(UserState.getUserList) users!: Observable<User[]>;

  items:User[]=[];

  constructor(
    private navService: NavService,
    public alertController: AlertController,
    private route: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {
   this.store.dispatch(new GetUsers());
   this.users.subscribe(res => {
    this.items = res;
    this.item =this.items[0];

  });
  }



  ngOnInit() {


    this.registerForm = this.formBuilder.group(
      {
        firstName: [this.item?.name, Validators.required],
        lastName: [this.item?.name, Validators.required],
        email: [this.item?.email, [Validators.required, Validators.email]]
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
    let nom =user.firstName +' '+user.lastName;

    this.authService.updateName(nom).subscribe(resultat => {

      const oneUser: User = {
        id: 0,
        name: nom,
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
      this.messageEnreg('Modification du compte avec succès');

      this.store.dispatch(new UpdateUser(oneUser,1));

      this.route.navigateByUrl('/tabs/profil/monprofil', { replaceUrl: true });


    }, err => {
      alert("err:"+JSON.stringify(err));
      this.messageEnreg('Erreur de modification du compte');

      this.registerForm.reset();
      this.start = 'non';
    });




  }

}
