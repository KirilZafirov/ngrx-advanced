import { CardItemModel } from './../models/card-item-model';
import { ViewService } from './../../core/services/view.service'; 

import { Component, OnDestroy } from '@angular/core'; 
@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnDestroy {

    constructor(public viewService: ViewService ) { 
      
    } 
 
    cardItem: CardItemModel = {
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
    cards = new Array(10).fill(this.cardItem);
    ngOnDestroy(){

    }
}
