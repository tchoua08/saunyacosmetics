import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-detailcuresfin',
  templateUrl: './detailcuresfin.page.html',
  styleUrls: ['./detailcuresfin.page.scss'],
})
export class DetailcuresfinPage implements OnInit {

  detail = [];
  undetail = [];
  id = '';

  constructor(
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
     this.detail = await this.app.getCures();

     this.undetail = _.filter(
      this.detail, (o) => {
        return o.id== this.id;
      });


   }


}


