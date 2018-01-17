import {Component, OnInit} from '@angular/core';
import {GoodsService} from '../shared/goods.service';
import {Category} from '../models/goods';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showChildrenMenu: any;
  categorys: Category[];

  constructor(private goodService: GoodsService) {
  }

  ngOnInit() {
    this.getMenu();
  }

  overChildrenMenu(index) {
    this.showChildrenMenu = index;
  }

  outChildrenMenu() {
    this.showChildrenMenu = -1;
  }

  getMenu() {
    this.goodService.getCategory().subscribe((categorys) => {
      console.log(categorys);
      this.categorys = categorys;
      // this.allMenuLabel = categorys.data;
    }, error => {
      console.log(error);
    });
  }

}
