(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "03uc":
/*!***********************************************************************************!*\
  !*** ./src/app/account/auth/steptwoverification/steptwoverification.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SteptwoverificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteptwoverificationComponent", function() { return SteptwoverificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_steptwoverification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./steptwoverification.component.html */ "vqCb");
/* harmony import */ var _steptwoverification_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./steptwoverification.component.scss */ "bC5j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");





let SteptwoverificationComponent = class SteptwoverificationComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
        /***
         * confirm otp
         */
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '80px',
                'height': '50px'
            }
        };
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
    }
};
SteptwoverificationComponent.ctorParameters = () => [];
SteptwoverificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-steptwoverification',
        template: _raw_loader_steptwoverification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_steptwoverification_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Step-Two-Verification Component
     */
], SteptwoverificationComponent);



/***/ }),

/***/ "09mk":
/*!*********************************************************************************!*\
  !*** ./src/app/account/auth/emailverification/emailverification.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbHZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "2bI7":
/*!*********************************************************!*\
  !*** ./src/app/account/auth/login/login.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "2lYz":
/*!*********************************************************************!*\
  !*** ./src/app/account/auth/recoverpwd1/recoverpwd1.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVycHdkMS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6UDk":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/lockscreen/lockscreen.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-10\">\n                <div class=\"text-center mb-5\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"font-size-15 text-muted mt-3\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n                <div class=\"card overflow-hidden\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4\">\n\n                                <div>\n                                    <h5>Lock screen</h5>\n                                    <p class=\"text-muted\">Enter your password to unlock the screen !</p>\n                                </div>\n\n                                <div class=\"mt-4 pt-3\">\n                                    <div class=\"user-thumb text-center mb-4\">\n                                        <img src=\"assets/images/users/avatar-1.jpg\"\n                                            class=\"rounded-circle img-thumbnail avatar-md\" alt=\"thumbnail\">\n                                        <h5 class=\"font-size-15 mt-3\">Thomas Ortiz</h5>\n                                    </div>\n                                    <form action=\"index.html\">\n\n                                        <div class=\"mb-3\">\n                                            <label for=\"userpassword\" class=\"fw-semibold\">Password</label>\n                                            <input type=\"password\" class=\"form-control\" id=\"userpassword\"\n                                                placeholder=\"Enter password\">\n                                        </div>\n\n                                        <div class=\"mt-4 text-end\">\n                                            <button class=\"btn btn-primary w-md waves-effect waves-light\"\n                                                type=\"submit\">Unlock</button>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4 bg-auth h-100 d-none d-lg-block\">\n                                <div class=\"bg-overlay\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Not you ? return <a routerLink=\"/account/login1\" class=\"fw-semibold text-decoration-underline\">\n                            Login\n                        </a> </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "8c9L":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/register1/register1.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-10\">\n                <div class=\"text-center mb-5\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"font-size-15 text-muted mt-3\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n                <div class=\"card overflow-hidden\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4\">\n\n                                <div>\n                                    <h5>Register account</h5>\n                                    <p class=\"text-muted\">Get your free Samply account now.</p>\n                                </div>\n\n                                <div class=\"mt-4 pt-3\">\n                                    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                                        <div class=\"mb-3\">\n                                            <label class=\"fw-semibold\" for=\"useremail\">Email</label>\n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n                                                id=\"useremail\" placeholder=\"Enter email\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mb-3\">\n                                            <label class=\"fw-semibold\" for=\"username\">Username</label>\n                                            <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                                                id=\"username\" placeholder=\"Enter username\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n                                            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.username.errors.required\">Username Name is required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mb-3\">\n                                            <label class=\"fw-semibold\" for=\"userpassword\">Password</label>\n                                            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                                id=\"userpassword\" placeholder=\"Enter password\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6\n                                                    characters</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mt-4 text-end\">\n                                            <button class=\"btn btn-primary w-md waves-effect waves-light\"\n                                                type=\"submit\">Register</button>\n                                        </div>\n\n                                        <div class=\"mt-4 text-center\">\n                                            <p class=\"mb-0 text-muted\">By registering you agree to the Samply <a\n                                                    href=\"javascript: void(0)\"\n                                                    class=\"text-primary fw-semibold text-decoration-underline\">Terms of\n                                                    Use</a></p>\n                                        </div>\n                                    </form>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4 bg-auth h-100 d-none d-lg-block\">\n                                <div class=\"bg-overlay\"></div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Already have an account ? <a routerLink=\"/account/login1\"\n                            class=\"fw-semibold text-decoration-underline\"> Login </a> </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "9OaD":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
  \*************************************************************************/
/*! exports provided: NgOtpInputModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function() { return NgOtpInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgOtpInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onKeyDown($event); })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onKeyUp($event, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
} }
function NgOtpInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
} }
class KeysPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'keys'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Config {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputComponent {
    /**
     * @param {?} keysPipe
     */
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
        }
        this.inputType = this.getInputType();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (/**
                 * @param {?} evt
                 * @return {?}
                 */
                (evt) => this.handlePaste(evt)));
                /** @type {?} */
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    /**
     * @param {?} event
     * @param {?} targetCode
     * @return {?}
     */
    ifKeyCode(event, targetCode) {
        /** @type {?} */
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyDown($event) {
        /** @type {?} */
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    /**
     * @param {?} $event
     * @param {?} inputIdx
     * @return {?}
     */
    onKeyUp($event, inputIdx) {
        /** @type {?} */
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        /** @type {?} */
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        /** @type {?} */
        const isBackspace = this.ifBackspaceOrDelete($event);
        if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
        }
        if (!$event.target.value) {
            return;
        }
        if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
        }
        this.rebuildValue();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    setSelected(eleId) {
        this.focusTo(eleId);
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ele.setSelectionRange(0, 1);
            }), 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifValidEntry(event) {
        /** @type {?} */
        const inp = String.fromCharCode(event.keyCode);
        /** @type {?} */
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    focusTo(eleId) {
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((/**
         * @param {?} c
         * @param {?} idx
         * @return {?}
         */
        (c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        }));
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            /** @type {?} */
            var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
            /** @type {?} */
            let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
            if (ele && ele.focus) {
                ele.focus();
            }
        }
        this.rebuildValue();
    }
    /**
     * @return {?}
     */
    rebuildValue() {
        /** @type {?} */
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            if (this.otpForm.controls[k].value) {
                val += this.otpForm.controls[k].value;
            }
        }));
        this.onInputChange.emit(val);
    }
    /**
     * @return {?}
     */
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handlePaste(e) {
        // Get pasted data via clipboard API
        /** @type {?} */
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            /** @type {?} */
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) { return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe)); };
NgOtpInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOtpInputComponent, selectors: [["ng-otp-input"]], inputs: { config: "config" }, outputs: { onInputChange: "onInputChange" }, decls: 1, vars: 1, consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]], template: function NgOtpInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]]; }, pipes: function () { return [KeysPipe]; }, styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"] });
/** @nocollapse */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
            }]
    }], function () { return [{ type: KeysPipe }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberOnlyDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NumberOnlyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumberOnlyDirective, selectors: [["", "numberOnly", ""]], inputs: { disabledNumberOnly: "disabledNumberOnly" } });
/** @nocollapse */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[numberOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputModule {
}
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) { return new (t || NgOtpInputModule)(); };
NgOtpInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgOtpInputModule });
NgOtpInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [KeysPipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, { declarations: function () { return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]; }, exports: function () { return [NgOtpInputComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-otp-input.js.map

/***/ }),

/***/ "EuvN":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/login/login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-10\">\n                <div class=\"text-center mb-5\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"font-size-15 text-muted mt-3\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n                <div class=\"card overflow-hidden\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4\">\n\n                                <div>\n                                    <h5>Welcome Back !</h5>\n                                    <p class=\"text-muted\">Sign in to continue to Samply.</p>\n                                </div>\n\n                                <div class=\"mt-4 pt-3\">\n                                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n                                        <div class=\"mb-3\">\n                                            <label for=\"email\" class=\"fw-semibold\">Email</label>\n                                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"email\"\n                                                placeholder=\"Enter email\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mb-3 mb-4\">\n                                            <label for=\"userpassword\" class=\"fw-semibold\">Password</label>\n                                            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                                id=\"userpassword\" placeholder=\"Enter password\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Password is required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row align-items-center\">\n                                            <div class=\"col-6\">\n                                                <div class=\"form-check\">\n                                                    <input type=\"checkbox\" class=\"form-check-input font-size-16\"\n                                                        id=\"remember-check\">\n                                                    <label class=\"form-check-label\" for=\"remember-check\">Remember\n                                                        me</label>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-6\">\n                                                <div class=\"text-end\">\n                                                    <button class=\"btn btn-primary w-md waves-effect waves-light\"\n                                                        type=\"submit\">Log In</button>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mt-4\">\n                                            <a routerLink=\"/account/recoverpwd\" class=\"text-muted\"><i\n                                                    class=\"mdi mdi-lock me-1\"></i> Forgot your password?</a>\n                                        </div>\n                                    </form>\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4 bg-auth h-100 d-none d-lg-block\">\n                                <div class=\"bg-overlay\"></div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Don't have an account ? <a routerLink=\"/account/register\"\n                            class=\"fw-semibold text-decoration-underline text-primary\"> Sign up </a> </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "GBDa":
/*!*******************************************************************!*\
  !*** ./src/app/account/auth/confirmmail/confirmmail.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmmailComponent", function() { return ConfirmmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirmmail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirmmail.component.html */ "aV1R");
/* harmony import */ var _confirmmail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmmail.component.scss */ "itEK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");





let ConfirmmailComponent = class ConfirmmailComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
    }
};
ConfirmmailComponent.ctorParameters = () => [];
ConfirmmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirmmail',
        template: _raw_loader_confirmmail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirmmail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Confirm-Mail Component
     */
], ConfirmmailComponent);



/***/ }),

/***/ "GMhe":
/*!*******************************************************!*\
  !*** ./src/app/account/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "EuvN");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "2bI7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/auth.service */ "7dP1");
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/authfake.service */ "DYii");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");











let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, authFackservice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
        // set the currenr year
        this.year = new Date().getFullYear();
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_10__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
        //Validation Set
        this.loginForm = this.formBuilder.group({
            email: ['admin@pichforest.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    /**
     * Form submit
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].defaultauth === 'firebase') {
                this.authenticationService.login(this.f.email.value, this.f.password.value).then((res) => {
                    this.router.navigate(['']);
                })
                    .catch((error) => {
                    this.error = error ? error : '';
                });
            }
            else {
                this.authFackservice.login(this.f.email.value, this.f.password.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                    .subscribe((data) => {
                    this.router.navigate(['']);
                }, (error) => {
                    this.error = error ? error : '';
                });
            }
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_8__["AuthfakeauthenticationService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Login Component
     */
], LoginComponent);



/***/ }),

/***/ "H3/V":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/recoverpwd/recoverpwd.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-10\">\n                <div class=\"text-center mb-5\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"font-size-15 text-muted mt-3\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n                <div class=\"card overflow-hidden\">\n                    <div class=\"row g-0\">\n\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4\">\n                                <div>\n                                    <h5>Reset Password</h5>\n                                    <p class=\"text-muted\">Re-Password with Samply.</p>\n                                </div>\n                                <div class=\"mt-4 pt-3\">\n                                    <div class=\"alert alert-success mb-4\" role=\"alert\">\n                                        Enter your Email and instructions will be sent to you!\n                                    </div>\n\n                                    <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\n                                        <div class=\"mb-3\">\n                                            <label class=\"fw-semibold\" for=\"useremail\">Email</label>\n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n                                                id=\"useremail\" placeholder=\"Enter email\"\n                                                [ngClass]=\"{'is-invalid': submitted && f.email.errors }\">\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mt-4 text-end\">\n                                            <button class=\"btn btn-primary w-md waves-effect waves-light\"\n                                                type=\"submit\">Reset</button>\n                                        </div>\n                                    </form>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4 bg-auth h-100 d-none d-lg-block\">\n                                <div class=\"bg-overlay\"></div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Remember It ? <a routerLink=\"/account/login\" class=\"fw-semibold text-decoration-underline\"> Login\n                        </a>\n                    </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "I/76":
/*!*************************************************************!*\
  !*** ./src/app/account/auth/register/register.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "ccOc");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "y54N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/auth.service */ "7dP1");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/user.service */ "f4AX");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, authenticationService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.submitted = false;
        this.successmsg = false;
        this.error = '';
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_8__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
        // Validation Set
        this.signupForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }
    /**
     * On submit form
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultauth === 'firebase') {
                this.authenticationService.register(this.f.email.value, this.f.password.value).then((res) => {
                    this.successmsg = true;
                    if (this.successmsg) {
                        this.router.navigate(['']);
                    }
                })
                    .catch((error) => {
                    this.error = error ? error : '';
                });
            }
            else {
                this.userService.register(this.signupForm.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
                    .subscribe((data) => {
                    this.successmsg = true;
                    if (this.successmsg) {
                        this.router.navigate(['/account/login']);
                    }
                }, (error) => {
                    this.error = error ? error : '';
                });
            }
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Register Component
     */
], RegisterComponent);



/***/ }),

/***/ "MuYK":
/*!***********************************************************!*\
  !*** ./src/app/account/auth/login1/login1.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbjEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "N6tO":
/*!*******************************************************************!*\
  !*** ./src/app/account/auth/lockscreen/lockscreen.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Nrc2NyZWVuLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "PgYE":
/*!*******************************************************************!*\
  !*** ./src/app/account/auth/recoverpwd/recoverpwd.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVycHdkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "XZzv":
/*!*****************************************************!*\
  !*** ./src/app/account/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "GMhe");
/* harmony import */ var _login1_login1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login1/login1.component */ "pg1/");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "I/76");
/* harmony import */ var _register1_register1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register1/register1.component */ "afIQ");
/* harmony import */ var _recoverpwd_recoverpwd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recoverpwd/recoverpwd.component */ "ruJu");
/* harmony import */ var _recoverpwd1_recoverpwd1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recoverpwd1/recoverpwd1.component */ "mSj3");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "umIM");
/* harmony import */ var _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirmmail/confirmmail.component */ "GBDa");
/* harmony import */ var _emailverification_emailverification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emailverification/emailverification.component */ "cUS1");
/* harmony import */ var _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./steptwoverification/steptwoverification.component */ "03uc");













const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'login1',
        component: _login1_login1_component__WEBPACK_IMPORTED_MODULE_4__["Login1Component"],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
    },
    {
        path: 'register1',
        component: _register1_register1_component__WEBPACK_IMPORTED_MODULE_6__["Register1Component"],
    },
    {
        path: 'recoverpwd',
        component: _recoverpwd_recoverpwd_component__WEBPACK_IMPORTED_MODULE_7__["RecoverpwdComponent"],
    },
    {
        path: 'recoverpwd1',
        component: _recoverpwd1_recoverpwd1_component__WEBPACK_IMPORTED_MODULE_8__["Recoverpwd1Component"],
    },
    {
        path: 'lockscreen',
        component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__["LockscreenComponent"],
    },
    {
        path: 'confirm-mail',
        component: _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmmailComponent"],
    },
    {
        path: 'email-verification',
        component: _emailverification_emailverification_component__WEBPACK_IMPORTED_MODULE_11__["EmailverificationComponent"],
    },
    {
        path: 'two-step-verification',
        component: _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_12__["SteptwoverificationComponent"],
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthRoutingModule);



/***/ }),

/***/ "aV1R":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/confirmmail/confirmmail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"text-center mb-5 text-muted\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"mt-3 font-size-15\">Responsive <strong>Bootstrap 5</strong> Admin Dashboard</p>\n                </div>\n            </div>\n        </div>\n        <!-- end row -->\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-8 col-lg-6 col-xl-5\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"p-2\">\n                            <div class=\"text-center\">\n                                <div class=\"avatar-md mx-auto\">\n                                    <div class=\"avatar-title rounded-circle bg-light\">\n                                        <i class=\"bx bx-mail-send h1 mb-0 text-primary\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"p-2 mt-4\">\n                                    <h4 class=\"fw-semibold\">Success !</h4>\n                                    <p class=\"text-muted\"><strong>All good!</strong> Your invoice was sent to your\n                                        email. You'll be notified when someone will open it.</p>\n                                    <div class=\"mt-4\">\n                                        <a routerLink=\"/\" class=\"btn btn-success\">Back to Home</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "afIQ":
/*!***************************************************************!*\
  !*** ./src/app/account/auth/register1/register1.component.ts ***!
  \***************************************************************/
/*! exports provided: Register1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register1Component", function() { return Register1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register1_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register1.component.html */ "8c9L");
/* harmony import */ var _register1_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register1.component.scss */ "teL+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");






let Register1Component = class Register1Component {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        // set the currenr year
        this.year = new Date().getFullYear();
        this.submitted = false;
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
    }
};
Register1Component.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
Register1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register1',
        template: _raw_loader_register1_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register1_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Register1 Component
     */
], Register1Component);



/***/ }),

/***/ "bC5j":
/*!*************************************************************************************!*\
  !*** ./src/app/account/auth/steptwoverification/steptwoverification.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwdHdvdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "cUS1":
/*!*******************************************************************************!*\
  !*** ./src/app/account/auth/emailverification/emailverification.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmailverificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverificationComponent", function() { return EmailverificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_emailverification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./emailverification.component.html */ "edGR");
/* harmony import */ var _emailverification_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emailverification.component.scss */ "09mk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");





let EmailverificationComponent = class EmailverificationComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
    }
};
EmailverificationComponent.ctorParameters = () => [];
EmailverificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-emailverification',
        template: _raw_loader_emailverification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_emailverification_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Email Verification Component
     */
], EmailverificationComponent);



/***/ }),

/***/ "ccOc":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/register/register.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-10\">\n                <div class=\"text-center mb-5\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"font-size-15 text-muted mt-3\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n                <div class=\"card overflow-hidden\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4\">\n\n                                <div>\n                                    <h5>Register account</h5>\n                                    <p class=\"text-muted\">Get your free Samply account now.</p>\n                                </div>\n\n                                <div class=\"mt-4 pt-3\">\n                                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n\n                                        <div class=\"mb-3\">\n                                            <label class=\"fw-semibold\" for=\"useremail\">Email</label>\n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\"\n                                                id=\"useremail\" placeholder=\"Enter email\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mb-3\">\n                                            <label class=\"fw-semibold\" for=\"username\">Username</label>\n                                            <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                                                id=\"username\" placeholder=\"Enter username\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n                                            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mb-3\">\n                                            <label class=\"fw-semibold\" for=\"userpassword\">Password</label>\n                                            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                                id=\"userpassword\" placeholder=\"Enter password\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mt-4 text-end\">\n                                            <button class=\"btn btn-primary w-md waves-effect waves-light\"\n                                                type=\"submit\">Register</button>\n                                        </div>\n\n                                        <div class=\"mt-4 text-center\">\n                                            <p class=\"mb-0 text-muted\">By registering you agree to the Samply <a\n                                                href=\"javascript: void(0)\"\n                                                    class=\"text-primary fw-semibold text-decoration-underline\">Terms of\n                                                    Use</a></p>\n                                        </div>\n                                    </form>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4 bg-auth h-100 d-none d-lg-block\">\n                                <div class=\"bg-overlay\"></div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Already have an account ? <a routerLink=\"/account/login\"\n                            class=\"fw-semibold text-decoration-underline\"> Login </a> </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "cnSs":
/*!*********************************************!*\
  !*** ./src/app/account/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "XZzv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "GMhe");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "I/76");
/* harmony import */ var _recoverpwd_recoverpwd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recoverpwd/recoverpwd.component */ "ruJu");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "umIM");
/* harmony import */ var _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirmmail/confirmmail.component */ "GBDa");
/* harmony import */ var _emailverification_emailverification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emailverification/emailverification.component */ "cUS1");
/* harmony import */ var _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./steptwoverification/steptwoverification.component */ "03uc");
/* harmony import */ var _login1_login1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login1/login1.component */ "pg1/");
/* harmony import */ var _register1_register1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register1/register1.component */ "afIQ");
/* harmony import */ var _recoverpwd1_recoverpwd1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recoverpwd1/recoverpwd1.component */ "mSj3");
















let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
            _recoverpwd_recoverpwd_component__WEBPACK_IMPORTED_MODULE_8__["RecoverpwdComponent"],
            _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__["LockscreenComponent"],
            _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmmailComponent"],
            _emailverification_emailverification_component__WEBPACK_IMPORTED_MODULE_11__["EmailverificationComponent"],
            _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_12__["SteptwoverificationComponent"],
            _login1_login1_component__WEBPACK_IMPORTED_MODULE_13__["Login1Component"],
            _register1_register1_component__WEBPACK_IMPORTED_MODULE_14__["Register1Component"],
            _recoverpwd1_recoverpwd1_component__WEBPACK_IMPORTED_MODULE_15__["Recoverpwd1Component"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_5__["NgOtpInputModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "edGR":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/emailverification/emailverification.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"text-center mb-5 text-muted\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"mt-3 font-size-15\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n            </div>\n        </div>\n        <!-- end row -->\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-8 col-lg-6 col-xl-5\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"p-2\">\n                            <div class=\"text-center\">\n\n                                <div class=\"avatar-md mx-auto\">\n                                    <div class=\"avatar-title rounded-circle bg-light\">\n                                        <i class=\"bx bxs-envelope h1 mb-0 text-primary\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"p-2 mt-4\">\n                                    <h4>Verify your email</h4>\n                                    <p class=\"text-muted\">We have sent you verification email <span\n                                            class=\"font-weight-semibold\">example@abc.com</span>, Please check it</p>\n                                    <div class=\"mt-4\">\n                                        <a routerLink=\"/\" class=\"btn btn-success w-md\">Verify email</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Did't receive an email ? <a routerLink=\"/account/email-verification\"\n                            class=\"fw-semibold text-primary text-decoration-underline\">\n                            Resend </a> </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "f4AX":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let UserProfileService = class UserProfileService {
    constructor(http) {
        this.http = http;
    }
    /***
     * Get All User
     */
    getAll() {
        return this.http.get(`api/users`);
    }
    /***
     * Facked User Register
     */
    register(user) {
        return this.http.post(`/users/register`, user);
    }
};
UserProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserProfileService);



/***/ }),

/***/ "itEK":
/*!*********************************************************************!*\
  !*** ./src/app/account/auth/confirmmail/confirmmail.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtbWFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "cnSs");





let AccountModule = class AccountModule {
};
AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"]
        ]
    })
], AccountModule);



/***/ }),

/***/ "mSj3":
/*!*******************************************************************!*\
  !*** ./src/app/account/auth/recoverpwd1/recoverpwd1.component.ts ***!
  \*******************************************************************/
/*! exports provided: Recoverpwd1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recoverpwd1Component", function() { return Recoverpwd1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recoverpwd1_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recoverpwd1.component.html */ "opz+");
/* harmony import */ var _recoverpwd1_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recoverpwd1.component.scss */ "2lYz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");






let Recoverpwd1Component = class Recoverpwd1Component {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        // set the currenr year
        this.year = new Date().getFullYear();
        this.submitted = false;
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
        this.recoverForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.recoverForm.controls; }
    onSubmit() {
        this.submitted = true;
    }
};
Recoverpwd1Component.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
Recoverpwd1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recoverpwd1',
        template: _raw_loader_recoverpwd1_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recoverpwd1_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Recover-Password1 Component
     */
], Recoverpwd1Component);



/***/ }),

/***/ "opz+":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/recoverpwd1/recoverpwd1.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-10\">\n                <div class=\"text-center mb-5\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"font-size-15 text-muted mt-3\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n                <div class=\"card overflow-hidden\">\n                    <div class=\"row g-0\">\n\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4\">\n                                <div>\n                                    <h5>Reset Password</h5>\n                                    <p class=\"text-muted\">Re-Password with Samply.</p>\n                                </div>\n                                <div class=\"mt-4 pt-3\">\n                                    <div class=\"alert alert-success mb-4\" role=\"alert\">\n                                        Enter your Email and instructions will be sent to you!\n                                    </div>\n                                    <form [formGroup]=\"recoverForm\" (ngSubmit)=\"onSubmit()\">\n                                        <div class=\"mb-3\">\n                                            <label class=\"fw-semibold\" for=\"useremail\">Email</label>\n                                            <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"useremail\"\n                                                placeholder=\"Enter email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                                                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                                                </div>\n                                        </div>\n\n                                        <div class=\"mt-4 text-end\">\n                                            <button class=\"btn btn-primary w-md waves-effect waves-light\"\n                                                type=\"submit\">Reset</button>\n                                        </div>\n                                    </form>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4 bg-auth h-100 d-none d-lg-block\">\n                                <div class=\"bg-overlay\"></div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Remember It ? <a routerLink=\"/account/login1\" class=\"fw-semibold text-decoration-underline\">\n                            Login\n                        </a>\n                    </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "pg1/":
/*!*********************************************************!*\
  !*** ./src/app/account/auth/login1/login1.component.ts ***!
  \*********************************************************/
/*! exports provided: Login1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1Component", function() { return Login1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login1_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login1.component.html */ "wL+d");
/* harmony import */ var _login1_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login1.component.scss */ "MuYK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");






let Login1Component = class Login1Component {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        // set the currenr year
        this.year = new Date().getFullYear();
        this.submitted = false;
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
        //Validation Set
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    /**
    * Bootsrap validation form submit method
    */
    onSubmit() {
        this.submitted = true;
    }
};
Login1Component.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
Login1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login1',
        template: _raw_loader_login1_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login1_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Login1 Component
     */
], Login1Component);



/***/ }),

/***/ "ruJu":
/*!*****************************************************************!*\
  !*** ./src/app/account/auth/recoverpwd/recoverpwd.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecoverpwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverpwdComponent", function() { return RecoverpwdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recoverpwd_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recoverpwd.component.html */ "H3/V");
/* harmony import */ var _recoverpwd_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recoverpwd.component.scss */ "PgYE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/auth.service */ "7dP1");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");








let RecoverpwdComponent = class RecoverpwdComponent {
    constructor(formBuilder, authenticationService) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        // set the currenr year
        this.year = new Date().getFullYear();
        this.submitted = false;
        this.error = '';
        this.success = '';
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
        //Validation set
        this.resetForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.resetForm.controls; }
    /**
     * On submit form
     */
    onSubmit() {
        this.success = '';
        this.submitted = true;
        // stop here if form is invalid
        if (this.resetForm.invalid) {
            return;
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultauth === 'firebase') {
            this.authenticationService.resetPassword(this.f.email.value)
                .catch(error => {
                this.error = error ? error : '';
            });
        }
    }
};
RecoverpwdComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
RecoverpwdComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recoverpwd',
        template: _raw_loader_recoverpwd_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recoverpwd_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Recover-Password Component
     */
], RecoverpwdComponent);



/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    { path: 'auth', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "cnSs")).then(m => m.AuthModule) }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountRoutingModule);



/***/ }),

/***/ "teL+":
/*!*****************************************************************!*\
  !*** ./src/app/account/auth/register1/register1.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RlcjEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "umIM":
/*!*****************************************************************!*\
  !*** ./src/app/account/auth/lockscreen/lockscreen.component.ts ***!
  \*****************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lockscreen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lockscreen.component.html */ "6UDk");
/* harmony import */ var _lockscreen_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lockscreen.component.scss */ "N6tO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/layouts.model */ "pmu5");





let LockscreenComponent = class LockscreenComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        this.layout_mode = _layouts_layouts_model__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_MODE"];
        if (this.layout_mode === 'dark') {
            document.body.setAttribute("data-layout-mode", "dark");
        }
    }
};
LockscreenComponent.ctorParameters = () => [];
LockscreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lockscreen',
        template: _raw_loader_lockscreen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lockscreen_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * Lock-Screen Component
     */
], LockscreenComponent);



/***/ }),

/***/ "vqCb":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/steptwoverification/steptwoverification.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"text-center mb-5 text-muted\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"font-size-15 text-muted mt-3\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n            </div>\n        </div>\n        <!-- end row -->\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-8 col-lg-6 col-xl-5\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"p-2\">\n                            <div class=\"text-center\">\n                                <div class=\"avatar-md mx-auto\">\n                                    <div class=\"avatar-title rounded-circle bg-light\">\n                                        <i class=\"bx bxs-envelope h1 mb-0 text-primary\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"p-2 mt-4\">\n                                    <h4>Verify your email</h4>\n                                    <p class=\"mb-5 text-muted\">Please enter the 4 digit code sent to <span\n                                            class=\"font-weight-semibold\">example@abc.com</span></p>\n                                    <form>\n                                        <ng-otp-input [config]=\"config\"></ng-otp-input>\n                                    </form>\n\n                                    <div class=\"mt-4\">\n                                        <a routerLink=\"/\" class=\"btn btn-success w-md\">Confirm</a>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Did't receive a code ? <a routerLink=\"/account/two-step-verification\"\n                            class=\"fw-semibold text-decoration-underline text-primary\">\n                            Resend </a> </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "wL+d":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/auth/login1/login1.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"account-pages my-5 pt-sm-5\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-10\">\n                <div class=\"text-center mb-5\">\n                    <a routerLink=\"/\" class=\"auth-logo\">\n                        <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"28\" class=\"auth-logo-dark\">\n                        <img src=\"assets/images/logo-light.png\" alt=\"\" height=\"28\" class=\"auth-logo-light\">\n                    </a>\n                    <p class=\"font-size-15 text-muted mt-3\">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>\n                </div>\n                <div class=\"card overflow-hidden\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4\">\n\n                                <div>\n                                    <h5>Welcome Back !</h5>\n                                    <p class=\"text-muted\">Sign in to continue to Samply.</p>\n                                </div>\n\n                                <div class=\"mt-4 pt-3\">\n                                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                                        <div class=\"mb-3\">\n                                            <label for=\"email\" class=\"fw-semibold\">Email</label>\n                                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"email\"\n                                                placeholder=\"Enter email\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mb-3 mb-4\">\n                                            <label for=\"userpassword\" class=\"fw-semibold\">Password</label>\n                                            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                                id=\"userpassword\" placeholder=\"Enter password\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Password is required</div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row align-items-center\">\n                                            <div class=\"col-6\">\n                                                <div class=\"form-check\">\n                                                    <input type=\"checkbox\" class=\"form-check-input font-size-16\"\n                                                        id=\"remember-check\">\n                                                    <label class=\"form-check-label\" for=\"remember-check\">Remember\n                                                        me</label>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-6\">\n                                                <div class=\"text-end\">\n                                                    <button class=\"btn btn-primary w-md waves-effect waves-light\"\n                                                        type=\"submit\">Log In</button>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"mt-4\">\n                                            <a routerLink=\"/account/recoverpwd\" class=\"text-muted\"><i\n                                                    class=\"mdi mdi-lock me-1\"></i> Forgot your password?</a>\n                                        </div>\n                                    </form>\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"col-lg-6\">\n                            <div class=\"p-lg-5 p-4 bg-auth h-100 d-none d-lg-block\">\n                                <div class=\"bg-overlay\"></div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- end card -->\n                <div class=\"mt-5 text-center\">\n                    <p>Don't have an account ? <a routerLink=\"/account/register1\"\n                            class=\"fw-semibold text-decoration-underline text-primary\"> Sign up </a> </p>\n                    <p>© {{year}} <b>Samply</b>. Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Pichforest\n                    </p>\n                </div>\n            </div>\n            <!-- end col -->\n        </div>\n        <!-- end row -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end account page -->");

/***/ }),

/***/ "y54N":
/*!***************************************************************!*\
  !*** ./src/app/account/auth/register/register.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map