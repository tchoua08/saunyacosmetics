import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-detailcures',
  templateUrl: './detailcures.page.html',
  styleUrls: ['./detailcures.page.scss'],
})
export class DetailcuresPage implements OnInit {

  cures = [];
  categorie:string = "";

  constructor(
    private app: AppService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.categorie = this.route.snapshot.params.categorie;
    }

  ngOnInit() {
    this.service();
  }

  async service(){
     this.cures = await this.app.getCures();
   }


}
