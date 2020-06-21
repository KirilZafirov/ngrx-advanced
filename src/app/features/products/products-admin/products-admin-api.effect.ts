import { productCreated } from './actions/products-api.actions';
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { ProductsService } from '../services/products-data.service';
import { exhaustMap, map, mergeMap, catchError, concatMap} from 'rxjs/operators';
import { ProductsPageActions, ProductsApiActions } from './actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProductsAdminEffects {
 
    constructor(private productsService: ProductsService, 
        private actions$: Actions) {
        }

    @Effect()
    loadProducts$ = this.actions$.pipe(
      ofType(ProductsPageActions.enter),
      exhaustMap((action) =>
        this.productsService.getData(action.searchParams).pipe(
          map(products => ProductsApiActions.productsLoaded({ products })),
        //   catchError(() => EMPTY)
        )
      )
    );

    @Effect()
    createBook$ = this.actions$.pipe(
        ofType(ProductsPageActions.createProduct),
        mergeMap(action =>
        this.productsService.save(action.product).pipe(
            map(product => ProductsApiActions.productCreated({ product })),
            // catchError(() => EMPTY)
        )
        )
    );
 

    @Effect()
    updateProduct$ = this.actions$.pipe(
        ofType(ProductsPageActions.updateProduct),
        concatMap( action => this.productsService.update(action.product).pipe(
            map(product => ProductsApiActions.productUpdated({product}))
        )
        )
    );

    @Effect()
    deleteBook$ = this.actions$.pipe(
        ofType(ProductsPageActions.deleteProduct),
        mergeMap(action =>
        this.productsService.remove(action.productId).pipe(
            map(() => ProductsApiActions.productDeleted({ productId: action.productId })),
            // catchError(() => EMPTY)
        )
        )
    );

}