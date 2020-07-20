import { startWith, catchError, map } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, of, Observable } from 'rxjs';

@Pipe({
    name: 'withLoading'
})
export class WithLoadingPipe implements PipeTransform {

    transform(val): Observable<WithLoadingPipeResult> {
        return isObservable(val) ?
                val.pipe(
                    map((value: any) => ({
                        loading: value.type === 'start',
                        value: value.type ? value.value : value
                    })),
                    startWith({loading : true}),
                    catchError( error => of({loading: false , error}))
                )
                : val;
    }
}

export interface WithLoadingPipeResult {
    data: any ;
    loading: boolean;
    error: Error
}