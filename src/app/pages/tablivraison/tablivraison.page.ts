import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tablivraison',
  templateUrl: './tablivraison.page.html',
  styleUrls: ['./tablivraison.page.scss'],
})
export class TablivraisonPage implements OnInit {
  activePage:number= 0;
  constructor(public modalCtrl: ModalController) {
  }

  // close modal
  closeModal() {
    // this.router.navigateByUrl();
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
  }

  selectedSegment(index:number) {
    this.activePage = index;
  }


}
