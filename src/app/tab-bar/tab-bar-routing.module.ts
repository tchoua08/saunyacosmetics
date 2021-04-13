import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonprofilGuard } from '../guards/monprofil.guard';
import { TabBarPage } from './tab-bar.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          },
        ]
      },
      {
        path: 'recherche',
        children: [
          {
            path: '',
            loadChildren: () => import('../recherche/recherche.module').then( m => m.RecherchePageModule)
          },
        ]
      },
      {
        path: 'reservation',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../reservation/reservation.module').then(m => m.ReservationPageModule)
          }
        ]
      },
      {
        path: 'reservation/detailreservation/:id/:categorie',
        loadChildren: () => import('../pages/detailreservation/detailreservation.module').then( m => m.DetailreservationPageModule)
      },
      {
    path: 'reservation/detailreservationfinal/:id',
        loadChildren: () => import('../pages/detailreservationfinal/detailreservationfinal.module').then( m => m.DetailreservationfinalPageModule)
      },
      {
        path: 'reservation/prestation',
        loadChildren: () => import('../pages/prestations/prestations.module').then( m => m.PrestationsPageModule)
      },
      {
        path: 'reservation/horaire',
        loadChildren: () => import('../pages/horaire/horaire.module').then( m => m.HorairePageModule)
      },
      {
        path: 'reservation/subcatreserver1/:id',
        loadChildren: () => import('../subcat/subcatreserver1/subcatreserver1.module').then( m => m.Subcatreserver1PageModule)
      },
      {
        path: 'boutique',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../boutique/boutique.module').then(m => m.BoutiquePageModule)
          }
        ]
      },
      {
        path: 'boutique/detailproduit/:id/:categorie',
        loadChildren: () => import('../pages/detailproduit/detailproduit.module').then( m => m.DetailproduitPageModule)
      },
      {
        path: 'boutique/detailcures/:categorie',
        loadChildren: () => import('../pages/detailcures/detailcures.module').then( m => m.DetailcuresPageModule)
      },
      {
        path: 'boutique/detailcartefidelite/:id',
        loadChildren: () => import('../pages/detailcartefidelite/detailcartefidelite.module').then( m => m.DetailcartefidelitePageModule)
      },
      {
    path: 'boutique/pluscategorie',
    loadChildren: () => import('../pages/pluscategorie/pluscategorie.module').then( m => m.PluscategoriePageModule)
     },
     {
    path: 'boutique/detailcuresfin/:id',
    loadChildren: () => import('../pages/detailcuresfin/detailcuresfin.module').then( m => m.DetailcuresfinPageModule)
   },
   {
    path: 'boutique/detailproduitfin/:id',
    loadChildren: () => import('../pages/detailproduitfin/detailproduitfin.module').then( m => m.DetailproduitfinPageModule)
   },
    {
      path: 'boutique/offrir',
      loadChildren: () => import('../pages/offrir/offrir.module').then( m => m.OffrirPageModule)
    },
    {
      path: 'boutique/chequecadeau',
      loadChildren: () => import('../pages/chequecadeau/chequecadeau.module').then( m => m.ChequecadeauPageModule)
    },
   {
    path: 'boutique/chequecadeaucarte',
    loadChildren: () => import('../pages/chequecadeaucarte/chequecadeaucarte.module').then( m => m.ChequecadeaucartePageModule)
    },
    {
      path: 'boutique/offrirservice',
      loadChildren: () => import('../pages/offrirservice/offrirservice.module').then( m => m.OffrirservicePageModule)
    },
    {
      path: 'boutique/offrirservicedetail/:id/:categorie',
      loadChildren: () => import('../pages/offrirservicedetail/offrirservicedetail.module').then( m => m.OffrirservicedetailPageModule)
    },
    {
      path: 'boutique/offrirserviceformat/:id',
      loadChildren: () => import('../pages/offrirserviceformat/offrirserviceformat.module').then( m => m.OffrirserviceformatPageModule)
    },
    {
      path: 'boutique/offrirservicechequecadeau/:id',
      loadChildren: () => import('../pages/offrirservicechequecadeau/offrirservicechequecadeau.module').then( m => m.OffrirservicechequecadeauPageModule)
    },
    {
      path: 'boutique/offrirservicecarte/:id',
      loadChildren: () => import('../pages/offrirservicecarte/offrirservicecarte.module').then( m => m.OffrirservicecartePageModule)
    },
    {
      path: 'boutique/destinatairecheque',
      loadChildren: () => import('../pages/destinatairecheque/destinatairecheque.module').then( m => m.DestinatairechequePageModule)
    },
    {
      path: 'boutique/offrirservicedestinatairecheque',
      loadChildren: () => import('../pages/offrirservicedestinatairecheque/offrirservicedestinatairecheque.module').then( m => m.OffrirservicedestinatairechequePageModule)
    },{
      path: 'boutique/subcatproduit1/:id',
      loadChildren: () => import('../subcat/subcatproduit1/subcatproduit1.module').then( m => m.Subcatproduit1PageModule)
    },
      {
        path: 'panier',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../panier/panier.module').then(m => m.PanierPageModule)
          }
        ]
      },
    {
      path: 'panier/livraison',
      loadChildren: () => import('../pages/livraison/livraison.module').then( m => m.LivraisonPageModule)
    },
    {
      path: 'panier/addresselivraison',
      loadChildren: () => import('../pages/addresselivraison/addresselivraison.module').then( m => m.AddresselivraisonPageModule)
    },
    {
      path: 'panier/placelivraison',
      loadChildren: () => import('../pages/placelivraison/placelivraison.module').then( m => m.PlacelivraisonPageModule)
    }
    ,
    {
      path: 'panier/paiement',
      loadChildren: () => import('../boohoo/paiement/paiement.module').then( m => m.PaiementPageModule)
    },
    {
      path: 'panier/resumepaiement',
      loadChildren: () => import('../boohoo/resumepaiement/resumepaiement.module').then( m => m.ResumepaiementPageModule)
    },
      {
        path: 'panier/booking',
        loadChildren: () => import('../boohoo/booking/booking.module').then( m => m.BookingPageModule)
      },
       {
        path: 'wishlist',
        children: [
          {
            path: '',
            loadChildren: () => import('../wishlist/wishlist.module').then( m => m.WishlistPageModule)
          }
        ]
      },

      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profil/profil.module').then(m => m.ProfilPageModule)
          },
        ]
      },
      {
        path: 'profil/connexion',
        loadChildren: () => import('../pages/connexion/connexion.module').then( m => m.ConnexionPageModule),

      },

      {
        path: 'profil/phoneverify/:name/:call',
        loadChildren: () => import('../boohoo/phoneverify/phoneverify.module').then( m => m.PhoneverifyPageModule)
      },

      {
        path: 'profil/country',
        loadChildren: () => import('../boohoo/country/country.module').then( m => m.CountryPageModule)
      },
      {
        path: 'ajouteravis',
        loadChildren: () => import('../pages/ajouteravis/ajouteravis.module').then( m => m.AjouteravisPageModule)
      },

      {
        path: 'profil/creercompte',
        loadChildren: () => import('../pages/creercompte/creercompte.module').then( m => m.CreercomptePageModule)
      },

      {
        path: 'profil/questions',
        loadChildren: () => import('../boohoo/questions/questions.module').then( m => m.QuestionsPageModule)
      },
      {
        path: 'historiqueachats',
        loadChildren: () => import('../pages/historiqueachats/historiqueachats.module').then( m => m.HistoriqueachatsPageModule)
      },
      {
        path: 'mesavis',
        loadChildren: () => import('../pages/mesavis/mesavis.module').then( m => m.MesavisPageModule)
      },
      {
        path: 'profil/modifierprofil',
        loadChildren: () => import('../pages/modifierprofil/modifierprofil.module').then( m => m.ModifierprofilPageModule),
        canActivate:[MonprofilGuard]
      },
      {
        path: 'profil/contact',
        loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule),
        canActivate:[MonprofilGuard]
      },
      {
        path: 'profil/modifiermodpasse',
        loadChildren: () => import('../pages/modifier-mot-passe/modifier-mot-passe.module').then( m => m.ModifierMotPassePageModule),
        canActivate:[MonprofilGuard]
      },
      {
        path: 'profil/monprofil',
        loadChildren: () => import('../pages/monprofil/monprofil.module').then( m => m.MonprofilPageModule),
        canActivate:[MonprofilGuard]
      },
      {
        path: 'profil/motpasseoublier',
        loadChildren: () => import('../pages/motpasseoublier/motpasseoublier.module').then( m => m.MotpasseoublierPageModule),
        canActivate:[MonprofilGuard]
      },
      {
        path: 'profil/carnetadresse',
        loadChildren: () => import('../pages/carnetadresse/carnetadresse.module').then( m => m.CarnetadressePageModule),
        canActivate:[MonprofilGuard]
      },

      {
        path: 'profil/modifiercarnetadresse',
        loadChildren: () => import('../pages/modifiercarnetadresse/modifiercarnetadresse.module').then( m => m.ModifiercarnetadressePageModule),
        canActivate:[MonprofilGuard]
      },
      {
        path: 'profil/ajoutercarnetadresse',
        loadChildren: () => import('../pages/ajoutercarnetadresse/ajoutercarnetadresse.module').then( m => m.AjoutercarnetadressePageModule),
        canActivate:[MonprofilGuard]
      },
      {
        path: 'profil/assistance',
        loadChildren: () => import('../pages/assistance/assistance.module').then( m => m.AssistancePageModule),
        canActivate:[MonprofilGuard]
      },

    {
      path: 'profil/myappointment',
      loadChildren: () => import('../boohoo/myappointment/myappointment.module').then( m => m.MyappointmentPageModule),
      canActivate:[MonprofilGuard]
    },
    {
      path: 'profil/detailmyappointment',
      loadChildren: () => import('../boohoo/detailmyappointment/detailmyappointment.module').then( m => m.DetailmyappointmentPageModule)
    },
    {
      path: 'profil/mywallet',
      loadChildren: () => import('../boohoo/mywallet/mywallet.module').then( m => m.MywalletPageModule)
    },
    {
      path: 'profil/sendbank',
      loadChildren: () => import('../boohoo/sendbank/sendbank.module').then( m => m.SendbankPageModule)
    },

      {
        path: 'vueensemble',
        loadChildren: () => import('../pages/vueensemble/vueensemble.module').then( m => m.VueensemblePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule { }
