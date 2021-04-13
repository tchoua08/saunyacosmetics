import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myappointment',
  templateUrl: './myappointment.page.html',
  styleUrls: ['./myappointment.page.scss'],
})
export class MyappointmentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  rate_now(){}

  appointment_info(){
    this.route.navigateByUrl('/tabs/profil/detailmyappointment', { replaceUrl: true });
  }

}
