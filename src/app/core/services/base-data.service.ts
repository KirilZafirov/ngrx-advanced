import { BaseDataStructureResponse } from './../../models/base-data-response.model';
import { SearchParams } from './../../models/search-params.model';
import { BaseApiService } from './base-api.service';
 
import { ActionTypeEnum } from 'src/app/models/action-type.model';
export class DataStateService<T extends BaseDataStructureResponse> {

  

    constructor(protected baseApi: BaseApiService<T> , protected url: string) {

    }

    getData(searchParams?: SearchParams) {
        return this.baseApi.get(this.url,searchParams);
    } 

    
    getDataById(id: string , searchParams?: SearchParams) {  
        return this.baseApi.getById(this.url, id , searchParams);
    }

    saveOrUpdate(actionType: ActionTypeEnum , requestBody?: T ){
           
        switch (actionType) { 
            case ActionTypeEnum.Add:
                return this.save(requestBody);
            case ActionTypeEnum.Edit:
                return this.update(requestBody);
            default:
                break;
        } 
    }

    save(requestBody: T) {
        return this.baseApi.save(this.url, requestBody);
    }

    update(requestBody: T) {
        return this.baseApi.update(this.url, requestBody.id , requestBody);
    } 

    remove(id: string) {
        return this.baseApi.delete(this.url, id);
    }
  
 
}
