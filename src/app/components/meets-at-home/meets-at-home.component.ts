import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MeetsService } from 'src/app/services/meets/meets.service';
import Swal from 'sweetalert2'

declare var $: any;

@Component({
  selector: 'app-meets-at-home',
  templateUrl: './meets-at-home.component.html',
  styleUrls: ['./meets-at-home.component.scss']
})
export class MeetsAtHomeComponent implements OnInit {

  formMeet = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl(null, Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    place: new FormControl('', Validators.required),
    typeMeet: new FormControl(''),
    comments: new FormControl('')
  });

  constructor(private meetService: MeetsService) { }

  ngOnInit(): void {
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('select').formSelect();
  }

  onSubmit() {
    const date = $('#date').val();
    const hour = $('#hour').val();
    const data:any = this.formMeet.value;
    data.date = date;
    data.hour = hour;
    try {
      this.meetService.createHomeMeet(data);
      this.formMeet.reset();
      $('#date').val('');
      $('#hour').val('');
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Su cita ha sido registrada',
      });
    } catch (error) {
      console.log(error);
    }
  }

}
