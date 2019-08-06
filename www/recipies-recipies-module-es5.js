(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipies-recipies-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipies/recipie-item/recipie-item.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipies/recipie-item/recipie-item.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item  [routerLink]=\"['./' ,recipieItem.id]\">\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recipieItem.imgUrl\"></ion-img>\n  </ion-avatar>\n  <ion-label>\n    {{recipieItem.title}}\n  </ion-label>\n</ion-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipies/recipies.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipies/recipies.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>Recipies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n      <app-recipie-item *ngFor = \"let recipe of recipies\" [recipieItem]= \"recipe\"></app-recipie-item>\n    </ion-list>\n</ion-content>\n "

/***/ }),

/***/ "./src/app/recipies/recipie-item/recipie-item.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/recipies/recipie-item/recipie-item.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwaWVzL3JlY2lwaWUtaXRlbS9yZWNpcGllLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipies/recipie-item/recipie-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/recipies/recipie-item/recipie-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecipieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipieItemComponent", function() { return RecipieItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipieItemComponent = /** @class */ (function () {
    function RecipieItemComponent() {
    }
    RecipieItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipieItemComponent.prototype, "recipieItem", void 0);
    RecipieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipie-item',
            template: __webpack_require__(/*! raw-loader!./recipie-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipies/recipie-item/recipie-item.component.html"),
            styles: [__webpack_require__(/*! ./recipie-item.component.scss */ "./src/app/recipies/recipie-item/recipie-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipieItemComponent);
    return RecipieItemComponent;
}());



/***/ }),

/***/ "./src/app/recipies/recipies.module.ts":
/*!*********************************************!*\
  !*** ./src/app/recipies/recipies.module.ts ***!
  \*********************************************/
/*! exports provided: RecipiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipiesPageModule", function() { return RecipiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipies.page */ "./src/app/recipies/recipies.page.ts");
/* harmony import */ var _recipie_item_recipie_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipie-item/recipie-item.component */ "./src/app/recipies/recipie-item/recipie-item.component.ts");








var routes = [
    {
        path: '',
        component: _recipies_page__WEBPACK_IMPORTED_MODULE_6__["RecipiesPage"]
    }
];
var RecipiesPageModule = /** @class */ (function () {
    function RecipiesPageModule() {
    }
    RecipiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipies_page__WEBPACK_IMPORTED_MODULE_6__["RecipiesPage"], _recipie_item_recipie_item_component__WEBPACK_IMPORTED_MODULE_7__["RecipieItemComponent"]]
        })
    ], RecipiesPageModule);
    return RecipiesPageModule;
}());



/***/ }),

/***/ "./src/app/recipies/recipies.page.scss":
/*!*********************************************!*\
  !*** ./src/app/recipies/recipies.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwaWVzL3JlY2lwaWVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recipies/recipies.page.ts":
/*!*******************************************!*\
  !*** ./src/app/recipies/recipies.page.ts ***!
  \*******************************************/
/*! exports provided: RecipiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipiesPage", function() { return RecipiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.service */ "./src/app/recipies/recipes.service.ts");



var RecipiesPage = /** @class */ (function () {
    function RecipiesPage(recipesService) {
        this.recipesService = recipesService;
    }
    RecipiesPage.prototype.ngOnInit = function () {
        this.recipies = this.recipesService.getAllRecipes();
    };
    RecipiesPage.ctorParameters = function () { return [
        { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"] }
    ]; };
    RecipiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipies',
            template: __webpack_require__(/*! raw-loader!./recipies.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipies/recipies.page.html"),
            styles: [__webpack_require__(/*! ./recipies.page.scss */ "./src/app/recipies/recipies.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]])
    ], RecipiesPage);
    return RecipiesPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipies-recipies-module-es5.js.map