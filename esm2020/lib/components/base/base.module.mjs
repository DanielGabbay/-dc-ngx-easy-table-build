import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseComponent } from './base.component';
import { HeaderComponent } from '../header/header.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { GlobalSearchPipe } from '../../pipes/global-search-pipe';
import { RenderPipe } from '../../pipes/render-pipe';
import { SearchPipe } from '../../pipes/search-pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableTHeadComponent } from '../thead/thead.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
export class BaseModule {
}
BaseModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: BaseModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BaseModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: BaseModule, declarations: [BaseComponent,
        HeaderComponent,
        PaginationComponent,
        TableTHeadComponent,
        // Pipes
        SearchPipe,
        RenderPipe,
        GlobalSearchPipe,
        SortPipe], imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule], exports: [BaseComponent] });
BaseModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: BaseModule, imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: BaseModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BaseComponent,
                        HeaderComponent,
                        PaginationComponent,
                        TableTHeadComponent,
                        // Pipes
                        SearchPipe,
                        RenderPipe,
                        GlobalSearchPipe,
                        SortPipe,
                    ],
                    imports: [CommonModule, NgxPaginationModule, DragDropModule, ScrollingModule],
                    exports: [BaseComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWFzeS10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS9iYXNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBa0J6RCxNQUFNLE9BQU8sVUFBVTs7dUdBQVYsVUFBVTt3R0FBVixVQUFVLGlCQWRuQixhQUFhO1FBQ2IsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFFbkIsUUFBUTtRQUNSLFVBQVU7UUFDVixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLFFBQVEsYUFFQSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGVBQWUsYUFDbEUsYUFBYTt3R0FFWixVQUFVLFlBSFgsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxlQUFlOzJGQUdqRSxVQUFVO2tCQWhCdEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUVuQixRQUFRO3dCQUNSLFVBQVU7d0JBQ1YsVUFBVTt3QkFDVixnQkFBZ0I7d0JBQ2hCLFFBQVE7cUJBQ1Q7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7b0JBQzdFLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBHbG9iYWxTZWFyY2hQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvZ2xvYmFsLXNlYXJjaC1waXBlJztcbmltcG9ydCB7IFJlbmRlclBpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9yZW5kZXItcGlwZSc7XG5pbXBvcnQgeyBTZWFyY2hQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoLXBpcGUnO1xuaW1wb3J0IHsgU29ydFBpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9zb3J0LnBpcGUnO1xuXG5pbXBvcnQgeyBOZ3hQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LXBhZ2luYXRpb24nO1xuaW1wb3J0IHsgVGFibGVUSGVhZENvbXBvbmVudCB9IGZyb20gJy4uL3RoZWFkL3RoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmFzZUNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICBUYWJsZVRIZWFkQ29tcG9uZW50LFxuXG4gICAgLy8gUGlwZXNcbiAgICBTZWFyY2hQaXBlLFxuICAgIFJlbmRlclBpcGUsXG4gICAgR2xvYmFsU2VhcmNoUGlwZSxcbiAgICBTb3J0UGlwZSxcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmd4UGFnaW5hdGlvbk1vZHVsZSwgRHJhZ0Ryb3BNb2R1bGUsIFNjcm9sbGluZ01vZHVsZV0sXG4gIGV4cG9ydHM6IFtCYXNlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQmFzZU1vZHVsZSB7fVxuIl19