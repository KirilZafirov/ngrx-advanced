import { ViewPortSizes } from './../../features/models/view-port-sizes.model';
import { Injectable, OnDestroy } from '@angular/core';
import { BreakpointObserver, MediaMatcher, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ViewService implements OnDestroy {

  private viewPortSizes: BehaviorSubject<ViewPortSizes> = new BehaviorSubject<ViewPortSizes>(null);
  viewPortSizes$: Observable<ViewPortSizes> = this.viewPortSizes.asObservable();

  breakpointObserverSubscription: Subscription;
  constructor(public breakpointObserver: BreakpointObserver,
    public mediaMatcher: MediaMatcher) {

    this.breakpointObserverSubscription = breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Tablet,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ]).pipe(
      map(() => ({
        isXSmall: breakpointObserver.isMatched(Breakpoints.XSmall),
        isSmall: breakpointObserver.isMatched(Breakpoints.Small),
        isMedium: breakpointObserver.isMatched(Breakpoints.Medium),
        isLarge: breakpointObserver.isMatched(Breakpoints.Large),
        isXLarge: breakpointObserver.isMatched(Breakpoints.XLarge),
        isWeb: breakpointObserver.isMatched(Breakpoints.Web),
        isWebLandscape: breakpointObserver.isMatched(Breakpoints.WebLandscape),
        isWebPortrait: breakpointObserver.isMatched(Breakpoints.WebPortrait),
        isHandset: breakpointObserver.isMatched(Breakpoints.Handset),
        isHandsetLandscape: breakpointObserver.isMatched(Breakpoints.HandsetLandscape),
        isHandsetPortrait: breakpointObserver.isMatched(Breakpoints.HandsetPortrait),
        isTablet: breakpointObserver.isMatched(Breakpoints.Tablet),
        isTabletLandscape: breakpointObserver.isMatched(Breakpoints.TabletLandscape),
        isTabletPortrait: breakpointObserver.isMatched(Breakpoints.TabletPortrait)
      })
      ),
      tap((val: ViewPortSizes) => this.viewPortSizes.next(val))
    ).subscribe()
  }



  subscriptionDestroy() {
    this.breakpointObserverSubscription.unsubscribe();
  }


  ngOnDestroy() {
    this.breakpointObserverSubscription.unsubscribe();
  }
}
