import { SearchParams } from './../../../../models/search-params.model';
import { Product } from './../../services/products-data.service';
import { createAction, props } from '@ngrx/store';

export const enter = createAction(
    "[Products Page] Enter",
    props<{searchParams: SearchParams}>()
);

export const selectProduct = createAction(
    "[Products Page] Select Product",
    props<{productId: string}>()
);

export const clearSelectedProduct = createAction(
    '[Products Page] Clear Selected Product'
);

export const createProduct = createAction(
    "[Products Page] Create Product",
    props<{product: Product}>()
);

export const updateProduct = createAction(
    "[Products Page] Update Product",
    props<{productId: string , product: Product}>()
);

export const deleteProduct = createAction(
    "[Products Page] Delete Product",
    props<{productId: string}>()
);

 