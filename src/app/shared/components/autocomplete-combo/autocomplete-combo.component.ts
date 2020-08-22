import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { AutoCompleteSearch } from 'src/app/core/services/car-autocomplete.service';

export interface ParamsChange {
    event: string;
    key: string;
}
@Component({
    selector: 'app-autocomplete-combo',
    templateUrl: 'autocomplete-combo.component.html',
    styleUrls: ['autocomplete-combo.component.scss']
})
export class AutocompleteComboComponent {
    
    @Input() searchesCombo : AutoCompleteSearch[]; 
    /**
     *
     */
    @Output() filterParams: EventEmitter<ParamsChange> = new EventEmitter(); 
    @Output() changeParams: EventEmitter<ParamsChange> = new EventEmitter();
    
    constructor() {

    } 
  
    OnfilterParams( $event ,  key) {
        this.filterParams.emit({
            event: $event,
            key: key
        });
    }
    OnchangeParams( $event ,  key) {
        this.changeParams.emit({
            event: $event,
            key: key
        });
    }
}