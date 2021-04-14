import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-phoneverify',
  templateUrl: './phoneverify.page.html',
  styleUrls: ['./phoneverify.page.scss'],
})
export class PhoneverifyPage implements OnInit {

  public name:string='';
  public call:string='';
  public numberTel:string='';

  constructor(
    private navService:NavService,
    private app: AppService,
    private route: ActivatedRoute,
    private router: Router
    ) {

    this.name = this.route.snapshot.params.name;
    this.call = this.route.snapshot.params.call;

  }

  validation(){
    this.app.sendSms(this.numberTel,this.numberTel,'55');
    this.router.navigate(['/tabs/profil/validation/' +this.numberTel]);
  }

  ngOnInit() {
  }

}
