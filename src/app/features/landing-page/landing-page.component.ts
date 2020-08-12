import { BASE_SEARCH_PARAMS } from './../../models/search-params.model';
import { AutomobileSearch } from './../../models/automobile-search.model';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { CardItemModel } from './../models/card-item-model';
import { ViewService } from './../../core/services/view.service'; 

import { Component, OnDestroy } from '@angular/core'; 
import { switchMap, map, filter, tap } from 'rxjs/operators';
import { LandingPageService } from './services/landing-page.service';

import { v4 as uuidv4 } from "uuid";
import { CarAutoCompleteService, AutoCompleteSearch } from 'src/app/core/services/car-autocomplete.service';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnDestroy {

    constructor(public viewService: ViewService , 
      private landingPageService: LandingPageService , 
      private carAutoCompleteService: CarAutoCompleteService,
      private route: Router) { 
      
    } 
    autoCompleteSearches: AutoCompleteSearch[] =  this.carAutoCompleteService.carAutoCompleteSearch;
    
    query: BehaviorSubject<AutomobileSearch> = new BehaviorSubject<AutomobileSearch>(BASE_SEARCH_PARAMS);
      
    cards = new Array(10).fill(this.newCard());

    filteredOptions: Observable<any[]>;

    
    ngOnInit() {
      // this.filteredOptions = 
      this.query.pipe(
        switchMap((query) => this.landingPageService.filteredItems(query)),
        tap((results) => {
          console.log(results)
        })
      ).subscribe();
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

    filterParams($event , key: string) {
        this.carAutoCompleteService.updateAutoComplete(key , $event); 
    }

    changeParams($event , key: string) { 
      if($event){
        const oldState = this.query.getValue();
        const newState = {
          ...oldState ,
          [key]:$event
        }
        this.query.next(newState)
      }
    }
}
