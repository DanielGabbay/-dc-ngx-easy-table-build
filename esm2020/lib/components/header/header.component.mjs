import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderComponent {
    constructor() {
        this.update = new EventEmitter();
    }
    unifyKey(key) {
        return key.replace('.', '_');
    }
    onSearch(input) {
        this.update.emit([{ value: input.value, key: this.column.key }]);
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.4", type: HeaderComponent, selector: "table-header", inputs: { column: "column" }, outputs: { update: "update" }, ngImport: i0, template: "<label for=\"search_{{ unifyKey(column.key) }}\">\n  <input\n    type=\"text\"\n    id=\"search_{{ unifyKey(column.key) }}\"\n    aria-label=\"Search\"\n    placeholder=\"{{ column.placeholder ? column.placeholder : column.title }}\"\n    class=\"ngx-table__header-search\"\n    #input\n    (input)=\"onSearch(input)\"\n  />\n</label>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'table-header', changeDetection: ChangeDetectionStrategy.OnPush, template: "<label for=\"search_{{ unifyKey(column.key) }}\">\n  <input\n    type=\"text\"\n    id=\"search_{{ unifyKey(column.key) }}\"\n    aria-label=\"Search\"\n    placeholder=\"{{ column.placeholder ? column.placeholder : column.title }}\"\n    class=\"ngx-table__header-search\"\n    #input\n    (input)=\"onSearch(input)\"\n  />\n</label>\n" }]
        }], propDecorators: { column: [{
                type: Input
            }], update: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYXN5LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYXN5LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRaEcsTUFBTSxPQUFPLGVBQWU7SUFMNUI7UUFPcUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUF5QyxDQUFDO0tBU3ZGO0lBUEMsUUFBUSxDQUFDLEdBQVc7UUFDbEIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQXVCO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7NEdBVlUsZUFBZTtnR0FBZixlQUFlLGlIQ1I1QixrVkFXQTsyRkRIYSxlQUFlO2tCQUwzQixTQUFTOytCQUNFLGNBQWMsbUJBRVAsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsTUFBTTtzQkFBZCxLQUFLO2dCQUNhLE1BQU07c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbHVtbnMgfSBmcm9tICcuLi8uLic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbnM7XG4gIEBPdXRwdXQoKSByZWFkb25seSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PHsga2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4+KCk7XG5cbiAgdW5pZnlLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgnLicsICdfJyk7XG4gIH1cblxuICBvblNlYXJjaChpbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlLmVtaXQoW3sgdmFsdWU6IGlucHV0LnZhbHVlLCBrZXk6IHRoaXMuY29sdW1uLmtleSB9XSk7XG4gIH1cbn1cbiIsIjxsYWJlbCBmb3I9XCJzZWFyY2hfe3sgdW5pZnlLZXkoY29sdW1uLmtleSkgfX1cIj5cbiAgPGlucHV0XG4gICAgdHlwZT1cInRleHRcIlxuICAgIGlkPVwic2VhcmNoX3t7IHVuaWZ5S2V5KGNvbHVtbi5rZXkpIH19XCJcbiAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICBwbGFjZWhvbGRlcj1cInt7IGNvbHVtbi5wbGFjZWhvbGRlciA/IGNvbHVtbi5wbGFjZWhvbGRlciA6IGNvbHVtbi50aXRsZSB9fVwiXG4gICAgY2xhc3M9XCJuZ3gtdGFibGVfX2hlYWRlci1zZWFyY2hcIlxuICAgICNpbnB1dFxuICAgIChpbnB1dCk9XCJvblNlYXJjaChpbnB1dClcIlxuICAvPlxuPC9sYWJlbD5cbiJdfQ==