import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';

import {YelpService} from './yelp.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SearchComponent],
  providers: [YelpService],
  exports: [SearchComponent]
})
export class YelpModule { }
