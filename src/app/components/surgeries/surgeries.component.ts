import { Component, OnInit } from '@angular/core';
import { SurgeriesService } from 'src/app/services/surgeries/surgeries.service';
import { Surgerie } from '../../models/surgeries'

declare var $: any;

@Component({
  selector: 'app-surgeries',
  templateUrl: './surgeries.component.html',
  styleUrls: ['./surgeries.component.scss']
})
export class SurgeriesComponent implements OnInit {

  surgeries: Surgerie[];

  constructor(private surgeriesService: SurgeriesService) { }

  ngOnInit(): void {
    $('.tooltipped').tooltip();
    this.surgeriesService.getSurgerie().snapshotChanges().subscribe(item => {
      this.surgeries = [];

      item.forEach(element => {
        let x = element.payload.toJSON();
        x[`$key`] = element.key;
        this.surgeries.push(x as Surgerie);
      });
    });
  }

}
