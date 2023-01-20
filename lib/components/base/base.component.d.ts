import { CdkDragDrop, CdkDragStart } from '@angular/cdk/drag-drop';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ApiType, Columns, Config, Pagination } from '../..';
import { PaginationRange } from '../pagination/pagination.component';
import { StyleService } from '../../services/style.service';
import { Subject } from 'rxjs';
import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
declare type ColumnKeyType = string | number | boolean;
interface RowContextMenuPosition {
    top: string | null;
    left: string | null;
    value: any | null;
}
export declare class BaseComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private readonly cdr;
    private readonly scrollDispatcher;
    readonly styleService: StyleService;
    private unsubscribe;
    selectedRow: number;
    selectedCol: number;
    term: any;
    filterCount: number;
    filteredCountSubject: Subject<number>;
    tableClass: string | null;
    globalSearchTerm: string;
    grouped: any;
    isSelected: boolean;
    page: number;
    count: number;
    sortState: Map<any, any>;
    sortKey: string | null;
    rowContextMenuPosition: RowContextMenuPosition;
    limit: any;
    sortBy: {
        key: string;
    } & {
        order: string;
    };
    selectedDetailsTemplateRowId: Set<number>;
    selectedCheckboxes: Set<number>;
    config: Config;
    configuration: Config;
    data: any[];
    pagination: Pagination;
    groupRowsBy: string;
    id: string;
    toggleRowIndex: any;
    detailsTemplate: TemplateRef<any>;
    summaryTemplate: TemplateRef<{
        total: number;
        limit: number;
        page: number;
    }>;
    groupRowsHeaderTemplate: TemplateRef<any>;
    filtersTemplate: TemplateRef<any>;
    selectAllTemplate: TemplateRef<any>;
    noResultsTemplate: TemplateRef<void>;
    loadingTemplate: TemplateRef<void>;
    additionalActionsTemplate: TemplateRef<void>;
    rowContextMenu: TemplateRef<any>;
    columns: Columns[];
    readonly event: EventEmitter<{
        event: string;
        value: any;
    }>;
    rowTemplate: TemplateRef<any>;
    private paginationComponent;
    contextMenu: any;
    table: any;
    viewPort: CdkVirtualScrollViewport;
    onContextMenuClick(targetElement: any): void;
    constructor(cdr: ChangeDetectorRef, scrollDispatcher: ScrollDispatcher, styleService: StyleService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    orderBy(column: Columns): void;
    onClick($event: MouseEvent, row: any, key: ColumnKeyType, colIndex: any, rowIndex: number): void;
    onDoubleClick($event: MouseEvent, row: any, key: ColumnKeyType, colIndex: any, rowIndex: number): void;
    onCheckboxSelect($event: any, row: any, rowIndex: number): void;
    onRadioSelect($event: any, row: any, rowIndex: number): void;
    onSelectAll(): void;
    onSearch($event: Array<{
        key: string;
        value: string;
    }>): void;
    onGlobalSearch(value: string): void;
    onPagination(pagination: PaginationRange): void;
    toggleCheckbox(rowIndex: number): void;
    collapseRow(rowIndex: number): void;
    private doDecodePersistedState;
    isRowCollapsed(rowIndex: number): boolean;
    get loadingHeight(): number;
    get arrowDefinition(): boolean;
    onRowContextMenu($event: MouseEvent, row: any, key: ColumnKeyType, colIndex: any, rowIndex: number): void;
    private doApplyData;
    onDragStart(event: CdkDragStart): void;
    onDrop(event: CdkDragDrop<string[]>): void;
    apiEvent(event: ApiType): void | number;
    private bindApi;
    private setColumnOrder;
    emitEvent(event: string, value: any): void;
    dragEnter($event: DragEvent): void;
    dragOver($event: DragEvent): void;
    dragLeave($event: DragEvent): void;
    drop($event: DragEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseComponent, "ngx-table", never, { "configuration": "configuration"; "data": "data"; "pagination": "pagination"; "groupRowsBy": "groupRowsBy"; "id": "id"; "toggleRowIndex": "toggleRowIndex"; "detailsTemplate": "detailsTemplate"; "summaryTemplate": "summaryTemplate"; "groupRowsHeaderTemplate": "groupRowsHeaderTemplate"; "filtersTemplate": "filtersTemplate"; "selectAllTemplate": "selectAllTemplate"; "noResultsTemplate": "noResultsTemplate"; "loadingTemplate": "loadingTemplate"; "additionalActionsTemplate": "additionalActionsTemplate"; "rowContextMenu": "rowContextMenu"; "columns": "columns"; }, { "event": "event"; }, ["rowTemplate"], never, false, never>;
}
export {};
//# sourceMappingURL=base.component.d.ts.map