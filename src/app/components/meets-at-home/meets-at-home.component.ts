import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-meets-at-home',
  templateUrl: './meets-at-home.component.html',
  styleUrls: ['./meets-at-home.component.scss']
})
export class MeetsAtHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('select').formSelect();
  }

}
