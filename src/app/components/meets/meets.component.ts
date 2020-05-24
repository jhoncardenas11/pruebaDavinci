import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-meets',
  templateUrl: './meets.component.html',
  styleUrls: ['./meets.component.scss']
})
export class MeetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('select').formSelect();
  }

}
