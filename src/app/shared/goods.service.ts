import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Category, Good} from '../models/goods';

@Injectable()
export class GoodService {
  base = '';
  host = 'http://localhost:8001';
  local_host = 'http://localhost:8001';

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
  }


  getGoods(): Observable<Good[]> {
    console.log(this.route.queryParams);
    const top_category = this.route.snapshot.queryParams['top_category']
    // const top_category = this.route.snapshot.params['top_category'];
    if (top_category) {
      return this.http.get<Good[]>('/goods/', {params: new HttpParams().set('top_category', top_category)});
    } else {
      return this.http.get<Good[]>('/goods/');
    }
  }

  getCategory(): Observable<Category[]> {
    if ('id' in this.route.snapshot.params) {
      return this.http.get<Category[]>('/categorys/id/');
    } else {
      return this.http.get<Category[]>('/categorys/');
    }
  }


}
