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
   @Input() hint = '';
   @Input() type = "text";
   @Input() placeholder = "Pick one";
   @Input() ariaLabel = "search item";

    @Input() filteredOptions: string[];

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
            filter(v => v.length > 2),
            tap((params) => this.changeParams.emit(params)),
            takeUntil(this.destroy$)
        ).subscribe();
    }  

    ngOnChanges() {
         
    }

    resetValue() {
        this.control.setValue(null);
        this.changeParams.emit(null)
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}