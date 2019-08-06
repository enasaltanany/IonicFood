(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipies-recipie-details-recipie-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipies/recipie-details/recipie-details.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipies/recipie-details/recipie-details.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/recipies\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Recipe Detail of {{loadedRecipe.title}}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onDeleteRecipe()\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col no-padding>\n        <ion-img [src]=\"loadedRecipe.imgUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 text-center>\n          {{loadedRecipe.title}}\n        </h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let ingredient of loadedRecipe.ingredients\">\n            {{ingredient}}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipies/recipie-details/recipie-details.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/recipies/recipie-details/recipie-details.module.ts ***!
  \********************************************************************/
/*! exports provided: RecipieDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipieDetailsPageModule", function() { return RecipieDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipie_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipie-details.page */ "./src/app/recipies/recipie-details/recipie-details.page.ts");







var routes = [
    {
        path: '',
        component: _recipie_details_page__WEBPACK_IMPORTED_MODULE_6__["RecipieDetailsPage"]
    }
];
var RecipieDetailsPageModule = /** @class */ (function () {
    function RecipieDetailsPageModule() {
    }
    RecipieDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipie_details_page__WEBPACK_IMPORTED_MODULE_6__["RecipieDetailsPage"]]
        })
    ], RecipieDetailsPageModule);
    return RecipieDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/recipies/recipie-details/recipie-details.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/recipies/recipie-details/recipie-details.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwaWVzL3JlY2lwaWUtZGV0YWlscy9yZWNpcGllLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipies/recipie-details/recipie-details.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipies/recipie-details/recipie-details.page.ts ***!
  \******************************************************************/
/*! exports provided: RecipieDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipieDetailsPage", function() { return RecipieDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipes.service */ "./src/app/recipies/recipes.service.ts");





var RecipieDetailsPage = /** @class */ (function () {
    function RecipieDetailsPage(activatedRoute, recipesService, router, alertController) {
        this.activatedRoute = activatedRoute;
        this.recipesService = recipesService;
        this.router = router;
        this.alertController = alertController;
    }
    RecipieDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('recipieId')) {
                return;
            }
            var recipieId = paramMap.get('recipieId');
            _this.loadedRecipe = _this.recipesService.getRecipe(recipieId);
        });
    };
    RecipieDetailsPage.prototype.onDeleteRecipe = function () {
        var _this = this;
        this.alertController.create({
            header: 'Are you sure?',
            message: 'Do you sure you want to delete the recipe ?!!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.recipesService.deleteRecipe(_this.loadedRecipe.id);
                        _this.router.navigate(['/recipies']);
                    }
                }
            ]
        })
            .then(function (alertResponse) {
            alertResponse.present();
        });
    };
    RecipieDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    RecipieDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipie-details',
            template: __webpack_require__(/*! raw-loader!./recipie-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipies/recipie-details/recipie-details.page.html"),
            styles: [__webpack_require__(/*! ./recipie-details.page.scss */ "./src/app/recipies/recipie-details/recipie-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RecipieDetailsPage);
    return RecipieDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipies-recipie-details-recipie-details-module-es5.js.map