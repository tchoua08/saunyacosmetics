import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import {AppService} from '../../../app/app.service';
//import { NavDataServiceService } from '../services/nav-data-service.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {
phoneNumber= ''
verificationId="1245";
code = Array();
started=false;
numerotel='';
verificationInProgress=false;
@ViewChild('codesInpunt0') codesInpunt0;
@ViewChild('codesInpunt1') codesInpunt1;
@ViewChild('codesInpunt2') codesInpunt2;
@ViewChild('codesInpunt3') codesInpunt3;
constructor(
public router: Router,
public navData:AppService,
public platform : Platform,
private route: ActivatedRoute,
public toastCtrl: ToastController) {
  this.numerotel = this.route.snapshot.params.numerotel;
this.started=false;
}
ngOnInit() {
//let data = this.navData.getDataWithoutId()
this.phoneNumber =" data['phoneNumber']";
this.verificationId =" data['smscode']";
console.log("route special "+this.phoneNumber+" verif code "+this.verificationId)
}
ionViewDidEnter() {
this.codesInpunt0.setFocus();
}
changeFocus(inputToFocus) {
switch (inputToFocus) {
case 1:
this.codesInpunt1.setFocus();
break;
case 2:
this.codesInpunt2.setFocus();
break;
case 3:
this.codesInpunt3.setFocus();
break;
case 4:
let enteredCode = this.code[0]+this.code[1] + this.code[2] + this.code[3]   ;
this.resetCode()
if (this.verificationInProgress==false){
this.verificationInProgress=true;
this.activate(enteredCode)
}
break;
}
}
activate(enteredCode) {
if (enteredCode){
console.log("Compare code sms "+enteredCode+" avec "+this.verificationId)
if (enteredCode.length == 4) {
console.log(enteredCode);
console.log("veificationCode is" + this.verificationId);
if (enteredCode==this.verificationId){
//Good job
}
else{
this.presentToastError()
}
}
else{
this.presentToastError()
}
}
else{
this.presentToastAgain()
}
}
resetCode(){
this.code[0]="";
this.code[1]="";
this.code[2]="";
this.code[3]="";
}
async presentToastAgain(){
let toast = await this.toastCtrl.create({
message: "Please enter code again",
duration: 2000,
position: 'bottom'
});
toast.present();
this.verificationInProgress=false;
this.resetCode()
this.codesInpunt0.setFocus();
}
async presentToastError() {
this.verificationInProgress=false;
this.codesInpunt0.setFocus();
let toast = await this.toastCtrl.create({
message: "Code invalid",
duration: 2000,
position: 'bottom'
});
toast.present();
}
validation(){
  Storage.set({
    key: 'verifyphone',
    value: 'true'
  });
  this.router.navigate(['/tabs/profil/monprofil/']);
}
}

