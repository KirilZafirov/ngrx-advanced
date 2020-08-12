import { SearchParams } from './search-params.model';
export interface AutomobileSearch extends SearchParams {
    year?: number;
    make?: number;   
    model?: string; 
    mileage?: number;
    transmission?: string;
    doorsNumber?: (number|string);
}