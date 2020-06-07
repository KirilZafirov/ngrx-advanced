import { BaseDataStructureResponse } from './../../models/base-data-response.model';
import { BaseResponse } from './../../models/response.model';
import { SearchParams } from './../../models/search-params.model';
import { BaseApiService } from './base-api.service';


import { map, tap , take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActionTypeEnum } from 'src/app/models/action-type.model';
export class DataStateService<T extends BaseDataStructureResponse> {

  
    private listItems: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
    data$: Observable<T[]> = this.listItems.asObservable();

    constructor(protected baseApi: BaseApiService<T> , protected url: string) {

    }

    getData(searchParams?: SearchParams) {
        return this.baseApi.get(this.url,searchParams).pipe(
                tap( (data)=> this.setData(data))
                ); 
    } 

    
    getDataById(id: string , searchParams?: SearchParams) {  
        return this.baseApi.getById(this.url, id , searchParams);
    }

    saveOrUpdate(actionType: ActionTypeEnum , requestBody?: T ): Observable<string> {
           
        switch (actionType) { 
            case ActionTypeEnum.Add:
                return this.save(requestBody);
            case ActionTypeEnum.Edit:
                return this.update(requestBody);
            default:
                break;
        } 
    }

    save(requestBody: T):Observable<string> {
        return this.baseApi.save(this.url, requestBody).pipe(
            take(1),
            map((response: BaseResponse<string>) => {
                requestBody.id = response.payload;
                requestBody.updatedAt =new Date(); 
                let items = this.listItems.getValue(); 
                const newList =  [requestBody , ...items];
                this.setData(newList);
                return response.payload;
            }));
    }

    update(requestBody: T , reorderList: boolean = true) : Observable<string> {
        return this.baseApi.update(this.url, requestBody.id , requestBody).pipe(
            take(1),
            map((response) => {
                requestBody.updatedAt =new Date(); 
                if(reorderList) {
                    let items = this.listItems.getValue();
                    const filteredList = items.filter( i => i.id !== requestBody.id);
                    const newList =  [requestBody , ...filteredList];
                    this.setData(newList);
                }
                return response.payload
            }));
    } 

    remove(requestBody: T) {
        return this.baseApi.delete(this.url, requestBody.id);
    }
  

    setData(data: T[]) {
        this.listItems.next(data);
    }

    getListItems() :T[] {
       return this.listItems.getValue()
    }
}
