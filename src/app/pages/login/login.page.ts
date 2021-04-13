import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../auth.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {User} from '../../../app/store/models/user.model';
import {UserState} from '../../../app/user.state';
import {AddUser, DeleteUser, GetUsers, SetSelectedUser} from '../../../app/store/actions/user.action';
import { NavService } from 'src/app/nav.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  start = 'non';
  userPassword = '';
  userEmail = '';

  @Select(UserState.getUserList) users!: Observable<User[]>;

  constructor(  private navService: NavService, private store: Store, private authService: AuthService, public alertController: AlertController, public _router: Router) { }

  onClick(){
    this._router.navigate(['/']).then(res => {
      this._router.navigate(['creercompte/']);
    });
  }
  connexion(){
     this._router.navigate(['/']).then(res => {
      this._router.navigate(['/main']);
    });
  }
  login() {

    const pattern = /^([a-zA-Z0-9]+[-_\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,18})+$/;

    const chaine = this.userEmail.split(' ');

    this.userEmail = chaine[0];

    if (this.userEmail === '' || this.userPassword === '') {
    this.messageEnreg('Entrer l\'email et le mot de passe');
      } else if (!pattern.test(this.userEmail)) {
        this.messageEnreg('Adresse email inccorect');
      }  else {
    this.start = 'oui';
    this.authService.SignIn(this.userEmail, this.userPassword)
    .then((res) => {
      if(this.authService.isEmailVerified) {



    this.authService.login(this.userEmail, this.userPassword).subscribe(
      (data: any) => {

        const user: User = {
          id: data.user.id,
          name: data.user.name,
          type: data.user.type,
          email: data.user.email,
          avatar: data.user.avatar,
          avatar_original: data.user.avatar_original,
          address: data.user.name.address,
          city: data.user.name.city,
          country: data.user.country,
          postal_code: data.user.postal_code,
          phone: data.user.phone

       };
        this.store.dispatch(new AddUser(user));
        this.messageEnreg('connexion avec succès');
        this.start = 'non';
        const userid =data.user.id+'';
        Storage.set({
          key: 'connexion',
          value: 'true'
        });
        Storage.set({
          key: 'userid',
          value: userid
        });

        Storage.set({
          key: 'validation',
          value: 'true'
        });
        this._router.navigateByUrl('', { replaceUrl: true });



      },
      (err) => {
        this.start = 'non';
        Storage.set({
          key: 'connexion',
          value: 'false'
        });
        console.log("err:"+JSON.stringify(err));
        this.messageEnreg('Erreur de connexion');

      }
    );


      } else {
        this.start = 'non';
        this.messageEnreg('Adresse email non validée');
        return false;
      }
    }).catch((error) => {
      this.start = 'non';
      this.messageEnreg('L\'utilisateur n\'est pas encore enregistré ou email ou mot de passe incorrect');
    })




      }
  }

  async messageEnreg(msg: string){
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }



}
