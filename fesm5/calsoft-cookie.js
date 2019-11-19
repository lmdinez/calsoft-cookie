import { Injectable, Inject, InjectionToken, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/calsoft-cookie.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ CalsoftCookieService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CalsoftCookieService_Factory() { return new CalsoftCookieService(ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID)); }, token: CalsoftCookieService, providedIn: "root" });
    return CalsoftCookieService;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/calsoft-cookie.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalsoftCookieComponent = /** @class */ (function () {
    function CalsoftCookieComponent() {
    }
    /**
     * @return {?}
     */
    CalsoftCookieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CalsoftCookieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-calsoft-cookie',
                    template: "\n    <p>\n      calsoft-cookie works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CalsoftCookieComponent.ctorParameters = function () { return []; };
    return CalsoftCookieComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/calsoft-cookie.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalsoftCookieModule = /** @class */ (function () {
    function CalsoftCookieModule() {
    }
    CalsoftCookieModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CalsoftCookieComponent],
                    imports: [],
                    exports: [CalsoftCookieComponent]
                },] }
    ];
    return CalsoftCookieModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: calsoft-cookie.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CalsoftCookieComponent, CalsoftCookieModule, CalsoftCookieService };
//# sourceMappingURL=calsoft-cookie.js.map
