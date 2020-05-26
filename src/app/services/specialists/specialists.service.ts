import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Specialist } from '../../models/specialists';

@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {

  specialistsList: AngularFireList<any>;
  selectSpecialist: Specialist = new Specialist();

  constructor(private firebase: AngularFireDatabase) { }

  getSpecialists() {
    return this.specialistsList = this.firebase.list('specialistsList');
  }

  createSpecialist() {
    const body = {
      name: 'Camila torres',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, esse harum? Odio nemo vitae suscipit quidem? Voluptate, voluptates corporis culpa similique nobis quidem quae fugiat eligendi perspiciatis enim magnam sint?',
      categories: 'Ortopedista'
    }
    this.specialistsList = this.firebase.list('/specialistsList');
    this.specialistsList.push({
      name: body.name,
      description: body.description,
      categories: body.categories,
    });
  }

}
