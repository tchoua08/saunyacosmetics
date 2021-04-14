import { Component,OnInit } from '@angular/core';
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
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  start = 'non';
  userPassword = '';
  userEmail = '';

  @Select(UserState.getUserList) users!: Observable<User[]>;

  constructor( private store: Store, private authService: AuthService, public alertController: AlertController, public router: Router) { }

   ionViewDidLoad () {
    /**await Storage.get({ key: 'connexion' }).then(res => {

      if (res.value ==='false') {

      }else{
        Storage.set({
          key: 'validation',
          value: 'true'
        });
        //this.router.navigateByUrl('/tabs/profil/monprofil', { replaceUrl: true });
      }
    });*/

    }


  // Création de compte
  creationCompte(){
   this.router.navigateByUrl('creercompte');

  }

  // mot de passe oublié
  motPasseOublier(){}

  // se connecter
  seConnecter(){}

  // cacher le mot de passe
  hideShowPassword() {}
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

    this.authService.loginFB(this.userEmail, this.userPassword)
    .then((res) => {

      if(res==='true'){

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


              //this.router.navigateByUrl('/tabs/profil/monprofil', { replaceUrl: true });

              this.router.navigateByUrl('/tabs/profil/country', { replaceUrl: true });


            },
            (err) => {
              Storage.set({
                key: 'connexion',
                value: 'false'
              });
              this.start = 'non';
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
