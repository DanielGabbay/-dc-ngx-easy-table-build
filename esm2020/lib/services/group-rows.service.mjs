import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class GroupRowsService {
    static doGroupRows(data, groupRowsBy) {
        const grouped = [];
        from(data)
            .pipe(groupBy((row) => row[groupRowsBy]), mergeMap((group) => group.pipe(reduce((acc, curr) => [...acc, curr], []))))
            .subscribe((row) => grouped.push(row));
        return grouped;
    }
}
GroupRowsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GroupRowsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GroupRowsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GroupRowsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GroupRowsService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtcm93cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVhc3ktdGFibGUvc3JjL2xpYi9zZXJ2aWNlcy9ncm91cC1yb3dzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUczRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUksSUFBUyxFQUFFLFdBQW1CO1FBQ3pELE1BQU0sT0FBTyxHQUFVLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1AsSUFBSSxDQUNILE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2xDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFRLEVBQUUsSUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDbkY7YUFDQSxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV6QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs2R0FYVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIGdyb3VwQnksIHJlZHVjZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyb3VwUm93c1NlcnZpY2Uge1xuICBwdWJsaWMgc3RhdGljIGRvR3JvdXBSb3dzPFQ+KGRhdGE6IFRbXSwgZ3JvdXBSb3dzQnk6IHN0cmluZyk6IGFueVtdIHtcbiAgICBjb25zdCBncm91cGVkOiBhbnlbXSA9IFtdO1xuICAgIGZyb20oZGF0YSlcbiAgICAgIC5waXBlKFxuICAgICAgICBncm91cEJ5KChyb3cpID0+IHJvd1tncm91cFJvd3NCeV0pLFxuICAgICAgICBtZXJnZU1hcCgoZ3JvdXApID0+IGdyb3VwLnBpcGUocmVkdWNlKChhY2M6IFRbXSwgY3VycjogVCkgPT4gWy4uLmFjYywgY3Vycl0sIFtdKSkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChyb3cpID0+IGdyb3VwZWQucHVzaChyb3cpKTtcblxuICAgIHJldHVybiBncm91cGVkO1xuICB9XG59XG4iXX0=