import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Meet } from '../../models/meet';
import { HomeMeet } from '../../models/home-meet';

@Injectable({
  providedIn: 'root'
})
export class MeetsService {

  meetsLits: AngularFireList<any>;
  meetsHomeLits: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  createMeet(body: Meet) {
    this.meetsLits = this.firebase.list('/meetsLits');
    this.meetsLits.push({
      name: body.name,
      lastName: body.lastName,
      phone: body.phone,
      email: body.email,
      date: body.date,
      hour: body.hour,
      typeMeet: body.typeMeet,
      comments: body.comments
    });
  }

  createHomeMeet(body: HomeMeet) {
    this.meetsHomeLits = this.firebase.list('/meetsHomeLits');
    this.meetsHomeLits.push({
      name: body.name,
      lastName: body.lastName,
      phone: body.phone,
      email: body.email,
      date: body.date,
      hour: body.hour,
      place: body.place,
      typeMeet: body.typeMeet,
      comments: body.comments
    });
  }

  
}
