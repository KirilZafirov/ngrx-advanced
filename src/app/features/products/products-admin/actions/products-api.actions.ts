import { createAction, props } from '@ngrx/store';
import { Product } from '../../services/products-data.service';

export const productsLoaded = createAction(
    "[Products API] Products Loaded Success",
    props<{ products: Product[]}>()
);

export const productLoaded = createAction(
    "[Products API] Product Loaded Success",
    props<{ product: Product}>()
);

export const productCreated = createAction(
    "[Products API] Product Created",
    props<{ product: Product}>()
)

export const productUpdated = createAction(
    "[Products API] Product Updated",
    props<{ product: Product}>()
)

export const productDeleted = createAction(
    "[Products API] Product Deleted",
    props<{ productId: string}>()
);
 