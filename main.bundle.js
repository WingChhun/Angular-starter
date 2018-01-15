webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <span class=\"text-center\">\n    <h1>{{portfolio.firstName + ' ' + portfolio.middleName[0] + '.' + portfolio.lastName}}</h1>\n    <h2 class=\"subHeading\">{{portfolio.subHeading}}</h2>\n    <img src=\"../assets/img/profile.png\" class=\"rounded-circle mx-auto d-block smallerImg\">\n\n  </span>\n\n  <div class=\"row justify-content-center\">\n    <a [href]=\"social.link\" class=\"p-2\" target=\"blank\" *ngFor=\"let social of portfolio.socialMedia\">\n      <i [style.color]=\"social.color\" [class]=\"social.icon\"></i>\n\n    </a>\n\n  </div>\n  <div>\n    <h3>\n\n      <i (click)=\"toggleOpen('logOpen')\" *ngIf=\"logOpen; else logExpanded\" class=\"fa fa-plus\"></i>\n      <ng-template #logExpanded>\n        <i (click)=\"toggleOpen('logOpen')\" class=\"fa fa-minus\"></i>\n      </ng-template>\n      Changelog\n    </h3>\n    <p class=\"description\">I have been studying hard as a developer, here are some of the highlights:</p>\n    <div *ngIf='!logOpen'[@fadeInOut]>\n      <ul>\n        <li *ngFor=\"let change of portfolio.changeLog\" [ngStyle]=\"{'color':change.color}\" (mouseEnter)=\"change.showDetails = true;\"\n          (mouseLeave)=\"change.showDetails=false;\">\n          <div>{{change.month + ' - ' + change.year}}</div>\n          <div>{{change.highlight + ' - ' + change.year}}</div>\n          <div *ngIf=\"change.showDetails\" class=\"changeLogDetails\">\n            {{change.details}}\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n\n  <h3>\n    <i class=\"fa fa-plus\" *ngIf=\"updateOpen; else updateExpanded\" (click)=\"toggleOpen('updateOpen')\"></i>\n    <ng-template #updateExpanded>\n      <i class=\"fa fa-minus\" (click)=\"toggleOpen('updateOpen')\"></i>\n    </ng-template>\n    Updates/Releases\n  </h3>\n  <p class = \"description\">Some news that I've been apart of</p>\n  <div *ngIf=\"!updateOpen\" [@fadeInOut]>\n    <ul>\n      <li class=\"liUpdates pt-3\" *ngFor=\"let update of portfolio.updates\">\n        <a [href]='update.link' class=\"updates\" target=\"blank\">\n          {{update.description}}\n        </a>\n      </li>\n    </ul>\n    <div>\n      <h3>\n        <i class=\"fa fa-plus\" *ngIf=\"bioOpen; else bioExpanded\" (click)=\"toggleOpen('bioOpen')\"></i>\n        <ng-template #bioExpanded>\n          <i class=\"fa fa-minus\" (click)=\"toggleOpen('bioOpen')\"></i>\n        </ng-template>\n        Speaker Bio\n      </h3> <p class = \"description\">Just a little more info about me and what I've been up to.</p>\n      <div *ngIf = '!bioOpen' class  =\"p-5 mb-5 speakerBio\" [@fadeInOut]>\n{{portfolio.speakerBio}}\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.logOpen = true;
        this.updateOpen = true;
        this.bioOpen = true; //title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        //target portfolio item
        this.portfolio = {
            firstName: "James",
            middleName: "Derric",
            lastName: "Chhun",
            subHeading: "Web Developer | Student",
            socialMedia: [{
                    icon: "fa fa-linkedin fa-2x",
                    link: "www.facebook.com",
                    color: "#0077B5"
                }, {
                    icon: "fa fa-github fa-2x",
                    link: "www.facebook.com",
                    color: "#6e5494"
                }],
            introduction: "Hello, I'm James Chhun and I am a Web Developer and Student based in San Diego.",
            changeLog: [{
                    color: "#6e5494",
                    month: "11",
                    year: 2017,
                    highlight: "Turned 21",
                    details: "Legit old now"
                }, {
                    color: "#6e5494",
                    month: "11",
                    year: 2017,
                    highlight: "Turned 21",
                    details: "Legit old now"
                }, {
                    color: "#6e5494",
                    month: "11",
                    year: 2017,
                    highlight: "Turned 21",
                    details: "Legit old now"
                }],
            updates: [{
                    description: "daffasfsa",
                    link: "facebook.com"
                }, {
                    description: "daffasfsa",
                    link: "facebook.com"
                }, {
                    description: "daffasfsa",
                    link: "facebook.com"
                }],
            speakerBio: "James is a developer"
        };
    };
    AppComponent.prototype.toggleOpen = function (valueToToggle) {
        switch (valueToToggle) {
            case 'logOpen':
                this.logOpen = !this.logOpen;
                break;
            case 'updateOpen':
                this.updateOpen = !this.updateOpen;
                break;
            case 'bioOpen':
                this.bioOpen = !this.bioOpen;
                break;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* trigger */])('fadeInOut', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* style */])({
                            opacity: 0
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* style */])({
                            opacity: 1
                        }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* transition */])('* => void', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* style */])({
                            opacity: 0
                        }))])
                ])]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map