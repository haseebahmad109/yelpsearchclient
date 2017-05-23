import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

@Injectable()
export class YelpService {

	searchUrl = "http://localhost:8000/search/results";

  constructor(private http:Http ) { }

  searchBusiness(params){
		return this.http.get(environment.API.yelp().search, {
			search: params
		})
		.map((res:Response) => res.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
