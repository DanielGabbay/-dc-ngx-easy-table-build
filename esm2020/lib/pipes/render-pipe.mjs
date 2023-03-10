import { Pipe } from '@angular/core';
import { FiltersService } from '../services/filters.service';
import * as i0 from "@angular/core";
export class RenderPipe {
    transform(row, key) {
        const split = key.split('.');
        return FiltersService.getPath(split, row);
    }
}
RenderPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: RenderPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
RenderPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: RenderPipe, name: "render" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: RenderPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'render',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWFzeS10YWJsZS9zcmMvbGliL3BpcGVzL3JlbmRlci1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFLN0QsTUFBTSxPQUFPLFVBQVU7SUFDckIsU0FBUyxDQUFDLEdBQVEsRUFBRSxHQUFXO1FBQzdCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0IsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDOzt1R0FMVSxVQUFVO3FHQUFWLFVBQVU7MkZBQVYsVUFBVTtrQkFIdEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtpQkFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmlsdGVycy5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncmVuZGVyJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVuZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ocm93OiBhbnksIGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzcGxpdCA9IGtleS5zcGxpdCgnLicpO1xuXG4gICAgcmV0dXJuIEZpbHRlcnNTZXJ2aWNlLmdldFBhdGgoc3BsaXQsIHJvdyk7XG4gIH1cbn1cbiJdfQ==