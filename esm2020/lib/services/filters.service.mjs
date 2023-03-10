import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class FiltersService {
    static getPath(p, o) {
        // https://github.com/dherges/ng-packagr/issues/696
        /* eslint-disable-next-line */
        const result = p.reduce((xs, x) => (xs && typeof xs[x] !== 'undefined' ? xs[x] : null), o);
        return result;
    }
}
FiltersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FiltersService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FiltersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FiltersService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FiltersService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVhc3ktdGFibGUvc3JjL2xpYi9zZXJ2aWNlcy9maWx0ZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFXLEVBQUUsQ0FBTTtRQUNoQyxtREFBbUQ7UUFDbkQsOEJBQThCO1FBQzlCLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7MkdBTlUsY0FBYzsrR0FBZCxjQUFjOzJGQUFkLGNBQWM7a0JBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJzU2VydmljZSB7XG4gIHN0YXRpYyBnZXRQYXRoKHA6IHN0cmluZ1tdLCBvOiBhbnkpOiBhbnkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kaGVyZ2VzL25nLXBhY2thZ3IvaXNzdWVzLzY5NlxuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IHAucmVkdWNlKCh4cywgeCkgPT4gKHhzICYmIHR5cGVvZiB4c1t4XSAhPT0gJ3VuZGVmaW5lZCcgPyB4c1t4XSA6IG51bGwpLCBvKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=