
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ProductsService } from '../services/products-data.service';
import { exhaustMap, map, mergeMap, concatMap, tap, withLatestFrom, filter} from 'rxjs/operators';
import { ProductsPageActions, ProductsApiActions } from './actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import * as fromRoot from "src/app/shared/state";

@Injectable()
export class ProductsAdminEffects {
 
    constructor(private productsService: ProductsService, 
         private store: Store<fromRoot.State>,
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
      ofType(ProductsPageActions.selectProduct , ProductsPageActions.hoverProduct),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromRoot.selectProductDetails)),
        ),
      ),
      filter(([_action, detail]) => { 
        return Boolean(detail) === false || (_action.productId !== detail.id)
      }),
      mergeMap(([action]) => { 
       return  this.productsService.getDataById(action.productId).pipe(
        map(product => ProductsApiActions.productLoaded({ product })),
      //   catchError(() => EMPTY)
      )
      }
       
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