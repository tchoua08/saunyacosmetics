import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TabsGuard implements CanActivate {

  constructor(private route: Router){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

      const isValidate = await Storage.get({ key: 'validation' });

      if (isValidate.value==='false') {
        this.route.navigateByUrl('/bienvenue',{ replaceUrl:true });
        return false;

      } else {

        return true;
      }

  }

}
