import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Surgerie } from '../../models/surgeries';

@Injectable({
  providedIn: 'root'
})
export class SurgeriesService {

  surgerieList: AngularFireList<any>;
  selectSurgerie: Surgerie = new Surgerie();

  constructor(private firebase: AngularFireDatabase) { }

  getSurgerie() {
    return this.surgerieList = this.firebase.list('surgerieList');
  }

  createSurgerie() {
    const body = {
      name: 'Bypass de arteria coronaria',
      cost: '5.550.000',
      tax: 'Tiene impuestos'
    }
    this.surgerieList = this.firebase.list('/surgerieList');
    this.surgerieList.push({
      name: body.name,
      cost: body.cost,
      tax: body.tax
    });
  }
}
