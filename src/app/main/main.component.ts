import {Component, OnInit} from '@angular/core';
import {GoodService} from '../shared/goods.service';
import {Good} from '../models/goods';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  goods: Good[];

  constructor(private goodService: GoodService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('main init');
    this.route.queryParams.subscribe(params => {
      this.goodService.getGoods().subscribe(
        goods => (this.goods = goods, console.log(goods)));
    });
  }

}
