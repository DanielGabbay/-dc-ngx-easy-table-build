import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Config } from '../..';
import { PaginationControlsDirective } from 'ngx-pagination';
import * as i0 from "@angular/core";
export interface PaginationRange {
    page: number;
    limit: number;
}
export declare class PaginationComponent implements OnChanges {
    paginationDirective: PaginationControlsDirective;
    paginationRange: any;
    pagination: any;
    config: Config;
    id: any;
    readonly updateRange: EventEmitter<PaginationRange>;
    ranges: number[];
    selectedLimit: number;
    showRange: boolean;
    screenReaderPaginationLabel: string;
    screenReaderPageLabel: string;
    screenReaderCurrentLabel: string;
    previousLabel: string;
    nextLabel: string;
    directionLinks: boolean;
    onClick(targetElement: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    onPageChange(page: number): void;
    changeLimit(limit: number, callFromAPI: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "pagination", never, { "pagination": "pagination"; "config": "config"; "id": "id"; }, { "updateRange": "updateRange"; }, never, never, false, never>;
}
//# sourceMappingURL=pagination.component.d.ts.map