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

@Component({
  selector: 'app-modifier-mot-passe',
  templateUrl: './modifier-mot-passe.page.html',
  styleUrls: ['./modifier-mot-passe.page.scss'],
})
export class ModifierMotPassePage implements OnInit {
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
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {

  }



  ngOnInit() {


    this.registerForm = this.formBuilder.group(
      {

        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );


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
    this.authService.updatePassword(user.password).subscribe(resultat => {



      this.start = 'non';
      this.messageEnreg('Modification du mot de passe avec succès');

      this.route.navigateByUrl('/tabs/profil/monprofil', { replaceUrl: true });

    }, err => {
      this.messageEnreg('Erreur de modification du mot de passe');

      this.registerForm.reset();
      this.start = 'non';
    });




  }

}

