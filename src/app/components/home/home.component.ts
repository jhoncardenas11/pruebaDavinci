import { Component, OnInit } from '@angular/core';
import { SpecialistsService } from 'src/app/services/specialists/specialists.service';
import { Specialist } from '../../models/specialists';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  specialists: Specialist[];

  constructor(private specialistsServices: SpecialistsService) { }

  ngOnInit(): void {
    this.specialistsServices.getSpecialists().snapshotChanges().subscribe(item => {
      this.specialists = [];

      item.forEach(element => {
        let x = element.payload.toJSON();
        x[`$key`] = element.key;
        this.specialists.push(x as Specialist);
      });
    });
  }

}
