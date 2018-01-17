import {Component} from '@angular/core';
import {Category} from './models/goods';
import {GoodService} from './shared/goods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  categorys: Category[];

  constructor(private goodService: GoodService) {
    this.goodService.getCategory().subscribe((categorys) => {
      this.categorys = categorys;
    });
  }
}
