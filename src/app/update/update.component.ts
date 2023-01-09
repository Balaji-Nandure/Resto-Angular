import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private resto: RestoService) {}

  updateRecord: any;

  ngOnInit(): any {
    // console.log(this.route.snapshot.params?.['id']);
    this.resto
      .getCurrentResto(this.route.snapshot.params?.['id'])
      .subscribe((res: any) => {
        this.updateRecord = res;
        console.log(this.updateRecord);
      });
  }
}
