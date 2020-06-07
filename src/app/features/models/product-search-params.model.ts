import { SearchParams } from './../../models/search-params.model';

export interface ProductSearchParams extends SearchParams {
    id?: string;
}