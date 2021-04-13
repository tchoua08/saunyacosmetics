import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'app-tab-attribute',
  templateUrl: './tab-attribute.page.html',
  styleUrls: ['./tab-attribute.page.scss']
})
export class TabAttributePage {

 public tranche:string='';

  constructor(public modalCtrl: ModalController) {
  }

  onSelectChange(selectedValue: any) {
    this.tranche = selectedValue.detail.value ;
  }

  // close modal
  closeModal() {
    // this.router.navigateByUrl();
    this.modalCtrl.dismiss(this.tranche);
  }

  closeModalAll(){
    this.tranche ="0-0"
    this.modalCtrl.dismiss(this.tranche);
  }
}
