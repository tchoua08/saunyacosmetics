import {Injectable} from '@angular/core';
import {Produit} from './../app/store/models/produit.model';

import {WishList} from './../app/store/models/wishlist.model';

import {Categorie} from './../app/store/models/categorie.model';

import {Prestation} from './../app/store/models/prestation.model';

import {Agence} from './../app/store/models/agence.model';

import {Gadie} from '../app/store/models/gadie.model';

import {User} from '../app/store/models/user.model';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient,HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = 'https://restcountries.eu/rest/v2/all?fields=flag;alpha2Code;callingCodes;name;capital;currencies';
  //private apiUrl = 'https://restcountries.eu/rest/v2/';
  public text: string;
  public from: string;
  public to: string;

  reservations = [
    {
      image : '../assets/image/image.PNG',
      titre : 'Soin Ultra profond + lissage vapeur',
      soustitre: '',
      prix: '6749',
      heure: '1h30',
      devise: 'FCFA',
      categorie: 'RITUELS WASHNGO',
      imageCategorie: '../assets/image/imgcat1.PNG',
      idCategorie: 1,
      id: 1,
      description: 'Toute une gamme d\'accessoires capillaire pensé par Saunya Consmetics pour faciliter votre quotidien de vos cheveux. Démélage en douceur, par de casse , et de magnifique boucles.Rafraîchissante, cette huile est traditionnellement utilisée pour désencombrer les voies respiratoires et lutter contre les inconforts hivernaux.'
    },
    {
      image : '../assets/image/image2.PNG',
      titre : 'Soin profond + lissage vapeur',
      soustitre: '',
      prix: '3400',
      heure: '1h30',
      devise: 'FCFA',
      categorie: 'RITUELS WASHNGO',
      imageCategorie: '../assets/image/imgcat1.PNG',
      idCategorie: 1,
      id: 2,
      description: 'Toute une gamme d\'accessoires capillaire pensé par Saunya Consmetics pour faciliter votre quotidien de vos cheveux. Démélage en douceur, par de casse , et de magnifique boucles.Rafraîchissante, cette huile est traditionnellement utilisée pour désencombrer les voies respiratoires et lutter contre les inconforts hivernaux.'
    },

    {
      image : '../assets/image/image4.PNG',
      titre : 'Shampoing + coiffure protectrice',
      soustitre: '',
      prix: '3200',
      heure: '1h30',
      devise: 'FCFA',
      categorie: 'RITUEL CREATION DE BOUCLES',
      imageCategorie: '../assets/image/imgcat2.PNG',
      idCategorie: 2,
      id: 3,
      description: 'Toute une gamme d\'accessoires capillaire pensé par Saunya Consmetics pour faciliter votre quotidien de vos cheveux. Démélage en douceur, par de casse , et de magnifique boucles.Rafraîchissante, cette huile est traditionnellement utilisée pour désencombrer les voies respiratoires et lutter contre les inconforts hivernaux.'
    },
    {
      image : '../assets/image/image5.PNG',
      titre : 'RITUEL COUPE',
      soustitre: '',
      prix: '1400',
      heure: '1h30',
      devise: 'FCFA',
      categorie: 'RITUEL CREATION DE BOUCLES',
      imageCategorie: '../assets/image/imgcat2.PNG',
      idCategorie: 2,
      id: 4,
      description: 'Toute une gamme d\'accessoires capillaire pensé par Saunya Consmetics pour faciliter votre quotidien de vos cheveux. Démélage en douceur, par de casse , et de magnifique boucles.Rafraîchissante, cette huile est traditionnellement utilisée pour désencombrer les voies respiratoires et lutter contre les inconforts hivernaux.'
    },
    {
      image : '../assets/image/image8.PNG',
      titre : 'shampoing + wash n go',
      soustitre: '',
      prix: '1000,00',
      heure: '45min',
      devise: 'FCFA',
      categorie: 'RITUEL LISSAGE VAPEUR',
      imageCategorie: '../assets/image/imgcat3.PNG',
      idCategorie: 3,
      id: 5,
      description: 'Toute une gamme d\'accessoires capillaire pensé par Saunya Consmetics pour faciliter votre quotidien de vos cheveux. Démélage en douceur, par de casse , et de magnifique boucles.Rafraîchissante, cette huile est traditionnellement utilisée pour désencombrer les voies respiratoires et lutter contre les inconforts hivernaux.'
    },
    {
      image : '../assets/image/image1.PNG',
      titre : 'Shampoing + tresse ou boucles',
      soustitre: '',
      prix: '200,00',
      heure: '1h30',
      devise: 'FCFA',
      categorie: 'RITUEL LISSAGE VAPEUR',
      imageCategorie: '../assets/image/imgcat3.PNG',
      idCategorie: 3,
      id: 6,
      description: 'Toute une gamme d\'accessoires capillaire pensé par Saunya Consmetics pour faciliter votre quotidien de vos cheveux. Démélage en douceur, par de casse , et de magnifique boucles.Rafraîchissante, cette huile est traditionnellement utilisée pour désencombrer les voies respiratoires et lutter contre les inconforts hivernaux.'

    }

  ] ;

  produits = [] ;

  cures = [
    {
    nom: 'Forfait Coiffure protectrice mensuel(sans rajouts)',
    image: '../assets/image/produit1.PNG',
    categorie: 'FORFAIT',
    imageCategorie: '../assets/image/imgcat1.PNG',
    prix: '2500,00',
    devise: 'FCFA',
    idCategorie: 1,
    id: 2,
    description: 'Forfait payable utilisable sur 2 mois (au lieu d\'un mois). Forfait valable tous les jours de la semaine.Forfait payable d\'avance et sur place espèces/ CB-payable a distance aussi via paypal'
  },

] ;

cartefidelites = [
  ] ;

  homeimage = [
    {
      id: 1,
      image: '../assets/image/home/promo30.gif',
    },
    {
     id: 2,
     image: '../assets/image/home/produitsweb.jpg',
    },
    {
     id: 3,
     image: '../assets/image/home/services.jpg',
    },
    {
      id: 4,
      image: '../assets/image/home/peaux.jpg',
     },
     {
      id: 5,
      image: '../assets/image/home/promobijoux.jpg',
     },
     {
      id: 6,
      image: '../assets/image/home/cheuveux.jpg',
     }
  ];

 commandes = [
   {
     id: 1,
     image: '../assets/image/imgcat2.PNG',
     nom: 'REMISE de 10%',
     reduction: '-10%',
     prix_normal: 22.00,
     prix_promotion: 19.80,
     devise: 'FCFA'
   },
   {
    id: 2,
    image: '../assets/image/imgcat3.PNG',
    nom: 'Brosse MAGIQU-JAUNE',
    reduction: '-10%',
    prix_normal: 16.00,
    prix_promotion: 14.40,
    devise: 'FCFA'
   },
   {
    id: 3,
    image: '../assets/image/produit2.PNG',
    nom: 'TAIE D\'OREILLER EN SATIN',
    reduction: '-25%',
    prix_normal: 20.00,
    prix_promotion: 15.00,
    devise: 'FCFA'
   }];
   urlService = 'https://dev.saunya.com/api/v2/products';

   urlCategorie = 'https://dev.saunya.com/api/v2/categories/featured';

   urlCategoriesAll = 'https://dev.saunya.com/api/v2/categories';

   urlLocalCategorie ='http://192.168.100.2:8000/saunya/api/v2/categories';

   urlAgence = 'https://dev.saunya.com/api/v2/shops';

   urlUser = 'https://dev.saunya.com/api/v2/';

   urlWishList ='https://dev.saunya.com/api/v2/wishlists/check-product';

   constructor(private alert: AlertController,private http: HttpClient){}

  getReservations(){
    return this.reservations;
  }


  getProduits(){
    return this.produits;
  }

  getCures(){
    return this.cures;
  }

  getCarteFidelite(){
    return this.cartefidelites;
  }

  getCommandes(){
    return this.commandes;
  }


  valider(){
   localStorage.setItem('validation', 'true');
  }




  // get home image

  getHomeImage(){
     return  this.homeimage;
  }

  // get categorie

  fetchCategories() {
    return this.http.get<Categorie[]>(this.urlCategorie);
 }


 // get categories
 fetchCategoriesAll() {
  return this.http.get<Categorie[]>(this.urlCategoriesAll);
}


 // get categorie url
 fetchCategoriesByUrl(id: string) {
   const url = 'https://dev.saunya.com/api/v2/sub-categories/' + id;
   return this.http.get<Categorie[]>(url);
}




  fetchProduits() {
    return this.http.get<Produit[]>(this.urlService);
 }

 fetchProduitsByUrl(id: string) {
  const url = 'https://dev.saunya.com/api/v2/products/category/' + id;
  return this.http.get<Produit[]>(url);
}

deleteProduit(id: number) {
    return this.http.delete('urlService' + id);
}

addProduit(payload: Produit) {
    return this.http.post<Produit>('urlService', payload);
}

updateProduit(payload: Produit, id: number) {
    return this.http.put<Produit>('urlService' + id, payload);
}


fetchPrestations() {
  return this.http.get<Prestation[]>(this.urlService);
}

// fetch Prestations
fetchPrestationsByUrl(id: string) {
  const url = 'https://dev.saunya.com/api/v2/products/category/' + id;
  return this.http.get<Prestation[]>(url);
}

deletePrestation(id: number) {
  return this.http.delete(this.urlService + id);
}

addPrestation(payload: Prestation) {
  return this.http.post<Prestation>(this.urlService, payload);
}

updatePrestation(payload: Prestation, id: number) {
  return this.http.put<Prestation>(this.urlService + id, payload);
}

// Services Agence

fetchAgences() {
  return this.http.get<Agence[]>(this.urlAgence);
}

deleteAgence(id: number) {
  return this.http.delete(this.urlAgence + id);
}

addAgence(payload: Agence) {
  return this.http.post<Agence>(this.urlAgence, payload);
}

updateAgence(payload: Agence, id: number) {
  return this.http.put<Agence>(this.urlAgence + id, payload);
}


// Services User

fetchUsers() {
  return this.http.get<User[]>(this.urlUser);
}

deleteUser(id: number) {
  return this.http.delete(this.urlUser + id);
}

public  addUser(payload: User){
  const httpHeader = {
     headers: new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   };
  return this.http.post(this.urlUser + 'signup', payload, httpHeader);

}

updateUser(payload: User, id: number) {
  return this.http.put<User>(this.urlUser + id, payload);
}


    getWishList(){
      return this.http.get<WishList[]>(this.urlWishList);
    }



  getCountries():Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  public sendSms(from:string, to:string,text:string) {
    const payload = new HttpParams()
      .set('from', from)
      .set('to', to)
      .set('text', text);

    return this.http.post('http://sms.com:3000/send-sms', payload)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.alert.create({ message: 'Oops!'})
            .then((alert) => alert.present());
          return throwError('Oops!');
        }))
      .subscribe(async (resp: any) => {
        const alert = await this.alert.create({ message: resp.message });
        await alert.present();
      });
  }





}
