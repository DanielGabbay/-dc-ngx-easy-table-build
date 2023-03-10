import { EventEmitter } from '@angular/core';
import { Columns } from '../..';
import * as i0 from "@angular/core";
export declare class HeaderComponent {
    column: Columns;
    readonly update: EventEmitter<{
        key: string;
        value: string;
    }[]>;
    unifyKey(key: string): string;
    onSearch(input: HTMLInputElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "table-header", never, { "column": "column"; }, { "update": "update"; }, never, never, false, never>;
}
//# sourceMappingURL=header.component.d.ts.map