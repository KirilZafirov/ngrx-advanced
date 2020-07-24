 
 
import { Injectable } from '@angular/core'; 
import { BaseApiService } from 'src/app/core/services/base-api.service'; 
import { of, Observable } from 'rxjs';
@Injectable()
export class LandingPageService {

    
    constructor(protected baseApi: BaseApiService<any>) { 
    }

    filteredItems(queryParams): Observable<string[]> {
        return queryParams ? of(ITEMS.filter(option => option.toLowerCase().indexOf(queryParams.toLowerCase()) === 0)) : of([]); 
    }
} 

const ITEMS = ['One' , 'Two' , 'Three', 'One' , 'Two' , 'Three' , 'One' , 'Two' , 'Three' , 'One' , 'Two' , 'Three']