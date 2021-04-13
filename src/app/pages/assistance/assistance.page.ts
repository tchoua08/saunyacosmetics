import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {

  constructor( private navService: NavService,private route: Router) { }

  ngOnInit () {
  }

  btnFrequente(){
    this.route.navigateByUrl('/tabs/profil/questions', { replaceUrl: true });
  }

}
