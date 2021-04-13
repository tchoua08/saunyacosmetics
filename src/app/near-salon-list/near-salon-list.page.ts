import { ModalController, NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';

@Component({
  selector: "app-near-salon-list",
  templateUrl: "./near-salon-list.page.html",
  styleUrls: ["./near-salon-list.page.scss"]
})
export class NearSalonListPage implements OnInit {
  bookDate: any;
  employeeList: any = [
    {
      index: 1,
      image: "../../../assets/image/siege1.png",
      name: "Place 1"
    },
    {
      index: 2,
      image: "../../../assets/image/siege2.png",
      name: "Place 2"
    }
  ];
  timeSlot: any = [
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM"
  ];
  selectedEmployee: any = 2;
  activeTimeSlot: any = "12:00 PM";
  minYear: any = new Date().getFullYear();
  maxYear: any = new Date().getFullYear() + 5;

  constructor( private router: Router,private datePicker: DatePicker,public modalCtrl: ModalController,private navCtrl: NavController) {
    this.bookDate = new Date();
  }


  ngOnInit() {}

  btnOpenPaiement(){
    this.router.navigate(['/tabs/panier/paiement'])
  }
  backPage() {
    this.navCtrl.back();
  }
  setEmployee(emp) {
    this.selectedEmployee = emp.index;
  }
  setTimeSlot(time) {
    this.activeTimeSlot = time;
  }
  continue() {
    this.navCtrl.navigateForward("/booking-detail");
  }
}
