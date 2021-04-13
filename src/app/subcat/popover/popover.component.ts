import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
   currentPopover = null;
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}


  async dismissPopover(valeur:string) {
    await this.popoverController.dismiss(valeur);
      }





}
