import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-offrir',
  templateUrl: './offrir.page.html',
  styleUrls: ['./offrir.page.scss'],
})
export class OffrirPage implements OnInit {

  constructor( private navService:NavService) { }

  ngOnInit() {
  }

}
