import { Component, OnInit,Input } from '@angular/core';
import {NavController,ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-heure',
  templateUrl: './heure.page.html',
  styleUrls: ['./heure.page.scss'],
})
export class HeurePage implements OnInit {
  heures:Array<any> = [];
  minutes:Array<any> = [];
  @Input() type: string;
  constructor(public navParams: NavParams,public modalCtrl: ModalController) {


    this.heures = Array.from({length:19},(v,k)=>k+1);
    this.minutes = Array.from({length:59},(v,k)=>k+1);
  }

  ngOnInit() {
  }

  t(el:number){
    this.modalCtrl.dismiss(el);
  }

}
