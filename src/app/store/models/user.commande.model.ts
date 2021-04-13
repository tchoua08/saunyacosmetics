import {User} from './user.model';
import {Gadie} from './gadie.model';
import {Coordonner} from './coordonner.model';

export interface UserCommande {
 user: User;
 panier:Gadie[];
 type: number;
 modeLivraison: string;
 coordonner:Coordonner;
 somme: number;

}
