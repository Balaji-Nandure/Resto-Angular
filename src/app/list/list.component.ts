import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private resto: RestoService) {}

  collection: any = [];

  deleteResto(item: string) {
    // console.log(item);
    this.resto.deleteResto(item);
  }

  ngOnInit() {
    this.resto.getList().subscribe((result) => {
      this.collection = result;
      // console.log(this.collection);
    });
  }
}
