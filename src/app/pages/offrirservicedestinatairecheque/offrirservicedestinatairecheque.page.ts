import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-offrirservicedestinatairecheque',
  templateUrl: './offrirservicedestinatairecheque.page.html',
  styleUrls: ['./offrirservicedestinatairecheque.page.scss'],
})
export class OffrirservicedestinatairechequePage implements OnInit {

  visible;
  constructor(private navService:NavService) { }

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
