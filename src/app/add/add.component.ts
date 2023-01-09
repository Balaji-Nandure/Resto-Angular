import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private resto: RestoService) {}

  alert: boolean = false;

  collectResto() {
    this.resto.saveResto(this.addResto.value);
    this.alert = true;
    this.addResto.reset({});
  }

  closeAlert() {
    this.alert = false;
  }
}
