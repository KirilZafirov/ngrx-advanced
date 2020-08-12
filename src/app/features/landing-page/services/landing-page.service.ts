 
 
import { Injectable } from '@angular/core'; 
import { BaseApiService } from 'src/app/core/services/base-api.service'; 
import { of, Observable } from 'rxjs';
@Injectable()
export class LandingPageService {

    
    constructor(protected baseApi: BaseApiService<any>) { 
    }

    filteredItems(queryParams): Observable<any[]> {
        return queryParams ? this.baseApi.get('products', queryParams) : of([]); 
    }
} 