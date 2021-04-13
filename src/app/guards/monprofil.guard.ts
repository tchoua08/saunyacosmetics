import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class MonprofilGuard implements CanActivate {


  constructor(private route: Router){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean>  {

      const isConnect = await Storage.get({ key: 'connexion' })

      if (isConnect.value==='true') {
        //alert("++oui connecter");

        //this.route.navigateByUrl('/tabs/profil/monprofil',{ replaceUrl:true });
        return true;

      } else {
      //  alert("++non connecter");
        this.route.navigateByUrl('/tabs/profil/connexion',{ replaceUrl:true });
        return false;
      }
  }

}
