import { EventEmitter, TemplateRef } from '@angular/core';
import { Columns, Config } from '../..';
import { StyleService } from '../../services/style.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class TableTHeadComponent {
    readonly styleService: StyleService;
    menuActive: boolean;
    openedHeaderActionTemplate: string | null;
    startOffset: any;
    onSelectAllBinded: () => void;
    config: Config;
    columns: Columns[];
    sortKey: any;
    sortState: any;
    selectAllTemplate: any;
    filtersTemplate: any;
    additionalActionsTemplate: TemplateRef<void>;
    readonly filter: EventEmitter<{
        key: string;
        value: string;
    }[]>;
    readonly order: EventEmitter<Columns>;
    readonly selectAll: EventEmitter<void>;
    readonly event: EventEmitter<{
        event: string;
        value: any;
    }>;
    private th;
    headerDropdown: any;
    additionalActionMenu: any;
    onClick(targetElement: any): void;
    constructor(styleService: StyleService);
    getColumnDefinition(column: Columns): boolean;
    orderBy(column: Columns): void;
    isOrderEnabled(column: Columns): boolean;
    columnDrop(event: CdkDragDrop<string[]>): void;
    onSearch($event: Array<{
        key: string;
        value: string;
    }>): void;
    getColumnWidth(column: any): string | null;
    onSelectAll(): void;
    onMouseDown(event: MouseEvent, th: HTMLTableHeaderCellElement): void;
    onMouseMove(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    showHeaderActionTemplateMenu(column: Columns): void;
    showMenu(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableTHeadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableTHeadComponent, "[table-thead]", never, { "config": "config"; "columns": "columns"; "sortKey": "sortKey"; "sortState": "sortState"; "selectAllTemplate": "selectAllTemplate"; "filtersTemplate": "filtersTemplate"; "additionalActionsTemplate": "additionalActionsTemplate"; }, { "filter": "filter"; "order": "order"; "selectAll": "selectAll"; "event": "event"; }, never, never, false, never>;
}
//# sourceMappingURL=thead.component.d.ts.map