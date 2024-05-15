"use strict";
(self["webpackChunklorax"] = self["webpackChunklorax"] || []).push([["src_app_help_Help_module_ts"],{

/***/ 76574:
/*!*********************************************!*\
  !*** ./src/app/help/Help-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpsRoutingModule": () => (/* binding */ HelpsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ 3068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.Contact
    },
    // {
    //   path: 'dashboard3',
    //   component: Dashboard3Component
    // }
];
class HelpsRoutingModule {
}
HelpsRoutingModule.ɵfac = function HelpsRoutingModule_Factory(t) { return new (t || HelpsRoutingModule)(); };
HelpsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HelpsRoutingModule });
HelpsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HelpsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 24657:
/*!*************************************!*\
  !*** ./src/app/help/Help.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpModule": () => (/* binding */ HelpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-gauge */ 83604);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-apexcharts */ 93239);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plotly.js-dist-min */ 79423);
/* harmony import */ var plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-plotly.js */ 40249);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _Help_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Help-routing.module */ 76574);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 3068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);























angular_plotly_js__WEBPACK_IMPORTED_MODULE_5__.PlotlyModule.plotlyjs = plotly_js_dist_min__WEBPACK_IMPORTED_MODULE_2__;
class HelpModule {
}
HelpModule.ɵfac = function HelpModule_Factory(t) { return new (t || HelpModule)(); };
HelpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HelpModule });
HelpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_Help_routing_module__WEBPACK_IMPORTED_MODULE_3__.HelpsRoutingModule,
        angular_plotly_js__WEBPACK_IMPORTED_MODULE_5__.PlotlyModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__.NgApexchartsModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_19__.NgxEchartsModule.forRoot({
            echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 84343))
        }),
        angular_gauge__WEBPACK_IMPORTED_MODULE_20__.GaugeModule.forRoot(),
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HelpModule, { declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.Contact], imports: [_Help_routing_module__WEBPACK_IMPORTED_MODULE_3__.HelpsRoutingModule,
        angular_plotly_js__WEBPACK_IMPORTED_MODULE_5__.PlotlyModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__.NgApexchartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_19__.NgxEchartsModule, angular_gauge__WEBPACK_IMPORTED_MODULE_20__.GaugeModule, _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 3068:
/*!***************************************************!*\
  !*** ./src/app/help/contact/contact.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class Contact {
    ngOnInit() {
        console.log("contact");
    }
}
Contact.ɵfac = function Contact_Factory(t) { return new (t || Contact)(); };
Contact.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Contact, selectors: [["app-contact"]], decls: 3, vars: 0, consts: [[1, "content"], [1, "container-fluid"]], template: function Contact_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " sds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_help_Help_module_ts.js.map