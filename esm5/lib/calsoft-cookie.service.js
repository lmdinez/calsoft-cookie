/**
 * @fileoverview added by tsickle
 * Generated from: lib/calsoft-cookie.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var CalsoftCookieService = /** @class */ (function () {
    function CalsoftCookieService(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
    }
    //  @param name Cookie name
    //  @returns {boolean}
    //  @param name Cookie name
    //  @returns {boolean}
    /**
     * @param {?} name
     * @return {?}
     */
    CalsoftCookieService.prototype.check = 
    //  @param name Cookie name
    //  @returns {boolean}
    /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        /** @type {?} */
        var regExp = this.getCookieRegExp(name);
        /** @type {?} */
        var exists = regExp.test(this.document.cookie);
        return exists;
    };
    // @param name Cookie name
    // @returns {any}
    // @param name Cookie name
    // @returns {any}
    /**
     * @param {?} name
     * @return {?}
     */
    CalsoftCookieService.prototype.get = 
    // @param name Cookie name
    // @returns {any}
    /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            /** @type {?} */
            var regExp = this.getCookieRegExp(name);
            /** @type {?} */
            var result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    };
    // @returns {}
    // @returns {}
    /**
     * @return {?}
     */
    CalsoftCookieService.prototype.getAll = 
    // @returns {}
    /**
     * @return {?}
     */
    function () {
        if (!this.documentIsAccessible) {
            return {};
        }
        /** @type {?} */
        var cookies = {};
        /** @type {?} */
        var document = this.document;
        if (document.cookie && document.cookie !== '') {
            /** @type {?} */
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i += 1) {
                /** @type {?} */
                var currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    };
    //  @param name     Cookie name
    //  @param value    Cookie value
    //  @param expires  Number of days until the cookies expires or an actual `Date`
    //  @param path     Cookie path
    //  @param domain   Cookie domain
    //  @param secure   Secure flag
    //  @param sameSite OWASP samesite token `Lax` or `Strict`
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
    CalsoftCookieService.prototype.set = 
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
    function (name, value, expires, path, domain, secure, sameSite) {
        if (!this.documentIsAccessible) {
            return;
        }
        /** @type {?} */
        var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                /** @type {?} */
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
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
    };
    //  @param name   Cookie name
    //  @param path   Cookie path
    //  @param domain Cookie domain
    //  @param name   Cookie name
    //  @param path   Cookie path
    //  @param domain Cookie domain
    /**
     * @param {?} name
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    CalsoftCookieService.prototype.delete = 
    //  @param name   Cookie name
    //  @param path   Cookie path
    //  @param domain Cookie domain
    /**
     * @param {?} name
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    function (name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain);
    };
    //  @param path   Cookie path
    //   @param domain Cookie domain
    //  @param path   Cookie path
    //   @param domain Cookie domain
    /**
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    CalsoftCookieService.prototype.deleteAll = 
    //  @param path   Cookie path
    //   @param domain Cookie domain
    /**
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    function (path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        /** @type {?} */
        var cookies = this.getAll();
        for (var cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    };
    // @param name Cookie name
    // @returns {RegExp}
    // @param name Cookie name
    // @returns {RegExp}
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    CalsoftCookieService.prototype.getCookieRegExp = 
    // @param name Cookie name
    // @returns {RegExp}
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    };
    CalsoftCookieService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CalsoftCookieService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: InjectionToken, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ CalsoftCookieService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CalsoftCookieService_Factory() { return new CalsoftCookieService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: CalsoftCookieService, providedIn: "root" });
    return CalsoftCookieService;
}());
export { CalsoftCookieService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fsc29mdC1jb29raWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhbHNvZnQtY29va2llLyIsInNvdXJjZXMiOlsibGliL2NhbHNvZnQtY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRTlEO0lBS0UsOEJBSzZCLFFBQWEsRUFFVixVQUFrQztRQUZyQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRVYsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFFakUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGlCQUFpQixDQUFFLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQztJQUNuRSxDQUFDO0lBR0QsMkJBQTJCO0lBQzNCLHNCQUFzQjs7Ozs7OztJQUV0QixvQ0FBSzs7Ozs7OztJQUFMLFVBQU8sSUFBWTtRQUNqQixJQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFHO1lBQ2hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLEdBQUcsa0JBQWtCLENBQUUsSUFBSSxDQUFFLENBQUM7O1lBRTVCLE1BQU0sR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFFLElBQUksQ0FBRTs7WUFDN0MsTUFBTSxHQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUU7UUFFM0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUdDLDBCQUEwQjtJQUMxQixpQkFBaUI7Ozs7Ozs7SUFFbkIsa0NBQUc7Ozs7Ozs7SUFBSCxVQUFLLElBQVk7UUFDZixJQUFLLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBRSxFQUFHO1lBQ3JELElBQUksR0FBRyxrQkFBa0IsQ0FBRSxJQUFJLENBQUUsQ0FBQzs7Z0JBRTVCLE1BQU0sR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFFLElBQUksQ0FBRTs7Z0JBQzdDLE1BQU0sR0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBRTtZQUVuRSxPQUFPLGtCQUFrQixDQUFFLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1NBQzFDO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVDLGNBQWM7Ozs7O0lBRWhCLHFDQUFNOzs7OztJQUFOO1FBQ0UsSUFBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRztZQUNoQyxPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUVLLE9BQU8sR0FBTyxFQUFFOztZQUNoQixRQUFRLEdBQVEsSUFBSSxDQUFDLFFBQVE7UUFFbkMsSUFBSyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFHOztnQkFDekMsS0FBSyxHQUFrQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFFdkQsS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRzs7b0JBQ3BDLGFBQWEsR0FBa0IsS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBRTFELGFBQWEsQ0FBRSxDQUFDLENBQUUsR0FBRyxhQUFhLENBQUUsQ0FBQyxDQUFFLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxFQUFFLENBQUUsQ0FBQztnQkFDNUQsT0FBTyxDQUFFLGtCQUFrQixDQUFFLGFBQWEsQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFFLEdBQUcsa0JBQWtCLENBQUUsYUFBYSxDQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7YUFDaEc7U0FDRjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGdGQUFnRjtJQUNoRiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQiwwREFBMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxRCxrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUgsVUFDRSxJQUFZLEVBQ1osS0FBYSxFQUNiLE9BQXVCLEVBQ3ZCLElBQWEsRUFDYixNQUFlLEVBQ2YsTUFBZ0IsRUFDaEIsUUFBMkI7UUFFM0IsSUFBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRztZQUNoQyxPQUFPO1NBQ1I7O1lBRUcsWUFBWSxHQUFXLGtCQUFrQixDQUFFLElBQUksQ0FBRSxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBRSxLQUFLLENBQUUsR0FBRyxHQUFHO1FBRS9GLElBQUssT0FBTyxFQUFHO1lBQ2IsSUFBSyxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUc7O29CQUMzQixXQUFXLEdBQVMsSUFBSSxJQUFJLENBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFFO2dCQUUxRixZQUFZLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsWUFBWSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQzFEO1NBQ0Y7UUFFRCxJQUFLLElBQUksRUFBRztZQUNWLFlBQVksSUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUN0QztRQUVELElBQUssTUFBTSxFQUFHO1lBQ1osWUFBWSxJQUFJLFNBQVMsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQzFDO1FBRUQsSUFBSyxNQUFNLEVBQUc7WUFDWixZQUFZLElBQUksU0FBUyxDQUFDO1NBQzNCO1FBRUQsSUFBSyxRQUFRLEVBQUc7WUFDZCxZQUFZLElBQUksV0FBVyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7U0FDOUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7SUFDdEMsQ0FBQztJQUdELDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsK0JBQStCOzs7Ozs7Ozs7O0lBRS9CLHFDQUFNOzs7Ozs7Ozs7O0lBQU4sVUFBUSxJQUFZLEVBQUUsSUFBYSxFQUFFLE1BQWU7UUFDbEQsSUFBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRztZQUNoQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsK0JBQStCLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDaEYsQ0FBQztJQUVELDZCQUE2QjtJQUM3QixnQ0FBZ0M7Ozs7Ozs7O0lBRWhDLHdDQUFTOzs7Ozs7OztJQUFULFVBQVcsSUFBYSxFQUFFLE1BQWU7UUFDdkMsSUFBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRztZQUNoQyxPQUFPO1NBQ1I7O1lBRUssT0FBTyxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFFbEMsS0FBTSxJQUFNLFVBQVUsSUFBSSxPQUFPLEVBQUc7WUFDbEMsSUFBSyxPQUFPLENBQUMsY0FBYyxDQUFFLFVBQVUsQ0FBRSxFQUFHO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFFLENBQUM7YUFDekM7U0FDRjtJQUNILENBQUM7SUFHQywwQkFBMEI7SUFDMUIsb0JBQW9COzs7Ozs7OztJQUVkLDhDQUFlOzs7Ozs7OztJQUF2QixVQUF5QixJQUFZOztZQUM3QixXQUFXLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBRSx3Q0FBd0MsRUFBRSxNQUFNLENBQUU7UUFFNUYsT0FBTyxJQUFJLE1BQU0sQ0FBRSxNQUFNLEdBQUcsV0FBVyxHQUFHLFFBQVEsR0FBRyxXQUFXLEdBQUcsZ0JBQWdCLEVBQUUsR0FBRyxDQUFFLENBQUM7SUFDN0YsQ0FBQzs7Z0JBcktELFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBUUcsTUFBTSxTQUFFLFFBQVE7Z0JBYnNCLGNBQWMsdUJBZXBELE1BQU0sU0FBRSxXQUFXOzs7K0JBaEJ2QjtDQTBLQyxBQXRLRCxJQXNLQztTQW5LWSxvQkFBb0I7Ozs7OztJQUMvQixvREFBK0M7Ozs7O0lBTTlDLHdDQUF5Qzs7Ozs7SUFFekMsMENBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFBMQVRGT1JNX0lELCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2Fsc29mdENvb2tpZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50SXNBY2Nlc3NpYmxlOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgIC8vIFRoZSB0eXBlIGBEb2N1bWVudGAgbWF5IG5vdCBiZSB1c2VkIGhlcmUuIEFsdGhvdWdoIGEgZml4IGlzIG9uIGl0cyB3YXksXG4gICAvLyB3ZSB3aWxsIGdvIHdpdGggYGFueWAgZm9yIG5vdyB0byBzdXBwb3J0IEFuZ3VsYXIgMi40LnggcHJvamVjdHMuXG4gICAvLyBJc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTI2MzFcbiAgIC8vIEZpeDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzE0ODk0XG4gICBASW5qZWN0KCBET0NVTUVOVCApIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgIC8vIEdldCB0aGUgYFBMQVRGT1JNX0lEYCBzbyB3ZSBjYW4gY2hlY2sgaWYgd2UncmUgaW4gYSBicm93c2VyLlxuICAgQEluamVjdCggUExBVEZPUk1fSUQgKSBwcml2YXRlIHBsYXRmb3JtSWQ6IEluamVjdGlvblRva2VuPE9iamVjdD4sXG4gKSB7XG4gICB0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlID0gaXNQbGF0Zm9ybUJyb3dzZXIoIHRoaXMucGxhdGZvcm1JZCApO1xuIH1cblxuXG4gLy8gIEBwYXJhbSBuYW1lIENvb2tpZSBuYW1lXG4gLy8gIEByZXR1cm5zIHtib29sZWFufVxuIFxuIGNoZWNrKCBuYW1lOiBzdHJpbmcgKTogYm9vbGVhbiB7XG4gICBpZiAoICF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlICkge1xuICAgICByZXR1cm4gZmFsc2U7XG4gICB9XG5cbiAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoIG5hbWUgKTtcblxuICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSB0aGlzLmdldENvb2tpZVJlZ0V4cCggbmFtZSApO1xuICAgY29uc3QgZXhpc3RzOiBib29sZWFuID0gcmVnRXhwLnRlc3QoIHRoaXMuZG9jdW1lbnQuY29va2llICk7XG5cbiAgIHJldHVybiBleGlzdHM7XG4gfVxuXG5cbiAgIC8vIEBwYXJhbSBuYW1lIENvb2tpZSBuYW1lXG4gICAvLyBAcmV0dXJucyB7YW55fVxuXG4gZ2V0KCBuYW1lOiBzdHJpbmcgKTogc3RyaW5nIHtcbiAgIGlmICggdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSAmJiB0aGlzLmNoZWNrKCBuYW1lICkgKSB7XG4gICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoIG5hbWUgKTtcblxuICAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IHRoaXMuZ2V0Q29va2llUmVnRXhwKCBuYW1lICk7XG4gICAgIGNvbnN0IHJlc3VsdDogUmVnRXhwRXhlY0FycmF5ID0gcmVnRXhwLmV4ZWMoIHRoaXMuZG9jdW1lbnQuY29va2llICk7XG5cbiAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCggcmVzdWx0WyAxIF0gKTtcbiAgIH0gZWxzZSB7XG4gICAgIHJldHVybiAnJztcbiAgIH1cbiB9XG5cbiAgIC8vIEByZXR1cm5zIHt9XG5cbiBnZXRBbGwoKToge30ge1xuICAgaWYgKCAhdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSApIHtcbiAgICAgcmV0dXJuIHt9O1xuICAgfVxuXG4gICBjb25zdCBjb29raWVzOiB7fSA9IHt9O1xuICAgY29uc3QgZG9jdW1lbnQ6IGFueSA9IHRoaXMuZG9jdW1lbnQ7XG5cbiAgIGlmICggZG9jdW1lbnQuY29va2llICYmIGRvY3VtZW50LmNvb2tpZSAhPT0gJycgKSB7XG4gICAgIGNvbnN0IHNwbGl0OiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyBpICs9IDEgKSB7XG4gICAgICAgY29uc3QgY3VycmVudENvb2tpZTogQXJyYXk8c3RyaW5nPiA9IHNwbGl0WyBpIF0uc3BsaXQoJz0nKTtcblxuICAgICAgIGN1cnJlbnRDb29raWVbIDAgXSA9IGN1cnJlbnRDb29raWVbIDAgXS5yZXBsYWNlKCAvXiAvLCAnJyApO1xuICAgICAgIGNvb2tpZXNbIGRlY29kZVVSSUNvbXBvbmVudCggY3VycmVudENvb2tpZVsgMCBdICkgXSA9IGRlY29kZVVSSUNvbXBvbmVudCggY3VycmVudENvb2tpZVsgMSBdICk7XG4gICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIGNvb2tpZXM7XG4gfVxuXG4gLy8gIEBwYXJhbSBuYW1lICAgICBDb29raWUgbmFtZVxuIC8vICBAcGFyYW0gdmFsdWUgICAgQ29va2llIHZhbHVlXG4gLy8gIEBwYXJhbSBleHBpcmVzICBOdW1iZXIgb2YgZGF5cyB1bnRpbCB0aGUgY29va2llcyBleHBpcmVzIG9yIGFuIGFjdHVhbCBgRGF0ZWBcbiAvLyAgQHBhcmFtIHBhdGggICAgIENvb2tpZSBwYXRoXG4gLy8gIEBwYXJhbSBkb21haW4gICBDb29raWUgZG9tYWluXG4gLy8gIEBwYXJhbSBzZWN1cmUgICBTZWN1cmUgZmxhZ1xuIC8vICBAcGFyYW0gc2FtZVNpdGUgT1dBU1Agc2FtZXNpdGUgdG9rZW4gYExheGAgb3IgYFN0cmljdGBcblxuIHNldChcbiAgIG5hbWU6IHN0cmluZyxcbiAgIHZhbHVlOiBzdHJpbmcsXG4gICBleHBpcmVzPzogbnVtYmVyIHwgRGF0ZSxcbiAgIHBhdGg/OiBzdHJpbmcsXG4gICBkb21haW4/OiBzdHJpbmcsXG4gICBzZWN1cmU/OiBib29sZWFuLFxuICAgc2FtZVNpdGU/OiAnTGF4JyB8ICdTdHJpY3QnXG4gKTogdm9pZCB7XG4gICBpZiAoICF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlICkge1xuICAgICByZXR1cm47XG4gICB9XG5cbiAgIGxldCBjb29raWVTdHJpbmc6IHN0cmluZyA9IGVuY29kZVVSSUNvbXBvbmVudCggbmFtZSApICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KCB2YWx1ZSApICsgJzsnO1xuXG4gICBpZiAoIGV4cGlyZXMgKSB7XG4gICAgIGlmICggdHlwZW9mIGV4cGlyZXMgPT09ICdudW1iZXInICkge1xuICAgICAgIGNvbnN0IGRhdGVFeHBpcmVzOiBEYXRlID0gbmV3IERhdGUoIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDEwMDAgKiA2MCAqIDYwICogMjQgKTtcblxuICAgICAgIGNvb2tpZVN0cmluZyArPSAnZXhwaXJlcz0nICsgZGF0ZUV4cGlyZXMudG9VVENTdHJpbmcoKSArICc7JztcbiAgICAgfSBlbHNlIHtcbiAgICAgICBjb29raWVTdHJpbmcgKz0gJ2V4cGlyZXM9JyArIGV4cGlyZXMudG9VVENTdHJpbmcoKSArICc7JztcbiAgICAgfVxuICAgfVxuXG4gICBpZiAoIHBhdGggKSB7XG4gICAgIGNvb2tpZVN0cmluZyArPSAncGF0aD0nICsgcGF0aCArICc7JztcbiAgIH1cblxuICAgaWYgKCBkb21haW4gKSB7XG4gICAgIGNvb2tpZVN0cmluZyArPSAnZG9tYWluPScgKyBkb21haW4gKyAnOyc7XG4gICB9XG5cbiAgIGlmICggc2VjdXJlICkge1xuICAgICBjb29raWVTdHJpbmcgKz0gJ3NlY3VyZTsnO1xuICAgfVxuXG4gICBpZiAoIHNhbWVTaXRlICkge1xuICAgICBjb29raWVTdHJpbmcgKz0gJ3NhbWVTaXRlPScgKyBzYW1lU2l0ZSArICc7JztcbiAgIH1cblxuICAgdGhpcy5kb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XG4gfVxuXG5cbiAvLyAgQHBhcmFtIG5hbWUgICBDb29raWUgbmFtZVxuIC8vICBAcGFyYW0gcGF0aCAgIENvb2tpZSBwYXRoXG4gLy8gIEBwYXJhbSBkb21haW4gQ29va2llIGRvbWFpblxuIFxuIGRlbGV0ZSggbmFtZTogc3RyaW5nLCBwYXRoPzogc3RyaW5nLCBkb21haW4/OiBzdHJpbmcgKTogdm9pZCB7XG4gICBpZiAoICF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlICkge1xuICAgICByZXR1cm47XG4gICB9XG5cbiAgIHRoaXMuc2V0KCBuYW1lLCAnJywgbmV3IERhdGUoJ1RodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UJyksIHBhdGgsIGRvbWFpbiApO1xuIH1cblxuIC8vICBAcGFyYW0gcGF0aCAgIENvb2tpZSBwYXRoXG4gLy8gICBAcGFyYW0gZG9tYWluIENvb2tpZSBkb21haW5cblxuIGRlbGV0ZUFsbCggcGF0aD86IHN0cmluZywgZG9tYWluPzogc3RyaW5nICk6IHZvaWQge1xuICAgaWYgKCAhdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSApIHtcbiAgICAgcmV0dXJuO1xuICAgfVxuXG4gICBjb25zdCBjb29raWVzOiBhbnkgPSB0aGlzLmdldEFsbCgpO1xuXG4gICBmb3IgKCBjb25zdCBjb29raWVOYW1lIGluIGNvb2tpZXMgKSB7XG4gICAgIGlmICggY29va2llcy5oYXNPd25Qcm9wZXJ0eSggY29va2llTmFtZSApICkge1xuICAgICAgIHRoaXMuZGVsZXRlKCBjb29raWVOYW1lLCBwYXRoLCBkb21haW4gKTtcbiAgICAgfVxuICAgfVxuIH1cblxuXG4gICAvLyBAcGFyYW0gbmFtZSBDb29raWUgbmFtZVxuICAgLy8gQHJldHVybnMge1JlZ0V4cH1cblxuIHByaXZhdGUgZ2V0Q29va2llUmVnRXhwKCBuYW1lOiBzdHJpbmcgKTogUmVnRXhwIHtcbiAgIGNvbnN0IGVzY2FwZWROYW1lOiBzdHJpbmcgPSBuYW1lLnJlcGxhY2UoIC8oW1xcW1xcXVxce1xcfVxcKFxcKVxcfFxcPVxcO1xcK1xcP1xcLFxcLlxcKlxcXlxcJF0pL2lnLCAnXFxcXCQxJyApO1xuXG4gICByZXR1cm4gbmV3IFJlZ0V4cCggJyg/Ol4nICsgZXNjYXBlZE5hbWUgKyAnfDtcXFxccyonICsgZXNjYXBlZE5hbWUgKyAnKT0oLio/KSg/Ojt8JCknLCAnZycgKTtcbiB9XG59XG4iXX0=