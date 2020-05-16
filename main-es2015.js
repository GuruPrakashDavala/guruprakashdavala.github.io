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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutme/aboutme.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutme/aboutme.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row custom-padding\">\r\n  <div class=\"col-xs-12 img-padding\">\r\n    <!-- Github Pages Production Build Tag -->\r\n    <!-- <img class=\"about-img-size\" src=\"assets/images/Passport 2.png\" alt=\"\" class=\"about-img\"> -->\r\n    <img class=\"about-img-size\" src=\"../../assets/images/Passport2.png\" alt=\"\" class=\"about-img\">\r\n    <h2 class=\"port-vert-space about-name\">\r\n      <strong>Guru Prakash <span class=\"text-primary\">Davala</span> </strong>\r\n    </h2>\r\n    <div class=\"subheading about-name\">(+91) 8870808938 |\r\n      <a href=\"mailto:guru.govindaraj@gmail.com\" class=\"about-mail\">guru.govindaraj@gmail.com</a>\r\n      <div class=\"port-vert-space\">\r\n        <!-- <button (click)=\"scroll(target)\">scroll</button> -->\r\n        <a href=\"https://www.linkedin.com/in/guru-prakash-davala-73125b125\" target=\"_blank\" class=\"fw-icons icn-size\"><i class=\"fab fa-linkedin\"></i></a>\r\n        <a href=\"https://github.com/GuruPrakashDavala\" target=\"_blank\" class=\"fw-icons icn-size\"><i class=\"fab fa-github\"></i></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex align-items-center\">\r\n      <p class=\"lead description-text main-info-padding\">\r\n        Talented Individual with strong communication skills, team spirit, and\r\n        masters in software engineering with 2+ years of software development experience. Bringing expertise in\r\n        writing full-stack code to support multiple platforms, including web and mobile.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <div class=\"align-items-center\">\r\n      <p class=\"lead description-text question-text\">What do you enjoy the most about being a Software Developer ?</p>\r\n      <p class=\"lead description-text\">\r\n        Creating solutions to solve a problem and getting a feeling of accomplishment when done.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <div class=\"align-items-center\">\r\n      <p class=\"lead description-text question-text\">If you could master any one technology, language or framework this\r\n        upcoming year, what would that be and why?\r\n      </p>\r\n      <p class=\"lead description-text\">\r\n        I'm proficient in front-end technologies. Now I would like\r\n        to master Full Stack Software Development.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <div class=\"align-items-center\">\r\n      <p class=\"lead description-text question-text\">What are the qualities you most desire in a work environment ?</p>\r\n      <p class=\"lead description-text\">I want to be around people that are as passionate as I am about software development.\r\n        Working with people that are as excited to learn as I am provides one of the best experiences and encourages\r\n        personal and professional growth.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\" #target>\r\n    <div class=\"align-items-center\">\r\n      <p class=\"lead description-text question-text\">How Do You Plan To Achieve Your Career Goals ?</p>\r\n      <p class=\"lead description-text\">I will continue my professional development by participating in conferences,\r\n        attending seminars, and continuing my education.</p>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <h1 routerLink=\"aboutme\" (click)=\"checkNav(sidenav)\" class=\"home\"><i class=\"fas fa-home\"></i></h1>\r\n  </mat-toolbar-row>\r\n  <!-- \r\n  <mat-toolbar-row>\r\n      <span style=\"font-size: 12px;\">SimpleCRM helps you easily manage your contacts</span>\r\n    </mat-toolbar-row> -->\r\n</mat-toolbar>\r\n<mat-sidenav-container>\r\n  <mat-sidenav [class.set-width]=\"!isLargeScreen()\" #sidenav [mode]=\"isLargeScreen() ? 'side' : 'over'\" [opened]=\"isLargeScreen()\">\r\n    <mat-nav-list>\r\n      <a (click)=\"checkNav(sidenav)\" mat-list-item routerLink=\"aboutme\" routerLinkActive=\"active\">\r\n        <i class=\"fas fa-user icon-margin\"></i> About Me\r\n      </a>\r\n      <a mat-list-item (click)=\"checkNav(sidenav)\" routerLink=\"experience\" routerLinkActive=\"active\"> \r\n        <i class=\"fas fa-suitcase icon-margin\"></i> Experience \r\n      </a>\r\n      <a mat-list-item (click)=\"checkNav(sidenav)\" routerLink=\"projects\" routerLinkActive=\"active\"> \r\n        <i class=\"fas fa-tasks icon-margin\"></i> Projects\r\n       </a>\r\n      <a mat-list-item (click)=\"checkNav(sidenav)\" routerLink=\"education\" routerLinkActive=\"active\"> \r\n        <i class=\"fas fa-university icon-margin\"></i> Education \r\n      </a>\r\n      <a mat-list-item (click)=\"checkNav(sidenav)\" routerLink=\"skills\" routerLinkActive=\"active\"> \r\n        <i class=\"fas fa-laptop-code icon-margin\"></i> Skills & Interests \r\n      </a>\r\n      <!-- <a mat-list-item (click)=\"checkNav(sidenav)\" routerLink=\"interests\" routerLinkActive=\"active\"> \r\n        Interest \r\n      </a> -->\r\n      <!-- <a mat-list-item routerLink=\"awards\" routerLinkActive=\"active\"> Awards </a> -->\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <div class=\"side-content\">\r\n      <div class=\"container-fluid\" style=\"margin-top: 60px;\" #container>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>awards works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-padding\">\r\n    <div class=\"head-padding-bottom d-flex align-items-center\">\r\n        <h2 class=\"heading-text\">\r\n            <strong>Education</strong>\r\n        </h2>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-xs-8\">\r\n            <p class=\"description-text designation-text\">\r\n                <strong>VIT University</strong><br>\r\n                <span>Master of Science in Software Engineering (5 year integrated course)</span>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-4\">\r\n            <p class=\"period float-right\">\r\n                June 2012 - May 2017\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-12 col-xs-12\">\r\n            <p class=\"description-text\">\r\n                Relevant Modules: Software Engineering , Human Computer Interaction, Information Systems and Web\r\n                Technologies.\r\n            </p>\r\n            <p class=\"description-text\">\r\n                CGPA - 7.14\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-8 col-xs-8\">\r\n            <p class=\"description-text designation-text\">\r\n                <strong>Sri Venkateswara Mat.Hr.Sec School</strong><br>\r\n                <span>XII Grade</span>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-4\">\r\n            <p class=\"period float-right\">\r\n                April 2011 - April 2012\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-12 col-xs-12\">\r\n            <p class=\"description-text\">\r\n                Relevant Modules: Computer Science Group\r\n            </p>\r\n            <p class=\"description-text\">\r\n                Percentage:79.9%\r\n            </p>\r\n        </div>\r\n        \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-padding\">\r\n    <div class=\"head-padding-bottom d-flex align-items-center\">\r\n        <h2 class=\"heading-text\">\r\n            <strong>Exprience</strong>\r\n        </h2>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-xs-8\">\r\n            <p class=\"description-text designation-text\">\r\n                <strong>Senior Systems Engineer</strong><br>\r\n                <span>Infosys Limited, Bengaluru</span>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-4\">\r\n            <p class=\"period float-right\">\r\n                Oct 2019 - Present\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-12 col-xs-12\">\r\n            <p class=\"description-text\">\r\n                1. Logito Web-App - Efficient biometric attendance tracking\r\n            </p>\r\n            <p>\r\n                Say goodbye to the old and tiresome process of leave approvals over phone or emails. Our cloud based\r\n                leave tracker lets your employees and managers tackle leave requests with ease. You can view employee\r\n                leave balance, holiday list or any other records anytime anywhere. Our leave management software\r\n                provides excellent flexibility to various leave requests\r\n            </p>\r\n            <ul>\r\n                <li>\r\n                    Cooperating with the back-end developer in the process of building the RESTful API.\r\n                </li>\r\n                <li>\r\n                    Communicating with external web services.\r\n                </li>\r\n                <li>\r\n                    Creating self-contained, reusable, and testable modules and components.\r\n                </li>\r\n                <li>\r\n                    Creating custom, general use modules and components which extend the elements and modules of core\r\n                    AngularJS.\r\n                </li>\r\n                <li>\r\n                    Creating configuration, build, and test scripts for Continuous Integration environments.\r\n                </li>\r\n                <li>\r\n                    Experience with building the infrastructure for serving the front-end app and assets.\r\n                </li>\r\n                <li>\r\n                    Validating user actions on the client side and providing responsive feedback.\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-8 col-xs-8\">\r\n            <p class=\"description-text designation-text\">\r\n                <strong>Software Engineer</strong><br>\r\n                <span>RheinBrucke IT Consulting Pvt Ltd, Chennai</span>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-4\">\r\n            <p class=\"period float-right\">\r\n                Nov 2017 - Sep 2019\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-12 col-xs-12\">\r\n            <p class=\"description-text\">\r\n                1. Application facilitating the user to deal with the entire process of Balances and Test Services\r\n            </p>\r\n            <ul>\r\n                <li>\r\n                    Involved in developing the project which implements the entire process of Balances and Test Services\r\n                    (Manufacturing Industry). This project helps the user cover all parts of the lab tests for\r\n                    industrial equipments.\r\n                </li>\r\n                <li>\r\n                    Experienced in writing Angular code for developing Single Page Application (SPA), used several\r\n                    inbuilt language core directives, expressions and modules.\r\n                </li>\r\n                <li>\r\n                    Used AngularJS MVC Framework in the development of the web application to bind the data/model that\r\n                    was retrieved from a database through services provided in a controller to view using scope.\r\n                </li>\r\n                <li>\r\n                    Predominantly worked as a Full Stack Developer using AngularJS, SQLite and Cordova Framework.\r\n                </li>\r\n            </ul>\r\n            <p class=\"description-text\">\r\n                2. Licensing Web App Using C# and Web API.\r\n            </p>\r\n            <ul>\r\n                <li>\r\n                    Developed License App with Encryption and Decryption technique and hosted it in Azure. Web API and\r\n                    C# were used to develop this application.\r\n                </li>\r\n                <li>\r\n                    Involved in enhancing the existing applications by adding more features and testing the application.\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/interests/interests.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interests/interests.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-padding\">\r\n    <div class=\"head-padding-bottom d-flex align-items-center\">\r\n        <h2 class=\"heading-text\">\r\n            <strong>Interests</strong>\r\n        </h2>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-xs-12\">\r\n            <p class=\"description-text\">\r\n                Apart from being a software developer, I enjoy most of my time being outdoors.\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row custom-padding d-flex\">\r\n    <div class=\"col-md-12 d-flex align-items-center\">\r\n        <h2 class=\"heading-text\">\r\n            <strong>Projects</strong>\r\n        </h2>\r\n    </div>\r\n<div class=\"col-md-4 col-xs-12 pad\">\r\n    <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n            <!-- <img mat-card-avatar src=\"../../assets/images/Passport 2.png\"></img> -->\r\n             <!-- Github Pages Production Build Tag -->\r\n            <!-- <img mat-card-avatar src=\"assets/images/food.png\"> -->\r\n            <img mat-card-avatar src=\"../../assets/images/food.png\">\r\n            <mat-card-title>Restaurant POS APP</mat-card-title>\r\n            <mat-card-subtitle>POS System</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n        <mat-card-content>\r\n                Quick Billing Point of Sale is a web based point of sale system. The main features are:\r\n                <ul>\r\n                    <li>\r\n                        Role Based User Authentication\r\n                    </li>\r\n                    <li>\r\n                        Cashier, Admin, Server Modules\r\n                    </li>\r\n                    <li>\r\n                        Kitchen Order Management\r\n                    </li>\r\n                    <li>\r\n                        Sale register with transactions logging\r\n                    </li>\r\n                    <li>\r\n                        Sales Report\r\n                    </li>\r\n                </ul>\r\n            \r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button onClick=\"window.open('https://guruprakashdavala.github.io/RestaurantPOS/')\" mat-flat-button color=\"primary\">See it Live</button>\r\n            <button onClick=\"window.open('https://github.com/GuruPrakashDavala/RestaurantPOS')\" mat-flat-button color=\"primary\" class=\"margin-left-5\">View Source Code</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\r\n<!-- <div class=\"col-md-4 col-xs-12 pad\">\r\n    <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n            <mat-card-title>POS APP</mat-card-title>\r\n            <mat-card-subtitle>POS System</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <p>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A\r\n                small,\r\n                agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for\r\n                hunting.\r\n            </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-flat-button color=\"primary\">See it Live</button>\r\n            <button mat-flat-button>View Source Code</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\r\n<div class=\"col-md-4 col-xs-12 pad\">\r\n    <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n            <mat-card-title>POS APP</mat-card-title>\r\n            <mat-card-subtitle>POS System</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <p>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A\r\n                small,\r\n                agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for\r\n                hunting.\r\n            </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-flat-button color=\"primary\">See it Live</button>\r\n            <button mat-flat-button>View Source Code</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div> -->\r\n<!-- <div class=\"col-md-4 col-xs-12 pad\">\r\n    <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n            <mat-card-title>POS APP</mat-card-title>\r\n            <mat-card-subtitle>POS System</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <p>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A\r\n                small,\r\n                agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for\r\n                hunting.\r\n            </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-flat-button color=\"primary\">See it Live</button>\r\n            <button mat-flat-button>View Source Code</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\r\n<div class=\"col-md-4 col-xs-12 pad\">\r\n    <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n            <mat-card-title>POS APP</mat-card-title>\r\n            <mat-card-subtitle>POS System</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <p>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A\r\n                small,\r\n                agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for\r\n                hunting.\r\n            </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-flat-button color=\"primary\">See it Live</button>\r\n            <button mat-flat-button>View Source Code</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>\r\n<div class=\"col-md-4 col-xs-12 pad\">\r\n    <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\"></div>\r\n            <mat-card-title>POS APP</mat-card-title>\r\n            <mat-card-subtitle>POS System</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <p>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A\r\n                small,\r\n                agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for\r\n                hunting.\r\n            </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-flat-button color=\"primary\">See it Live</button>\r\n            <button mat-flat-button>View Source Code</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div> -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-padding\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <h2 class=\"heading-text\">\r\n            <strong>Skills</strong>\r\n        </h2>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-xs-12\">\r\n            <p class=\"description-text designation-text\">\r\n                <strong>Programming Languages and Tools</strong>\r\n                <!-- <span>Infosys Limited</span> -->\r\n            </p>\r\n            <div class=\"port-vert-space\">\r\n                <a class=\"fw-icons\" title=\"HTML5\"><i class=\"fab fa-html5\"></i></a>\r\n                <a class=\"fw-icons\" title=\"CSS3\"><i class=\"fab fa-css3-alt\"></i></a>\r\n                <a class=\"fw-icons\" title=\"JavaScript\"><i class=\"fab fa-js-square\"></i></a>\r\n                <a class=\"fw-icons\" title=\"Angular\"><i class=\"fab fa-angular\"></i></a>\r\n                <a class=\"fw-icons\" title=\"NodeJs\"><i class=\"fab fa-node-js\"></i></a>\r\n                <a class=\"fw-icons\" title=\"Npm\"><i class=\"fab fa-npm\"></i></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-8 col-xs-8\">\r\n            <p class=\"description-text designation-text\">\r\n                <strong>Workflow</strong><br>\r\n                <!-- <span>RheinBrucke IT Consulting Pvt Ltd</span> -->\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-12 col-xs-12\">\r\n            <ul>\r\n                <li>\r\n                    <!-- <i class=\"fa-li fa fa-check\"></i> -->\r\n                    Mobile-First, Responsive Design\r\n                </li>\r\n                <li>\r\n                    <!-- <i class=\"fa-li fa fa-check\"></i> -->\r\n                    Cross Browser Testing & Debugging\r\n                </li>\r\n                <li>\r\n                    <!-- <i class=\"fa-li fa fa-check\"></i> -->\r\n                    Cross Functional Teams\r\n                </li>\r\n                <li>\r\n                    <!-- <i class=\"fa-li fa fa-check\"></i> -->\r\n                    Agile Development & Scrum\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-12 col-xs-12\">\r\n            <h2 class=\"heading-text\">\r\n                <strong>Interests</strong>\r\n            </h2>\r\n            <div class=\"col-md-12 col-xs-12\">\r\n                <p class=\"description-text\">\r\n                    Apart from being a software developer, I enjoy most of my time being outdoors.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<style>\r\n    .fw-icons {\r\n        height: 4.5rem;\r\n        width: 4.5rem;\r\n        /* background-color: #495057; */\r\n        font-size: 2.5rem;\r\n        line-height: 4.5rem;\r\n        margin-top: .5rem;\r\n    }\r\n\r\n    /* ul {\r\n        list-style-type: none;\r\n    } */\r\n</style>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/aboutme/aboutme.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-img{\r\n    border-radius: 999px;\r\n    max-width: 125px;\r\n    display: block;\r\n    margin: auto;\r\n    border: 2px solid #563d7c;\r\n    /* border: 2px solid #3f729b; */\r\n}\r\n.about-name{\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    color: #343a40;\r\n    text-align: center;\r\n}\r\n.h3, h3 {\r\n    font-size: 28px;\r\n}\r\n.about-mail{\r\n    text-transform: uppercase;\r\n    /* color: #563d7c!important; */\r\n}\r\n.question-text{\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n.img-padding{\r\n    padding-top: 1rem;\r\n}\r\n.icn-size{\r\n    font-size: 28px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hYm91dG1lL2Fib3V0bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIG1heC13aWR0aDogMTI1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NjNkN2M7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCAjM2Y3MjliOyAqL1xyXG59XHJcbi5hYm91dC1uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzM0M2E0MDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaDMsIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4uYWJvdXQtbWFpbHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAvKiBjb2xvcjogIzU2M2Q3YyFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLnF1ZXN0aW9uLXRleHR7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uaW1nLXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG4uaWNuLXNpemV7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutmeComponent = class AboutmeComponent {
    constructor() { }
    ngOnInit() {
        const element = document.querySelector('mat-sidenav-content') || window;
        element.scrollTo(0, 0);
    }
    scroll(el) {
        console.log(el);
        el.scrollIntoView({ behavior: 'smooth' });
    }
};
AboutmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aboutme',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutme.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutme/aboutme.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aboutme.component.css */ "./src/app/aboutme/aboutme.component.css")).default]
    })
], AboutmeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");









const routes = [
    { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
    { path: 'aboutme', component: _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__["AboutmeComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"] },
    { path: 'projects', component: _project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"] },
    { path: 'education', component: _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"] },
    { path: 'interests', component: _interests_interests_component__WEBPACK_IMPORTED_MODULE_8__["InterestsComponent"] },
    { path: '**', redirectTo: 'aboutme' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\r\n    justify-content: space-between;\r\n}\r\nspan{\r\n    padding-right: 1rem;\r\n}\r\nmat-sidenav{\r\n    position: fixed;\r\n    top: 55px;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0;\r\n    min-width: 200px;\r\n    background-color: #fff;\r\n    box-shadow: 6px 0 6px rgba(0,0,0,.1);\r\n}\r\n.mat-drawer-container{\r\n    background-color:#fff!important ;\r\n}\r\n.set-width{\r\n    min-width: 250px!important;\r\n}\r\n/* h1, h2, h3, h4, h5, h6 {\r\n    font-family: League Gothic,Arial Narrow,Impact,sans-serif;\r\n} */\r\nmat-sidenav-container{\r\n    height: 100%;\r\n}\r\nmat-nav-list a:hover {\r\n    transition: background-color .2s;\r\n    background-color: #dbdbdb;\r\n    color: #1976d2;\r\n    /* color:#3f729b !important; */\r\n    /* text-shadow: 0 0 5px #fff; */\r\n}\r\nmat-toolbar.mat-toolbar {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);\r\n}\r\n.mat-toolbar.mat-primary {\r\n    /* background: #563d7c; */\r\n     background: #563d7c; \r\n     /* background: #3f729b !important; */\r\n    /* background: #bd5d38!important; */\r\n    /* background: #95b232; */\r\n    color: #fff;\r\n}\r\nmat-nav-list a{\r\n    text-transform: uppercase;\r\n    color: #444;\r\n    /* font-size: 1.4rem; */\r\n    font-weight: 400;\r\n}\r\n.mat-nav-list a.active {\r\n    font-weight: 500;\r\n    color: #563d7c!important;\r\n    /* color:#3f729b !important; */\r\n}\r\n.side-content{\r\n    /* height: 100vh; */\r\n    background-color: #fff;\r\n}\r\nmat-nav-list a:hover{\r\n    color: #563d7c!important;\r\n    /* color:#3f729b !important; */\r\n}\r\n.home{\r\n    cursor: pointer;\r\n}\r\n.icon-margin{\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.mat-toolbar-multiple-rows {\r\n    min-height: 55px;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n    height: 55px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLHlCQUF5QjtLQUN4QixtQkFBbUI7S0FDbkIsb0NBQW9DO0lBQ3JDLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuc3BhbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxubWF0LXNpZGVuYXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDAgNnB4IHJnYmEoMCwwLDAsLjEpO1xyXG59IFxyXG4ubWF0LWRyYXdlci1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYhaW1wb3J0YW50IDtcclxufVxyXG4uc2V0LXdpZHRoe1xyXG4gICAgbWluLXdpZHRoOiAyNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLyogaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBmb250LWZhbWlseTogTGVhZ3VlIEdvdGhpYyxBcmlhbCBOYXJyb3csSW1wYWN0LHNhbnMtc2VyaWY7XHJcbn0gKi9cclxubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1hdC1uYXYtbGlzdCBhOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgLyogY29sb3I6IzNmNzI5YiAhaW1wb3J0YW50OyAqL1xyXG4gICAgLyogdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZjsgKi9cclxufVxyXG5tYXQtdG9vbGJhci5tYXQtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjMpO1xyXG59XHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjNTYzZDdjOyAqL1xyXG4gICAgIGJhY2tncm91bmQ6ICM1NjNkN2M7IFxyXG4gICAgIC8qIGJhY2tncm91bmQ6ICMzZjcyOWIgIWltcG9ydGFudDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQ6ICNiZDVkMzghaW1wb3J0YW50OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogIzk1YjIzMjsgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbm1hdC1uYXYtbGlzdCBhe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgLyogZm9udC1zaXplOiAxLjRyZW07ICovXHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5tYXQtbmF2LWxpc3QgYS5hY3RpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNTYzZDdjIWltcG9ydGFudDtcclxuICAgIC8qIGNvbG9yOiMzZjcyOWIgIWltcG9ydGFudDsgKi9cclxufVxyXG4uc2lkZS1jb250ZW50e1xyXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxubWF0LW5hdi1saXN0IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzU2M2Q3YyFpbXBvcnRhbnQ7XHJcbiAgICAvKiBjb2xvcjojM2Y3MjliICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmhvbWV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmljb24tbWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xyXG4gICAgbWluLWhlaWdodDogNTVweDtcclxufVxyXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    // @ViewChild('target', {static: false}) targetElementRef:ElementRef;
    // ngAfterViewInit(){
    //   // this.targetElementRef.nativeElement.focus();
    //   //console.log(this.targetElementRef);
    // }
    constructor() {
        this.title = 'Guru Prakash Davala Portfolio';
    }
    checkNav(sidenav) {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 720) {
            sidenav.open();
        }
        else {
            sidenav.close();
        }
    }
    scroll(el) {
        console.log(el);
        el.scrollIntoView({ behavior: 'smooth' });
    }
    isLargeScreen() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 720) {
            return true;
        }
        else {
            return false;
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_9__["AboutmeComponent"],
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"],
            _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"],
            _interests_interests_component__WEBPACK_IMPORTED_MODULE_15__["InterestsComponent"],
            _awards_awards_component__WEBPACK_IMPORTED_MODULE_16__["AwardsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/awards/awards.component.css":
/*!*********************************************!*\
  !*** ./src/app/awards/awards.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/awards/awards.component.ts":
/*!********************************************!*\
  !*** ./src/app/awards/awards.component.ts ***!
  \********************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AwardsComponent = class AwardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AwardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-awards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./awards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./awards.component.css */ "./src/app/awards/awards.component.css")).default]
    })
], AwardsComponent);



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationComponent = class EducationComponent {
    constructor() { }
    ngOnInit() {
        //this.service.close();
        const element = document.querySelector('mat-sidenav-content') || window;
        element.scrollTo(0, 0);
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
        //window.scrollTo(0, 0);
        // this.service.showSidebar = true;
        const element = document.querySelector('mat-sidenav-content') || window;
        element.scrollTo(0, 0);
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")).default]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/interests/interests.component.css":
/*!***************************************************!*\
  !*** ./src/app/interests/interests.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVyZXN0cy9pbnRlcmVzdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/interests/interests.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interests/interests.component.ts ***!
  \**************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InterestsComponent = class InterestsComponent {
    constructor() { }
    ngOnInit() {
    }
};
InterestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./interests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/interests/interests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./interests.component.css */ "./src/app/interests/interests.component.css")).default]
    })
], InterestsComponent);



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    /* background-image: url('../../assets/images/Passport\\ 1.png'); */\r\n    background-size: cover;\r\n  }\r\n  \r\n  .example-card:hover {\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n  \r\n  .example-card:hover mat-card-title {\r\n    color: #1976d2;\r\n}\r\n  \r\n  .pad{\r\n    padding: 10px;\r\n}\r\n  \r\n  .margin-left-5{\r\n  margin-left:5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrRUFBa0U7SUFDbEUsc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0UsMEVBQTBFO0FBQzlFOztFQUNBO0lBQ0ksY0FBYztBQUNsQjs7RUFDQTtJQUNJLGFBQWE7QUFDakI7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvUGFzc3BvcnRcXCAxLnBuZycpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmV4YW1wbGUtY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxufVxyXG4uZXhhbXBsZS1jYXJkOmhvdmVyIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG59XHJcbi5wYWR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5tYXJnaW4tbGVmdC01e1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectComponent = class ProjectComponent {
    constructor() { }
    ngOnInit() {
        const element = document.querySelector('mat-sidenav-content') || window;
        element.scrollTo(0, 0);
    }
};
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
        const element = document.querySelector('mat-sidenav-content') || window;
        element.scrollTo(0, 0);
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")).default]
    })
], SkillsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular_Projects\myportfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map