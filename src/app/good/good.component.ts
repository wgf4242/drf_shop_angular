import {Component, Input, OnInit} from '@angular/core';
import {Good} from '../models/goods';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
  @Input() goods: Good[];

  constructor() {}

  ngOnInit() {

  }

}
