
import { ActionReducerMap , MetaReducer, createSelector } from '@ngrx/store';
import * as fromProducts from "./products.reducer";
import * as fromAuth from "./auth.reducer";
import { logoutMetareducer } from "./logout.metareducer";

export interface State {
    products: fromProducts.State;
    auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProducts.reducer,
  auth: fromAuth.reducer
}

export const metaReducers: MetaReducer<State>[] = [logoutMetareducer];


/**
 * Auth selectors
 *
 */
export const selectAuthState = (state: State) => state.auth;
export const selectGettingAuthStatus = createSelector(
   selectAuthState,
   fromAuth.selectGettingStatus
);

export const selectAuthUser = createSelector(
   selectAuthState,
   fromAuth.selectUser
)


export const selectAuthError = createSelector(
   selectAuthState,
   fromAuth.selectError
)

/**
 * Products selectors
 * 
 */

 export const selectProductsState = (state: State) => state.products;

 export const selectProductDetails = (state: State) => state.products.productDetails;

 export const selectAllProducts = createSelector(
    selectProductsState,
    fromProducts.selectAll
 )

 export const selectActiveProduct = createSelector(
    selectProductsState,
    fromProducts.selectActiveProduct
 )
 
export const isProductFormActive = createSelector(
   selectProductsState,
   fromProducts.productsFormActive
)