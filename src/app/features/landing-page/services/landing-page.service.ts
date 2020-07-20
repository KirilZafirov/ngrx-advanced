 
 
import { Injectable } from '@angular/core'; 
import { BaseApiService } from 'src/app/core/services/base-api.service'; 
import { of } from 'rxjs';
@Injectable()
export class LandingPageService {

    
    constructor(protected baseApi: BaseApiService<any>) { 
    }

    filteredItems(queryParams) {
        const filterValue = queryParams.toLowerCase();
        const filtered = ITEMS.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        return of(filtered);
    }
} 

const ITEMS = ['One' , 'Two' , 'Three', 'One' , 'Two' , 'Three' , 'One' , 'Two' , 'Three' , 'One' , 'Two' , 'Three']