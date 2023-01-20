import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-pagination";
export class PaginationComponent {
    constructor() {
        this.updateRange = new EventEmitter();
        this.ranges = [5, 10, 25, 50, 100];
        this.showRange = false;
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = 'You are on page';
        this.previousLabel = '';
        this.nextLabel = '';
        this.directionLinks = true;
    }
    onClick(targetElement) {
        if (this.paginationRange && !this.paginationRange.nativeElement.contains(targetElement)) {
            this.showRange = false;
        }
    }
    ngOnChanges(changes) {
        const { config } = changes;
        if (config && config.currentValue) {
            this.selectedLimit = this.config.rows;
        }
    }
    onPageChange(page) {
        this.updateRange.emit({
            page,
            limit: this.selectedLimit,
        });
    }
    changeLimit(limit, callFromAPI) {
        if (!callFromAPI) {
            this.showRange = !this.showRange;
        }
        this.selectedLimit = limit;
        this.updateRange.emit({
            page: 1,
            limit,
        });
    }
}
PaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: PaginationComponent, selector: "pagination", inputs: { pagination: "pagination", config: "config", id: "id" }, outputs: { updateRange: "updateRange" }, host: { listeners: { "document:click": "onClick($event.target)" } }, viewQueries: [{ propertyName: "paginationDirective", first: true, predicate: ["paginationDirective"], descendants: true }, { propertyName: "paginationRange", first: true, predicate: ["paginationRange"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"ngx-pagination-wrapper\"\n  [style.display]=\"config.paginationEnabled ? '' : 'none'\"\n  [class.ngx-table__table--dark-pagination-wrapper]=\"config.tableLayout.theme === 'dark'\"\n>\n  <div class=\"ngx-pagination-steps\">\n    <pagination-template\n      #paginationDirective=\"paginationApi\"\n      id=\"pagination-controls\"\n      [id]=\"id\"\n      [class.ngx-table__table--dark-pagination]=\"config.tableLayout.theme === 'dark'\"\n      [maxSize]=\"config.paginationMaxSize || 5\"\n      (pageChange)=\"onPageChange($event)\"\n    >\n      <ul\n        class=\"ngx-pagination\"\n        role=\"navigation\"\n        [attr.aria-label]=\"screenReaderPaginationLabel\"\n        [class.responsive]=\"true\"\n      >\n        <li\n          class=\"pagination-previous\"\n          [class.disabled]=\"paginationDirective.isFirstPage()\"\n          *ngIf=\"directionLinks\"\n        >\n          <a\n            tabindex=\"0\"\n            *ngIf=\"1 < paginationDirective.getCurrent()\"\n            (keyup.enter)=\"paginationDirective.previous()\"\n            (click)=\"paginationDirective.previous()\"\n            [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\"\n          >\n            {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n          </a>\n          <span *ngIf=\"paginationDirective.isFirstPage()\">\n            {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n          </span>\n        </li>\n        <li class=\"small-screen\">\n          {{ paginationDirective.getCurrent() }} / {{ paginationDirective.getLastPage() }}\n        </li>\n        <li\n          [class.current]=\"paginationDirective.getCurrent() === page.value\"\n          [class.ellipsis]=\"page.label === '...'\"\n          *ngFor=\"let page of paginationDirective.pages\"\n        >\n          <a\n            tabindex=\"0\"\n            (keyup.enter)=\"paginationDirective.setCurrent(page.value)\"\n            (click)=\"paginationDirective.setCurrent(page.value)\"\n            *ngIf=\"paginationDirective.getCurrent() !== page.value\"\n          >\n            <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n            <span>{{ page.label }}</span>\n          </a>\n          <ng-container *ngIf=\"paginationDirective.getCurrent() === page.value\">\n            <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n            <span>{{ page.label }}</span>\n          </ng-container>\n        </li>\n        <li\n          class=\"pagination-next\"\n          [class.disabled]=\"paginationDirective.isLastPage()\"\n          *ngIf=\"directionLinks\"\n        >\n          <a\n            tabindex=\"0\"\n            *ngIf=\"!paginationDirective.isLastPage()\"\n            (keyup.enter)=\"paginationDirective.next()\"\n            (click)=\"paginationDirective.next()\"\n            [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\"\n          >\n            {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n          </a>\n          <span *ngIf=\"paginationDirective.isLastPage()\">\n            {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n          </span>\n        </li>\n      </ul>\n    </pagination-template>\n  </div>\n  <div\n    class=\"ngx-pagination-range\"\n    #paginationRange\n    [class.ngx-table__table--dark-pagination-range]=\"config.tableLayout.theme === 'dark'\"\n    *ngIf=\"config.paginationRangeEnabled\"\n  >\n    <div class=\"ngx-dropdown ngx-pagination-range-dropdown\" id=\"rowAmount\">\n      <div class=\"ngx-btn-group\">\n        <div class=\"ngx-pagination-range-dropdown-button\" (click)=\"showRange = !showRange\">\n          {{selectedLimit}} <i class=\"ngx-icon ngx-icon-arrow-down\"></i>\n        </div>\n        <ul class=\"ngx-menu\" *ngIf=\"showRange\">\n          <li\n            class=\"ngx-pagination-range-dropdown-button-item\"\n            [class.ngx-pagination-range--selected]=\"limit === selectedLimit\"\n            (click)=\"changeLimit(limit, false)\"\n            *ngFor=\"let limit of ranges\"\n          >\n            <span>{{limit}}</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.PaginationControlsDirective, selector: "pagination-template,[pagination-template]", inputs: ["id", "maxSize"], outputs: ["pageChange", "pageBoundsCorrection"], exportAs: ["paginationApi"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pagination', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"ngx-pagination-wrapper\"\n  [style.display]=\"config.paginationEnabled ? '' : 'none'\"\n  [class.ngx-table__table--dark-pagination-wrapper]=\"config.tableLayout.theme === 'dark'\"\n>\n  <div class=\"ngx-pagination-steps\">\n    <pagination-template\n      #paginationDirective=\"paginationApi\"\n      id=\"pagination-controls\"\n      [id]=\"id\"\n      [class.ngx-table__table--dark-pagination]=\"config.tableLayout.theme === 'dark'\"\n      [maxSize]=\"config.paginationMaxSize || 5\"\n      (pageChange)=\"onPageChange($event)\"\n    >\n      <ul\n        class=\"ngx-pagination\"\n        role=\"navigation\"\n        [attr.aria-label]=\"screenReaderPaginationLabel\"\n        [class.responsive]=\"true\"\n      >\n        <li\n          class=\"pagination-previous\"\n          [class.disabled]=\"paginationDirective.isFirstPage()\"\n          *ngIf=\"directionLinks\"\n        >\n          <a\n            tabindex=\"0\"\n            *ngIf=\"1 < paginationDirective.getCurrent()\"\n            (keyup.enter)=\"paginationDirective.previous()\"\n            (click)=\"paginationDirective.previous()\"\n            [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\"\n          >\n            {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n          </a>\n          <span *ngIf=\"paginationDirective.isFirstPage()\">\n            {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n          </span>\n        </li>\n        <li class=\"small-screen\">\n          {{ paginationDirective.getCurrent() }} / {{ paginationDirective.getLastPage() }}\n        </li>\n        <li\n          [class.current]=\"paginationDirective.getCurrent() === page.value\"\n          [class.ellipsis]=\"page.label === '...'\"\n          *ngFor=\"let page of paginationDirective.pages\"\n        >\n          <a\n            tabindex=\"0\"\n            (keyup.enter)=\"paginationDirective.setCurrent(page.value)\"\n            (click)=\"paginationDirective.setCurrent(page.value)\"\n            *ngIf=\"paginationDirective.getCurrent() !== page.value\"\n          >\n            <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n            <span>{{ page.label }}</span>\n          </a>\n          <ng-container *ngIf=\"paginationDirective.getCurrent() === page.value\">\n            <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n            <span>{{ page.label }}</span>\n          </ng-container>\n        </li>\n        <li\n          class=\"pagination-next\"\n          [class.disabled]=\"paginationDirective.isLastPage()\"\n          *ngIf=\"directionLinks\"\n        >\n          <a\n            tabindex=\"0\"\n            *ngIf=\"!paginationDirective.isLastPage()\"\n            (keyup.enter)=\"paginationDirective.next()\"\n            (click)=\"paginationDirective.next()\"\n            [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\"\n          >\n            {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n          </a>\n          <span *ngIf=\"paginationDirective.isLastPage()\">\n            {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n          </span>\n        </li>\n      </ul>\n    </pagination-template>\n  </div>\n  <div\n    class=\"ngx-pagination-range\"\n    #paginationRange\n    [class.ngx-table__table--dark-pagination-range]=\"config.tableLayout.theme === 'dark'\"\n    *ngIf=\"config.paginationRangeEnabled\"\n  >\n    <div class=\"ngx-dropdown ngx-pagination-range-dropdown\" id=\"rowAmount\">\n      <div class=\"ngx-btn-group\">\n        <div class=\"ngx-pagination-range-dropdown-button\" (click)=\"showRange = !showRange\">\n          {{selectedLimit}} <i class=\"ngx-icon ngx-icon-arrow-down\"></i>\n        </div>\n        <ul class=\"ngx-menu\" *ngIf=\"showRange\">\n          <li\n            class=\"ngx-pagination-range-dropdown-button-item\"\n            [class.ngx-pagination-range--selected]=\"limit === selectedLimit\"\n            (click)=\"changeLimit(limit, false)\"\n            *ngFor=\"let limit of ranges\"\n          >\n            <span>{{limit}}</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { paginationDirective: [{
                type: ViewChild,
                args: ['paginationDirective']
            }], paginationRange: [{
                type: ViewChild,
                args: ['paginationRange']
            }], pagination: [{
                type: Input
            }], config: [{
                type: Input
            }], id: [{
                type: Input
            }], updateRange: [{
                type: Output
            }], onClick: [{
                type: HostListener,
                args: ['document:click', ['$event.target']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWFzeS10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYXN5LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDOzs7O0FBY3ZCLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFZcUIsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1RSxXQUFNLEdBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFeEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQ0FBMkIsR0FBRyxZQUFZLENBQUM7UUFDM0MsMEJBQXFCLEdBQUcsTUFBTSxDQUFDO1FBQy9CLDZCQUF3QixHQUFHLGlCQUFpQixDQUFDO1FBQzdDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixtQkFBYyxHQUFHLElBQUksQ0FBQztLQWlDOUI7SUE5QlEsT0FBTyxDQUFDLGFBQWtCO1FBQy9CLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN2RixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSTtZQUNKLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYTtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWEsRUFBRSxXQUFvQjtRQUM3QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0hBaERVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLHdkQ3hCaEMsZ3NJQTBHQTsyRkRsRmEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLFlBQVksbUJBRUwsdUJBQXVCLENBQUMsTUFBTTs4QkFJL0MsbUJBQW1CO3NCQURsQixTQUFTO3VCQUFDLHFCQUFxQjtnQkFFRixlQUFlO3NCQUE1QyxTQUFTO3VCQUFDLGlCQUFpQjtnQkFDbkIsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNhLFdBQVc7c0JBQTdCLE1BQU07Z0JBWUEsT0FBTztzQkFEYixZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZSB9IGZyb20gJ25neC1wYWdpbmF0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uUmFuZ2Uge1xuICBwYWdlOiBudW1iZXI7XG4gIGxpbWl0OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdwYWdpbmF0aW9uRGlyZWN0aXZlJylcbiAgcGFnaW5hdGlvbkRpcmVjdGl2ZTogUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlO1xuICBAVmlld0NoaWxkKCdwYWdpbmF0aW9uUmFuZ2UnKSBwYWdpbmF0aW9uUmFuZ2U7XG4gIEBJbnB1dCgpIHBhZ2luYXRpb247XG4gIEBJbnB1dCgpIGNvbmZpZzogQ29uZmlnO1xuICBASW5wdXQoKSBpZDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHVwZGF0ZVJhbmdlOiBFdmVudEVtaXR0ZXI8UGFnaW5hdGlvblJhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIHJhbmdlczogbnVtYmVyW10gPSBbNSwgMTAsIDI1LCA1MCwgMTAwXTtcbiAgcHVibGljIHNlbGVjdGVkTGltaXQ6IG51bWJlcjtcbiAgcHVibGljIHNob3dSYW5nZSA9IGZhbHNlO1xuICBwdWJsaWMgc2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsID0gJ1BhZ2luYXRpb24nO1xuICBwdWJsaWMgc2NyZWVuUmVhZGVyUGFnZUxhYmVsID0gJ3BhZ2UnO1xuICBwdWJsaWMgc2NyZWVuUmVhZGVyQ3VycmVudExhYmVsID0gJ1lvdSBhcmUgb24gcGFnZSc7XG4gIHB1YmxpYyBwcmV2aW91c0xhYmVsID0gJyc7XG4gIHB1YmxpYyBuZXh0TGFiZWwgPSAnJztcbiAgcHVibGljIGRpcmVjdGlvbkxpbmtzID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBwdWJsaWMgb25DbGljayh0YXJnZXRFbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uUmFuZ2UgJiYgIXRoaXMucGFnaW5hdGlvblJhbmdlLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkpIHtcbiAgICAgIHRoaXMuc2hvd1JhbmdlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29uZmlnIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZExpbWl0ID0gdGhpcy5jb25maWcucm93cztcbiAgICB9XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVSYW5nZS5lbWl0KHtcbiAgICAgIHBhZ2UsXG4gICAgICBsaW1pdDogdGhpcy5zZWxlY3RlZExpbWl0LFxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlTGltaXQobGltaXQ6IG51bWJlciwgY2FsbEZyb21BUEk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWNhbGxGcm9tQVBJKSB7XG4gICAgICB0aGlzLnNob3dSYW5nZSA9ICF0aGlzLnNob3dSYW5nZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZExpbWl0ID0gbGltaXQ7XG4gICAgdGhpcy51cGRhdGVSYW5nZS5lbWl0KHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBsaW1pdCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cIm5neC1wYWdpbmF0aW9uLXdyYXBwZXJcIlxuICBbc3R5bGUuZGlzcGxheV09XCJjb25maWcucGFnaW5hdGlvbkVuYWJsZWQgPyAnJyA6ICdub25lJ1wiXG4gIFtjbGFzcy5uZ3gtdGFibGVfX3RhYmxlLS1kYXJrLXBhZ2luYXRpb24td3JhcHBlcl09XCJjb25maWcudGFibGVMYXlvdXQudGhlbWUgPT09ICdkYXJrJ1wiXG4+XG4gIDxkaXYgY2xhc3M9XCJuZ3gtcGFnaW5hdGlvbi1zdGVwc1wiPlxuICAgIDxwYWdpbmF0aW9uLXRlbXBsYXRlXG4gICAgICAjcGFnaW5hdGlvbkRpcmVjdGl2ZT1cInBhZ2luYXRpb25BcGlcIlxuICAgICAgaWQ9XCJwYWdpbmF0aW9uLWNvbnRyb2xzXCJcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbY2xhc3Mubmd4LXRhYmxlX190YWJsZS0tZGFyay1wYWdpbmF0aW9uXT1cImNvbmZpZy50YWJsZUxheW91dC50aGVtZSA9PT0gJ2RhcmsnXCJcbiAgICAgIFttYXhTaXplXT1cImNvbmZpZy5wYWdpbmF0aW9uTWF4U2l6ZSB8fCA1XCJcbiAgICAgIChwYWdlQ2hhbmdlKT1cIm9uUGFnZUNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8dWxcbiAgICAgICAgY2xhc3M9XCJuZ3gtcGFnaW5hdGlvblwiXG4gICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJzY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWxcIlxuICAgICAgICBbY2xhc3MucmVzcG9uc2l2ZV09XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3M9XCJwYWdpbmF0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicGFnaW5hdGlvbkRpcmVjdGl2ZS5pc0ZpcnN0UGFnZSgpXCJcbiAgICAgICAgICAqbmdJZj1cImRpcmVjdGlvbkxpbmtzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgKm5nSWY9XCIxIDwgcGFnaW5hdGlvbkRpcmVjdGl2ZS5nZXRDdXJyZW50KClcIlxuICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInBhZ2luYXRpb25EaXJlY3RpdmUucHJldmlvdXMoKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwicGFnaW5hdGlvbkRpcmVjdGl2ZS5wcmV2aW91cygpXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwicHJldmlvdXNMYWJlbCArICcgJyArIHNjcmVlblJlYWRlclBhZ2VMYWJlbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgcHJldmlvdXNMYWJlbCB9fSA8c3BhbiBjbGFzcz1cInNob3ctZm9yLXNyXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInBhZ2luYXRpb25EaXJlY3RpdmUuaXNGaXJzdFBhZ2UoKVwiPlxuICAgICAgICAgICAge3sgcHJldmlvdXNMYWJlbCB9fSA8c3BhbiBjbGFzcz1cInNob3ctZm9yLXNyXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwic21hbGwtc2NyZWVuXCI+XG4gICAgICAgICAge3sgcGFnaW5hdGlvbkRpcmVjdGl2ZS5nZXRDdXJyZW50KCkgfX0gLyB7eyBwYWdpbmF0aW9uRGlyZWN0aXZlLmdldExhc3RQYWdlKCkgfX1cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgW2NsYXNzLmN1cnJlbnRdPVwicGFnaW5hdGlvbkRpcmVjdGl2ZS5nZXRDdXJyZW50KCkgPT09IHBhZ2UudmFsdWVcIlxuICAgICAgICAgIFtjbGFzcy5lbGxpcHNpc109XCJwYWdlLmxhYmVsID09PSAnLi4uJ1wiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnaW5hdGlvbkRpcmVjdGl2ZS5wYWdlc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJwYWdpbmF0aW9uRGlyZWN0aXZlLnNldEN1cnJlbnQocGFnZS52YWx1ZSlcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInBhZ2luYXRpb25EaXJlY3RpdmUuc2V0Q3VycmVudChwYWdlLnZhbHVlKVwiXG4gICAgICAgICAgICAqbmdJZj1cInBhZ2luYXRpb25EaXJlY3RpdmUuZ2V0Q3VycmVudCgpICE9PSBwYWdlLnZhbHVlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNob3ctZm9yLXNyXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19IDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPnt7IHBhZ2UubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYWdpbmF0aW9uRGlyZWN0aXZlLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaG93LWZvci1zclwiPnt7IHNjcmVlblJlYWRlckN1cnJlbnRMYWJlbCB9fSA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj57eyBwYWdlLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzcz1cInBhZ2luYXRpb24tbmV4dFwiXG4gICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2luYXRpb25EaXJlY3RpdmUuaXNMYXN0UGFnZSgpXCJcbiAgICAgICAgICAqbmdJZj1cImRpcmVjdGlvbkxpbmtzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgKm5nSWY9XCIhcGFnaW5hdGlvbkRpcmVjdGl2ZS5pc0xhc3RQYWdlKClcIlxuICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInBhZ2luYXRpb25EaXJlY3RpdmUubmV4dCgpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJwYWdpbmF0aW9uRGlyZWN0aXZlLm5leHQoKVwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIm5leHRMYWJlbCArICcgJyArIHNjcmVlblJlYWRlclBhZ2VMYWJlbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbmV4dExhYmVsIH19IDxzcGFuIGNsYXNzPVwic2hvdy1mb3Itc3JcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwicGFnaW5hdGlvbkRpcmVjdGl2ZS5pc0xhc3RQYWdlKClcIj5cbiAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cInNob3ctZm9yLXNyXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9wYWdpbmF0aW9uLXRlbXBsYXRlPlxuICA8L2Rpdj5cbiAgPGRpdlxuICAgIGNsYXNzPVwibmd4LXBhZ2luYXRpb24tcmFuZ2VcIlxuICAgICNwYWdpbmF0aW9uUmFuZ2VcbiAgICBbY2xhc3Mubmd4LXRhYmxlX190YWJsZS0tZGFyay1wYWdpbmF0aW9uLXJhbmdlXT1cImNvbmZpZy50YWJsZUxheW91dC50aGVtZSA9PT0gJ2RhcmsnXCJcbiAgICAqbmdJZj1cImNvbmZpZy5wYWdpbmF0aW9uUmFuZ2VFbmFibGVkXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZHJvcGRvd24gbmd4LXBhZ2luYXRpb24tcmFuZ2UtZHJvcGRvd25cIiBpZD1cInJvd0Ftb3VudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5neC1idG4tZ3JvdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1wYWdpbmF0aW9uLXJhbmdlLWRyb3Bkb3duLWJ1dHRvblwiIChjbGljayk9XCJzaG93UmFuZ2UgPSAhc2hvd1JhbmdlXCI+XG4gICAgICAgICAge3tzZWxlY3RlZExpbWl0fX0gPGkgY2xhc3M9XCJuZ3gtaWNvbiBuZ3gtaWNvbi1hcnJvdy1kb3duXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzPVwibmd4LW1lbnVcIiAqbmdJZj1cInNob3dSYW5nZVwiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3M9XCJuZ3gtcGFnaW5hdGlvbi1yYW5nZS1kcm9wZG93bi1idXR0b24taXRlbVwiXG4gICAgICAgICAgICBbY2xhc3Mubmd4LXBhZ2luYXRpb24tcmFuZ2UtLXNlbGVjdGVkXT1cImxpbWl0ID09PSBzZWxlY3RlZExpbWl0XCJcbiAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VMaW1pdChsaW1pdCwgZmFsc2UpXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBsaW1pdCBvZiByYW5nZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPnt7bGltaXR9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=