import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-ajoutercarnetadresse',
  templateUrl: './ajoutercarnetadresse.page.html',
  styleUrls: ['./ajoutercarnetadresse.page.scss'],
})
export class AjoutercarnetadressePage implements OnInit {

  constructor( private navService: NavService) { }

  ngOnInit() {
  }

}
