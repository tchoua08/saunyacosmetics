import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-destinatairecheque',
  templateUrl: './destinatairecheque.page.html',
  styleUrls: ['./destinatairecheque.page.scss'],
})
export class DestinatairechequePage implements OnInit {
  visible;
  constructor(private navService: NavService
    ) { }

  ngOnInit() {
  }

  Handler(event) {

    if (event.target.value === 'visible'){
      this.visible = true;
   }else{
      this.visible = false;
   }
  }
  leave(event) {

  }
  go(event) {
    if (event.target.value === 'visible'){
      this.visible = true;
   }else{
      this.visible = false;
   }
  }

}
