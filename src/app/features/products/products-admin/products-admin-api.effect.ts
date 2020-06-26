
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ProductsService } from '../services/products-data.service';
import { exhaustMap, map, mergeMap, concatMap, tap} from 'rxjs/operators';
import { ProductsPageActions, ProductsApiActions } from './actions';
import { Router } from '@angular/router';

@Injectable()
export class ProductsAdminEffects {
 
    constructor(private productsService: ProductsService, 
        private router: Router,
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
    loadProduct$ = this.actions$.pipe(
      ofType(ProductsPageActions.selectProduct),
      exhaustMap((action) =>
        this.productsService.getDataById(action.productId).pipe(
          map(product => ProductsApiActions.productLoaded({ product })),
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
            tap(() => this.router.navigateByUrl('/products'))
            // catchError(() => EMPTY)
        )
        )
    );
 

    @Effect()
    updateProduct$ = this.actions$.pipe(
        ofType(ProductsPageActions.updateProduct),
        concatMap( action => this.productsService.update(action.product).pipe(
            map(product => ProductsApiActions.productUpdated({product})),
            tap(() => this.router.navigateByUrl('/products'))
        )
        )
    ); 
    @Effect()
    deleteBook$ = this.actions$.pipe(
        ofType(ProductsPageActions.deleteProduct),
        mergeMap(action =>
        this.productsService.remove(action.productId).pipe(
            map(() => ProductsApiActions.productDeleted({ productId: action.productId })),
            tap(() => this.router.navigateByUrl('/products'))
            // catchError(() => EMPTY)
        )
        )
    );
}