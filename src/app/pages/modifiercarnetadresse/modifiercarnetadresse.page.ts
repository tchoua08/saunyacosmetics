import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-modifiercarnetadresse',
  templateUrl: './modifiercarnetadresse.page.html',
  styleUrls: ['./modifiercarnetadresse.page.scss'],
})
export class ModifiercarnetadressePage implements OnInit {

  constructor( private navService: NavService) { }

  ngOnInit() {
  }

}
