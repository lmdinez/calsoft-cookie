/**
 * @fileoverview added by tsickle
 * Generated from: lib/calsoft-cookie.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CalsoftCookieService {
    /**
     * @param {?} document
     * @param {?} platformId
     */
    constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
    }
    //  @param name Cookie name
    //  @returns {boolean}
    /**
     * @param {?} name
     * @return {?}
     */
    check(name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        /** @type {?} */
        const regExp = this.getCookieRegExp(name);
        /** @type {?} */
        const exists = regExp.test(this.document.cookie);
        return exists;
    }
    // @param name Cookie name
    // @returns {any}
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            /** @type {?} */
            const regExp = this.getCookieRegExp(name);
            /** @type {?} */
            const result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    }
    // @returns {}
    /**
     * @return {?}
     */
    getAll() {
        if (!this.documentIsAccessible) {
            return {};
        }
        /** @type {?} */
        const cookies = {};
        /** @type {?} */
        const document = this.document;
        if (document.cookie && document.cookie !== '') {
            /** @type {?} */
            const split = document.cookie.split(';');
            for (let i = 0; i < split.length; i += 1) {
                /** @type {?} */
                const currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    }
    //  @param name     Cookie name
    //  @param value    Cookie value
    //  @param expires  Number of days until the cookies expires or an actual `Date`
    //  @param path     Cookie path
    //  @param domain   Cookie domain
    //  @param secure   Secure flag
    //  @param sameSite OWASP samesite token `Lax` or `Strict`
    /**
     * @param {?} name
     * @param {?} value
     * @param {?=} expires
     * @param {?=} path
     * @param {?=} domain
     * @param {?=} secure
     * @param {?=} sameSite
     * @return {?}
     */
    set(name, value, expires, path, domain, secure, sameSite) {
        if (!this.documentIsAccessible) {
            return;
        }
        /** @type {?} */
        let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                /** @type {?} */
                const dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure) {
            cookieString += 'secure;';
        }
        if (sameSite) {
            cookieString += 'sameSite=' + sameSite + ';';
        }
        this.document.cookie = cookieString;
    }
    //  @param name   Cookie name
    //  @param path   Cookie path
    //  @param domain Cookie domain
    /**
     * @param {?} name
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    delete(name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain);
    }
    //  @param path   Cookie path
    //   @param domain Cookie domain
    /**
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    deleteAll(path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        /** @type {?} */
        const cookies = this.getAll();
        for (const cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    }
    // @param name Cookie name
    // @returns {RegExp}
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    getCookieRegExp(name) {
        /** @type {?} */
        const escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    }
}
CalsoftCookieService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CalsoftCookieService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: InjectionToken, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ CalsoftCookieService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CalsoftCookieService_Factory() { return new CalsoftCookieService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: CalsoftCookieService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalsoftCookieService.prototype.documentIsAccessible;
    /**
     * @type {?}
     * @private
     */
    CalsoftCookieService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    CalsoftCookieService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fsc29mdC1jb29raWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhbHNvZnQtY29va2llLyIsInNvdXJjZXMiOlsibGliL2NhbHNvZnQtY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBSzlELE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBRS9CLFlBSzZCLFFBQWEsRUFFVixVQUFrQztRQUZyQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRVYsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFFakUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGlCQUFpQixDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7O0lBTUQsS0FBSyxDQUFFLElBQVk7UUFDakIsSUFBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRztZQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxHQUFHLGtCQUFrQixDQUFFLElBQUksQ0FBRSxDQUFDOztjQUU1QixNQUFNLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBRSxJQUFJLENBQUU7O2NBQzdDLE1BQU0sR0FBWSxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFO1FBRTNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFNRCxHQUFHLENBQUUsSUFBWTtRQUNmLElBQUssSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLEVBQUc7WUFDckQsSUFBSSxHQUFHLGtCQUFrQixDQUFFLElBQUksQ0FBRSxDQUFDOztrQkFFNUIsTUFBTSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUUsSUFBSSxDQUFFOztrQkFDN0MsTUFBTSxHQUFvQixNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFO1lBRW5FLE9BQU8sa0JBQWtCLENBQUUsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7U0FDMUM7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUlELE1BQU07UUFDSixJQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFHO1lBQ2hDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBRUssT0FBTyxHQUFPLEVBQUU7O2NBQ2hCLFFBQVEsR0FBUSxJQUFJLENBQUMsUUFBUTtRQUVuQyxJQUFLLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUc7O2tCQUN6QyxLQUFLLEdBQWtCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUV2RCxLQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFHOztzQkFDcEMsYUFBYSxHQUFrQixLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFFMUQsYUFBYSxDQUFFLENBQUMsQ0FBRSxHQUFHLGFBQWEsQ0FBRSxDQUFDLENBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBRSxDQUFDO2dCQUM1RCxPQUFPLENBQUUsa0JBQWtCLENBQUUsYUFBYSxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUUsR0FBRyxrQkFBa0IsQ0FBRSxhQUFhLENBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQzthQUNoRztTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBVUQsR0FBRyxDQUNELElBQVksRUFDWixLQUFhLEVBQ2IsT0FBdUIsRUFDdkIsSUFBYSxFQUNiLE1BQWUsRUFDZixNQUFnQixFQUNoQixRQUEyQjtRQUUzQixJQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFHO1lBQ2hDLE9BQU87U0FDUjs7WUFFRyxZQUFZLEdBQVcsa0JBQWtCLENBQUUsSUFBSSxDQUFFLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFFLEtBQUssQ0FBRSxHQUFHLEdBQUc7UUFFL0YsSUFBSyxPQUFPLEVBQUc7WUFDYixJQUFLLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRzs7c0JBQzNCLFdBQVcsR0FBUyxJQUFJLElBQUksQ0FBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUU7Z0JBRTFGLFlBQVksSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTCxZQUFZLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDMUQ7U0FDRjtRQUVELElBQUssSUFBSSxFQUFHO1lBQ1YsWUFBWSxJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ3RDO1FBRUQsSUFBSyxNQUFNLEVBQUc7WUFDWixZQUFZLElBQUksU0FBUyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDMUM7UUFFRCxJQUFLLE1BQU0sRUFBRztZQUNaLFlBQVksSUFBSSxTQUFTLENBQUM7U0FDM0I7UUFFRCxJQUFLLFFBQVEsRUFBRztZQUNkLFlBQVksSUFBSSxXQUFXLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztJQUN0QyxDQUFDOzs7Ozs7Ozs7O0lBT0QsTUFBTSxDQUFFLElBQVksRUFBRSxJQUFhLEVBQUUsTUFBZTtRQUNsRCxJQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFHO1lBQ2hDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUUsQ0FBQztJQUNoRixDQUFDOzs7Ozs7OztJQUtELFNBQVMsQ0FBRSxJQUFhLEVBQUUsTUFBZTtRQUN2QyxJQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFHO1lBQ2hDLE9BQU87U0FDUjs7Y0FFSyxPQUFPLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUVsQyxLQUFNLE1BQU0sVUFBVSxJQUFJLE9BQU8sRUFBRztZQUNsQyxJQUFLLE9BQU8sQ0FBQyxjQUFjLENBQUUsVUFBVSxDQUFFLEVBQUc7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUUsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFNTyxlQUFlLENBQUUsSUFBWTs7Y0FDN0IsV0FBVyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUUsd0NBQXdDLEVBQUUsTUFBTSxDQUFFO1FBRTVGLE9BQU8sSUFBSSxNQUFNLENBQUUsTUFBTSxHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsV0FBVyxHQUFHLGdCQUFnQixFQUFFLEdBQUcsQ0FBRSxDQUFDO0lBQzdGLENBQUM7OztZQXJLRCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBUUcsTUFBTSxTQUFFLFFBQVE7WUFic0IsY0FBYyx1QkFlcEQsTUFBTSxTQUFFLFdBQVc7Ozs7Ozs7O0lBUnJCLG9EQUErQzs7Ozs7SUFNOUMsd0NBQXlDOzs7OztJQUV6QywwQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYWxzb2Z0Q29va2llU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnRJc0FjY2Vzc2libGU6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgLy8gVGhlIHR5cGUgYERvY3VtZW50YCBtYXkgbm90IGJlIHVzZWQgaGVyZS4gQWx0aG91Z2ggYSBmaXggaXMgb24gaXRzIHdheSxcbiAgIC8vIHdlIHdpbGwgZ28gd2l0aCBgYW55YCBmb3Igbm93IHRvIHN1cHBvcnQgQW5ndWxhciAyLjQueCBwcm9qZWN0cy5cbiAgIC8vIElzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjYzMVxuICAgLy8gRml4OiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMTQ4OTRcbiAgIEBJbmplY3QoIERPQ1VNRU5UICkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgLy8gR2V0IHRoZSBgUExBVEZPUk1fSURgIHNvIHdlIGNhbiBjaGVjayBpZiB3ZSdyZSBpbiBhIGJyb3dzZXIuXG4gICBASW5qZWN0KCBQTEFURk9STV9JRCApIHByaXZhdGUgcGxhdGZvcm1JZDogSW5qZWN0aW9uVG9rZW48T2JqZWN0PixcbiApIHtcbiAgIHRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgPSBpc1BsYXRmb3JtQnJvd3NlciggdGhpcy5wbGF0Zm9ybUlkICk7XG4gfVxuXG5cbiAvLyAgQHBhcmFtIG5hbWUgQ29va2llIG5hbWVcbiAvLyAgQHJldHVybnMge2Jvb2xlYW59XG4gXG4gY2hlY2soIG5hbWU6IHN0cmluZyApOiBib29sZWFuIHtcbiAgIGlmICggIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgKSB7XG4gICAgIHJldHVybiBmYWxzZTtcbiAgIH1cblxuICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudCggbmFtZSApO1xuXG4gICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IHRoaXMuZ2V0Q29va2llUmVnRXhwKCBuYW1lICk7XG4gICBjb25zdCBleGlzdHM6IGJvb2xlYW4gPSByZWdFeHAudGVzdCggdGhpcy5kb2N1bWVudC5jb29raWUgKTtcblxuICAgcmV0dXJuIGV4aXN0cztcbiB9XG5cblxuICAgLy8gQHBhcmFtIG5hbWUgQ29va2llIG5hbWVcbiAgIC8vIEByZXR1cm5zIHthbnl9XG5cbiBnZXQoIG5hbWU6IHN0cmluZyApOiBzdHJpbmcge1xuICAgaWYgKCB0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlICYmIHRoaXMuY2hlY2soIG5hbWUgKSApIHtcbiAgICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudCggbmFtZSApO1xuXG4gICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gdGhpcy5nZXRDb29raWVSZWdFeHAoIG5hbWUgKTtcbiAgICAgY29uc3QgcmVzdWx0OiBSZWdFeHBFeGVjQXJyYXkgPSByZWdFeHAuZXhlYyggdGhpcy5kb2N1bWVudC5jb29raWUgKTtcblxuICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KCByZXN1bHRbIDEgXSApO1xuICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuICcnO1xuICAgfVxuIH1cblxuICAgLy8gQHJldHVybnMge31cblxuIGdldEFsbCgpOiB7fSB7XG4gICBpZiAoICF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlICkge1xuICAgICByZXR1cm4ge307XG4gICB9XG5cbiAgIGNvbnN0IGNvb2tpZXM6IHt9ID0ge307XG4gICBjb25zdCBkb2N1bWVudDogYW55ID0gdGhpcy5kb2N1bWVudDtcblxuICAgaWYgKCBkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSAnJyApIHtcbiAgICAgY29uc3Qgc3BsaXQ6IEFycmF5PHN0cmluZz4gPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblxuICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkgKz0gMSApIHtcbiAgICAgICBjb25zdCBjdXJyZW50Q29va2llOiBBcnJheTxzdHJpbmc+ID0gc3BsaXRbIGkgXS5zcGxpdCgnPScpO1xuXG4gICAgICAgY3VycmVudENvb2tpZVsgMCBdID0gY3VycmVudENvb2tpZVsgMCBdLnJlcGxhY2UoIC9eIC8sICcnICk7XG4gICAgICAgY29va2llc1sgZGVjb2RlVVJJQ29tcG9uZW50KCBjdXJyZW50Q29va2llWyAwIF0gKSBdID0gZGVjb2RlVVJJQ29tcG9uZW50KCBjdXJyZW50Q29va2llWyAxIF0gKTtcbiAgICAgfVxuICAgfVxuXG4gICByZXR1cm4gY29va2llcztcbiB9XG5cbiAvLyAgQHBhcmFtIG5hbWUgICAgIENvb2tpZSBuYW1lXG4gLy8gIEBwYXJhbSB2YWx1ZSAgICBDb29raWUgdmFsdWVcbiAvLyAgQHBhcmFtIGV4cGlyZXMgIE51bWJlciBvZiBkYXlzIHVudGlsIHRoZSBjb29raWVzIGV4cGlyZXMgb3IgYW4gYWN0dWFsIGBEYXRlYFxuIC8vICBAcGFyYW0gcGF0aCAgICAgQ29va2llIHBhdGhcbiAvLyAgQHBhcmFtIGRvbWFpbiAgIENvb2tpZSBkb21haW5cbiAvLyAgQHBhcmFtIHNlY3VyZSAgIFNlY3VyZSBmbGFnXG4gLy8gIEBwYXJhbSBzYW1lU2l0ZSBPV0FTUCBzYW1lc2l0ZSB0b2tlbiBgTGF4YCBvciBgU3RyaWN0YFxuXG4gc2V0KFxuICAgbmFtZTogc3RyaW5nLFxuICAgdmFsdWU6IHN0cmluZyxcbiAgIGV4cGlyZXM/OiBudW1iZXIgfCBEYXRlLFxuICAgcGF0aD86IHN0cmluZyxcbiAgIGRvbWFpbj86IHN0cmluZyxcbiAgIHNlY3VyZT86IGJvb2xlYW4sXG4gICBzYW1lU2l0ZT86ICdMYXgnIHwgJ1N0cmljdCdcbiApOiB2b2lkIHtcbiAgIGlmICggIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgKSB7XG4gICAgIHJldHVybjtcbiAgIH1cblxuICAgbGV0IGNvb2tpZVN0cmluZzogc3RyaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KCBuYW1lICkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlICkgKyAnOyc7XG5cbiAgIGlmICggZXhwaXJlcyApIHtcbiAgICAgaWYgKCB0eXBlb2YgZXhwaXJlcyA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgY29uc3QgZGF0ZUV4cGlyZXM6IERhdGUgPSBuZXcgRGF0ZSggbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBleHBpcmVzICogMTAwMCAqIDYwICogNjAgKiAyNCApO1xuXG4gICAgICAgY29va2llU3RyaW5nICs9ICdleHBpcmVzPScgKyBkYXRlRXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xuICAgICB9IGVsc2Uge1xuICAgICAgIGNvb2tpZVN0cmluZyArPSAnZXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xuICAgICB9XG4gICB9XG5cbiAgIGlmICggcGF0aCApIHtcbiAgICAgY29va2llU3RyaW5nICs9ICdwYXRoPScgKyBwYXRoICsgJzsnO1xuICAgfVxuXG4gICBpZiAoIGRvbWFpbiApIHtcbiAgICAgY29va2llU3RyaW5nICs9ICdkb21haW49JyArIGRvbWFpbiArICc7JztcbiAgIH1cblxuICAgaWYgKCBzZWN1cmUgKSB7XG4gICAgIGNvb2tpZVN0cmluZyArPSAnc2VjdXJlOyc7XG4gICB9XG5cbiAgIGlmICggc2FtZVNpdGUgKSB7XG4gICAgIGNvb2tpZVN0cmluZyArPSAnc2FtZVNpdGU9JyArIHNhbWVTaXRlICsgJzsnO1xuICAgfVxuXG4gICB0aGlzLmRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cmluZztcbiB9XG5cblxuIC8vICBAcGFyYW0gbmFtZSAgIENvb2tpZSBuYW1lXG4gLy8gIEBwYXJhbSBwYXRoICAgQ29va2llIHBhdGhcbiAvLyAgQHBhcmFtIGRvbWFpbiBDb29raWUgZG9tYWluXG4gXG4gZGVsZXRlKCBuYW1lOiBzdHJpbmcsIHBhdGg/OiBzdHJpbmcsIGRvbWFpbj86IHN0cmluZyApOiB2b2lkIHtcbiAgIGlmICggIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgKSB7XG4gICAgIHJldHVybjtcbiAgIH1cblxuICAgdGhpcy5zZXQoIG5hbWUsICcnLCBuZXcgRGF0ZSgnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQnKSwgcGF0aCwgZG9tYWluICk7XG4gfVxuXG4gLy8gIEBwYXJhbSBwYXRoICAgQ29va2llIHBhdGhcbiAvLyAgIEBwYXJhbSBkb21haW4gQ29va2llIGRvbWFpblxuXG4gZGVsZXRlQWxsKCBwYXRoPzogc3RyaW5nLCBkb21haW4/OiBzdHJpbmcgKTogdm9pZCB7XG4gICBpZiAoICF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlICkge1xuICAgICByZXR1cm47XG4gICB9XG5cbiAgIGNvbnN0IGNvb2tpZXM6IGFueSA9IHRoaXMuZ2V0QWxsKCk7XG5cbiAgIGZvciAoIGNvbnN0IGNvb2tpZU5hbWUgaW4gY29va2llcyApIHtcbiAgICAgaWYgKCBjb29raWVzLmhhc093blByb3BlcnR5KCBjb29raWVOYW1lICkgKSB7XG4gICAgICAgdGhpcy5kZWxldGUoIGNvb2tpZU5hbWUsIHBhdGgsIGRvbWFpbiApO1xuICAgICB9XG4gICB9XG4gfVxuXG5cbiAgIC8vIEBwYXJhbSBuYW1lIENvb2tpZSBuYW1lXG4gICAvLyBAcmV0dXJucyB7UmVnRXhwfVxuXG4gcHJpdmF0ZSBnZXRDb29raWVSZWdFeHAoIG5hbWU6IHN0cmluZyApOiBSZWdFeHAge1xuICAgY29uc3QgZXNjYXBlZE5hbWU6IHN0cmluZyA9IG5hbWUucmVwbGFjZSggLyhbXFxbXFxdXFx7XFx9XFwoXFwpXFx8XFw9XFw7XFwrXFw/XFwsXFwuXFwqXFxeXFwkXSkvaWcsICdcXFxcJDEnICk7XG5cbiAgIHJldHVybiBuZXcgUmVnRXhwKCAnKD86XicgKyBlc2NhcGVkTmFtZSArICd8O1xcXFxzKicgKyBlc2NhcGVkTmFtZSArICcpPSguKj8pKD86O3wkKScsICdnJyApO1xuIH1cbn1cbiJdfQ==