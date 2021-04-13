import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-detailcartefidelite',
  templateUrl: './detailcartefidelite.page.html',
  styleUrls: ['./detailcartefidelite.page.scss'],
})
export class DetailcartefidelitePage implements OnInit {


  cartefidelite = [];
  uneCarteFidelite = [];
  id = '';

  constructor(
    private navService: NavService,
    private app: AppService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.id = this.route.snapshot.params.id;
    }

  ngOnInit() {
    this.service();
  }

  async service(){
     this.cartefidelite = await this.app.getCarteFidelite();

     this.uneCarteFidelite = _.filter(
      this.cartefidelite, (o) => {
        return o.id == this.id;
      });


   }


}
