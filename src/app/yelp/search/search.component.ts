import { Component, OnInit } from '@angular/core';

import { YelpService } from '../yelp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchData: any = {};
  nextPage;

  results = [];

	loading = false;

  errorMessage;

  constructor(private yelpService: YelpService) { }

  ngOnInit() {}

  loadSearchResults(){
		this.loading = true;
    this.searchData.page = this.nextPage || 1;
    this.yelpService.searchBusiness(this.searchData).subscribe(respData => {
      
      this.results = this.results.concat(respData.results);
      this.nextPage = ((this.nextPage || 1)*respData.page_size) < respData.total ? this.nextPage+1 : null;
			
			this.loading = false;			

    }, err => {
      
      this.loading = false;
      console.log(err);
    
    });
  }

  onSubmit(){
    this.results = [];
    this.nextPage = null;
    this.loadSearchResults();
  }

  loadMore(){
    this.loadSearchResults();
  }

}
