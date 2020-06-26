import { Product } from './../../features/products/services/products-data.service';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, Action, createSelector, on } from '@ngrx/store';
import { ProductsPageActions, ProductsApiActions } from 'src/app/features/products/products-admin/actions';

export const adapter = createEntityAdapter({
    selectId: (product: Product) => product.id,
    sortComparer: (a: Product , b: Product ) => a.name.localeCompare(b.name)
});

export interface State extends EntityState<Product> {
    activeProductId: string | null,
    products:Product[],
    productDetails: Product ,
    addProductPageActive: boolean
}


export const initialState: State = adapter.getInitialState({
    activeProductId: null,
    products: [],
    productDetails: null,
    addProductPageActive: false
});


export const productsReducer = createReducer(
    initialState,
    on(ProductsPageActions.clearSelectedProduct, ProductsPageActions.enter, state => {
      return {
        ...state,
        activeProductId: null
      };
    }),
    on(ProductsPageActions.selectProduct, (state, action) => {
      return {
        ...state,
        activeProductId: action.productId, 
      };
    }),
    on(ProductsPageActions.addProductPageActive, (state, action) => {
      return {
        ...state,
        addProductPageActive: action.isActive, 
      };
    }),
    on(ProductsApiActions.productLoaded, (state, action) => {
      return {
        ...state,
        activeProductId: action.product.id,
        productDetails: action.product
      };
    }),
    on(ProductsApiActions.productsLoaded, (state, action) => {
      return adapter.addAll(action.products, state);
    }),
    on(ProductsApiActions.productCreated, (state, action) => {
      return adapter.addOne(action.product, {
        ...state,
        addProductPageActive: false
      });
    }),
    on(ProductsApiActions.productUpdated, (state, action) => {
      return adapter.updateOne(
        { id: action.product.id, changes: action.product },
        {
          ...state,
          activeProductId: null
        }
      );
    }),
    on(ProductsApiActions.productDeleted, (state, action) => {
      return adapter.removeOne(action.productId, {
        ...state,
        activeProductId: null
      });
    })
  );
  
export function reducer( state: State | undefined , action: Action) {
    return productsReducer(state,  action);
}

export const { selectAll , selectEntities } = adapter.getSelectors();
export const selectActiveProductId = (state: State) => state.activeProductId;

export const  addProductPageActive = (state: State) => state.addProductPageActive;

export const productsFormActive = createSelector(
  selectActiveProductId,
  addProductPageActive,
  (activeProduct , addActive) => !!activeProduct || addActive
)

export const selectActiveProduct = createSelector(
    selectEntities,
    selectActiveProductId,
    (productEntities , activeProductId) => {
        return activeProductId ? productEntities[activeProductId]! : null
    }
)


