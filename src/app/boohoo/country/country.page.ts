import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  countries: any=null;
  fullCheckinList:any=null;
  data:any=null;
  constructor(private router: Router,private rest:AppService) {

    this.getCountries();
   }



  getCountries() {
    this.rest.getCountries()
      .subscribe(countries =>{

        this.fullCheckinList =countries;
        this.countries = countries;
      });
  }

  go(c:any){

    this.router.navigate(['/tabs/profil/phoneverify/' +c.alpha2Code +'/'+ c.callingCodes ]);
  }

  getItemsAstuces(ev: any) {

    let val = ev.target.value;

    if (val && val.trim() != '' && this.countries!=null) {

      this.countries= this.countries.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
          ||(item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));

      })
    }
    if (val==='' && this.countries!=null){ this.countries =this.fullCheckinList;}
  }

  ngOnInit() {
  }

}
