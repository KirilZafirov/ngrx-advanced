import { BASE_SEARCH_PARAMS } from './../../models/search-params.model';
import { AutomobileSearch } from './../../models/automobile-search.model';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { CardItemModel } from './../models/card-item-model';
import { ViewService } from './../../core/services/view.service'; 

import { Component, OnDestroy } from '@angular/core'; 
import { switchMap, map, filter } from 'rxjs/operators';
import { LandingPageService } from './services/landing-page.service';

import { v4 as uuidv4 } from "uuid";

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnDestroy {

    constructor(public viewService: ViewService , private landingPageService: LandingPageService , private route: Router) { 
      
    } 
    autoCompleteSearches = [ 
      {
        key:'year',
        label: 'Select Year' ,
        placeholder: 'Year of manufacture'
      } , 
      {
        key:'model',
        label: 'Select Model' ,
        placeholder: 'Automobile Model'
      },
      {
        key:'make',
        label: 'Select Make' ,
        placeholder: 'Automobile Made by'
      },
      {
        key:'mileage',
        label: 'Select Mileage' ,
        placeholder: 'Automobile Mileage'
      },
      {
        key:'transmission',
        label: 'Select Transmission' ,
        placeholder: 'Transmission'
      },
      {
        key:'condition',
        label: 'Select Condition' ,
        placeholder: 'Automobile Condition'
      }
    ]
    
    query: BehaviorSubject<AutomobileSearch> = new BehaviorSubject<AutomobileSearch>(BASE_SEARCH_PARAMS);
      
    cards = new Array(10).fill(this.newCard());

    filteredOptions: Observable<string[]>;

    
    ngOnInit() {
      this.filteredOptions = this.query.pipe(
        switchMap((query) => this.landingPageService.filteredItems(query.keyword))
      );
    }

    viewDetails(id: string) {
      this.route.navigateByUrl(`/details/${id}`);
    }

    newCard(): CardItemModel{
      return {
        id: uuidv4(),
        titleGroup: {
          cardTitle:'Shiba Inu',
          cardSubtitle: 'Dog Breed',
          img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
          },
          imgSrc : {
              src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
              alt: 'Photo of a Shiba Inu'
          },
          cardContent: {
              textContent: `
              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
              bred for hunting.
              `,
              htmlContent: ''
          },
          class:'example-card',
          avatarClass:'card-avatar-image'
      }
    }
    ngOnDestroy(){

    } 

    makeRequest($event , key?: string) {
      if($event){
        const oldState = this.query.getValue();
        const newState = {
          ...oldState ,
          keyword:'one', 
          [key]:$event
        }
        this.query.next(newState)
      }
    }
}
