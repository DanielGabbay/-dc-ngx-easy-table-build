import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class GlobalSearchPipe {
    transform(array, filter, filteredCountSubject) {
        filteredCountSubject.next(0);
        if (typeof array === 'undefined') {
            return;
        }
        if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === '') {
            filteredCountSubject.next(array.length);
            return array;
        }
        const arr = array.filter((row) => {
            const element = JSON.stringify(Object.values(row));
            const strings = filter.split(',');
            return strings.some((s) => element.toLocaleLowerCase().indexOf(s.trim().toLocaleLowerCase()) > -1);
        });
        filteredCountSubject.next(arr.length);
        return arr;
    }
}
GlobalSearchPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GlobalSearchPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
GlobalSearchPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: GlobalSearchPipe, name: "global" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: GlobalSearchPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'global',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXNlYXJjaC1waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVhc3ktdGFibGUvc3JjL2xpYi9waXBlcy9nbG9iYWwtc2VhcmNoLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBTXBELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsU0FBUyxDQUFDLEtBQVksRUFBRSxNQUFjLEVBQUUsb0JBQXFDO1FBQzNFLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN0RixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDOUUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OzZHQXBCVSxnQkFBZ0I7MkdBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUg1QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO2lCQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdnbG9iYWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShhcnJheTogYW55W10sIGZpbHRlcjogc3RyaW5nLCBmaWx0ZXJlZENvdW50U3ViamVjdDogU3ViamVjdDxudW1iZXI+KTogYW55IHtcbiAgICBmaWx0ZXJlZENvdW50U3ViamVjdC5uZXh0KDApO1xuICAgIGlmICh0eXBlb2YgYXJyYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAndW5kZWZpbmVkJyB8fCBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA9PT0gMCB8fCBmaWx0ZXIgPT09ICcnKSB7XG4gICAgICBmaWx0ZXJlZENvdW50U3ViamVjdC5uZXh0KGFycmF5Lmxlbmd0aCk7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIGNvbnN0IGFyciA9IGFycmF5LmZpbHRlcigocm93KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LnZhbHVlcyhyb3cpKTtcbiAgICAgIGNvbnN0IHN0cmluZ3MgPSBmaWx0ZXIuc3BsaXQoJywnKTtcbiAgICAgIHJldHVybiBzdHJpbmdzLnNvbWUoXG4gICAgICAgIChzKSA9PiBlbGVtZW50LnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzLnRyaW0oKS50b0xvY2FsZUxvd2VyQ2FzZSgpKSA+IC0xXG4gICAgICApO1xuICAgIH0pO1xuICAgIGZpbHRlcmVkQ291bnRTdWJqZWN0Lm5leHQoYXJyLmxlbmd0aCk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG59XG4iXX0=