import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/* eslint-disable */
export class StyleService {
    setRowClass(val) {
        const selector = `#table > tbody > tr:nth-child(${val.row})`;
        const row = document.querySelector(selector);
        if (row) {
            row.classList.add(val.className);
        }
    }
    setCellClass(val) {
        const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
        const cell = document.querySelector(selector);
        if (cell) {
            cell.classList.add(val.className);
        }
    }
    setRowStyle(val) {
        const selector = `#table > tbody > tr:nth-child(${val.row})`;
        const row = document.querySelector(selector);
        if (row) {
            // eslint-disable-next-line @typescript-eslint/dot-notation
            row.style[val.attr] = val.value;
        }
    }
    setCellStyle(val) {
        const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
        const cell = document.querySelector(selector);
        if (cell) {
            // eslint-disable-next-line @typescript-eslint/dot-notation
            cell.style[val.attr] = val.value;
        }
    }
    pinnedWidth(pinned, column) {
        if (pinned) {
            return 150 * column + 'px';
        }
    }
}
StyleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: StyleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StyleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: StyleService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: StyleService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYXN5LXRhYmxlL3NyYy9saWIvc2VydmljZXMvc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxvQkFBb0I7QUFFcEIsTUFBTSxPQUFPLFlBQVk7SUFDaEIsV0FBVyxDQUFDLEdBQWE7UUFDOUIsTUFBTSxRQUFRLEdBQUcsaUNBQWlDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBd0IsQ0FBQztRQUNwRSxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFTSxZQUFZLENBQUMsR0FBYztRQUNoQyxNQUFNLFFBQVEsR0FBRyxpQ0FBaUMsR0FBRyxDQUFDLEdBQUcsb0JBQW9CLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUN6RixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBeUIsQ0FBQztRQUN0RSxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFTSxXQUFXLENBQUMsR0FBYTtRQUM5QixNQUFNLFFBQVEsR0FBRyxpQ0FBaUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUF3QixDQUFDO1FBQ3BFLElBQUksR0FBRyxFQUFFO1lBQ1AsMkRBQTJEO1lBQzNELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRU0sWUFBWSxDQUFDLEdBQWM7UUFDaEMsTUFBTSxRQUFRLEdBQUcsaUNBQWlDLEdBQUcsQ0FBQyxHQUFHLG9CQUFvQixHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDekYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXlCLENBQUM7UUFDdEUsSUFBSSxJQUFJLEVBQUU7WUFDUiwyREFBMkQ7WUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUNsQztJQUNILENBQUM7SUFFTSxXQUFXLENBQUMsTUFBMkIsRUFBRSxNQUFjO1FBQzVELElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7O3lHQXZDVSxZQUFZOzZHQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFEeEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxDbGFzcywgQ2VsbFN0eWxlLCBSb3dDbGFzcywgUm93U3R5bGUgfSBmcm9tICcuLic7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3R5bGVTZXJ2aWNlIHtcbiAgcHVibGljIHNldFJvd0NsYXNzKHZhbDogUm93Q2xhc3MpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGAjdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgke3ZhbC5yb3d9KWA7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTFRhYmxlUm93RWxlbWVudDtcbiAgICBpZiAocm93KSB7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZCh2YWwuY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0Q2VsbENsYXNzKHZhbDogQ2VsbENsYXNzKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgI3RhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoJHt2YWwucm93fSkgPiB0ZDpudGgtY2hpbGQoJHt2YWwuY2VsbH0pYDtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTFRhYmxlQ2VsbEVsZW1lbnQ7XG4gICAgaWYgKGNlbGwpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh2YWwuY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0Um93U3R5bGUodmFsOiBSb3dTdHlsZSk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYCN0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKCR7dmFsLnJvd30pYDtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MVGFibGVSb3dFbGVtZW50O1xuICAgIGlmIChyb3cpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZG90LW5vdGF0aW9uXG4gICAgICByb3cuc3R5bGVbdmFsLmF0dHJdID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRDZWxsU3R5bGUodmFsOiBDZWxsU3R5bGUpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGAjdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgke3ZhbC5yb3d9KSA+IHRkOm50aC1jaGlsZCgke3ZhbC5jZWxsfSlgO1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MVGFibGVDZWxsRWxlbWVudDtcbiAgICBpZiAoY2VsbCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9kb3Qtbm90YXRpb25cbiAgICAgIGNlbGwuc3R5bGVbdmFsLmF0dHJdID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwaW5uZWRXaWR0aChwaW5uZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsIGNvbHVtbjogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAocGlubmVkKSB7XG4gICAgICByZXR1cm4gMTUwICogY29sdW1uICsgJ3B4JztcbiAgICB9XG4gIH1cbn1cbiJdfQ==