import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../models/goods';

@Injectable()
export class GoodsService {
  base = '';
  host = 'http://localhost:8001';
  local_host = 'http://localhost:8001';

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
  }


  getCategory(): Observable<Category[]> {
    if ('id' in this.route.snapshot.params) {
      return this.http.get<Category[]>('/categorys/id/');
    } else {
      return this.http.get<Category[]>('/categorys/');
    }
  }


}
