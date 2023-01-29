exports.ids = [8,2,4];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("420f9b12", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("68351f08", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rsvp.vue?vue&type=template&id=3502627b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "rsvp"
  }, [_vm._ssrNode("<form data-v-3502627b><fieldset data-v-3502627b><legend class=\"legend\" data-v-3502627b>Will you be coming to the wedding?</legend> <div class=\"flex-wrap space-y-2 md:space-y-0 md:space-x-2 md:flex\" data-v-3502627b><label for=\"yes\" data-v-3502627b><span class=\"flex flex-col items-center justify-center\" data-v-3502627b><span data-v-3502627b>Yes</span> <input type=\"radio\" name=\"curry\" id=\"yes\" value=\"yes\"" + _vm._ssrAttr("checked", _vm._q(_vm.form.coming, "yes")) + " data-v-3502627b></span></label> <label for=\"no\" data-v-3502627b><span class=\"flex flex-col items-center justify-center\" data-v-3502627b><span data-v-3502627b>No</span> <input type=\"radio\" name=\"curry\" id=\"no\" value=\"no\"" + _vm._ssrAttr("checked", _vm._q(_vm.form.coming, "no")) + " data-v-3502627b></span></label></div></fieldset> <fieldset data-v-3502627b><legend class=\"legend\" data-v-3502627b>Name</legend><input type=\"text\" name=\"name\" placeholder=\"Enter name\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.name) + " class=\"input--text\" data-v-3502627b></fieldset> <fieldset data-v-3502627b><legend class=\"legend\" data-v-3502627b>Email</legend><input type=\"email\" name=\"email\" placeholder=\"Enter email\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.email) + " class=\"input--text\" data-v-3502627b></fieldset> <fieldset data-v-3502627b><legend class=\"legend\" data-v-3502627b>Telephone</legend><input type=\"tel\" name=\"tel\" placeholder=\"Enter telephone\" required=\"required\"" + _vm._ssrAttr("value", _vm.form.tel) + " class=\"input--text\" data-v-3502627b></fieldset> <fieldset data-v-3502627b><legend class=\"legend\" data-v-3502627b>Any dietary requirements</legend><textarea placeholder=\"Any dietary requirements\" name=\"message\" class=\"input--area\" data-v-3502627b>" + _vm._ssrEscape(_vm._s(_vm.form.message)) + "</textarea></fieldset> <button type=\"submit\" class=\"button\" data-v-3502627b>Send</button></form>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Rsvp.vue?vue&type=template&id=3502627b&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(29);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rsvp.vue?vue&type=script&lang=js&

/* harmony default export */ var Rsvpvue_type_script_lang_js_ = ({
  name: 'Rsvp',
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit: async function () {
      const formData = new FormData();
      for (let [key, value] of Object.entries(this.form)) {
        formData.append(key, value);
      }
      await external_axios_default.a.post("https://formeezy.com/api/v1/forms/63b03a9894eaba0008113531/submissions", formData).then(({
        data
      }) => {
        const {
          redirect
        } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      }).catch(e => {
        window.location.href = e.response.data.redirect;
      });
    }
  }
});
// CONCATENATED MODULE: ./components/Rsvp.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Rsvpvue_type_script_lang_js_ = (Rsvpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Rsvp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Rsvpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3502627b",
  "0de13263"
  
)

/* harmony default export */ var Rsvp = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rsvp_vue_vue_type_style_index_0_id_3502627b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rsvp_vue_vue_type_style_index_0_id_3502627b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rsvp_vue_vue_type_style_index_0_id_3502627b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rsvp_vue_vue_type_style_index_0_id_3502627b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rsvp_vue_vue_type_style_index_0_id_3502627b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rsvp[data-v-3502627b]{display:flex;align-items:center;flex-direction:column;justify-content:center;padding:30px}.button[data-v-3502627b]{background-color:#efd6af;border:none;color:#000;padding:15px 32px 10px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;cursor:pointer;width:100%;font-family:\"Rig-Face\"}fieldset[data-v-3502627b]{border:0;margin:0 0 20px;padding:0}.input--area[data-v-3502627b],.input--text[data-v-3502627b]{font-family:\"Rig-Face\";padding:15px;border:1px solid #ccc;border-radius:3px;width:100%;box-sizing:border-box;font-size:13px}.legend[data-v-3502627b]{margin:0 0 5px;padding:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro.vue?vue&type=template&id=fce7c90e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "intro"
  }, [_vm._ssrNode("<p data-v-fce7c90e>Hello!!! We are getting married this year and would love to have you celebrate with us!\nWe are tying the knot at 12.30pm on the 15th July 2023 at Tros Y Afon near Beaumaris.\nFull details will come closer to the time!\nHope to see you and your best dance moves there!!</p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Intro.vue?vue&type=template&id=fce7c90e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro.vue?vue&type=script&lang=js&
/* harmony default export */ var Introvue_type_script_lang_js_ = ({
  name: 'Intro'
});
// CONCATENATED MODULE: ./components/Intro.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Introvue_type_script_lang_js_ = (Introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Intro.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Introvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fce7c90e",
  "0d87d074"
  
)

/* harmony default export */ var Intro = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_fce7c90e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_fce7c90e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_fce7c90e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_fce7c90e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_fce7c90e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".intro[data-v-fce7c90e]{max-width:600px;margin:0 auto 60px;padding:0 30px;text-align:center}h1[data-v-fce7c90e],h2[data-v-fce7c90e]{text-transform:uppercase}h2[data-v-fce7c90e]{color:#d5ab55}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/leaves.6bee715.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.61505e6.png";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.551577c.png";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.ea4bd10.png";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/4.7ff85e9.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/6.07b3cb6.png";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/5.53eb1c9.png";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("02e453c0", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f1c336b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f1c336b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f1c336b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f1c336b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f1c336b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-f1c336b2]{padding:0 0 100px}.heading[data-v-f1c336b2]{display:flex;align-items:center;flex-direction:column;justify-content:center;text-align:center;margin:0 0 60px}.image[data-v-f1c336b2]{width:100%;max-width:100%;margin:0 auto;display:block}.polaroids[data-v-f1c336b2]{display:grid;grid-template-columns:1fr;grid-gap:10px;gap:10px;margin:0 0 100px;padding:0 40px}@media (min-width:1250px){.polaroids[data-v-f1c336b2]{grid-template-columns:repeat(3,1fr)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=f1c336b2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", __webpack_require__(38)) + " class=\"image\" data-v-f1c336b2> <div class=\"heading\" data-v-f1c336b2><h1 data-v-f1c336b2>ABBY</h1> <h2 data-v-f1c336b2>And</h2> <h1 data-v-f1c336b2>Alister</h1> <h3 data-v-f1c336b2>15 JULY 2023 @ 12.00PM</h3> <h4 data-v-f1c336b2>Tros yr afon<br data-v-f1c336b2>Beaumaris<br data-v-f1c336b2>Isle of anglesey<br data-v-f1c336b2>LL58 8RN\n  </h4></div> <div class=\"polaroids\" data-v-f1c336b2><img" + _vm._ssrAttr("src", __webpack_require__(39)) + " class=\"image\" data-v-f1c336b2> <img" + _vm._ssrAttr("src", __webpack_require__(40)) + " class=\"image\" data-v-f1c336b2> <img" + _vm._ssrAttr("src", __webpack_require__(41)) + " class=\"image\" data-v-f1c336b2> <img" + _vm._ssrAttr("src", __webpack_require__(42)) + " class=\"image\" data-v-f1c336b2> <img" + _vm._ssrAttr("src", __webpack_require__(43)) + " class=\"image\" data-v-f1c336b2> <img" + _vm._ssrAttr("src", __webpack_require__(44)) + " class=\"image\" data-v-f1c336b2></div> "), _c('Intro'), _vm._ssrNode(" "), _c('Rsvp')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=f1c336b2&scoped=true&

// EXTERNAL MODULE: ./components/Rsvp.vue + 4 modules
var Rsvp = __webpack_require__(32);

// EXTERNAL MODULE: ./components/Intro.vue + 4 modules
var Intro = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    Rsvp: Rsvp["default"],
    Intro: Intro["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f1c336b2",
  "5f8dbef6"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Intro: __webpack_require__(35).default,Rsvp: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=index.js.map