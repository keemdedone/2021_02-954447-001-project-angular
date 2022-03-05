import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CovidService } from '../covid.service';

export type VaccinationFormData = {
  firstName?: string;
  lastName?: number;
  birthdate?: Date;
  vaccineName?: string;
  dose?: string;
  date?: Date;
};

@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.scss'],
})
export class VaccineFormComponent implements OnInit {
  @Input() data!: VaccinationFormData;

  formGroup!: FormGroup;
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly service: CovidService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstName: [null],
      lastName: [null],
      birthdate: [null],
      vaccineName: [null],
      dose: [null],
      date: [null],
    });
  }

  submit(): void {
    this.data = this.formGroup.value;

    this.service
      .createVaccination(this.data)
      .subscribe((data) => console.log(data));
  }
}
