import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-surgeries',
  templateUrl: './surgeries.component.html',
  styleUrls: ['./surgeries.component.scss']
})
export class SurgeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.tooltipped').tooltip();
  }

}
