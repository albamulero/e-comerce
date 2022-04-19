(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'email2';
    }
    leerMas() {
        alert("LEER MAS");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 448, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], [1, "pagina_principal_1"], ["src", "../assets/img/HS_Logo_white_3c_RZ.png", "alt", "logo_white", 1, "logo_white"], ["id", "titulo_1"], ["id", "descripcion_1"], [1, "hexagonos"], [1, "hexagono"], [1, "hexagono-content"], [1, "bi", "bi-emoji-smile"], [1, "bi", "bi-heart"], [1, "btn", "btn_demo"], [1, "pagina_principal_2"], ["id", "titulo_2"], ["id", "descripcion_2"], ["src", "../assets/img/HS_Logo_black_3c_RZ.png", "alt", "logo_black", 1, "logo_black"], [1, "pagina_principal_3"], ["id", "titulo_3"], ["id", "descripcion_3"], [1, "hexagono-content", "hexagono-hover", "ng-"], [1, "bi", "bi-send"], ["id", "hex_1", "click", "Modificar_texto()"], [1, "pagina_principal_4"], ["id", "titulo_4"], [1, "accordion", "accordion-item"], [1, "accordion-item"], ["id", "acordeon_1", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapse_1", "aria-expanded", "false", "aria-controls", "collapse_1", 1, "accordion-button", "collapsed"], ["id", "collapse_1", "aria-labelledby", "acordeon_1", 1, "accordion-collapse", "collapse"], [1, "accordeon-body"], ["id", "acordeon_2", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapse_2", "aria-expanded", "false", "aria-controls", "collapse_2", 1, "accordion-button", "collapsed"], ["id", "collapse_2", "aria-labelledby", "acordeon_2", 1, "accordion-collapse", "collapse"], ["id", "acordeon_3", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapse_3", "aria-expanded", "false", "aria-controls", "collapse_3", 1, "accordion-button", "collapsed"], ["id", "collapse_3", "aria-labelledby", "acordeon_3", 1, "accordon-collapse", "collapse"], ["id", "acordeon_4", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapse_4", "aria-expanded", "false", "aria-controls", "collapse_4", 1, "accordion-button", "collapsed"], ["id", "collapse_4", "aria-labelledby", "acordeon_4", 1, "accordion-collapse", "collapse"], ["id", "acordeon_5", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapse_5", "aria-expanded", "false", "aria-controls", "collapse_5", 1, "accordion-button", "collapsed"], ["id", "collapse_5", "aria-labelledby", "acordeon_5", 1, "accordion-collapse", "collapse"], [1, "pagina_principal_5"], ["id", "titulo_5"], [1, "row", "g-3"], [1, "list-group", "col-md-4"], [1, "list-group-item", "titulo-lista"], [1, "list-group-item", "precio_lista"], ["id", "subtitulo_5"], [1, "list-group-item"], [1, "bi", "bi-check"], [1, "bi", "bi-x-circle"], [1, "pagina_principal_6"], ["id", "titulo_6"], ["id", "descripcion_6"], ["src", "../assets/img/Hornetsecurity_Partnerlogos_EXCELLENCE2019_EXCELLENCE_PARTNER.jpg", "alt", "hornetsecurity", 1, "hornetsecurity"], [1, "pagina_principal_8"], ["id", "titulo_8"], [1, "formulario"], ["id", "mauticform_wrapper_contactosmailshied", 1, "mauticform_wrapper"], ["autocomplete", "false", "role", "form", "method", "post", "action", "http://mautic.mailshield.com.mx/form/submit?formId=3", "id", "mauticform_contactosmailshied", "data-mautic-form", "contactosmailshied", "enctype", "multipart/form-data"], ["id", "mauticform_contactosmailshied_error", 1, "mauticform-error"], ["id", "mauticform_contactosmailshied_message", 1, "mauticform-message"], [1, "mauticform-innerform"], ["data-mautic-form-page", "1", 1, "mauticform-page-wrapper", "mauticform-page-1"], ["id", "mauticform_contactosmailshied_f_name", "data-validate", "f_name", "data-validation-type", "text", 1, "mauticform-row", "mauticform-text", "mauticform-field-1", "mauticform-required"], ["id", "mauticform_label_contactosmailshied_f_name", "for", "mauticform_input_contactosmailshied_f_name", 1, "mauticform-label"], ["id", "mauticform_input_contactosmailshied_f_name", "name", "mauticform[f_name]", "value", "", "placeholder", "Nombre", "type", "text", 1, "mauticform-input"], [1, "mauticform-errormsg", 2, "display", "none"], ["id", "mauticform_contactosmailshied_email1", "data-validate", "email1", "data-validation-type", "email", 1, "mauticform-row", "mauticform-email", "mauticform-field-2", "mauticform-required"], ["id", "mauticform_label_contactosmailshied_email1", "for", "mauticform_input_contactosmailshied_email1", 1, "mauticform-label"], ["id", "mauticform_input_contactosmailshied_email1", "name", "mauticform[email1]", "value", "", "placeholder", "Correo electronico", "type", "email", 1, "mauticform-input"], ["id", "mauticform_contactosmailshied_phone", "data-validate", "phone", "data-validation-type", "tel", 1, "mauticform-row", "mauticform-tel", "mauticform-field-3", "mauticform-required"], ["id", "mauticform_label_contactosmailshied_phone", "for", "mauticform_input_contactosmailshied_phone", 1, "mauticform-label"], ["id", "mauticform_input_contactosmailshied_phone", "name", "mauticform[phone]", "value", "", "type", "tel", 1, "mauticform-input"], ["id", "mauticform_contactosmailshied_f_message", "data-validate", "f_message", "data-validation-type", "textarea", 1, "mauticform-row", "mauticform-text", "mauticform-field-4", "mauticform-required"], ["id", "mauticform_label_contactosmailshied_f_message", "for", "mauticform_input_contactosmailshied_f_message", 1, "mauticform-label"], ["id", "mauticform_input_contactosmailshied_f_message", "name", "mauticform[f_message]", 1, "mauticform-textarea"], ["id", "mauticform_contactosmailshied_submit", 1, "mauticform-row", "mauticform-button-wrapper", "mauticform-field-5"], ["type", "submit", "name", "mauticform[submit]", "id", "mauticform_input_contactosmailshied_submit", "value", "", 1, "mauticform-button", "btn", "btn-default"], ["type", "hidden", "name", "mauticform[formId]", "id", "mauticform_contactosmailshied_id", "value", "3"], ["type", "hidden", "name", "mauticform[return]", "id", "mauticform_contactosmailshied_return", "value", ""], ["type", "hidden", "name", "mauticform[formName]", "id", "mauticform_contactosmailshied_name", "value", "contactosmailshied"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Mailshield: Seguridad En Su Correo Empresarial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mailshield es la soluci\u00F3n n\u00FAmero uno en Latinoam\u00E9rica para seguridad en correos corporativos para toda su organizaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ofrecemos protecci\u00F3n contra spam y malwares en tus cuentas de correos alojadas en Microsoft 365, Gmail, y otros servicios de correo corporativo. Contamos con el encriptado, y backup de tus correos y archivos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Detecci\u00F3n de Spam y Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Backup Automatizado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mecanismos IA detector de ataques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Protecci\u00F3n para Endpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Solicita Una Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mailshield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " M\u00E9xico actualmete ocupa el primer lugar de intentos de ataques inform\u00E1ticos en Latinoam\u00E9rica, contado con un 67% de ellos. Los ataques a la seguridad corporativa son constantes, y cada vez son m\u00E1s las empresas que est\u00E1n sufriendo ante la vulnerabilidad en su seguridad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Nuestra soluci\u00F3n para cuentas de correo corporativas, brindan seguridad, constantes revisiones para eliminar amenazas y las opciones para acceder a toda tu informaci\u00F3n encriptada de froma r\u00E1pida y segura. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Caracter\u00EDstiscas de Mailshield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Nuetra soluci\u00F3n en alianza con nuestro partner Hornet Segurity brinda una protecci\u00F3n ideal para su organizaci\u00F3n en cuanto a seguridad y backup en el correo empresarial. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Protecci\u00F3n de Spam y Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Encriptaci\u00F3n de Correos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Protecci\u00F3n Ataques Forzdos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Archivado de Correo en la Nube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Continuidad de Correo ante Fallas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Backup y Recuperai\u00F3n de Datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Firma Profesional y Legal de Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u00BFPor qu\u00E9 contar con seguridad en tu correo empresarial?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "+ Razones de auditoria y archivado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Los correos electr\u00F3nicos de las empresas deben archivarse durante un determinado per\u00EDodo y estar disponibles para que las autoridades componentes los inspeccionen en caso de investigaciones o auditor\u00EDas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "+ Evitar caidas del servidor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Ante fallos del sistemas o servidores pude afectar directamente al flujo de correos corporativos lo que conlleva a p\u00E9rdidas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "+ Evitar Vulnerabilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " El spam es la forma m\u00E1s intrusiva para que los ciberdelicuentes introduzcan malware y virus en los sistemas inform\u00E1ticos de la empresas. A su vez, estp genera una enorme cantidad de correo no deseado para tu correo, por lo cual es m\u00E1s facil ser vulnerable a un ciber ataque por esta v\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "+ Protecci\u00F3n de ataques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Los ataques combinados utiliza diferentes tipos de malware simult\u00E1neamente. Virus, spayware, spam y phishing se combinan en un ataque por medio de correo electr\u00F3nico. M\u00E9xico es el epicentro de estos ataques con un 67% del total en Latinoam\u00E9rica. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "+ Protecci\u00F3n de informaci\u00F3n confidencial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Los correos corporativos contienen informaci\u00F3n valiosa y confidencial, que de ser interpretada, podr\u00EDa generar un gran peligro. Por ello la necesidad de una manera de encrytar dichos correos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "section", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Total Protection For Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "$2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "small", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "/por cuenta al mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Analisis en tiempo real del flujo de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Informaci\u00F3n de estado y encriptaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Manejo informal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Control de contenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Funciones de filtro ampliadas y regulaciones de filtro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Protecci\u00F3n de Spam y Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Cree una lista negra y blanca con un solo clic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Control centralizado de las firmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Descargo de responsabilidad estandarizado y conforme a la leyaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Cifrado global SMIME / PGP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Encriptacion forzada con la ayuda de Websafe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Archivado de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Archivado por 10 a\u00F1os de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Acceso permanente al archivo de correo electronico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Busqueda de datos indexados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Analisis Forense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "ATP Sandboxing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Control de malware de URL's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Informes de amnezada a tiempo real");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Alertas de Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Liminaci\u00F3n de Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Servicio de continuidad de correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Copias de seguridad automatizadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Recuperaci\u00F3n granular de archivos o elementos de correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Copia de seguridad y recuperaci\u00F3n de endpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Auditoria de la actividad de las cuenras de copia de seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Total Protection Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "$4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "small", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "/por cuenta al mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Analisis en tiempo real del flujo de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Informaci\u00F3n de estado y encriptaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Manejo informal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Control de contenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Funciones de filtro ampliadas y regulaciones de filtro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Protecci\u00F3n de Spam y Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Cree una lista negra y blanca con un solo clic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Control centralizado de las firmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Descargo de responsabilidad estandarizado y conforme a la leyaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Cifrado global SMIME / PGP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Encriptacion forzada con la ayuda de Websafe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Archivado de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Archivado por 10 a\u00F1os de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Acceso permanente al archivo de correo electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Busqueda de datos indexados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Analisis Forense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "ATP Sandboxing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Control de malware de URL's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Informes de amnezada a tiempo real");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Alertas de Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Liminaci\u00F3n de Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Servicio de continuidad de correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Copias de seguridad automatizadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Recuperaci\u00F3n granular de archivos o elementos de correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Copia de seguridad y recuperaci\u00F3n de endpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Auditoria de la actividad de las cuenras de copia de seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Total Protection For Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "$6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "small", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "/por cuenta al mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Analisis en tiempo real del flujo de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Informaci\u00F3n de estado y encriptaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Manejo informal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Control de contenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Funciones de filtro ampliadas y regulaciones de filtro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Protecci\u00F3n de Spam y Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Cree una lista negra y blanca con un solo clic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Control centralizado de las firmas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Descargo de responsabilidad estandarizado y conforme a la leyaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Cifrado global SMIME / PGP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Encriptacion forzada con la ayuda de Websafe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Archivado de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Archivado por 10 a\u00F1os de correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Acceso permanente al archivo de correo electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Busqueda de datos indexados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Analisis Forense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "ATP Sandboxing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Control de malware de URL's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Informes de amnezada a tiempo real");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Alertas de Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Liminaci\u00F3n de Malware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Servicio de continuidad de correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Copias de seguridad automatizadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Recuperaci\u00F3n granular de archivos o elementos de correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Copia de seguridad y recuperaci\u00F3n de endpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Auditoria de la actividad de las cuenras de copia de seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "section", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h2", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "\u00BFPor qu\u00E9 confiar en nosotros?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, " Somos parther certificado de Hornet Segurity para brindar servicios de seguridad. Contamos con un socio confiable y de calidad mundial que provee de servicios en todo el mundo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "section", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "h2", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Cont\u00E1ctanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "form", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Campo obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Correo electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Campo obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Campo obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "textarea", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Campo obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (min-width: 320px) and (max-width: 768px) {\n\n    \n\n    .pagina_principal_1[_ngcontent-%COMP%] {\n        background-color: #233DF9;\n        padding: 25px 20px 70px 20px;\n    }\n\n    #titulo_1[_ngcontent-%COMP%] {\n        font-family: 'Spartan', sans-serif;\n        color: white;\n        padding-bottom: 5px;\n        width: 70%;\n    }\n\n    .logo_white[_ngcontent-%COMP%]{\n        height: 50px;\n        float: right;\n    }\n\n    #descripcion_1[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n    }\n\n    .hexagonos[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n    }\n\n    .hexagono[_ngcontent-%COMP%]{\n        position: relative;\n        display: block;\n        background-color: #28AFFA;\n        width: 80px;\n        height: 45px;\n        margin: 15px 5px;\n    }\n\n    .hexagono[_ngcontent-%COMP%]::after{\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0px;\n        width: inherit;\n        height: inherit;\n        transform: rotate(60deg);\n        background-color: inherit;\n    }\n\n    .hexagono[_ngcontent-%COMP%]::before{\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0px;\n        width: inherit;\n        height: inherit;\n        transform: rotate(-60deg);\n        background-color: inherit;\n    } \n\n    .hexagono-content[_ngcontent-%COMP%]{\n        position: absolute;\n        z-index: 1000;\n        margin: 0 auto;\n        left: 0;\n        right: 0;\n        top: 50%;\n        transform: translate(0%, -50%);\n        transform-origin: 0% 50%;\n        transition: .75s;\n        padding: 5px;\n        text-align: center;\n        font-weight: bold;\n        line-height: 15px;\n        color: #fff;\n        font-family: 'Titillium Web', sans-serif;\n        font-weight: normal;\n        font-size: 12px;\n    }\n\n    .btn_demo[_ngcontent-%COMP%] {\n        float: right;\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        background-color: rgb(0, 200, 83);\n        padding: 3px 8px;\n        margin-top: 25px; \n        font-size: 12px;\n    }\n    \n    \n\n    .pagina_principal_2[_ngcontent-%COMP%]{\n        padding: 30px 20px 10px 20px;\n        background-color: #EBEAED;\n    }\n    \n    #titulo_2[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n    }\n    \n    #descripcion_2[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        padding: 5px 0px;\n        margin: 25px 0px 15px 0px;\n    }\n    \n    .hacker[_ngcontent-%COMP%]{\n        display: block;\n        margin: auto;\n        height: 260px;\n        padding-bottom: 25px;\n    }\n\n    .logo_black[_ngcontent-%COMP%]{\n        display: block;\n        margin: auto;\n        height: 50px;\n    }\n\n    \n\n    .pagina_principal_3[_ngcontent-%COMP%] {\n        background-color: #233DF9;\n        padding: 30px 20px 40px 20px;\n    }\n    \n    #titulo_3[_ngcontent-%COMP%] {\n        font-family: 'Spartan', sans-serif;\n        color: white;\n        text-align: center;\n    }\n    \n    #descripcion_3[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        text-align: center;\n        padding: 20px 0px;\n    }\n    \n    .grupo-hexagonos[_ngcontent-%COMP%]{\n        display: flex;\n    }\n\n    \n\n    #titulo_4[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        padding: 30px 20px 10px 20px;\n    }\n    \n    .accordion[_ngcontent-%COMP%] {\n        padding: 10px 15px 25px 15px ;\n    }\n    \n    .accordion-button[_ngcontent-%COMP%]:focus {\n        z-index: 3;\n        border-color: #EBEAED;\n        outline: 0;\n        box-shadow: #EBEAED;\n    }\n    .accordion-button[_ngcontent-%COMP%] {\n        position: relative;\n        display: flex;\n        align-items: center;\n        width: 100%;\n        padding: 1rem 1.25rem;\n        font-size: 1rem;\n        color: #212529;\n        text-align: left;\n        background-color: #EBEAED;\n        border: 0;\n        border-radius: 0;\n        overflow-anchor: none;\n        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;\n    }\n    \n    .accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n        color: white; \n        background-color:rgb(68, 68, 68);\n    }\n    .accordeon-body[_ngcontent-%COMP%] {\n        padding: 1rem 1.25rem;\n        background-color: #EBEAED;\n    }\n\n    \n\n    .pagina_principal_5[_ngcontent-%COMP%]{\n        background-color: #233DF9;\n        padding: 35px 10px 25px 20px;\n    } \n    \n    #titulo_5[_ngcontent-%COMP%]{\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        color: white;\n        padding-bottom: 15px;\n    }\n    \n    .list-group-item[_ngcontent-%COMP%]{\n        background-color: #EBEAED;\n    }\n    \n    .titulo-lista[_ngcontent-%COMP%]{\n        font-weight: bolder;\n    }\n    \n    .bi-check[_ngcontent-%COMP%]{\n        color: rgb(78, 182, 122);\n        padding-right: 5px;\n    }\n    \n    .bi-x-circle[_ngcontent-%COMP%]{\n        color: red;\n        padding-right: 2px;\n    }\n    \n    .precio_lista[_ngcontent-%COMP%]{\n        color: #233DF9;\n        font-size: 20px;\n    }\n    \n    #subtitulo_5[_ngcontent-%COMP%]{\n      color: #212529;\n      font-size: 12px;\n    }\n    \n    .btn-comprar[_ngcontent-%COMP%] {\n        display: block;\n        margin: auto;\n        padding: 10px;\n        background-color: rgb(0, 200, 83);\n        color: white;\n        font-family: 'Titillium Web', sans-serif;\n        font-weight: bolder;\n        font-size: 13px;\n    }\n\n    \n\n    .pagina_principal_6[_ngcontent-%COMP%]{\n        padding-bottom: 40px;\n        background-color: black;\n        text-align: center;\n    }\n    \n    #titulo_6[_ngcontent-%COMP%]{\n        color: #233DF9;\n        padding: 30px 5px;\n        font-family: 'Spartan', sans-serif;\n    }\n    \n    #descripcion_6[_ngcontent-%COMP%]{\n        color: white;\n        font-family: 'Titillium Web', sans-serif;\n        padding: 20px;\n    }\n    \n    .hornetsecurity[_ngcontent-%COMP%]{\n        height: 150px;\n        width: auto;\n    }\n\n    \n\n    \n\n    .mauticform_wrapper[_ngcontent-%COMP%] {\n        max-width: 600px;\n        margin: 10px auto;\n    }\n    \n    .mauticform-name[_ngcontent-%COMP%] {\n        font-weight: bold;\n        font-size: 1.5em;\n        margin-bottom: 3px;\n    }\n\n    .mauticform-description[_ngcontent-%COMP%] {\n        margin-top: 2px;\n        margin-bottom: 10px;\n    }\n\n    .mauticform-error[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        color: red;\n    }\n\n    .mauticform-message[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        color: green;\n    }\n\n    .mauticform-row[_ngcontent-%COMP%] {\n        display: block;\n        margin-bottom: 20px;\n    }\n\n    .mauticform-label[_ngcontent-%COMP%] {\n        font-size: 1.1em;\n        display: block;\n        font-weight: bold;\n        margin-bottom: 5px;\n    }\n\n    .mauticform-row.mauticform-required[_ngcontent-%COMP%]   .mauticform-label[_ngcontent-%COMP%]:after {\n        color: #e32;\n        content: \" *\";\n        display: inline;\n    }\n\n    .mauticform-helpmessage[_ngcontent-%COMP%] {\n        display: block;\n        font-size: 0.9em;\n        margin-bottom: 3px;\n    }\n\n    .mauticform-errormsg[_ngcontent-%COMP%] {\n        display: block;\n        color: red;\n        margin-top: 2px;\n    }\n\n    .mauticform-selectbox[_ngcontent-%COMP%], .mauticform-input[_ngcontent-%COMP%], .mauticform-textarea[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0.5em 0.5em;\n        border: 1px solid #CCC;\n        background: #fff;\n        box-shadow: 0px 0px 0px #fff inset;\n        border-radius: 4px;\n        box-sizing: border-box;\n        border-top-left-radius: 30px;\n        border-bottom-right-radius: 30px;\n    }\n\n    .mauticform-checkboxgrp-label[_ngcontent-%COMP%] {\n        font-weight: normal;\n    }\n\n    .mauticform-radiogrp-label[_ngcontent-%COMP%] {\n        font-weight: normal;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button.btn-default[_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak.btn-default[_ngcontent-%COMP%] {\n        color: #5d6c7c;\n        background-color: #ffffff;\n        border-color: #dddddd;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button[_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin-bottom: 0;\n        font-weight: 600;\n        text-align: center;\n        vertical-align: middle;\n        cursor: pointer;\n        background-image: none;\n        border: 1px solid transparent;\n        white-space: nowrap;\n        padding: 6px 12px;\n        font-size: 13px;\n        line-height: 1.3856;\n        border-radius: 3px;\n        -webkit-user-select: none;\n        user-select: none;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button.btn-default[disabled][_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak.btn-default[disabled][_ngcontent-%COMP%] {\n        background-color: #ffffff;\n        border-color: #dddddd;\n        opacity: 0.75;\n        cursor: not-allowed;\n    }\n\n    .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-button-wrapper[_ngcontent-%COMP%] {\n        display: inline;\n    }\n\n    #mauticform_input_contactosmailshied_submit[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        font-weight: bold;\n        background-color: rgb(0, 200, 83);\n    }\n\n    .pagina_principal_8[_ngcontent-%COMP%]{\n        padding: 30px 20px;\n        background-color: #EBEAED;\n    }\n    \n    #titulo_8[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        padding-bottom: 20px;\n    }\n    \n    .formulario[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Titillium Web', sans-serif;\n    }\n    \n    [_ngcontent-%COMP%]::placeholder{\n        color: #233DF9;\n        padding-left: 10px;\n    }\n\n}\n\n\n\n@media screen and (min-width: 768px) and (max-width: 1200px) {\n    \n    .pagina_principal_1[_ngcontent-%COMP%] {\n        background-color: #233DF9;\n        padding: 30px 30px 90px 30px;\n    }\n\n    #titulo_1[_ngcontent-%COMP%] {\n        font-family: 'Spartan', sans-serif;\n        color: white;\n        padding-bottom: 5px;\n        width: 80%;\n    }\n    \n    .logo_white[_ngcontent-%COMP%]{\n        height: 60px;\n        float: right;\n    }\n    \n    #descripcion_1[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        width: auto;\n        color: white;\n        padding-bottom: 10px;\n    }\n\n    .hexagonos[_ngcontent-%COMP%]{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .hexagono[_ngcontent-%COMP%]{\n        position: relative;\n        display: block;\n        background-color: #28AFFA;\n        width: 140px;\n        height: 80px;\n        margin: 30px 10px;\n    }  \n    \n    .hexagono[_ngcontent-%COMP%]::after{\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0px;\n        width: inherit;\n        height: inherit;\n        transform: rotate(60deg);\n        background-color: inherit;\n    }\n    \n    .hexagono[_ngcontent-%COMP%]::before{\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0px;\n        width: inherit;\n        height: inherit;\n        transform: rotate(-60deg);\n        background-color: inherit;\n    }\n      \n    .hexagono-content[_ngcontent-%COMP%]{\n        position: absolute;\n        z-index: 1000;\n        width: 90%;\n        margin: 0 auto;\n        left: 0;\n        right: 0;\n        top: 50%;\n        transform: translate(0%, -50%);\n        transform-origin: 0% 50%;\n        transition: .75s;\n        text-align: center;\n        font-weight: bold;\n        line-height: 25px;\n        color: #fff;\n        font-family: 'Titillium Web', sans-serif;\n        font-weight: normal;\n        font-size: 1rem;\n    }\n    \n    .btn_demo[_ngcontent-%COMP%] {\n        float: right;\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        background-color: rgb(0, 200, 83);\n        padding: 5px 20px;\n        margin-top: 30px;   \n    }\n\n    \n\n    .pagina_principal_2[_ngcontent-%COMP%]{\n        padding: 50px 30px 25px 30px;\n        background-color: #EBEAED;\n    }\n    \n    #titulo_2[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n    }\n    \n    \n\n    #descripcion_2[_ngcontent-%COMP%]{\n        width: 50%;\n        background: #212529;\n    }\n    \n    .logo_black[_ngcontent-%COMP%]{\n        display: block;\n        margin: auto;\n        padding-top: 5px;\n        height: 70px;\n    }\n\n    .hacker[_ngcontent-%COMP%]{\n        display: block;\n        float: right;\n        height: 360px;\n    }\n\n    \n\n    .pagina_principal_3[_ngcontent-%COMP%] {\n        background-color: #233DF9;\n        padding: 30px 35px;\n    }\n    \n    #titulo_3[_ngcontent-%COMP%] {\n        font-family: 'Spartan', sans-serif;\n        color: white;\n        text-align: center;\n    }\n    \n    #descripcion_3[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        text-align: center;\n        padding: 15px 0px;\n    }\n    \n    .grupo-hexagonos[_ngcontent-%COMP%]{\n        display: flex;\n    }\n\n    #titulo_4[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        padding: 40px 30px 0px 30px;\n    }\n    \n    .accordion[_ngcontent-%COMP%] {\n        padding: 20px;\n    }\n    \n    .accordion-button[_ngcontent-%COMP%]:focus {\n        z-index: 3;\n        border-color: #EBEAED;\n        outline: 0;\n        box-shadow: #EBEAED;\n    }\n    .accordion-button[_ngcontent-%COMP%] {\n        position: relative;\n        display: flex;\n        align-items: center;\n        width: 100%;\n        padding: 1rem 1.25rem;\n        font-size: 1rem;\n        color: #212529;\n        text-align: left;\n        background-color: #EBEAED;\n        border: 0;\n        border-radius: 0;\n        overflow-anchor: none;\n        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;\n    }\n    \n    .accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n        color: white; \n        background-color:rgb(68, 68, 68);\n    }\n    .accordeon-body[_ngcontent-%COMP%] {\n        padding: 1rem 1.25rem;\n        background-color: #EBEAED;\n    }\n\n    .pagina_principal_5[_ngcontent-%COMP%]{\n        background-color: #233DF9;\n        padding: 35px 15px 25px 20px;\n    } \n    \n    #titulo_5[_ngcontent-%COMP%]{\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        color: white;\n        padding-bottom: 15px;\n    }\n    \n    .list-group-item[_ngcontent-%COMP%]{\n        background-color: #EBEAED;\n    }\n    \n    .titulo-lista[_ngcontent-%COMP%]{\n        font-weight: bolder;\n    }\n    \n    .bi-check[_ngcontent-%COMP%]{\n        color: rgb(78, 182, 122);\n        padding-right: 5px;\n    }\n    \n    .bi-x-circle[_ngcontent-%COMP%]{\n        color: red;\n        padding-right: 2px;\n    }\n    \n    .precio_lista[_ngcontent-%COMP%]{\n        color: #233DF9;\n        font-size: 20px;\n    }\n    \n    #subtitulo_5[_ngcontent-%COMP%]{\n      color: #212529;\n      font-size: 12px;\n    }\n    \n    .btn-comprar[_ngcontent-%COMP%] {\n        display: block;\n        margin: auto;\n        padding: 10px;\n        background-color: rgb(0, 200, 83);\n        color: white;\n        font-family: 'Titillium Web', sans-serif;\n        font-weight: bolder;\n        font-size: 13px;\n    }\n\n    .pagina_principal_6[_ngcontent-%COMP%]{\n        padding: 40px 35px;\n        background-color: black;\n        text-align: center;\n    }\n    \n    #titulo_6[_ngcontent-%COMP%]{\n        color: #233DF9;\n        padding-bottom: 20px;\n        font-family: 'Spartan', sans-serif;\n    }\n    \n    #descripcion_6[_ngcontent-%COMP%]{\n        color: white;\n        font-family: 'Titillium Web', sans-serif;\n        padding-bottom: 20px;\n    }\n\n    .hornetsecurity[_ngcontent-%COMP%]{\n        height: 250px;\n        width: auto;\n    }\n\n    \n\n    \n\n    .mauticform_wrapper[_ngcontent-%COMP%] {\n        max-width: 600px;\n        margin: 10px auto;\n    }\n    \n    .mauticform-name[_ngcontent-%COMP%] {\n        font-weight: bold;\n        font-size: 1.5em;\n        margin-bottom: 3px;\n    }\n\n    .mauticform-description[_ngcontent-%COMP%] {\n        margin-top: 2px;\n        margin-bottom: 10px;\n    }\n\n    .mauticform-error[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        color: red;\n    }\n\n    .mauticform-message[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        color: green;\n    }\n\n    .mauticform-row[_ngcontent-%COMP%] {\n        display: block;\n        margin-bottom: 20px;\n    }\n\n    .mauticform-label[_ngcontent-%COMP%] {\n        font-size: 1.1em;\n        display: block;\n        font-weight: bold;\n        margin-bottom: 5px;\n    }\n\n    .mauticform-row.mauticform-required[_ngcontent-%COMP%]   .mauticform-label[_ngcontent-%COMP%]:after {\n        color: #e32;\n        content: \" *\";\n        display: inline;\n    }\n\n    .mauticform-helpmessage[_ngcontent-%COMP%] {\n        display: block;\n        font-size: 0.9em;\n        margin-bottom: 3px;\n    }\n\n    .mauticform-errormsg[_ngcontent-%COMP%] {\n        display: block;\n        color: red;\n        margin-top: 2px;\n    }\n\n    .mauticform-selectbox[_ngcontent-%COMP%], .mauticform-input[_ngcontent-%COMP%], .mauticform-textarea[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0.5em 0.5em;\n        border: 1px solid #CCC;\n        background: #fff;\n        box-shadow: 0px 0px 0px #fff inset;\n        border-radius: 4px;\n        box-sizing: border-box;\n        border-top-left-radius: 30px;\n        border-bottom-right-radius: 30px;\n    }\n\n    .mauticform-checkboxgrp-label[_ngcontent-%COMP%] {\n        font-weight: normal;\n    }\n\n    .mauticform-radiogrp-label[_ngcontent-%COMP%] {\n        font-weight: normal;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button.btn-default[_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak.btn-default[_ngcontent-%COMP%] {\n        color: #5d6c7c;\n        background-color: #ffffff;\n        border-color: #dddddd;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button[_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin-bottom: 0;\n        font-weight: 600;\n        text-align: center;\n        vertical-align: middle;\n        cursor: pointer;\n        background-image: none;\n        border: 1px solid transparent;\n        white-space: nowrap;\n        padding: 6px 12px;\n        font-size: 13px;\n        line-height: 1.3856;\n        border-radius: 3px;\n        -webkit-user-select: none;\n        user-select: none;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button.btn-default[disabled][_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak.btn-default[disabled][_ngcontent-%COMP%] {\n        background-color: #ffffff;\n        border-color: #dddddd;\n        opacity: 0.75;\n        cursor: not-allowed;\n    }\n\n    .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-button-wrapper[_ngcontent-%COMP%] {\n        display: inline;\n    }\n\n    #mauticform_input_contactosmailshied_submit[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        font-weight: bold;\n        background-color: rgb(0, 200, 83);\n    }\n\n    .pagina_principal_8[_ngcontent-%COMP%]{\n        padding: 30px 20px;\n        background-color: #EBEAED;\n    }\n    \n    #titulo_8[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        padding-bottom: 20px;\n    }\n    \n    .formulario[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Titillium Web', sans-serif;\n    }\n    \n    [_ngcontent-%COMP%]::placeholder{\n        color: #233DF9;\n        padding-left: 10px;\n    }\n\n}\n\n\n\n@media screen and (min-width: 1200px) and (max-width: 2560px) { \n    \n    .pagina_principal_1[_ngcontent-%COMP%] {\n        background-color: #233DF9;\n        padding: 60px 35px;\n    }\n\n    #titulo_1[_ngcontent-%COMP%] {\n        font-family: 'Spartan', sans-serif;\n        color: white;\n        padding-bottom: 5px;\n        width: 60%;\n    }\n\n    .logo_white[_ngcontent-%COMP%]{\n        height: 70px;\n        float: right;\n    }\n\n    #descripcion_1[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        width:auto;\n        color: white;\n    }\n\n    .hexagonos[_ngcontent-%COMP%]{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .hexagono[_ngcontent-%COMP%]{\n        position: relative;\n        display: block;\n        background-color: #28AFFA;\n        width: 140px;\n        height: 80px;\n        margin: 40px 10px;\n    }  \n\n    .hexagono[_ngcontent-%COMP%]::after{\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0px;\n        width: inherit;\n        height: inherit;\n        transform: rotate(60deg);\n        background-color: inherit;\n    }\n\n    .hexagono[_ngcontent-%COMP%]::before{\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0px;\n        width: inherit;\n        height: inherit;\n        transform: rotate(-60deg);\n        background-color: inherit;\n    }\n    \n    .hexagono-content[_ngcontent-%COMP%]{\n        position: absolute;\n        z-index: 1000;\n        width: 90%;\n        margin: 0 auto;\n        left: 0;\n        right: 0;\n        top: 50%;\n        transform: translate(0%, -50%);\n        transform-origin: 0% 50%;\n        transition: .75s;\n        text-align: center;\n        font-weight: bold;\n        line-height: 25px;\n        color: #fff;\n        font-family: 'Titillium Web', sans-serif;\n        font-weight: normal;\n        font-size: 1rem;\n    }\n\n    .btn_demo[_ngcontent-%COMP%] {\n        float: right;\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        background-color: rgb(0, 200, 83);\n        padding: 5px 20px;   \n    }\n\n    \n\n    .pagina_principal_2[_ngcontent-%COMP%]{\n        padding: 60px 35px;\n        background-color: #EBEAED;\n    }\n\n    #titulo_2[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n    }\n\n    #descripcion_2[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        padding: 20px 0px;\n    }\n\n    .logo_black[_ngcontent-%COMP%]{\n        display: block;\n        margin: auto;\n        height: 70px;\n        float: left;\n    }\n\n    .hacker[_ngcontent-%COMP%]{\n        display: block;\n        margin: auto;\n        float: right;\n        height: 260px;\n        padding-bottom: 25px;\n    }\n\n    \n    \n    .pagina_principal_3[_ngcontent-%COMP%] {\n        background-color: #233DF9;\n        padding: 30px 35px;\n    }\n\n    #titulo_3[_ngcontent-%COMP%] {\n        font-family: 'Spartan', sans-serif;\n        color: white;\n        text-align: center;\n    }\n\n    #descripcion_3[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        text-align: center;\n        padding: 20px 0px\n    }\n\n    .grupo-hexagonos[_ngcontent-%COMP%]{\n        display: flex;\n    }\n\n    \n\n    #titulo_4[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        padding: 60px 35px 25px 35px;\n    }\n\n    .accordion[_ngcontent-%COMP%] {\n        padding: 25px 15px;\n    }\n\n    .accordion-button[_ngcontent-%COMP%]:focus {\n        z-index: 3;\n        border-color: #EBEAED;\n        outline: 0;\n        box-shadow: #EBEAED;\n    }\n    .accordion-button[_ngcontent-%COMP%] {\n        position: relative;\n        display: flex;\n        align-items: center;\n        width: 100%;\n        padding: 1rem 1.25rem;\n        font-size: 1rem;\n        color: #212529;\n        text-align: left;\n        background-color: #EBEAED;\n        border: 0;\n        border-radius: 0;\n        overflow-anchor: none;\n        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;\n    }\n\n    .accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n        color: white; \n        background-color:rgb(68, 68, 68);\n    }\n    .accordeon-body[_ngcontent-%COMP%] {\n        padding: 1rem 1.25rem;\n        background-color: #EBEAED;\n    }\n\n    \n\n    .pagina_principal_5[_ngcontent-%COMP%]{\n        background-color: #233DF9;\n        padding: 35px 35px 25px 35px;\n    } \n\n    #titulo_5[_ngcontent-%COMP%]{\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        color: white;\n        padding-bottom: 15px;\n    }\n\n    .list-group-item[_ngcontent-%COMP%]{\n        background-color: #EBEAED;\n    }\n\n    .titulo-lista[_ngcontent-%COMP%]{\n        font-weight: bolder;\n    }\n\n    .bi-check[_ngcontent-%COMP%]{\n        color: rgb(78, 182, 122);\n        padding-right: 5px;\n    }\n\n    .bi-x-circle[_ngcontent-%COMP%]{\n        color: red;\n        padding-right: 2px;\n    }\n\n    .precio_lista[_ngcontent-%COMP%]{\n        color: #233DF9;\n        font-size: 20px;\n    }\n\n    #subtitulo_5[_ngcontent-%COMP%]{\n      color: #212529;\n      font-size: 12px;\n    }\n\n    .btn-comprar[_ngcontent-%COMP%] {\n        display: block;\n        margin: auto;\n        padding: 10px 15px;\n        background-color: rgb(0, 200, 83);\n        color: white;\n        font-family: 'Titillium Web', sans-serif;\n        font-weight: bolder;\n        font-size: 15px;\n    }\n\n    \n\n    .pagina_principal_6[_ngcontent-%COMP%]{\n        padding: 60px 35px;\n        background-color: black;\n        text-align: center;\n    }\n\n    #titulo_6[_ngcontent-%COMP%]{\n        color: #233DF9;\n        padding-bottom: 20px;\n        font-family: 'Spartan', sans-serif;\n    }\n\n    #descripcion_6[_ngcontent-%COMP%]{\n        color: white;\n        font-family: 'Titillium Web', sans-serif;\n        padding-bottom: 20px;\n    }\n\n    .hornetsecurity[_ngcontent-%COMP%]{\n        display: block;\n        margin: auto;\n        height: 200px;\n    }\n\n\n    \n\n    .pagina_principal_7[_ngcontent-%COMP%]{\n        background-color: #233DF9;\n        padding-bottom: 40px;\n    }\n\n    #titulo_7[_ngcontent-%COMP%]{\n        color: white;\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        padding-top: 40px;\n        padding-bottom: 30px;\n        \n    }\n    .fondo[_ngcontent-%COMP%]{\n        background-color: #EBEAED;\n        border-radius: 25px;\n        padding-bottom: 15px;\n    }\n    #img-blog[_ngcontent-%COMP%] {\n        width: 100%;\n        border-radius: 25px;\n    } \n\n    h3[_ngcontent-%COMP%]{\n        padding: 10px;\n        font-family: 'Spartan', sans-serif;\n    }\n\n    #info-blog[_ngcontent-%COMP%] {\n        padding: 0px 10px;\n        font-size: 13px;\n        margin-bottom: none;\n        font-family: 'Titillium Web', sans-serif;\n    }\n\n    #leer-mas[_ngcontent-%COMP%] {\n        padding: 0px 5px 5px 10px;\n        font-size: 13px;\n        color: rgb(0, 200, 83);\n        text-decoration: none;\n        font-size: 10px;\n    }\n    \n    .desplegar[_ngcontent-%COMP%] {\n        display: block;\n        margin: 30px auto;\n        padding: 9px 24px 7px;\n        font-weight: 900;\n        color: #C00;\n        outline-color: #C00;\n        border: 1px solid #C00;\n        background: #FFF;\n    } \n\n        \n\n    .mauticform_wrapper[_ngcontent-%COMP%] {\n        max-width: 600px;\n        margin: 10px auto;\n    }\n    \n    .mauticform-name[_ngcontent-%COMP%] {\n        font-weight: bold;\n        font-size: 1.5em;\n        margin-bottom: 3px;\n    }\n\n    .mauticform-description[_ngcontent-%COMP%] {\n        margin-top: 2px;\n        margin-bottom: 10px;\n    }\n\n    .mauticform-error[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        color: red;\n    }\n\n    .mauticform-message[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        color: green;\n    }\n\n    .mauticform-row[_ngcontent-%COMP%] {\n        display: block;\n        margin-bottom: 20px;\n    }\n\n    .mauticform-label[_ngcontent-%COMP%] {\n        font-size: 1.1em;\n        display: block;\n        font-weight: bold;\n        margin-bottom: 5px;\n    }\n\n    .mauticform-row.mauticform-required[_ngcontent-%COMP%]   .mauticform-label[_ngcontent-%COMP%]:after {\n        color: #e32;\n        content: \" *\";\n        display: inline;\n    }\n\n    .mauticform-helpmessage[_ngcontent-%COMP%] {\n        display: block;\n        font-size: 0.9em;\n        margin-bottom: 3px;\n    }\n\n    .mauticform-errormsg[_ngcontent-%COMP%] {\n        display: block;\n        color: red;\n        margin-top: 2px;\n    }\n\n    .mauticform-selectbox[_ngcontent-%COMP%], .mauticform-input[_ngcontent-%COMP%], .mauticform-textarea[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0.5em 0.5em;\n        border: 1px solid #CCC;\n        background: #fff;\n        box-shadow: 0px 0px 0px #fff inset;\n        border-radius: 4px;\n        box-sizing: border-box;\n        border-top-left-radius: 30px;\n        border-bottom-right-radius: 30px;\n    }\n\n    .mauticform-checkboxgrp-label[_ngcontent-%COMP%] {\n        font-weight: normal;\n    }\n\n    .mauticform-radiogrp-label[_ngcontent-%COMP%] {\n        font-weight: normal;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button.btn-default[_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak.btn-default[_ngcontent-%COMP%] {\n        color: #5d6c7c;\n        background-color: #ffffff;\n        border-color: #dddddd;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button[_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin-bottom: 0;\n        font-weight: 600;\n        text-align: center;\n        vertical-align: middle;\n        cursor: pointer;\n        background-image: none;\n        border: 1px solid transparent;\n        white-space: nowrap;\n        padding: 6px 12px;\n        font-size: 13px;\n        line-height: 1.3856;\n        border-radius: 3px;\n        -webkit-user-select: none;\n        user-select: none;\n    }\n\n    .mauticform-button-wrapper[_ngcontent-%COMP%]   .mauticform-button.btn-default[disabled][_ngcontent-%COMP%], .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-pagebreak.btn-default[disabled][_ngcontent-%COMP%] {\n        background-color: #ffffff;\n        border-color: #dddddd;\n        opacity: 0.75;\n        cursor: not-allowed;\n    }\n\n    .mauticform-pagebreak-wrapper[_ngcontent-%COMP%]   .mauticform-button-wrapper[_ngcontent-%COMP%] {\n        display: inline;\n    }\n\n    #mauticform_input_contactosmailshied_submit[_ngcontent-%COMP%] {\n        font-family: 'Titillium Web', sans-serif;\n        color: white;\n        font-weight: bold;\n        background-color: rgb(0, 200, 83);\n    }\n\n    .pagina_principal_8[_ngcontent-%COMP%]{\n        padding: 30px 20px;\n        background-color: #EBEAED;\n    }\n    \n    #titulo_8[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Spartan', sans-serif;\n        text-align: center;\n        padding-bottom: 20px;\n    }\n    \n    .formulario[_ngcontent-%COMP%] {\n        color: #233DF9;\n        font-family: 'Titillium Web', sans-serif;\n    }\n    \n    [_ngcontent-%COMP%]::placeholder{\n        color: #233DF9;\n        padding-left: 10px;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjs7SUFFSSx5QkFBeUI7O0lBRXpCO1FBQ0kseUJBQXlCO1FBQ3pCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksd0NBQXdDO1FBQ3hDLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsY0FBYztRQUNkLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGNBQWM7UUFDZCxlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYztRQUNkLE9BQU87UUFDUCxRQUFRO1FBQ1IsUUFBUTtRQUNSLDhCQUE4QjtRQUM5Qix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsd0NBQXdDO1FBQ3hDLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLHdDQUF3QztRQUN4QyxZQUFZO1FBQ1osaUNBQWlDO1FBQ2pDLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQSxnQ0FBZ0M7O0lBRWhDO1FBQ0ksNEJBQTRCO1FBQzVCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSx3Q0FBd0M7UUFDeEMsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQSxvQ0FBb0M7O0lBRXBDO1FBQ0kseUJBQXlCO1FBQ3pCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksd0NBQXdDO1FBQ3hDLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQSxnQ0FBZ0M7O0lBRWhDO1FBQ0ksY0FBYztRQUNkLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHFCQUFxQjtRQUNyQixVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixzSkFBc0o7SUFDMUo7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIseUJBQXlCO0lBQzdCOztJQUVBLDRCQUE0Qjs7SUFFNUI7UUFDSSx5QkFBeUI7UUFDekIsNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCxlQUFlO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixhQUFhO1FBQ2IsaUNBQWlDO1FBQ2pDLFlBQVk7UUFDWix3Q0FBd0M7UUFDeEMsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUEsNkJBQTZCOztJQUU3QjtRQUNJLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSxZQUFZO1FBQ1osd0NBQXdDO1FBQ3hDLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztJQUNmOztJQUVBLHdCQUF3Qjs7SUFFeEIsNkJBQTZCOztJQUU3QjtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsVUFBVTtRQUNWLGVBQWU7SUFDbkI7O0lBRUE7OztRQUdJLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBOztRQUVJLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIscUJBQXFCO0lBQ3pCOztJQUVBOztRQUVJLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFHekIsaUJBQWlCO0lBQ3JCOztJQUVBOztRQUVJLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx3Q0FBd0M7UUFDeEMsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixpQ0FBaUM7SUFDckM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksY0FBYztRQUNkLHdDQUF3QztJQUM1Qzs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0FBRUo7O0FBRUEsb0JBQW9COztBQUVwQjs7SUFFSTtRQUNJLHlCQUF5QjtRQUN6Qiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxrQ0FBa0M7UUFDbEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHdDQUF3QztRQUN4QyxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsY0FBYztRQUNkLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGNBQWM7UUFDZCxlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsVUFBVTtRQUNWLGNBQWM7UUFDZCxPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVE7UUFDUiw4QkFBOEI7UUFDOUIsd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsd0NBQXdDO1FBQ3hDLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLHdDQUF3QztRQUN4QyxZQUFZO1FBQ1osaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUEsa0JBQWtCOztJQUVsQjtRQUNJLDRCQUE0QjtRQUM1Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0NBQWtDO0lBQ3RDOztJQUVBOzs7O09BSUc7O0lBRUg7UUFDSSxVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQSxxQkFBcUI7O0lBRXJCO1FBQ0kseUJBQXlCO1FBQ3pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksd0NBQXdDO1FBQ3hDLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLHNKQUFzSjtJQUMxSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCxlQUFlO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixhQUFhO1FBQ2IsaUNBQWlDO1FBQ2pDLFlBQVk7UUFDWix3Q0FBd0M7UUFDeEMsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHdDQUF3QztRQUN4QyxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztJQUNmOztJQUVBLHlCQUF5Qjs7SUFFekIsa0JBQWtCOztJQUVsQjtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsVUFBVTtRQUNWLGVBQWU7SUFDbkI7O0lBRUE7OztRQUdJLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBOztRQUVJLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIscUJBQXFCO0lBQ3pCOztJQUVBOztRQUVJLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFHekIsaUJBQWlCO0lBQ3JCOztJQUVBOztRQUVJLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx3Q0FBd0M7UUFDeEMsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixpQ0FBaUM7SUFDckM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksY0FBYztRQUNkLHdDQUF3QztJQUM1Qzs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0FBRUo7O0FBRUEsK0NBQStDOztBQUUvQyxnRUFBZ0UsZ0JBQWdCOztJQUU1RTtRQUNJLHlCQUF5QjtRQUN6QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQ0FBa0M7UUFDbEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHdDQUF3QztRQUN4QyxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsY0FBYztRQUNkLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGNBQWM7UUFDZCxlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsVUFBVTtRQUNWLGNBQWM7UUFDZCxPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVE7UUFDUiw4QkFBOEI7UUFDOUIsd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsd0NBQXdDO1FBQ3hDLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLHdDQUF3QztRQUN4QyxZQUFZO1FBQ1osaUNBQWlDO1FBQ2pDLGlCQUFpQjtJQUNyQjs7SUFFQSxrQkFBa0I7O0lBRWxCO1FBQ0ksa0JBQWtCO1FBQ2xCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSx3Q0FBd0M7UUFDeEMsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQjtJQUN4Qjs7SUFFQSxxQkFBcUI7O0lBRXJCO1FBQ0kseUJBQXlCO1FBQ3pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtDQUFrQztRQUNsQyxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksd0NBQXdDO1FBQ3hDLFlBQVk7UUFDWixrQkFBa0I7UUFDbEI7SUFDSjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUEsa0JBQWtCOztJQUVsQjtRQUNJLGNBQWM7UUFDZCxrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixxQkFBcUI7UUFDckIsVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsU0FBUztRQUNULGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsc0pBQXNKO0lBQzFKOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGdDQUFnQztJQUNwQztJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLHlCQUF5QjtJQUM3Qjs7SUFFQSxxQkFBcUI7O0lBRXJCO1FBQ0kseUJBQXlCO1FBQ3pCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGVBQWU7SUFDbkI7O0lBRUE7TUFDRSxjQUFjO01BQ2QsZUFBZTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxZQUFZO1FBQ1osd0NBQXdDO1FBQ3hDLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBLG1CQUFtQjs7SUFFbkI7UUFDSSxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHdDQUF3QztRQUN4QyxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsWUFBWTtRQUNaLGFBQWE7SUFDakI7OztJQUdBLHlCQUF5Qjs7SUFFekI7UUFDSSx5QkFBeUI7UUFDekIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLG9CQUFvQjs7SUFFeEI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHdDQUF3QztJQUM1Qzs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjs7SUFFQSxpQ0FBaUM7O0lBRWpDO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxVQUFVO1FBQ1YsZUFBZTtJQUNuQjs7SUFFQTs7O1FBR0ksV0FBVztRQUNYLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksY0FBYztRQUNkLHlCQUF5QjtRQUN6QixxQkFBcUI7SUFDekI7O0lBRUE7O1FBRUkscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUd6QixpQkFBaUI7SUFDckI7O0lBRUE7O1FBRUkseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHdDQUF3QztRQUN4QyxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsd0NBQXdDO0lBQzVDOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUkVTUE9OU0lWRSBNT1ZJTCAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAvKiBESUFQT1NJVElWQSAxIC0gSU5UUk8qL1xuXG4gICAgLnBhZ2luYV9wcmluY2lwYWxfMSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzNERjk7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMjBweCA3MHB4IDIwcHg7XG4gICAgfVxuXG4gICAgI3RpdHVsb18xIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cblxuICAgIC5sb2dvX3doaXRle1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG5cbiAgICAjZGVzY3JpcGNpb25fMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuaGV4YWdvbm9ze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaGV4YWdvbm97XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOEFGRkE7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIG1hcmdpbjogMTVweCA1cHg7XG4gICAgfVxuXG4gICAgLmhleGFnb25vOjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLmhleGFnb25vOjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB9IFxuXG4gICAgLmhleGFnb25vLWNvbnRlbnR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gICAgICAgIHRyYW5zaXRpb246IC43NXM7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLmJ0bl9kZW1vIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMDAsIDgzKTtcbiAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDsgXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLyogRElBUE9TSVRJVkEgMiAtIElOVFJPRFVDSU9OICovXG5cbiAgICAucGFnaW5hX3ByaW5jaXBhbF8ye1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHggMTBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQUVEO1xuICAgIH1cbiAgICBcbiAgICAjdGl0dWxvXzIge1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgI2Rlc2NyaXBjaW9uXzIge1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICBtYXJnaW46IDI1cHggMHB4IDE1cHggMHB4O1xuICAgIH1cbiAgICBcbiAgICAuaGFja2Vye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICB9XG5cbiAgICAubG9nb19ibGFja3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cblxuICAgIC8qIERJQVBPU0lUSVZBIDMgLSBDQVJBQ1RFUklTVElDQVMgKi9cblxuICAgIC5wYWdpbmFfcHJpbmNpcGFsXzMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzREY5O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHggNDBweCAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAjdGl0dWxvXzMge1xuICAgICAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgI2Rlc2NyaXBjaW9uXzMge1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5ncnVwby1oZXhhZ29ub3N7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLyogRElBUE9TSVRJVkEgNCAtIEVYUExJQ0FDSU9OICovXG5cbiAgICAjdGl0dWxvXzQge1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuYWNjb3JkaW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDI1cHggMTVweCA7XG4gICAgfVxuICAgIFxuICAgIC5hY2NvcmRpb24tYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRUJFQUVEO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBib3gtc2hhZG93OiAjRUJFQUVEO1xuICAgIH1cbiAgICAuYWNjb3JkaW9uLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUFFRDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBvdmVyZmxvdy1hbmNob3I6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCxib3JkZXItcmFkaXVzIC4xNXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpIHtcbiAgICAgICAgY29sb3I6IHdoaXRlOyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNjgsIDY4LCA2OCk7XG4gICAgfVxuICAgIC5hY2NvcmRlb24tYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUFFRDtcbiAgICB9XG5cbiAgICAvKiBESUFQT1NJVElWQSA1IC0gUFJFQ0lPUyAqL1xuXG4gICAgLnBhZ2luYV9wcmluY2lwYWxfNXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzM0RGOTtcbiAgICAgICAgcGFkZGluZzogMzVweCAxMHB4IDI1cHggMjBweDtcbiAgICB9IFxuICAgIFxuICAgICN0aXR1bG9fNXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAubGlzdC1ncm91cC1pdGVte1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQUVEO1xuICAgIH1cbiAgICBcbiAgICAudGl0dWxvLWxpc3Rhe1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgICBcbiAgICAuYmktY2hlY2t7XG4gICAgICAgIGNvbG9yOiByZ2IoNzgsIDE4MiwgMTIyKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbiAgICBcbiAgICAuYmkteC1jaXJjbGV7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICB9XG4gICAgXG4gICAgLnByZWNpb19saXN0YXtcbiAgICAgICAgY29sb3I6ICMyMzNERjk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgI3N1YnRpdHVsb181e1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5idG4tY29tcHJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMDAsIDgzKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLyogRElBUE9TSVRJQVYgNiAtIENPTkZJQU5aQSovXG5cbiAgICAucGFnaW5hX3ByaW5jaXBhbF82e1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgI3RpdHVsb182e1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgcGFkZGluZzogMzBweCA1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIFxuICAgICNkZXNjcmlwY2lvbl82e1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5ob3JuZXRzZWN1cml0eXtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgLyogRElBUE9TSVRJVkEgNyAtIEJMT0cqL1xuXG4gICAgLyogRElBUE9TSVRJVkEgOCAtIENPTlRBQ1RPICovXG5cbiAgICAubWF1dGljZm9ybV93cmFwcGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgfVxuICAgIFxuICAgIC5tYXV0aWNmb3JtLW5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLWVycm9yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1tZXNzYWdlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tcm93Lm1hdXRpY2Zvcm0tcmVxdWlyZWQgLm1hdXRpY2Zvcm0tbGFiZWw6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogI2UzMjtcbiAgICAgICAgY29udGVudDogXCIgKlwiO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0taGVscG1lc3NhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLWVycm9ybXNnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1zZWxlY3Rib3gsXG4gICAgLm1hdXRpY2Zvcm0taW5wdXQsXG4gICAgLm1hdXRpY2Zvcm0tdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMC41ZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICNmZmYgaW5zZXQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tY2hlY2tib3hncnAtbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLXJhZGlvZ3JwLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1idXR0b24td3JhcHBlciAubWF1dGljZm9ybS1idXR0b24uYnRuLWRlZmF1bHQsXG4gICAgLm1hdXRpY2Zvcm0tcGFnZWJyZWFrLXdyYXBwZXIgLm1hdXRpY2Zvcm0tcGFnZWJyZWFrLmJ0bi1kZWZhdWx0IHtcbiAgICAgICAgY29sb3I6ICM1ZDZjN2M7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1idXR0b24td3JhcHBlciAubWF1dGljZm9ybS1idXR0b24sXG4gICAgLm1hdXRpY2Zvcm0tcGFnZWJyZWFrLXdyYXBwZXIgLm1hdXRpY2Zvcm0tcGFnZWJyZWFrIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM4NTY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1idXR0b24td3JhcHBlciAubWF1dGljZm9ybS1idXR0b24uYnRuLWRlZmF1bHRbZGlzYWJsZWRdLFxuICAgIC5tYXV0aWNmb3JtLXBhZ2VicmVhay13cmFwcGVyIC5tYXV0aWNmb3JtLXBhZ2VicmVhay5idG4tZGVmYXVsdFtkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tcGFnZWJyZWFrLXdyYXBwZXIgLm1hdXRpY2Zvcm0tYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuXG4gICAgI21hdXRpY2Zvcm1faW5wdXRfY29udGFjdG9zbWFpbHNoaWVkX3N1Ym1pdCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMDAsIDgzKTtcbiAgICB9XG5cbiAgICAucGFnaW5hX3ByaW5jaXBhbF84e1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVBRUQ7XG4gICAgfVxuICAgIFxuICAgICN0aXR1bG9fOCB7XG4gICAgICAgIGNvbG9yOiAjMjMzREY5O1xuICAgICAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybXVsYXJpbyB7XG4gICAgICAgIGNvbG9yOiAjMjMzREY5O1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICBcbiAgICA6OnBsYWNlaG9sZGVye1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cblxufVxuXG4vKiBSRVNQT05TRSBUQUJMRVQgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBcbiAgICAucGFnaW5hX3ByaW5jaXBhbF8xIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzM0RGOTtcbiAgICAgICAgcGFkZGluZzogMzBweCAzMHB4IDkwcHggMzBweDtcbiAgICB9XG5cbiAgICAjdGl0dWxvXzEge1xuICAgICAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIFxuICAgIC5sb2dvX3doaXRle1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgXG4gICAgI2Rlc2NyaXBjaW9uXzEge1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuaGV4YWdvbm9ze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmhleGFnb25ve1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBRkZBO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDEwcHg7XG4gICAgfSAgXG4gICAgXG4gICAgLmhleGFnb25vOjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIFxuICAgIC5oZXhhZ29ubzo6YmVmb3Jle1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgICAgXG4gICAgLmhleGFnb25vLWNvbnRlbnR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gICAgICAgIHRyYW5zaXRpb246IC43NXM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAuYnRuX2RlbW8ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIwMCwgODMpO1xuICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgICBcbiAgICB9XG5cbiAgICAvKiBESUFQT1RJVkEgMiAtICovXG5cbiAgICAucGFnaW5hX3ByaW5jaXBhbF8ye1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDMwcHggMjVweCAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQUVEO1xuICAgIH1cbiAgICBcbiAgICAjdGl0dWxvXzIge1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgLyogI2Rlc2NyaXBjaW9uXzIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAvKiBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICB9ICovXG5cbiAgICAjZGVzY3JpcGNpb25fMntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzIxMjUyOTtcbiAgICB9XG4gICAgXG4gICAgLmxvZ29fYmxhY2t7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG5cbiAgICAuaGFja2Vye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgIH1cblxuICAgIC8qIERJQVBPU0lUSVZBIDMgLSAgKi9cblxuICAgIC5wYWdpbmFfcHJpbmNpcGFsXzMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzREY5O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDM1cHg7XG4gICAgfVxuICAgIFxuICAgICN0aXR1bG9fMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAjZGVzY3JpcGNpb25fMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICB9XG4gICAgXG4gICAgLmdydXBvLWhleGFnb25vc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAjdGl0dWxvXzQge1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDMwcHggMHB4IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC5hY2NvcmRpb24ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuYWNjb3JkaW9uLWJ1dHRvbjpmb2N1cyB7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0VCRUFFRDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm94LXNoYWRvdzogI0VCRUFFRDtcbiAgICB9XG4gICAgLmFjY29yZGlvbi1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVBRUQ7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLXJhZGl1cyAuMTVzIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDY4LCA2OCwgNjgpO1xuICAgIH1cbiAgICAuYWNjb3JkZW9uLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVBRUQ7XG4gICAgfVxuXG4gICAgLnBhZ2luYV9wcmluY2lwYWxfNXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzM0RGOTtcbiAgICAgICAgcGFkZGluZzogMzVweCAxNXB4IDI1cHggMjBweDtcbiAgICB9IFxuICAgIFxuICAgICN0aXR1bG9fNXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAubGlzdC1ncm91cC1pdGVte1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQUVEO1xuICAgIH1cbiAgICBcbiAgICAudGl0dWxvLWxpc3Rhe1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgICBcbiAgICAuYmktY2hlY2t7XG4gICAgICAgIGNvbG9yOiByZ2IoNzgsIDE4MiwgMTIyKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbiAgICBcbiAgICAuYmkteC1jaXJjbGV7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICB9XG4gICAgXG4gICAgLnByZWNpb19saXN0YXtcbiAgICAgICAgY29sb3I6ICMyMzNERjk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgI3N1YnRpdHVsb181e1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5idG4tY29tcHJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMDAsIDgzKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLnBhZ2luYV9wcmluY2lwYWxfNntcbiAgICAgICAgcGFkZGluZzogNDBweCAzNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAjdGl0dWxvXzZ7XG4gICAgICAgIGNvbG9yOiAjMjMzREY5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgI2Rlc2NyaXBjaW9uXzZ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmhvcm5ldHNlY3VyaXR5e1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAvKiBESUFQT1NJVElWQSA3IC0gQkxPRyAqL1xuXG4gICAgLyogRElBUE9TSVRJVkEgOCAqL1xuXG4gICAgLm1hdXRpY2Zvcm1fd3JhcHBlciB7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAubWF1dGljZm9ybS1uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1lcnJvciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tbWVzc2FnZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLXJvdy5tYXV0aWNmb3JtLXJlcXVpcmVkIC5tYXV0aWNmb3JtLWxhYmVsOmFmdGVyIHtcbiAgICAgICAgY29sb3I6ICNlMzI7XG4gICAgICAgIGNvbnRlbnQ6IFwiICpcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLWhlbHBtZXNzYWdlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1lcnJvcm1zZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tc2VsZWN0Ym94LFxuICAgIC5tYXV0aWNmb3JtLWlucHV0LFxuICAgIC5tYXV0aWNmb3JtLXRleHRhcmVhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjZmZmIGluc2V0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLWNoZWNrYm94Z3JwLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1yYWRpb2dycC1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tYnV0dG9uLXdyYXBwZXIgLm1hdXRpY2Zvcm0tYnV0dG9uLmJ0bi1kZWZhdWx0LFxuICAgIC5tYXV0aWNmb3JtLXBhZ2VicmVhay13cmFwcGVyIC5tYXV0aWNmb3JtLXBhZ2VicmVhay5idG4tZGVmYXVsdCB7XG4gICAgICAgIGNvbG9yOiAjNWQ2YzdjO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tYnV0dG9uLXdyYXBwZXIgLm1hdXRpY2Zvcm0tYnV0dG9uLFxuICAgIC5tYXV0aWNmb3JtLXBhZ2VicmVhay13cmFwcGVyIC5tYXV0aWNmb3JtLXBhZ2VicmVhayB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zODU2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tYnV0dG9uLXdyYXBwZXIgLm1hdXRpY2Zvcm0tYnV0dG9uLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXSxcbiAgICAubWF1dGljZm9ybS1wYWdlYnJlYWstd3JhcHBlciAubWF1dGljZm9ybS1wYWdlYnJlYWsuYnRuLWRlZmF1bHRbZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xuICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLXBhZ2VicmVhay13cmFwcGVyIC5tYXV0aWNmb3JtLWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgICNtYXV0aWNmb3JtX2lucHV0X2NvbnRhY3Rvc21haWxzaGllZF9zdWJtaXQge1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjAwLCA4Myk7XG4gICAgfVxuXG4gICAgLnBhZ2luYV9wcmluY2lwYWxfOHtcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQUVEO1xuICAgIH1cbiAgICBcbiAgICAjdGl0dWxvXzgge1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm11bGFyaW8ge1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgOjpwbGFjZWhvbGRlcntcbiAgICAgICAgY29sb3I6ICMyMzNERjk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG5cbn1cblxuLyogIFJFU1BPTlNFIE9SREVOQURPUkVTIFkgUExBTlRBTExBUyBHUkFOREVTICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDI1NjBweCkgeyAvKiAyNTYwIMOXIDI1NjAgKi9cbiAgICBcbiAgICAucGFnaW5hX3ByaW5jaXBhbF8xIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzM0RGOTtcbiAgICAgICAgcGFkZGluZzogNjBweCAzNXB4O1xuICAgIH1cblxuICAgICN0aXR1bG9fMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG5cbiAgICAubG9nb193aGl0ZXtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgI2Rlc2NyaXBjaW9uXzEge1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICB3aWR0aDphdXRvO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmhleGFnb25vc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmhleGFnb25ve1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhBRkZBO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDEwcHg7XG4gICAgfSAgXG5cbiAgICAuaGV4YWdvbm86OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuaGV4YWdvbm86OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICBcbiAgICAuaGV4YWdvbm8tY29udGVudHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjc1cztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLmJ0bl9kZW1vIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMDAsIDgzKTtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7ICAgXG4gICAgfVxuXG4gICAgLyogRElBUE9TSVRJVkEgMiAqL1xuXG4gICAgLnBhZ2luYV9wcmluY2lwYWxfMntcbiAgICAgICAgcGFkZGluZzogNjBweCAzNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQUVEO1xuICAgIH1cblxuICAgICN0aXR1bG9fMiB7XG4gICAgICAgIGNvbG9yOiAjMjMzREY5O1xuICAgICAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgICNkZXNjcmlwY2lvbl8yIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgfVxuXG4gICAgLmxvZ29fYmxhY2t7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuXG4gICAgLmhhY2tlcntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICB9XG5cbiAgICAvKiBESUFQT1NJVElWQSAzIC0gICovXG4gICAgXG4gICAgLnBhZ2luYV9wcmluY2lwYWxfMyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzNERjk7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMzVweDtcbiAgICB9XG5cbiAgICAjdGl0dWxvXzMge1xuICAgICAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjZGVzY3JpcGNpb25fMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweFxuICAgIH1cblxuICAgIC5ncnVwby1oZXhhZ29ub3N7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLyogRElBUE9TSVRPVkEgNCAqL1xuXG4gICAgI3RpdHVsb180IHtcbiAgICAgICAgY29sb3I6ICMyMzNERjk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNjBweCAzNXB4IDI1cHggMzVweDtcbiAgICB9XG5cbiAgICAuYWNjb3JkaW9uIHtcbiAgICAgICAgcGFkZGluZzogMjVweCAxNXB4O1xuICAgIH1cblxuICAgIC5hY2NvcmRpb24tYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRUJFQUVEO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBib3gtc2hhZG93OiAjRUJFQUVEO1xuICAgIH1cbiAgICAuYWNjb3JkaW9uLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUFFRDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBvdmVyZmxvdy1hbmNob3I6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCxib3JkZXItcmFkaXVzIC4xNXMgZWFzZTtcbiAgICB9XG5cbiAgICAuYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCkge1xuICAgICAgICBjb2xvcjogd2hpdGU7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig2OCwgNjgsIDY4KTtcbiAgICB9XG4gICAgLmFjY29yZGVvbi1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQUVEO1xuICAgIH1cblxuICAgIC8qIERJQVBPU0lUSVZBIDUgLSAgKi9cblxuICAgIC5wYWdpbmFfcHJpbmNpcGFsXzV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzNERjk7XG4gICAgICAgIHBhZGRpbmc6IDM1cHggMzVweCAyNXB4IDM1cHg7XG4gICAgfSBcblxuICAgICN0aXR1bG9fNXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIC5saXN0LWdyb3VwLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVBRUQ7XG4gICAgfVxuXG4gICAgLnRpdHVsby1saXN0YXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG5cbiAgICAuYmktY2hlY2t7XG4gICAgICAgIGNvbG9yOiByZ2IoNzgsIDE4MiwgMTIyKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIC5iaS14LWNpcmNsZXtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xuICAgIH1cblxuICAgIC5wcmVjaW9fbGlzdGF7XG4gICAgICAgIGNvbG9yOiAjMjMzREY5O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgI3N1YnRpdHVsb181e1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLmJ0bi1jb21wcmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjAwLCA4Myk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIC8qIERJQVBPU0lWQSA2IC0gICovXG5cbiAgICAucGFnaW5hX3ByaW5jaXBhbF82e1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDM1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI3RpdHVsb182e1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3BhcnRhbicsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gICAgI2Rlc2NyaXBjaW9uXzZ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmhvcm5ldHNlY3VyaXR5e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuXG4gICAgLyogRElBUE9TSVRPVkEgNyAtIEJMT0cgKi9cblxuICAgIC5wYWdpbmFfcHJpbmNpcGFsXzd7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzNERjk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgICN0aXR1bG9fN3tcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5mb25kb3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUFFRDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgICNpbWctYmxvZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIH0gXG5cbiAgICBoM3tcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAjaW5mby1ibG9nIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogbm9uZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAjbGVlci1tYXMge1xuICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDVweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMjAwLCA4Myk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZGVzcGxlZ2FyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiA5cHggMjRweCA3cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGNvbG9yOiAjQzAwO1xuICAgICAgICBvdXRsaW5lLWNvbG9yOiAjQzAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIH0gXG5cbiAgICAvKiAgRElBUE9TSVRJVkEgOCAtIENPTlRBQ1RBTk9TICovICAgIFxuXG4gICAgLm1hdXRpY2Zvcm1fd3JhcHBlciB7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAubWF1dGljZm9ybS1uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1lcnJvciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tbWVzc2FnZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLXJvdy5tYXV0aWNmb3JtLXJlcXVpcmVkIC5tYXV0aWNmb3JtLWxhYmVsOmFmdGVyIHtcbiAgICAgICAgY29sb3I6ICNlMzI7XG4gICAgICAgIGNvbnRlbnQ6IFwiICpcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLWhlbHBtZXNzYWdlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1lcnJvcm1zZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tc2VsZWN0Ym94LFxuICAgIC5tYXV0aWNmb3JtLWlucHV0LFxuICAgIC5tYXV0aWNmb3JtLXRleHRhcmVhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjZmZmIGluc2V0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLWNoZWNrYm94Z3JwLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAubWF1dGljZm9ybS1yYWRpb2dycC1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tYnV0dG9uLXdyYXBwZXIgLm1hdXRpY2Zvcm0tYnV0dG9uLmJ0bi1kZWZhdWx0LFxuICAgIC5tYXV0aWNmb3JtLXBhZ2VicmVhay13cmFwcGVyIC5tYXV0aWNmb3JtLXBhZ2VicmVhay5idG4tZGVmYXVsdCB7XG4gICAgICAgIGNvbG9yOiAjNWQ2YzdjO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tYnV0dG9uLXdyYXBwZXIgLm1hdXRpY2Zvcm0tYnV0dG9uLFxuICAgIC5tYXV0aWNmb3JtLXBhZ2VicmVhay13cmFwcGVyIC5tYXV0aWNmb3JtLXBhZ2VicmVhayB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zODU2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1hdXRpY2Zvcm0tYnV0dG9uLXdyYXBwZXIgLm1hdXRpY2Zvcm0tYnV0dG9uLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXSxcbiAgICAubWF1dGljZm9ybS1wYWdlYnJlYWstd3JhcHBlciAubWF1dGljZm9ybS1wYWdlYnJlYWsuYnRuLWRlZmF1bHRbZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xuICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cblxuICAgIC5tYXV0aWNmb3JtLXBhZ2VicmVhay13cmFwcGVyIC5tYXV0aWNmb3JtLWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgICNtYXV0aWNmb3JtX2lucHV0X2NvbnRhY3Rvc21haWxzaGllZF9zdWJtaXQge1xuICAgICAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjAwLCA4Myk7XG4gICAgfVxuXG4gICAgLnBhZ2luYV9wcmluY2lwYWxfOHtcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQUVEO1xuICAgIH1cbiAgICBcbiAgICAjdGl0dWxvXzgge1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTcGFydGFuJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm11bGFyaW8ge1xuICAgICAgICBjb2xvcjogIzIzM0RGOTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgXG4gICAgOjpwbGFjZWhvbGRlcntcbiAgICAgICAgY29sb3I6ICMyMzNERjk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG5cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/TOSHIBA EXT/Hornet/email2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map