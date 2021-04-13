import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.page.html',
  styleUrls: ['./mywallet.page.scss'],
})
export class MywalletPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  send_to_bank(){
    this.route.navigateByUrl('/tabs/profil/sendbank', { replaceUrl: true });
  }

}
