import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { startWith, map, debounce, debounceTime, filter, tap, takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-autocomplete',
    templateUrl: 'autocomplete.component.html',
    styleUrls: ['autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

   control = new FormControl();
   @Input() label = ''; 
   @Input() type = "text";
   @Input() placeholder = "Pick one";
   @Input() ariaLabel = "search item";

    @Input() filteredOptions: string[];

    @Output() filterParams: EventEmitter<string> = new EventEmitter();

    @Output() changeParams: EventEmitter<string> = new EventEmitter();

    destroy$ = new Subject();
    /**
     *
     */
    constructor() {

    }

    ngOnInit(): void {
        this.control.valueChanges.pipe(
            startWith(''), 
            debounceTime(500),
            distinctUntilChanged(),
            filter(v => {
                if( v && v.length >= 2) {
                    return true;
                } else {
                    this.filterParams.emit(null);
                    return false;
                }
            }),
            tap((params) => this.filterParams.emit(params)),
            takeUntil(this.destroy$)
        ).subscribe();
    }  

    selected(selectedValue){
        this.changeParams.emit(selectedValue);
    }

    ngOnChanges() {
         
    }

    resetValue() {
        this.control.setValue(null); 
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}