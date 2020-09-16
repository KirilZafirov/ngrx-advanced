import { AfterViewInit, Directive, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { PrefetchModeEnum } from '../models/prefetch-modes.enum';
declare var navigator; 

@Directive({
    selector: '[prefetch]',
})
export class PrefetchDirective implements OnInit, AfterViewInit, OnDestroy {

    @Input()
    prefetchMode: PrefetchModeEnum[] = [PrefetchModeEnum.VISIBLE];

    @Output()
    prefetch = new EventEmitter<void>();

    observer: IntersectionObserver;
    loaded: boolean = false;

    /**
     *
     */
    constructor(private elemRef: ElementRef) {

    }



    ngOnInit(): void {
        if (this.prefetchMode.includes(PrefetchModeEnum.LOAD)) {
            this.prefetchData()
        }
    }

    ngAfterViewInit(): void {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.prefetchData()
                    this.observer.disconnect()
                }
            })
        });
        this.observer.observe(this.elemRef.nativeElement)
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect()
        }
    }


    @HostListener('mouseenter')
    onMouseEnter() {
        if (!this.loaded && this.prefetchMode.includes(PrefetchModeEnum.HOVER)) {
            this.loaded = true;
            this.prefetchData();
        }
    }

    prefetchData() { 
        if (navigator.connection.saveData) {
            return undefined
        };
        this.prefetch.next();
    }
}