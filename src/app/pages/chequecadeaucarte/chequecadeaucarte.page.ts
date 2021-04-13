import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-chequecadeaucarte',
  templateUrl: './chequecadeaucarte.page.html',
  styleUrls: ['./chequecadeaucarte.page.scss'],
})
export class ChequecadeaucartePage implements OnInit {
   montant:number=0;

  constructor(private navService: NavService) { }

  ngOnInit() {
  }

}
