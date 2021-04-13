import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-motpasseoublier',
  templateUrl: './motpasseoublier.page.html',
  styleUrls: ['./motpasseoublier.page.scss'],
})
export class MotpasseoublierPage {

  email = '';
   start = 'non';
  constructor( private authService: AuthService, public alertController: AlertController, public _router: Router) { }



      resetpwd() {
        const pattern = /^([a-zA-Z0-9]+[-_\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,18})+$/;

        const chaine = this.email.split(' ');

        this.email = chaine[0];

        if (this.email === '') {
    this.messageEnreg('Entrer l\'email');
      } else if (!pattern.test(this.email)) {
        this.messageEnreg('Adresse email inccorect');
      }  else {
          this.start = 'oui';
          this.authService.sendPasswordResetEmail(this.email).subscribe(
            (resultat) => {
              this.start = 'non';
              this.messageEnreg('Merci de verifier votre boîte email, nous vous avons envoyés un lien pour restaurer votre mot de passe.');

            },
            (err) => {
              this.start = 'non';
              alert("erreur"+JSON.stringify(err));
              this.messageEnreg('Un problème est survenu, merci de réessayer');

            }
          );
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
