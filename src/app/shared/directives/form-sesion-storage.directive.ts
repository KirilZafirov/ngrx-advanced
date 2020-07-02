import { takeUntil, filter, take, debounceTime } from 'rxjs/operators';
import { Input, Directive, Self, HostListener } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';
import { Subject, merge, fromEvent } from 'rxjs';
@Directive({
    selector: 'form[formGroup][name]'
})
export class FormStorageDirective {
    @Input() name: string;
    @Input() saveStrategy: 'change' | 'unload' = 'unload';

    private destroy = new Subject();
    private destroy$ = this.destroy.asObservable();

    @HostListener('submit')
    onSubmit() {
        this.storage.removeItem(this.key);
    }
    constructor(@Self() private container: ControlContainer,
        private storage: StorageService) {
    }

    private get key() {
        return `${this.name}-form`;
    }

    private get group() {
        return this.container.control;
    }

    async ngOnInit() {
        this.saveStrategy === 'unload' ? this.unloadStrategy() : this.changeStrategy();

        const storageValue = await this.storage.getItem(this.key);
        if (storageValue) this.group.patchValue(storageValue); 
    }

    private unloadStrategy() {
        merge(
            fromEvent(window, 'beforeunload'),
            this.destroy$
        ).pipe(
            takeUntil(this.destroy$),
            filter(() => {
                debugger;
                return this.group.dirty
            }),
            take(1)
        ).subscribe(() => this.saveValue(this.group.value));
    }


    private changeStrategy() {
        this.group.valueChanges.pipe(debounceTime(400), takeUntil(this.destroy$))
            .subscribe(value => this.saveValue(value))
    }

    private saveValue(value) {
        debugger;
        sessionStorage.setItem(this.key, JSON.stringify(value));
    }
    ngOnDestroy() {
        this.destroy.next();
    }
}