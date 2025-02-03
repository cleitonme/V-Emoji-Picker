import {Prop,Component,Vue,Emit,Watch}from'vue-property-decorator';/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
}var langDefault = {
    search: 'Pesquisar...',
    categories: {
        Activity: "Atividades",
        Flags: "Bandeiras",
        Foods: "Comida",
        Frequently: "Frequentes",
        Objects: "Objetos",
        Nature: "Natureza",
        Peoples: "Pessoas",
        Symbols: "Símbolos",
        Places: "Locais"
    }
};var lang = langDefault;
var i18n = function (translations) {
    lang = __assign(__assign({}, langDefault), translations);
};
// Sample parse translation
var t = function (term) {
    var properties = term.split(".");
    var text = lang;
    properties.forEach(function (p) {
        text = text[p];
    });
    return text;
};
var locale = { i18n: i18n, t: t };var Category = /** @class */ (function () {
    function Category(name, icon) {
        this.name = name;
        this.icon = icon;
    }
    Object.defineProperty(Category.prototype, "label", {
        get: function () {
            return t("categories." + this.name);
        },
        enumerable: false,
        configurable: true
    });
    return Category;
}());var icons = {
    activity: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 303.6 303.6\" fill=\"gray\">\n      <path d=\"M291.503 11.6c-10.4-10.4-37.2-11.6-48.4-11.6-50.4 0-122.4 18.4-173.6 69.6-77.2 76.8-78.4 201.6-58.4 222 10.8 10.4 35.6 12 49.2 12 49.6 0 121.2-18.4 173.2-70 76.4-76.4 80.4-199.6 58-222zm-231.2 277.2c-24.4 0-36-4.8-38.8-7.6-5.2-5.2-8.4-24.4-6.8-49.6l57.2 56.8c-4 .4-8 .4-11.6.4zm162.8-66c-38.8 38.8-90.4 57.2-132.4 63.6l-74-73.6c6-42 24-94 63.2-133.2 38-38 88-56.4 130.8-62.8l75.6 75.6c-6 40.8-24.4 91.6-63.2 130.4zm65.2-148.8l-58.8-59.2c4.8-.4 9.2-.4 13.6-.4 24.4 0 35.6 4.8 38 7.2 5.6 5.6 9.2 25.6 7.2 52.4z\"/>\n      <path d=\"M215.103 139.6l-20.8-20.8 13.2-13.2c2.8-2.8 2.8-7.6 0-10.4s-7.6-2.8-10.4 0l-13.2 13.6-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0-2.8 2.8-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-13.2 13.2c-2.8 2.8-2.8 7.6 0 10.4 1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2l13.2-13.2 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-21.2 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-20.8 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4zM169.103 47.6c-1.2-4-5.2-6-9.2-4.8-3.2 1.2-80.8 25.6-110.4 98-1.6 4 0 8.4 4 9.6.8.4 2 .4 2.8.4 2.8 0 5.6-1.6 6.8-4.4 27.2-66 100.4-89.6 101.2-89.6 4-1.2 6-5.2 4.8-9.2z\"/>\n    </svg>\n    ",
    flags: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" fill=\"gray\">\n      <path d=\"M472.928 34.72c-4.384-2.944-9.984-3.52-14.912-1.568-1.088.448-106.528 42.176-195.168.384C186.752-2.4 102.944 14.4 64 25.76V16c0-8.832-7.168-16-16-16S32 7.168 32 16v480c0 8.832 7.168 16 16 16s16-7.168 16-16V315.296c28.352-9.248 112.384-31.232 185.184 3.168 34.592 16.352 70.784 21.792 103.648 21.792 63.2 0 114.016-20.128 117.184-21.408 6.016-2.464 9.984-8.32 9.984-14.848V48c0-5.312-2.656-10.272-7.072-13.28zM448 292.672c-28.512 9.248-112.512 31.136-185.184-3.168C186.752 253.6 102.944 270.4 64 281.76V59.328c28.352-9.248 112.384-31.232 185.184 3.168 76 35.872 159.872 19.104 198.816 7.712v222.464z\"/>\n    </svg>\n    ",
    foods: "\n    <svg style=\"max-height:18px\" width=\"24\" height=\"24\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511.999 511.999\" fill=\"gray\">\n      <path d=\"M413.949 155.583a10.153 10.153 0 0 0-3.24-2.16c-.61-.25-1.24-.44-1.87-.57-3.25-.66-6.701.41-9.03 2.73a10.093 10.093 0 0 0-2.93 7.07 10.098 10.098 0 0 0 1.69 5.56c.36.54.779 1.05 1.24 1.52 1.86 1.86 4.44 2.93 7.07 2.93.65 0 1.31-.07 1.96-.2.63-.13 1.26-.32 1.87-.57a10.146 10.146 0 0 0 3.24-2.16c.47-.47.88-.98 1.25-1.52a10.098 10.098 0 0 0 1.49-3.6 10.038 10.038 0 0 0-2.74-9.03zM115.289 385.873c-.12-.64-.32-1.27-.57-1.87-.25-.6-.55-1.18-.91-1.73-.37-.54-.79-1.06-1.25-1.52a9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.88-.57a9.847 9.847 0 0 0-3.9 0c-.64.13-1.27.32-1.87.57-.61.25-1.19.56-1.73.92-.55.36-1.06.78-1.52 1.24-.46.46-.88.98-1.24 1.52-.36.55-.67 1.13-.92 1.73-.25.6-.45 1.23-.57 1.87-.13.651-.2 1.3-.2 1.96 0 .65.07 1.3.2 1.95.12.64.32 1.27.57 1.87.25.6.56 1.18.92 1.73.36.54.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92.6.25 1.23.44 1.87.57s1.3.2 1.95.2c.65 0 1.31-.07 1.95-.2.64-.13 1.27-.32 1.88-.57.6-.25 1.18-.56 1.72-.92.55-.36 1.059-.78 1.52-1.24.46-.46.88-.98 1.25-1.52.36-.55.66-1.13.91-1.73.25-.6.45-1.23.57-1.87.13-.65.2-1.3.2-1.95 0-.66-.07-1.31-.2-1.96z\"/>\n      <path d=\"M511.999 222.726c0-14.215-9.228-26.315-22.007-30.624-1.628-74.155-62.456-133.978-136.994-133.978H159.002c-74.538 0-135.366 59.823-136.994 133.978C9.228 196.411 0 208.51 0 222.726a32.076 32.076 0 0 0 3.847 15.203 44.931 44.931 0 0 0-.795 8.427v.708c0 14.06 6.519 26.625 16.693 34.833-10.178 8.275-16.693 20.891-16.693 35.001 0 15.114 7.475 28.515 18.921 36.702v26.668c0 40.588 33.021 73.608 73.608 73.608h320.836c40.588 0 73.608-33.021 73.608-73.608V353.6c11.446-8.186 18.921-21.587 18.921-36.702 0-13.852-6.354-26.385-16.361-34.702 9.983-8.212 16.361-20.656 16.361-34.562v-.708c0-2.985-.294-5.944-.877-8.845a32.082 32.082 0 0 0 3.93-15.355zM44.033 173.229h322.441c5.523 0 10-4.477 10-10s-4.477-10-10-10H49.737c16.896-43.883 59.503-75.106 109.265-75.106h193.996c62.942 0 114.438 49.953 116.934 112.295H42.068c.234-5.848.9-11.588 1.965-17.189zM23.052 316.896c0-13.837 11.257-25.094 25.094-25.094h117.298l55.346 50.188H48.146c-13.837 0-25.094-11.256-25.094-25.094zm.976-62.945c.422.111.847.215 1.275.309 7.421 1.634 14.68 8.002 22.365 14.744a576.29 576.29 0 0 0 3.206 2.799h-3.081c-11.253-.001-20.774-7.551-23.765-17.852zm308.727 89.752l57.233-51.899 49.904.57-81.871 74.24-25.266-22.911zm7.861 34.126H295.12l17.467-15.839h10.563l17.466 15.839zm19.599-86.027l-82.499 74.811-82.499-74.811h164.998zm-59.529-20c.849-.842 1.677-1.675 2.49-2.493 9.531-9.587 17.059-17.16 32.89-17.16 15.832 0 23.359 7.573 32.89 17.162.812.817 1.64 1.65 2.489 2.491h-70.759zm-160.13 0a485.82 485.82 0 0 0 2.489-2.492c9.531-9.588 17.059-17.161 32.89-17.161 15.83 0 23.358 7.573 32.888 17.16.813.818 1.641 1.651 2.49 2.493h-70.757zm275.862 162.073H95.582c-29.56 0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467 15.839H145.897c-5.523 0-10 4.477-10 10s4.477 10 10 10H467.07c-7.288 20.958-27.242 36.044-50.652 36.044zm53.608-56.046h-94.6l17.467-15.839h77.133v15.839zm-6.174-35.837h-48.906l54.624-49.533c11.135 2.604 19.376 12.665 19.376 24.439 0 13.836-11.257 25.094-25.094 25.094zm-2.728-70.19l.262-.227.101-.087.342-.298c.848-.738 1.682-1.469 2.501-2.187 4.105-3.601 8.089-7.095 12.04-9.819 3.446-2.375 6.868-4.164 10.326-4.925l.359-.081.04-.01.317-.076.065-.016a22.897 22.897 0 0 0 .42-.107l.196-.052a.374.374 0 0 0 .048-.012c-2.433 9.276-10.129 16.443-19.691 18.102a9.984 9.984 0 0 0-2.016-.205h-5.31zm21.271-37.073a40.746 40.746 0 0 0-4.536 1.281c-10.109 3.489-18.327 10.602-26.283 17.58l-.434.381c-9.178 8.052-17.923 15.723-29.033 17.834h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591-10.213-10.275-22.923-23.062-47.074-23.062-24.15 0-36.86 12.786-47.074 23.06-7.992 8.04-14.576 14.663-25.829 16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593-10.213-10.274-22.923-23.06-47.072-23.06-24.151 0-36.861 12.787-47.074 23.062-7.991 8.039-14.574 14.661-25.824 16.591h-7.065c-14.134 0-24.325-8.939-35.113-18.404-9.248-8.112-18.81-16.501-31.252-19.241a12.237 12.237 0 0 1-7.025-4.453 10.027 10.027 0 0 0-1.153-1.252 12.234 12.234 0 0 1-1.428-5.727c-.001-6.788 5.52-12.309 12.307-12.309h447.384c6.787 0 12.308 5.521 12.308 12.308 0 5.729-4.039 10.776-9.605 12.002z\"/>\n    </svg>\n    ",
    frequently: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.15 219.15\" width=\"24\" height=\"24\" fill=\"gray\">\n      <path d=\"M109.575 0C49.156 0 .001 49.155.001 109.574c0 60.42 49.154 109.576 109.573 109.576 60.42 0 109.574-49.156 109.574-109.576C219.149 49.155 169.995 0 109.575 0zm0 204.15c-52.148 0-94.573-42.427-94.573-94.576C15.001 57.426 57.427 15 109.575 15c52.148 0 94.574 42.426 94.574 94.574 0 52.15-42.426 94.576-94.574 94.576z\"/>\n      <path d=\"M166.112 108.111h-52.051V51.249a7.5 7.5 0 0 0-15 0v64.362a7.5 7.5 0 0 0 7.5 7.5h59.551a7.5 7.5 0 0 0 0-15z\"/>\n    </svg>\n    ",
    nature: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"24\" height=\"24\" fill=\"gray\">\n      <path d=\"M490.815 3.784C480.082 5.7 227.049 51.632 148.477 130.203c-39.153 39.153-64.259 87.884-70.694 137.218-5.881 45.081 4.347 85.929 28.878 116.708L.001 490.789 21.212 512l106.657-106.657c33.094 26.378 75.092 34.302 116.711 28.874 49.334-6.435 98.065-31.541 137.218-70.695C460.368 284.951 506.3 31.918 508.216 21.185L511.999 0l-21.184 3.784zm-43.303 39.493L309.407 181.383l-7.544-98.076c46.386-15.873 97.819-29.415 145.649-40.03zm-174.919 50.64l8.877 115.402-78.119 78.119-11.816-153.606c19.947-13.468 47.183-26.875 81.058-39.915zm-109.281 64.119l12.103 157.338-47.36 47.36c-39.246-52.892-24.821-139.885 35.257-204.698zm57.113 247.849c-26.548-.001-51.267-7.176-71.161-21.938l47.363-47.363 157.32 12.102c-40.432 37.475-89.488 57.201-133.522 57.199zm157.743-85.421l-153.605-11.816 78.118-78.118 115.403 8.877c-13.04 33.876-26.448 61.111-39.916 81.057zm50.526-110.326l-98.076-7.544L468.725 64.485c-10.589 47.717-24.147 99.232-40.031 145.653z\"/>\n    </svg>\n    ",
    objects: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 792 792\" fill=\"gray\">\n      <path d=\"M425.512 741.214H365.58c-14.183 0-25.164 11.439-25.164 25.622S351.397 792 365.58 792h59.932c15.101 0 26.54-10.981 26.54-25.164s-11.44-25.622-26.54-25.622zM472.638 671.209H319.821c-14.183 0-26.081 10.98-26.081 25.163s11.898 25.164 26.081 25.164h152.817c14.183 0 25.164-10.981 25.164-25.164s-10.982-25.163-25.164-25.163zM639.188 138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526 12.621 446.566 0 395.771 0 320.28 0 247.19 31.684 197.205 81.445c-49.761 49.527-81.904 121.24-81.904 196.282 0 33.861 7.779 68.629 22.879 103.866 15.1 35.228 38.565 78.614 70.005 130.396 7.448 12.269 15.764 31.205 25.623 56.271 12.104 30.757 22.87 51.713 31.566 63.602 5.027 6.872 11.899 10.063 20.596 10.063h228.766c9.605 0 16.359-4.188 21.504-11.898 6.754-10.132 13.987-27.516 22.42-51.693 8.951-25.691 16.838-43.982 23.329-55.364 30.571-53.587 54.446-99.747 70.464-137.717 16.018-37.979 24.246-74.124 24.246-107.526 0-49.878-12.347-96.545-37.511-139.093zm-35.696 232.437c-15.012 34.348-36.398 76.974-65.427 126.736-9.41 16.125-18.458 37.003-26.989 63.592-3.367 10.474-7.32 20.596-11.439 30.2H300.153c-6.862-11.439-12.26-25.837-18.761-42.089-12.718-31.801-23.338-52.621-30.2-64.061-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718 106.13-228.991 229.674-226.941 41.631.693 80.527 10.063 115.765 30.659 35.227 20.586 63.134 48.043 83.729 82.812 20.586 34.768 31.108 72.748 31.108 113.47-.001 27.449-7.692 58.596-22.881 93.345z\"/>\n    </svg>\n    ",
    peoples: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 106.059 106.059\" fill=\"gray\">\n      <path d=\"M90.544 90.542c20.687-20.684 20.685-54.341.002-75.024-20.688-20.689-54.347-20.689-75.031-.006-20.688 20.687-20.686 54.346.002 75.034 20.682 20.684 54.341 20.684 75.027-.004zM21.302 21.3c17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.455-17.494 17.494-45.96 17.496-63.455.003-17.498-17.498-17.496-45.966 0-63.46zM27 69.865s-2.958-11.438 6.705-8.874c0 0 17.144 9.295 38.651 0 9.662-2.563 6.705 8.874 6.705 8.874C73.539 86.824 53.03 85.444 53.03 85.444S32.521 86.824 27 69.865zm6.24-31.194a6.202 6.202 0 1 1 12.399.001 6.202 6.202 0 0 1-12.399-.001zm28.117 0a6.202 6.202 0 1 1 12.403.001 6.202 6.202 0 0 1-12.403-.001z\"/>\n    </svg>\n    ",
    places: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 611.999 611.998\" fill=\"gray\">\n      <path d=\"M596.583 15.454C586.226 5.224 573.354.523 558.423.523c-15.597 0-31.901 4.906-49.452 14.599-17.296 9.551-32.851 20.574-46.458 32.524h-.665c-2.655 2.322-10.953 10.287-25.219 24.553-14.272 14.272-26.217 26.223-35.845 36.51L112.401 26.406c-6.896-1.968-12.928.014-17.593 4.645L46.687 78.839c-4.326 4.297-5.805 9.268-4.977 15.597.829 6.287 3.979 10.627 9.629 13.607L280.32 228.839 161.514 347.978l-95.91 3.32c-4.645.164-8.637 1.643-12.276 5.311L5.872 404.397c-4.312 4.34-6.641 9.289-5.643 16.262 1.657 6.967 5.31 11.611 11.618 13.602l117.142 48.787 48.787 117.148c2.421 5.812 6.634 9.621 13.607 11.279h3.313c4.977 0 9.296-1.658 12.942-5.311l47.456-47.457c3.653-3.645 5.494-7.965 5.643-12.275l3.32-95.91 118.807-118.807 121.128 228.99c2.988 5.643 7.32 8.793 13.607 9.621 6.329.836 11.271-1.316 15.597-5.643l47.456-47.457c4.978-4.977 6.945-10.697 4.978-17.586l-82.296-288.389 59.732-59.739c10.287-10.287 21.699-24.149 33.183-45.134 5.777-10.542 10.032-20.886 12.942-31.194 5.722-20.218 3.258-44.07-12.608-59.73zm-59.4 110.176l-67.039 67.372c-5.628 5.657-6.811 11.122-4.977 17.586l81.637 288.388-22.563 22.238L403.438 292.89c-2.98-5.643-7.299-8.963-12.941-9.621-6.301-1.331-11.611.325-16.263 4.977l-141.37 141.37c-2.987 2.986-4.644 6.973-5.643 11.949l-3.32 95.904-22.896 23.236-41.48-98.566c-1.331-4.645-4.553-8.184-9.629-10.287L51.338 411.03l23.229-22.895 95.578-3.654c5.643-.99 9.622-2.654 12.276-5.309l141.37-141.371c4.651-4.645 6.308-9.954 4.984-16.262-.666-5.643-3.986-9.954-9.629-12.942L90.829 87.47l22.231-22.238 288.389 81.637c6.464 1.833 11.951.666 17.587-4.977l28.545-28.539 26.217-25.884 11.278-11.285 1.331-.666c27.873-23.895 55.088-38.16 72.016-38.16 5.969 0 9.954 1.324 11.611 3.979 18.917 18.585-21.099 72.484-32.851 84.293z\"/>\n    </svg>\n    ",
    symbols: "\n    <svg style=\"max-height:18px\"\n      xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 511.626 511.626\" fill=\"gray\">\n      <path d=\"M475.366 71.949c-24.175-23.606-57.575-35.404-100.215-35.404-11.8 0-23.843 2.046-36.117 6.136-12.279 4.093-23.702 9.615-34.256 16.562-10.568 6.945-19.65 13.467-27.269 19.556a263.828 263.828 0 0 0-21.696 19.414 264.184 264.184 0 0 0-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556-10.564-6.95-21.985-12.468-34.261-16.562-12.275-4.089-24.316-6.136-36.116-6.136-42.637 0-76.039 11.801-100.211 35.404C12.087 95.55 0 128.286 0 170.16c0 12.753 2.24 25.891 6.711 39.398 4.471 13.514 9.566 25.031 15.275 34.546 5.708 9.514 12.181 18.792 19.414 27.834 7.233 9.041 12.519 15.272 15.846 18.698 3.33 3.426 5.948 5.903 7.851 7.427L243.25 469.938c3.427 3.426 7.614 5.144 12.562 5.144s9.138-1.718 12.563-5.144l177.87-171.31c43.588-43.58 65.38-86.406 65.38-128.472.001-41.877-12.085-74.61-36.259-98.207zm-53.961 199.846L255.813 431.391 89.938 271.507C54.344 235.922 36.55 202.133 36.55 170.156c0-15.415 2.046-29.026 6.136-40.824 4.093-11.8 9.327-21.177 15.703-28.124 6.377-6.949 14.132-12.607 23.268-16.988 9.141-4.377 18.086-7.328 26.84-8.85 8.754-1.52 18.079-2.281 27.978-2.281 9.896 0 20.557 2.424 31.977 7.279 11.418 4.853 21.934 10.944 31.545 18.271 9.613 7.332 17.845 14.183 24.7 20.557 6.851 6.38 12.559 12.229 17.128 17.559 3.424 4.189 8.091 6.283 13.989 6.283 5.9 0 10.562-2.094 13.99-6.283 4.568-5.33 10.28-11.182 17.131-17.559 6.852-6.374 15.085-13.222 24.694-20.557 9.613-7.327 20.129-13.418 31.553-18.271 11.416-4.854 22.08-7.279 31.977-7.279s19.219.761 27.977 2.281c8.757 1.521 17.702 4.473 26.84 8.85 9.137 4.38 16.892 10.042 23.267 16.988 6.376 6.947 11.612 16.324 15.705 28.124 4.086 11.798 6.132 25.409 6.132 40.824-.002 31.977-17.89 65.86-53.675 101.639z\"/>\n    </svg>\n    "
};
var categoriesDefault = [
    new Category("Frequently", icons["frequently"]),
    new Category("Peoples", icons["peoples"]),
    new Category("Nature", icons["nature"]),
    new Category("Foods", icons["foods"]),
    new Category("Activity", icons["activity"]),
    new Category("Objects", icons["objects"]),
    new Category("Places", icons["places"]),
    new Category("Symbols", icons["symbols"]),
    new Category("Flags", icons["flags"])
];var Emoji = /** @class */ (function () {
    function Emoji(data, category, aliases) {
        this.data = data;
        this.category = category;
        this.aliases = aliases;
    }
    return Emoji;
}());var emojisDefault = [
    new Emoji("😀", "Peoples", ["sorrindo"]),
    new Emoji("😃", "Peoples", ["smiley"]),
    new Emoji("😄", "Peoples", ["sorriso"]),
    new Emoji("😁", "Peoples", ["sorriso"]),
    new Emoji("😆", "Peoples", ["rindo", "satisfeito"]),
    new Emoji("😅", "Peoples", ["sweat_smile"]),
    new Emoji("😂", "Peoples", ["alegria"]),
    new Emoji("🤣", "Peoples", ["rofl"]),
    new Emoji("😌", "Peoples", ["relaxado"]),
    new Emoji("😊", "Peoples", ["blush"]),
    new Emoji("😇", "Peoples", ["inocente"]),
    new Emoji("🙂", "Peoples", ["rosto_ligeiramente_sorridente"]),
    new Emoji("🙃", "Peoples", ["cara_de_cabeça_para_baixo"]),
    new Emoji("😉", "Peoples", ["piscadela"]),
    new Emoji("😌", "Peoples", ["aliviado"]),
    new Emoji("😍", "Peoples", ["olhos_de_coração"]),
    new Emoji("😘", "Peoples", ["beijando_coração"]),
    new Emoji("😗", "Peoples", ["beijando"]),
    new Emoji("😙", "Peoples", ["olhos_sorridentes_beijando"]),
    new Emoji("😚", "Peoples", ["beijando_olhos_fechados"]),
    new Emoji("😋", "Peoples", ["yum"]),
    new Emoji("😜", "Peoples", ["língua_de_fora_piscando_olho"]),
    new Emoji("😝", "Peoples", ["língua_de_fora_olhos_fechados"]),
    new Emoji("😛", "Peoples", ["língua_de_fora"]),
    new Emoji("🤑", "Peoples", ["cara_de_dinheiro"]),
    new Emoji("🤗", "Peoples", ["abraços"]),
    new Emoji("🤓", "Peoples", ["nerd_face"]),
    new Emoji("😎", "Peoples", ["óculos de sol"]),
    new Emoji("🤡", "Peoples", ["clown_face"]),
    new Emoji("🤠", "Peoples", ["cara_de_chapéu_de_cowboy"]),
    new Emoji("😏", "Peoples", ["sorriso"]),
    new Emoji("😒", "Peoples", ["não divertido"]),
    new Emoji("😞", "Peoples", ["decepcionado"]),
    new Emoji("😔", "Peoples", ["pensativo"]),
    new Emoji("😟", "Peoples", ["preocupado"]),
    new Emoji("😕", "Peoples", ["confuso"]),
    new Emoji("🙁", "Peoples", ["cara_ligeiramente_franzida"]),
    new Emoji("☹️", "Peoples", ["rosto_franzido"]),
    new Emoji("😣", "Peoples", ["perseverar"]),
    new Emoji("😖", "Peoples", ["confuso"]),
    new Emoji("😫", "Peoples", ["cara_cansada"]),
    new Emoji("😩", "Peoples", ["cansado"]),
    new Emoji("😤", "Peoples", ["triunfo"]),
    new Emoji("😠", "Peoples", ["bravo"]),
    new Emoji("😡", "Peoples", ["raiva", "beicinho"]),
    new Emoji("😶", "Peoples", ["sem_boca"]),
    new Emoji("😐", "Peoples", ["neutral_face"]),
    new Emoji("😑", "Peoples", ["inexpressivo"]),
    new Emoji("😯", "Peoples", ["silêncio"]),
    new Emoji("😦", "Peoples", ["carrancudo"]),
    new Emoji("😧", "Peoples", ["angustiado"]),
    new Emoji("😮", "Peoples", ["boca_aberta"]),
    new Emoji("😲", "Peoples", ["espantado"]),
    new Emoji("😵", "Peoples", ["dizzy_face"]),
    new Emoji("😳", "Peoples", ["corado"]),
    new Emoji("😱", "Peoples", ["grito"]),
    new Emoji("😨", "Peoples", ["medroso"]),
    new Emoji("😰", "Peoples", ["suor_frio"]),
    new Emoji("😢", "Peoples", ["choro"]),
    new Emoji("😥", "Peoples", ["desapontado_aliviado"]),
    new Emoji("🤤", "Peoples", ["rosto babando"]),
    new Emoji("😭", "Peoples", ["soluço"]),
    new Emoji("😓", "Peoples", ["suor"]),
    new Emoji("😪", "Peoples", ["sonolento"]),
    new Emoji("😴", "Peoples", ["dormindo"]),
    new Emoji("🙄", "Peoples", ["roll_eyes"]),
    new Emoji("🤔", "Peoples", ["pensando"]),
    new Emoji("🤥", "Peoples", ["cara_mentirosa"]),
    new Emoji("😬", "Peoples", ["fazendo careta"]),
    new Emoji("🤐", "Peoples", ["zipper_mouth_face"]),
    new Emoji("🤢", "Peoples", ["nauseated_face"]),
    new Emoji("🤧", "Peoples", ["rosto_espirrando"]),
    new Emoji("😷", "Peoples", ["máscara"]),
    new Emoji("🤒", "Peoples", ["rosto_com_termômetro"]),
    new Emoji("🤕", "Peoples", ["rosto_com_bandagem_na_cabeça"]),
    new Emoji("😈", "Peoples", ["smiling_imp"]),
    new Emoji("👿", "Peoples", ["imp"]),
    new Emoji("👹", "Peoples", ["japanese_ogre"]),
    new Emoji("👺", "Peoples", ["japanese_goblin"]),
    new Emoji("💩", "Peoples", ["hankey", "cocô", "merda"]),
    new Emoji("👻", "Peoples", ["fantasma"]),
    new Emoji("💀", "Peoples", ["caveira"]),
    new Emoji("☠️", "Peoples", ["caveira_e_ossos_cruzados"]),
    new Emoji("👽", "Peoples", ["alienígena"]),
    new Emoji("👾", "Peoples", ["space_invader"]),
    new Emoji("🤖", "Peoples", ["robô"]),
    new Emoji("🎃", "Peoples", ["jack_o_lantern"]),
    new Emoji("😺", "Peoples", ["smiley_cat"]),
    new Emoji("😸", "Peoples", ["smile_cat"]),
    new Emoji("😹", "Peoples", ["joy_cat"]),
    new Emoji("😻", "Peoples", ["heart_eyes_cat"]),
    new Emoji("😼", "Peoples", ["smirk_cat"]),
    new Emoji("😽", "Peoples", ["gato_beijando"]),
    new Emoji("🙀", "Peoples", ["scream_cat"]),
    new Emoji("😿", "Peoples", ["cara_de_gato_chorando"]),
    new Emoji("😾", "Peoples", ["gato_de_bico"]),
    new Emoji("👐", "Peoples", ["mãos_abertas"]),
    new Emoji("🙌", "Peoples", ["mãos_levantadas"]),
    new Emoji("👏", "Peoples", ["palmas"]),
    new Emoji("🙏", "Peoples", ["rezar"]),
    new Emoji("🤝", "Peoples", ["aperto de mão"]),
    new Emoji("👍", "Peoples", ["+1", "polegar para cima"]),
    new Emoji("👎", "Peoples", ["-1", "polegar para baixo"]),
    new Emoji("👊", "Peoples", ["fist_oncoming", "facepunch", "soco"]),
    new Emoji("✊", "Peoples", ["punho_levantado", "punho"]),
    new Emoji("🤛", "Peoples", ["fist_left"]),
    new Emoji("🤜", "Peoples", ["fist_right"]),
    new Emoji("🤞", "Peoples", ["dedos_cruzados"]),
    new Emoji("✌️", "Peoples", ["v"]),
    new Emoji("🤘", "Peoples", ["metal"]),
    new Emoji("👌", "Peoples", ["ok_hand"]),
    new Emoji("👈", "Peoples", ["point_left"]),
    new Emoji("👉", "Peoples", ["point_right"]),
    new Emoji("👆", "Peoples", ["point_up_2"]),
    new Emoji("👇", "Peoples", ["point_down"]),
    new Emoji("☝️", "Peoples", ["point_up"]),
    new Emoji("✋", "Peoples", ["mão", "mão_levantada"]),
    new Emoji("🤚", "Peoples", ["dorso_da_mão_levantado"]),
    new Emoji("🖐", "Peoples", ["mão_levantada_com_os_dedos_abertos"]),
    new Emoji("🖖", "Peoples", ["vulcan_salute"]),
    new Emoji("👋", "Peoples", ["aceno"]),
    new Emoji("🤙", "Peoples", ["me_chame_de_mão"]),
    new Emoji("💪", "Peoples", ["músculo"]),
    new Emoji("🖕", "Peoples", ["dedo_do_meio", "fu"]),
    new Emoji("✍️", "Peoples", ["mão_escrita"]),
    new Emoji("🤳", "Peoples", ["selfie"]),
    new Emoji("💅", "Peoples", ["nail_care"]),
    new Emoji("💍", "Peoples", ["anel"]),
    new Emoji("💄", "Peoples", ["batom"]),
    new Emoji("💋", "Peoples", ["beijo"]),
    new Emoji("👄", "Peoples", ["lábios"]),
    new Emoji("👅", "Peoples", ["língua"]),
    new Emoji("👂", "Peoples", ["orelha"]),
    new Emoji("👃", "Peoples", ["nariz"]),
    new Emoji("👣", "Peoples", ["pegadas"]),
    new Emoji("👁", "Peoples", ["olho"]),
    new Emoji("👀", "Peoples", ["olhos"]),
    new Emoji("🗣", "Peoples", ["speaking_head"]),
    new Emoji("👤", "Peoples", ["bust_in_silhouette"]),
    new Emoji("👥", "Peoples", ["bustos_em_silhueta"]),
    new Emoji("👶", "Peoples", ["bebê"]),
    new Emoji("👦", "Peoples", ["menino"]),
    new Emoji("👧", "Peoples", ["menina"]),
    new Emoji("👨", "Peoples", ["homem"]),
    new Emoji("👩", "Peoples", ["mulher"]),
    new Emoji("👱‍♀", "Peoples", ["mulher_loira"]),
    new Emoji("👱", "Peoples", ["homem_loiro", "pessoa_com_cabelo_loiro"]),
    new Emoji("👴", "Peoples", ["homem_mais_velho"]),
    new Emoji("👵", "Peoples", ["mulher_mais_velha"]),
    new Emoji("👲", "Peoples", ["homem_com_gua_pi_mao"]),
    new Emoji("👳‍♀", "Peoples", ["mulher_com_turbante"]),
    new Emoji("👳", "Peoples", ["homem_com_turbante"]),
    new Emoji("👮‍♀", "Povo", ["policial"]),
    new Emoji("👮", "Povo", ["policial", "policial"]),
    new Emoji("👷‍♀", "Peoples", ["mulher_trabalhadora_da_construção"]),
    new Emoji("👷", "Peoples", ["homem_trabalhador_da_construção", "trabalhador_da_construção"]),
    new Emoji("💂‍♀", "Peoples", ["guarda"]),
    new Emoji("💂", "Peoples", ["guarda"]),
    new Emoji("👩‍⚕", "Peoples", ["mulher_trabalhadora_da_saúde"]),
    new Emoji("👨‍⚕", "Peoples", ["homem_trabalhador_da_saúde"]),
    new Emoji("👩‍🌾", "Peoples", ["mulher_fazendeira"]),
    new Emoji("👨‍🌾", "Peoples", ["man_farmer"]),
    new Emoji("👩‍🍳", "Peoples", ["mulher_cozinheira"]),
    new Emoji("👨‍🍳", "Peoples", ["man_cook"]),
    new Emoji("👩‍🎓", "Peoples", ["mulher_estudante"]),
    new Emoji("👨‍🎓", "Peoples", ["man_student"]),
    new Emoji("👩‍🎤", "Peoples", ["mulher_cantora"]),
    new Emoji("👨‍🎤", "Peoples", ["man_singer"]),
    new Emoji("👩‍🏫", "Peoples", ["mulher_professora"]),
    new Emoji("👨‍🏫", "Peoples", ["man_teacher"]),
    new Emoji("👩‍🏭", "Peoples", ["mulher_operária_de_fábrica"]),
    new Emoji("👨‍🏭", "Peoples", ["man_factory_worker"]),
    new Emoji("👩‍💻", "Peoples", ["mulher_tecnóloga"]),
    new Emoji("👨‍💻", "Peoples", ["man_technologist"]),
    new Emoji("👩‍💼", "Peoples", ["mulher_trabalhadora_de_escritório"]),
    new Emoji("👨‍💼", "Peoples", ["man_office_worker"]),
    new Emoji("👩‍🔧", "Peoples", ["woman_mechanic"]),
    new Emoji("👨‍🔧", "Peoples", ["man_mechanic"]),
    new Emoji("👩‍🔬", "Peoples", ["mulher_cientista"]),
    new Emoji("👨‍🔬", "Peoples", ["homem_cientista"]),
    new Emoji("👩‍🎨", "Peoples", ["artista_mulher"]),
    new Emoji("👨‍🎨", "Peoples", ["man_artist"]),
    new Emoji("👩‍🚒", "Peoples", ["mulher_bombeira"]),
    new Emoji("👨‍🚒", "Peoples", ["homem_bombeiro"]),
    new Emoji("👩‍🚀", "Peoples", ["mulher_astronauta"]),
    new Emoji("👨‍🚀", "Peoples", ["man_astronaut"]),
    new Emoji("🤶", "Peoples", ["mrs_claus"]),
    new Emoji("🎅", "Peoples", ["papai noel"]),
    new Emoji("👸", "Peoples", ["princesa"]),
    new Emoji("🤴", "Peoples", ["príncipe"]),
    new Emoji("👰", "Peoples", ["noiva_com_véu"]),
    new Emoji("🤵", "Peoples", ["homem_de_smoking"]),
    new Emoji("👼", "Peoples", ["anjo"]),
    new Emoji("🤰", "Peoples", ["mulher_grávida"]),
    new Emoji("🙇‍♀", "Peoples", ["bowing_woman"]),
    new Emoji("🙇", "Peoples", ["homem_curvando", "reverência"]),
    new Emoji("💁", "Peoples", ["mulher_que_dá_gorjetas", "pessoa_do_balcão_de_informações", "mulher_atrevida"]),
    new Emoji("💁‍♂", "Peoples", ["tipping_hand_man", "sassy_man"]),
    new Emoji("🙅", "Peoples", ["no_good_woman", "no_good", "ng_woman"]),
    new Emoji("🙅‍♂", "Peoples", ["no_good_man", "ng_man"]),
    new Emoji("🙆", "Peoples", ["ok_woman"]),
    new Emoji("🙆‍♂", "Peoples", ["ok_man"]),
    new Emoji("🙋", "Peoples", ["mulher_com_a_mão_levantada", "mão_levantada"]),
    new Emoji("🙋‍♂", "Peoples", ["levantando_a_mão"]),
    new Emoji("🤦‍♀", "Peoples", ["woman_facepalming"]),
    new Emoji("🤦‍♂", "Peoples", ["man_facepalming"]),
    new Emoji("🤷‍♀", "Peoples", ["mulher_encolhida"]),
    new Emoji("🤷‍♂", "Peoples", ["homem_encolhido"]),
    new Emoji("🙎", "Peoples", ["mulher_fazendo_beicinho", "pessoa_com_cara_fazendo_beicinho"]),
    new Emoji("🙎‍♂", "Peoples", ["homem_de_bico"]),
    new Emoji("🙍", "Peoples", ["mulher_carrancuda", "pessoa_carrancuda"]),
    new Emoji("🙍‍♂", "Peoples", ["homem carrancudo"]),
    new Emoji("💇", "Peoples", ["corte_de_cabelo_mulher", "corte_de_cabelo"]),
    new Emoji("💇‍♂", "Peoples", ["haircut_man"]),
    new Emoji("💆", "Peoples", ["massagem_mulher", "massagem"]),
    new Emoji("💆‍♂", "Peoples", ["massage_man"]),
    new Emoji("🕴", "Peoples", ["terno_levitando"]),
    new Emoji("💃", "Peoples", ["dançarino"]),
    new Emoji("🕺", "Peoples", ["man_dancing"]),
    new Emoji("👯", "Peoples", ["dancing_women", "dancers"]),
    new Emoji("👯‍♂", "Peoples", ["dancing_men"]),
    new Emoji("🚶‍♀", "Peoples", ["walking_woman"]),
    new Emoji("🚶", "Peoples", ["walking_man", "caminhando"]),
    new Emoji("🏃‍♀", "Peoples", ["running_woman"]),
    new Emoji("🏃", "Peoples", ["homem_correndo", "corredor", "correndo"]),
    new Emoji("👫", "Peoples", ["casal"]),
    new Emoji("👭", "Peoples", ["duas_mulheres_de_mãos_dadas"]),
    new Emoji("👬", "Peoples", ["dois_homens_de_mãos_seguras"]),
    new Emoji("💑", "Peoples", ["casal_com_coração_mulher_homem", "casal_com_coração"]),
    new Emoji("👩‍❤️‍👩", "Peoples", ["casal_com_mulher_de_coração_mulher"]),
    new Emoji("👨‍❤️‍👨", "Peoples", ["casal_com_homem_de_coração_homem"]),
    new Emoji("💏", "Peoples", ["couplekiss_man_woman"]),
    new Emoji("👩‍❤️‍💋‍👩", "Peoples", ["couplekiss_woman_woman"]),
    new Emoji("👨‍❤️‍💋‍👨", "Peoples", ["couplekiss_man_man"]),
    new Emoji("👪", "Peoples", ["família_homem_mulher_menino", "família"]),
    new Emoji("👨‍👩‍👧", "Peoples", ["família_homem_mulher_menina"]),
    new Emoji("👨‍👩‍👧‍👦", "Peoples", ["família_homem_mulher_menina_menino"]),
    new Emoji("👨‍👩‍👦‍👦", "Peoples", ["família_homem_mulher_menino_menino"]),
    new Emoji("👨‍👩‍👧‍👧", "Peoples", ["família_homem_mulher_menina_menina"]),
    new Emoji("👩‍👩‍👦", "Peoples", ["família_mulher_mulher_menino"]),
    new Emoji("👩‍👩‍👧", "Peoples", ["família_mulher_mulher_menina"]),
    new Emoji("👩‍👩‍👧‍👦", "Peoples", ["família_mulher_mulher_menina_menino"]),
    new Emoji("👩‍👩‍👦‍👦", "Peoples", ["família_mulher_mulher_menino_menino"]),
    new Emoji("👩‍👩‍👧‍👧", "Peoples", ["família_mulher_mulher_menina_menina"]),
    new Emoji("👨‍👨‍👦", "Peoples", ["family_man_man_boy"]),
    new Emoji("👨‍👨‍👧", "Peoples", ["homem_de_família_homem_menina"]),
    new Emoji("👨‍👨‍👧‍👦", "Peoples", ["família_homem_homem_menina_menino"]),
    new Emoji("👨‍👨‍👦‍👦", "Peoples", ["homem_de_família_homem_menino_menino"]),
    new Emoji("👨‍👨‍👧‍👧", "Peoples", ["família_homem_homem_menina_menina"]),
    new Emoji("👩‍👦", "Peoples", ["family_woman_boy"]),
    new Emoji("👩‍👧", "Peoples", ["família_mulher_menina"]),
    new Emoji("👩‍👧‍👦", "Peoples", ["família_mulher_menina_menino"]),
    new Emoji("👩‍👦‍👦", "Peoples", ["família_mulher_menino_menino"]),
    new Emoji("👩‍👧‍👧", "Peoples", ["família_mulher_menina_menina"]),
    new Emoji("👨‍👦", "Peoples", ["family_man_boy"]),
    new Emoji("👨‍👧", "Peoples", ["family_man_girl"]),
    new Emoji("👨‍👧‍👦", "Peoples", ["family_man_girl_boy"]),
    new Emoji("👨‍👦‍👦", "Peoples", ["family_man_boy_boy"]),
    new Emoji("👨‍👧‍👧", "Peoples", ["family_man_girl_girl"]),
    new Emoji("👚", "Peoples", ["roupas_de_mulher"]),
    new Emoji("👕", "Peoples", ["camisa", "tshirt"]),
    new Emoji("👖", "Peoples", ["jeans"]),
    new Emoji("👔", "Peoples", ["gravata"]),
    new Emoji("👗", "Peoples", ["vestido"]),
    new Emoji("👙", "Peoples", ["biquíni"]),
    new Emoji("👘", "Peoples", ["quimono"]),
    new Emoji("👠", "Peoples", ["salto_alto"]),
    new Emoji("👡", "Peoples", ["sandália"]),
    new Emoji("👢", "Peoples", ["boot"]),
    new Emoji("👞", "Peoples", ["sapato_masculino", "sapato"]),
    new Emoji("👟", "Peoples", ["tênis_de_esporte"]),
    new Emoji("👒", "Peoples", ["chapéu_de_mulher"]),
    new Emoji("🎩", "Peoples", ["cartola"]),
    new Emoji("🎓", "Peoples", ["mortar_board"]),
    new Emoji("👑", "Peoples", ["coroa"]),
    new Emoji("⛑", "Peoples", ["capacete_de_resgate"]),
    new Emoji("🎒", "Peoples", ["school_satchel"]),
    new Emoji("👝", "Peoples", ["bolsa"]),
    new Emoji("👛", "Peoples", ["bolsa"]),
    new Emoji("👜", "Peoples", ["bolsa"]),
    new Emoji("💼", "Peoples", ["pasta"]),
    new Emoji("👓", "Peoples", ["óculos"]),
    new Emoji("🕶", "Peoples", ["dark_sunglasses"]),
    new Emoji("🌂", "Peoples", ["closed_umbrella"]),
    new Emoji("☂️", "Peoples", ["open_guarda-chuva"]),
    new Emoji("🐶", "Nature", ["cachorro"]),
    new Emoji("🐱", "Nature", ["gato"]),
    new Emoji("🐭", "Nature", ["rato"]),
    new Emoji("🐹", "Nature", ["hamster"]),
    new Emoji("🐰", "Nature", ["coelho"]),
    new Emoji("🦊", "Nature", ["fox_face"]),
    new Emoji("🐻", "Nature", ["urso"]),
    new Emoji("🐼", "Nature", ["panda_face"]),
    new Emoji("🐨", "Nature", ["coala"]),
    new Emoji("🐯", "Nature", ["tigre"]),
    new Emoji("🦁", "Nature", ["leão"]),
    new Emoji("🐮", "Nature", ["vaca"]),
    new Emoji("🐷", "Nature", ["porco"]),
    new Emoji("🐽", "Nature", ["nariz_de_porco"]),
    new Emoji("🐸", "Nature", ["sapo"]),
    new Emoji("🐵", "Nature", ["cara_de_macaco"]),
    new Emoji("🙈", "Nature", ["não_veja_o_mal"]),
    new Emoji("🙉", "Nature", ["não_ouça_o_mal"]),
    new Emoji("🙊", "Nature", ["não_fale_mal"]),
    new Emoji("🐒", "Nature", ["macaco"]),
    new Emoji("🐔", "Nature", ["frango"]),
    new Emoji("🐧", "Nature", ["pinguim"]),
    new Emoji("🐦", "Nature", ["pássaro"]),
    new Emoji("🐤", "Nature", ["bebê_pintinho"]),
    new Emoji("🐣", "Nature", ["pintinho_chocando"]),
    new Emoji("🐥", "Nature", ["pintinho_chocado"]),
    new Emoji("🦆", "Nature", ["pato"]),
    new Emoji("🦅", "Nature", ["águia"]),
    new Emoji("🦉", "Nature", ["coruja"]),
    new Emoji("🦇", "Nature", ["morcego"]),
    new Emoji("🐺", "Nature", ["lobo"]),
    new Emoji("🐗", "Nature", ["javali"]),
    new Emoji("🐴", "Nature", ["cavalo"]),
    new Emoji("🦄", "Nature", ["unicórnio"]),
    new Emoji("🐝", "Nature", ["abelha", "abelha"]),
    new Emoji("🐛", "Nature", ["bug"]),
    new Emoji("🦋", "Nature", ["borboleta"]),
    new Emoji("🐌", "Nature", ["caracol"]),
    new Emoji("🐚", "Nature", ["concha"]),
    new Emoji("🐞", "Nature", ["besouro"]),
    new Emoji("🐜", "Nature", ["formiga"]),
    new Emoji("🕷", "Nature", ["aranha"]),
    new Emoji("🕸", "Nature", ["teia_de_aranha"]),
    new Emoji("🐢", "Nature", ["tartaruga"]),
    new Emoji("🐍", "Nature", ["cobra"]),
    new Emoji("🦎", "Nature", ["lagarto"]),
    new Emoji("🦂", "Nature", ["escorpião"]),
    new Emoji("🦀", "Nature", ["caranguejo"]),
    new Emoji("🦑", "Nature", ["lula"]),
    new Emoji("🐙", "Nature", ["polvo"]),
    new Emoji("🦐", "Nature", ["camarão"]),
    new Emoji("🐠", "Nature", ["tropical_fish"]),
    new Emoji("🐟", "Nature", ["peixe"]),
    new Emoji("🐡", "Nature", ["baiacu"]),
    new Emoji("🐬", "Nature", ["golfinho", "nadadeira"]),
    new Emoji("🦈", "Nature", ["tubarão"]),
    new Emoji("🐳", "Nature", ["baleia"]),
    new Emoji("🐋", "Nature", ["whale2"]),
    new Emoji("🐊", "Nature", ["crocodilo"]),
    new Emoji("🐆", "Nature", ["leopardo"]),
    new Emoji("🐅", "Nature", ["tiger2"]),
    new Emoji("🐃", "Nature", ["búfalo_d'água"]),
    new Emoji("🐂", "Nature", ["boi"]),
    new Emoji("🐄", "Nature", ["cow2"]),
    new Emoji("🦌", "Nature", ["veado"]),
    new Emoji("🐪", "Nature", ["dromedary_camel"]),
    new Emoji("🐫", "Nature", ["camelo"]),
    new Emoji("🐘", "Nature", ["elefante"]),
    new Emoji("🦏", "Nature", ["rinoceronte"]),
    new Emoji("🦍", "Nature", ["gorila"]),
    new Emoji("🐎", "Nature", ["cavalo de corrida"]),
    new Emoji("🐖", "Nature", ["porco2"]),
    new Emoji("🐐", "Nature", ["cabra"]),
    new Emoji("🐏", "Nature", ["carneiro"]),
    new Emoji("🐑", "Nature", ["ovelha"]),
    new Emoji("🐕", "Nature", ["dog2"]),
    new Emoji("🐩", "Nature", ["poodle"]),
    new Emoji("🐈", "Nature", ["cat2"]),
    new Emoji("🐓", "Nature", ["galo"]),
    new Emoji("🦃", "Nature", ["peru"]),
    new Emoji("🕊", "Nature", ["pomba"]),
    new Emoji("🐇", "Nature", ["rabbit2"]),
    new Emoji("🐁", "Nature", ["mouse2"]),
    new Emoji("🐀", "Nature", ["rato"]),
    new Emoji("🐿", "Nature", ["esquilo"]),
    new Emoji("🐾", "Nature", ["pés", "pegadas"]),
    new Emoji("🐉", "Nature", ["dragão"]),
    new Emoji("🐲", "Nature", ["cara_de_dragão"]),
    new Emoji("🌵", "Nature", ["cacto"]),
    new Emoji("🎄", "Nature", ["árvore_de_natal"]),
    new Emoji("🌲", "Nature", ["árvore_perene"]),
    new Emoji("🌳", "Nature", ["árvore_decidual"]),
    new Emoji("🌴", "Nature", ["palmeira"]),
    new Emoji("🌱", "Nature", ["muda"]),
    new Emoji("🌿", "Nature", ["erva"]),
    new Emoji("☘️", "Nature", ["trevo"]),
    new Emoji("🍀", "Nature", ["trevo_de_quatro_folhas"]),
    new Emoji("🎍", "Nature", ["bambu"]),
    new Emoji("🎋", "Nature", ["tanabata_tree"]),
    new Emoji("🍃", "Nature", ["folhas"]),
    new Emoji("🍂", "Nature", ["folha_caída"]),
    new Emoji("🍁", "Nature", ["maple_leaf"]),
    new Emoji("🍄", "Nature", ["cogumelo"]),
    new Emoji("🌾", "Nature", ["espiga_de_arroz"]),
    new Emoji("💐", "Nature", ["buquê"]),
    new Emoji("🌷", "Nature", ["tulipa"]),
    new Emoji("🌹", "Nature", ["rosa"]),
    new Emoji("🥀", "Nature", ["flor_murcha"]),
    new Emoji("🌻", "Nature", ["girassol"]),
    new Emoji("🌼", "Nature", ["flor"]),
    new Emoji("🌸", "Nature", ["flor_de_cereja"]),
    new Emoji("🌺", "Nature", ["hibisco"]),
    new Emoji("🌎", "Nature", ["earth_americas"]),
    new Emoji("🌍", "Nature", ["earth_africa"]),
    new Emoji("🌏", "Nature", ["earth_asia"]),
    new Emoji("🌕", "Nature", ["lua_cheia"]),
    new Emoji("🌖", "Nature", ["lua_gibbous_minguante"]),
    new Emoji("🌗", "Nature", ["último_quarto_de_lua"]),
    new Emoji("🌘", "Nature", ["lua_crescente_minguante"]),
    new Emoji("🌑", "Nature", ["lua_nova"]),
    new Emoji("🌒", "Nature", ["lua_crescente_crescente"]),
    new Emoji("🌓", "Nature", ["primeiro_quarto_de_lua"]),
    new Emoji("🌔", "Nature", ["lua", "lua_gibosa_crescente"]),
    new Emoji("🌚", "Nature", ["lua_nova_com_rosto"]),
    new Emoji("🌝", "Nature", ["lua_cheia_com_rosto"]),
    new Emoji("🌞", "Nature", ["sol_com_rosto"]),
    new Emoji("🌛", "Nature", ["primeiro_quarto_de_lua_com_rosto"]),
    new Emoji("🌜", "Nature", ["último_quarto_de_lua_com_rosto"]),
    new Emoji("🌙", "Nature", ["crescent_moon"]),
    new Emoji("💫", "Nature", ["tonto"]),
    new Emoji("⭐️", "Nature", ["estrela"]),
    new Emoji("🌟", "Nature", ["estrela2"]),
    new Emoji("✨", "Nature", ["brilho"]),
    new Emoji("⚡️", "Nature", ["zap"]),
    new Emoji("🔥", "Nature", ["fogo"]),
    new Emoji("💥", "Nature", ["boom", "colisão"]),
    new Emoji("☄", "Nature", ["cometa"]),
    new Emoji("☀️", "Nature", ["ensolarado"]),
    new Emoji("🌤", "Nature", ["sol_atrás_de_uma_pequena_nuvem"]),
    new Emoji("⛅️", "Nature", ["parcialmente_ensolarado"]),
    new Emoji("🌥", "Nature", ["sol_atrás_de_uma_grande_nuvem"]),
    new Emoji("🌦", "Nature", ["sol_atrás_de_nuvem_de_chuva"]),
    new Emoji("🌈", "Nature", ["arco-íris"]),
    new Emoji("☁️", "Nature", ["nuvem"]),
    new Emoji("🌧", "Nature", ["nuvem_com_chuva"]),
    new Emoji("⛈", "Nature", ["nuvem_com_relâmpagos_e_chuva"]),
    new Emoji("🌩", "Nature", ["nuvem_com_relâmpago"]),
    new Emoji("🌨", "Nature", ["nuvem_com_neve"]),
    new Emoji("☃️", "Nature", ["boneco_de_neve_com_neve"]),
    new Emoji("⛄️", "Nature", ["boneco de neve"]),
    new Emoji("❄️", "Nature", ["floco de neve"]),
    new Emoji("🌬", "Nature", ["vento_face"]),
    new Emoji("💨", "Nature", ["traço"]),
    new Emoji("🌪", "Nature", ["tornado"]),
    new Emoji("🌫", "Nature", ["neblina"]),
    new Emoji("🌊", "Nature", ["oceano"]),
    new Emoji("💧", "Nature", ["gota"]),
    new Emoji("💦", "Nature", ["gotas_de_suor"]),
    new Emoji("☔️", "Nature", ["guarda-chuva"]),
    new Emoji("🍏", "Foods", ["maçã_verde"]),
    new Emoji("🍎", "Foods", ["maçã"]),
    new Emoji("🍐", "Foods", ["pêra"]),
    new Emoji("🍊", "Foods", ["tangerina", "laranja", "tangerina"]),
    new Emoji("🍋", "Foods", ["limão"]),
    new Emoji("🍌", "Foods", ["banana"]),
    new Emoji("🍉", "Foods", ["melancia"]),
    new Emoji("🍇", "Foods", ["uvas"]),
    new Emoji("🍓", "Foods", ["morango"]),
    new Emoji("🍈", "Foods", ["melão"]),
    new Emoji("🍒", "Foods", ["cerejas"]),
    new Emoji("🍑", "Foods", ["pêssego"]),
    new Emoji("🍍", "Foods", ["abacaxi"]),
    new Emoji("🥝", "Foods", ["kiwi_fruit"]),
    new Emoji("🥑", "Foods", ["abacate"]),
    new Emoji("🍅", "Foods", ["tomate"]),
    new Emoji("🍆", "Foods", ["berinjela"]),
    new Emoji("🥒", "Foods", ["pepino"]),
    new Emoji("🥕", "Foods", ["cenoura"]),
    new Emoji("🌽", "Foods", ["milho"]),
    new Emoji("🌶", "Foods", ["pimenta"]),
    new Emoji("🥔", "Foods", ["batata"]),
    new Emoji("🍠", "Foods", ["batata_doce"]),
    new Emoji("🌰", "Foods", ["castanha"]),
    new Emoji("🥜", "Foods", ["amendoins"]),
    new Emoji("🍯", "Foods", ["pote_de_mel"]),
    new Emoji("🥐", "Foods", ["croissant"]),
    new Emoji("🍞", "Foods", ["pão"]),
    new Emoji("🥖", "Foods", ["baguete_pão"]),
    new Emoji("🧀", "Foods", ["queijo"]),
    new Emoji("🥚", "Foods", ["ovo"]),
    new Emoji("🍳", "Foods", ["ovo_frito"]),
    new Emoji("🥓", "Foods", ["bacon"]),
    new Emoji("🥞", "Foods", ["panquecas"]),
    new Emoji("🍤", "Foods", ["camarão_frito"]),
    new Emoji("🍗", "Foods", ["perna_de_ave"]),
    new Emoji("🍖", "Foods", ["carne_com_osso"]),
    new Emoji("🍕", "Foods", ["pizza"]),
    new Emoji("🌭", "Foods", ["cachorro-quente"]),
    new Emoji("🍔", "Foods", ["hambúrguer"]),
    new Emoji("🍟", "Foods", ["batatas fritas"]),
    new Emoji("🥙", "Foods", ["stuffed_flatbread"]),
    new Emoji("🌮", "Foods", ["taco"]),
    new Emoji("🌯", "Foods", ["burrito"]),
    new Emoji("🥗", "Foods", ["salada_verde"]),
    new Emoji("🥘", "Foods", ["panela_rasa_de_comida"]),
    new Emoji("🍝", "Foods", ["espaguete"]),
    new Emoji("🍜", "Foods", ["ramen"]),
    new Emoji("🍲", "Foods", ["guisado"]),
    new Emoji("🍥", "Foods", ["bolo_de_peixe"]),
    new Emoji("🍣", "Foods", ["sushi"]),
    new Emoji("🍱", "Foods", ["bento"]),
    new Emoji("🍛", "Foods", ["curry"]),
    new Emoji("🍚", "Foods", ["arroz"]),
    new Emoji("🍙", "Foods", ["bola_de_arroz"]),
    new Emoji("🍘", "Foods", ["rice_cracker"]),
    new Emoji("🍢", "Foods", ["oden"]),
    new Emoji("🍡", "Foods", ["dango"]),
    new Emoji("🍧", "Foods", ["gelo_raspado"]),
    new Emoji("🍨", "Foods", ["sorvete"]),
    new Emoji("🍦", "Foods", ["sorvete"]),
    new Emoji("🍰", "Foods", ["bolo"]),
    new Emoji("🎂", "Foods", ["aniversário"]),
    new Emoji("🍮", "Foods", ["creme"]),
    new Emoji("🍭", "Foods", ["pirulito"]),
    new Emoji("🍬", "Foods", ["doces"]),
    new Emoji("🍫", "Foods", ["barra_de_chocolate"]),
    new Emoji("🍿", "Foods", ["pipoca"]),
    new Emoji("🍩", "Foods", ["donut"]),
    new Emoji("🍪", "Foods", ["cookie"]),
    new Emoji("🥛", "Foods", ["milk_glass"]),
    new Emoji("🍼", "Foods", ["mamadeira"]),
    new Emoji("☕️", "Foods", ["café"]),
    new Emoji("🍵", "Foods", ["chá"]),
    new Emoji("🍶", "Foods", ["saquê"]),
    new Emoji("🍺", "Foods", ["cerveja"]),
    new Emoji("🍻", "Foods", ["cervejas"]),
    new Emoji("🥂", "Foods", ["clinking_glasses"]),
    new Emoji("🍷", "Foods", ["copo_de_vinho"]),
    new Emoji("🥃", "Foods", ["tumbler_glass"]),
    new Emoji("🍸", "Foods", ["coquetel"]),
    new Emoji("🍹", "Foods", ["tropical_drink"]),
    new Emoji("🍾", "Foods", ["champanhe"]),
    new Emoji("🥄", "Foods", ["colher"]),
    new Emoji("🍴", "Foods", ["garfo_e_faca"]),
    new Emoji("🍽", "Foods", ["prato_com_talheres"]),
    new Emoji("⚽️", "Activity", ["futebol"]),
    new Emoji("🏀", "Activity", ["basquete"]),
    new Emoji("🏈", "Activity", ["futebol"]),
    new Emoji("⚾️", "Activity", ["beisebol"]),
    new Emoji("🎾", "Activity", ["tênis"]),
    new Emoji("🏐", "Activity", ["voleibol"]),
    new Emoji("🏉", "Activity", ["rugby_football"]),
    new Emoji("🎱", "Activity", ["8ball"]),
    new Emoji("🏓", "Activity", ["ping_pong"]),
    new Emoji("🏸", "Activity", ["badminton"]),
    new Emoji("🥅", "Activity", ["goal_net"]),
    new Emoji("🏒", "Activity", ["ice_hockey"]),
    new Emoji("🏑", "Activity", ["field_hockey"]),
    new Emoji("🏏", "Activity", ["críquete"]),
    new Emoji("⛳️", "Activity", ["golfe"]),
    new Emoji("🏹", "Activity", ["arco_e_flecha"]),
    new Emoji("🎣", "Activity", ["vara_de_pescar_e_peixe"]),
    new Emoji("🥊", "Activity", ["luva_de_boxe"]),
    new Emoji("🥋", "Activity", ["uniforme_de_artes_marciais"]),
    new Emoji("⛸", "Activity", ["patinação_no_gelo"]),
    new Emoji("🎿", "Activity", ["esqui"]),
    new Emoji("⛷", "Activity", ["esquiador"]),
    new Emoji("🏂", "Activity", ["snowboarder"]),
    new Emoji("🏋️‍♀️", "Activity", ["mulher_levantadora_de_peso"]),
    new Emoji("🏋", "Activity", ["homem_levantador_de_peso"]),
    new Emoji("🤺", "Activity", ["pessoa_esgrima"]),
    new Emoji("🤼‍♀", "Activity", ["women_wrestling"]),
    new Emoji("🤼‍♂", "Activity", ["men_wrestling"]),
    new Emoji("🤸‍♀", "Activity", ["woman_cartwheeling"]),
    new Emoji("🤸‍♂", "Activity", ["man_cartwheeling"]),
    new Emoji("⛹️‍♀️", "Activity", ["basketball_woman"]),
    new Emoji("⛹", "Activity", ["basketball_man"]),
    new Emoji("🤾‍♀", "Activity", ["mulher_jogando_handebol"]),
    new Emoji("🤾‍♂", "Activity", ["homem_jogando_handebol"]),
    new Emoji("🏌️‍♀️", "Activity", ["golfing_woman"]),
    new Emoji("🏌", "Activity", ["golfing_man"]),
    new Emoji("🏄‍♀", "Activity", ["surfing_woman"]),
    new Emoji("🏄", "Activity", ["surfista_homem", "surfista"]),
    new Emoji("🏊‍♀", "Activity", ["mulher_nadadora"]),
    new Emoji("🏊", "Activity", ["nadador", "nadador"]),
    new Emoji("🤽‍♀", "Activity", ["mulher_jogando_polo_aquático"]),
    new Emoji("🤽‍♂", "Activity", ["homem_jogando_polo_aquático"]),
    new Emoji("🚣‍♀", "Activity", ["rowing_woman"]),
    new Emoji("🚣", "Activity", ["remador", "barco a remo"]),
    new Emoji("🏇", "Activity", ["corrida_de_cavalos"]),
    new Emoji("🚴‍♀", "Activity", ["biking_woman"]),
    new Emoji("🚴", "Activity", ["biking_man", "ciclista"]),
    new Emoji("🚵‍♀", "Activity", ["mountain_biking_woman"]),
    new Emoji("🚵", "Activity", ["homem_ciclista_de_montanha", "ciclista_de_montanha"]),
    new Emoji("🎽", "Activity", ["camisa_de_corrida_com_faixa"]),
    new Emoji("🏅", "Activity", ["medal_sports"]),
    new Emoji("🎖", "Activity", ["medalha_militar"]),
    new Emoji("🥇", "Activity", ["1st_place_medal"]),
    new Emoji("🥈", "Activity", ["2nd_place_medal"]),
    new Emoji("🥉", "Activity", ["medalha_de_3º_lugar"]),
    new Emoji("🏆", "Activity", ["troféu"]),
    new Emoji("🏵", "Activity", ["roseta"]),
    new Emoji("🎗", "Activity", ["reminder_ribbon"]),
    new Emoji("🎫", "Activity", ["ticket"]),
    new Emoji("🎟", "Activity", ["ingressos"]),
    new Emoji("🎪", "Activity", ["circus_tent"]),
    new Emoji("🤹‍♀", "Activity", ["mulher_malabarista"]),
    new Emoji("🤹‍♂", "Activity", ["man_juggling"]),
    new Emoji("🎭", "Activity", ["artes_performativas"]),
    new Emoji("🎨", "Activity", ["arte"]),
    new Emoji("🎬", "Activity", ["clapper"]),
    new Emoji("🎤", "Activity", ["microfone"]),
    new Emoji("🎧", "Activity", ["fones de ouvido"]),
    new Emoji("🎼", "Activity", ["partitura_musical"]),
    new Emoji("🎹", "Activity", ["teclado_musical"]),
    new Emoji("🥁", "Activity", ["tambor"]),
    new Emoji("🎷", "Activity", ["saxofone"]),
    new Emoji("🎺", "Activity", ["trompete"]),
    new Emoji("🎸", "Activity", ["guitarra"]),
    new Emoji("🎻", "Activity", ["violino"]),
    new Emoji("🎲", "Activity", ["game_die"]),
    new Emoji("🎯", "Activity", ["dardo"]),
    new Emoji("🎳", "Activity", ["boliche"]),
    new Emoji("🎮", "Activity", ["video_game"]),
    new Emoji("🎰", "Activity", ["slot_machine"]),
    new Emoji("🚗", "Places", ["carro", "carro_vermelho"]),
    new Emoji("🚕", "Places", ["táxi"]),
    new Emoji("🚙", "Places", ["carro_azul"]),
    new Emoji("🚌", "Places", ["ônibus"]),
    new Emoji("🚎", "Places", ["trólebus"]),
    new Emoji("🏎", "Places", ["carro_de_corrida"]),
    new Emoji("🚓", "Places", ["police_car"]),
    new Emoji("🚑", "Places", ["ambulância"]),
    new Emoji("🚒", "Places", ["bombeiro"]),
    new Emoji("🚐", "Places", ["microônibus"]),
    new Emoji("🚚", "Places", ["caminhão"]),
    new Emoji("🚛", "Places", ["articulated_lorry"]),
    new Emoji("🚜", "Places", ["trator"]),
    new Emoji("🛴", "Places", ["kick_scooter"]),
    new Emoji("🚲", "Places", ["bicicleta"]),
    new Emoji("🛵", "Places", ["motor_scooter"]),
    new Emoji("🏍", "Places", ["motocicleta"]),
    new Emoji("🚨", "Places", ["rotating_light"]),
    new Emoji("🚔", "Places", ["oncoming_police_car"]),
    new Emoji("🚍", "Places", ["oncoming_bus"]),
    new Emoji("🚘", "Places", ["oncoming_automobile"]),
    new Emoji("🚖", "Places", ["oncoming_taxi"]),
    new Emoji("🚡", "Places", ["aerial_tramway"]),
    new Emoji("🚠", "Places", ["mountain_cableway"]),
    new Emoji("🚟", "Places", ["suspension_railway"]),
    new Emoji("🚃", "Places", ["vagão_ferroviário"]),
    new Emoji("🚋", "Places", ["trem"]),
    new Emoji("🚞", "Places", ["mountain_railway"]),
    new Emoji("🚝", "Places", ["monotrilho"]),
    new Emoji("🚄", "Places", ["bullettrain_side"]),
    new Emoji("🚅", "Places", ["bullettrain_front"]),
    new Emoji("🚈", "Places", ["light_rail"]),
    new Emoji("🚂", "Places", ["steam_locomotive"]),
    new Emoji("🚆", "Places", ["trem2"]),
    new Emoji("🚇", "Places", ["metro"]),
    new Emoji("🚊", "Places", ["bonde"]),
    new Emoji("🚉", "Places", ["estação"]),
    new Emoji("🚁", "Places", ["helicóptero"]),
    new Emoji("🛩", "Places", ["pequeno_avião"]),
    new Emoji("✈️", "Places", ["avião"]),
    new Emoji("🛫", "Places", ["voo_partida"]),
    new Emoji("🛬", "Places", ["chegada_de_voo"]),
    new Emoji("🚀", "Places", ["foguete"]),
    new Emoji("🛰", "Places", ["artificial_satellite"]),
    new Emoji("💺", "Places", ["assento"]),
    new Emoji("🛶", "Places", ["canoa"]),
    new Emoji("⛵️", "Places", ["barco", "veleiro"]),
    new Emoji("🛥", "Places", ["motor_boat"]),
    new Emoji("🚤", "Places", ["lancha"]),
    new Emoji("🛳", "Places", ["passageiro_navio"]),
    new Emoji("⛴", "Places", ["balsa"]),
    new Emoji("🚢", "Places", ["navio"]),
    new Emoji("⚓️", "Places", ["âncora"]),
    new Emoji("🚧", "Places", ["construção"]),
    new Emoji("⛽️", "Places", ["bomba de combustível"]),
    new Emoji("🚏", "Places", ["ponto de ônibus"]),
    new Emoji("🚦", "Places", ["vertical_traffic_light"]),
    new Emoji("🚥", "Places", ["semáforo"]),
    new Emoji("🗺", "Places", ["mapa_mundi"]),
    new Emoji("🗿", "Places", ["moyai"]),
    new Emoji("🗽", "Places", ["estátua_da_liberdade"]),
    new Emoji("⛲️", "Places", ["fonte"]),
    new Emoji("🗼", "Places", ["tokyo_tower"]),
    new Emoji("🏰", "Places", ["european_castle"]),
    new Emoji("🏯", "Places", ["japanese_castle"]),
    new Emoji("🏟", "Places", ["estádio"]),
    new Emoji("🎡", "Places", ["roda gigante"]),
    new Emoji("🎢", "Places", ["montanha-russa"]),
    new Emoji("🎠", "Places", ["carousel_horse"]),
    new Emoji("⛱", "Places", ["guarda-sol_no_chão"]),
    new Emoji("🏖", "Places", ["beach_guarda-sol"]),
    new Emoji("🏝", "Places", ["ilha_deserta"]),
    new Emoji("⛰", "Places", ["montanha"]),
    new Emoji("🏔", "Places", ["montanha_neve"]),
    new Emoji("🗻", "Places", ["monte_fuji"]),
    new Emoji("🌋", "Places", ["vulcão"]),
    new Emoji("🏜", "Places", ["deserto"]),
    new Emoji("🏕", "Places", ["acampamento"]),
    new Emoji("⛺️", "Places", ["tenda"]),
    new Emoji("🛤", "Places", ["trilho_ferroviário"]),
    new Emoji("🛣", "Places", ["autoestrada"]),
    new Emoji("🏗", "Places", ["building_construction"]),
    new Emoji("🏭", "Places", ["fábrica"]),
    new Emoji("🏠", "Places", ["casa"]),
    new Emoji("🏡", "Places", ["casa_com_jardim"]),
    new Emoji("🏘", "Places", ["casas"]),
    new Emoji("🏚", "Places", ["casa_abandonada"]),
    new Emoji("🏢", "Places", ["escritório"]),
    new Emoji("🏬", "Places", ["loja_de_departamentos"]),
    new Emoji("🏣", "Places", ["correio"]),
    new Emoji("🏤", "Places", ["european_post_office"]),
    new Emoji("🏥", "Places", ["hospital"]),
    new Emoji("🏦", "Places", ["banco"]),
    new Emoji("🏨", "Places", ["hotel"]),
    new Emoji("🏪", "Places", ["loja_de_conveniência"]),
    new Emoji("🏫", "Places", ["escola"]),
    new Emoji("🏩", "Places", ["love_hotel"]),
    new Emoji("💒", "Places", ["casamento"]),
    new Emoji("🏛", "Places", ["classical_building"]),
    new Emoji("⛪️", "Places", ["igreja"]),
    new Emoji("🕌", "Places", ["mesquita"]),
    new Emoji("🕍", "Places", ["sinagoga"]),
    new Emoji("🕋", "Places", ["kaaba"]),
    new Emoji("⛩", "Places", ["shinto_shrine"]),
    new Emoji("🗾", "Places", ["japão"]),
    new Emoji("🎑", "Places", ["rice_scene"]),
    new Emoji("🏞", "Places", ["parque_nacional"]),
    new Emoji("🌅", "Places", ["nascer do sol"]),
    new Emoji("🌄", "Places", ["nascer_do_sol_sobre_as_montanhas"]),
    new Emoji("🌠", "Places", ["estrelas"]),
    new Emoji("🎇", "Places", ["brilhante"]),
    new Emoji("🎆", "Places", ["fogos de artifício"]),
    new Emoji("🌇", "Places", ["city_sunrise"]),
    new Emoji("🌆", "Places", ["city_sunset"]),
    new Emoji("🏙", "Places", ["paisagem urbana"]),
    new Emoji("🌃", "Places", ["noite_com_estrelas"]),
    new Emoji("🌌", "Places", ["milky_way"]),
    new Emoji("🌉", "Places", ["ponte_à_noite"]),
    new Emoji("🌁", "Places", ["nebuloso"]),
    new Emoji("⌚️", "Objects", ["relógio"]),
    new Emoji("📱", "Objects", ["iphone"]),
    new Emoji("📲", "Objects", ["chamando"]),
    new Emoji("💻", "Objects", ["computador"]),
    new Emoji("⌨️", "Objects", ["teclado"]),
    new Emoji("🖥", "Objects", ["desktop_computer"]),
    new Emoji("🖨", "Objects", ["impressora"]),
    new Emoji("🖱", "Objects", ["computer_mouse"]),
    new Emoji("🖲", "Objects", ["trackball"]),
    new Emoji("🕹", "Objects", ["joystick"]),
    new Emoji("🗜", "Objects", ["braçadeira"]),
    new Emoji("💽", "Objects", ["minidisc"]),
    new Emoji("💾", "Objects", ["disquete"]),
    new Emoji("💿", "Objects", ["cd"]),
    new Emoji("📀", "Objects", ["dvd"]),
    new Emoji("📼", "Objects", ["vhs"]),
    new Emoji("📷", "Objects", ["câmera"]),
    new Emoji("📸", "Objects", ["camera_flash"]),
    new Emoji("📹", "Objects", ["video_camera"]),
    new Emoji("🎥", "Objects", ["movie_camera"]),
    new Emoji("📽", "Objects", ["film_projector"]),
    new Emoji("🎞", "Objects", ["film_strip"]),
    new Emoji("📞", "Objects", ["telephone_receiver"]),
    new Emoji("☎️", "Objects", ["telefone", "telefone"]),
    new Emoji("📟", "Objects", ["pager"]),
    new Emoji("📠", "Objects", ["fax"]),
    new Emoji("📺", "Objects", ["tv"]),
    new Emoji("📻", "Objects", ["rádio"]),
    new Emoji("🎙", "Objects", ["studio_microphone"]),
    new Emoji("🎚", "Objects", ["level_slider"]),
    new Emoji("🎛", "Objects", ["control_knobs"]),
    new Emoji("⏱", "Objects", ["cronômetro"]),
    new Emoji("⏲", "Objects", ["timer_relogio"]),
    new Emoji("⏰", "Objects", ["alarm_relogio"]),
    new Emoji("🕰", "Objects", ["mantelpiece_relogio"]),
    new Emoji("⌛️", "Objects", ["ampulheta"]),
    new Emoji("⏳", "Objects", ["ampulheta_areia_fluindo"]),
    new Emoji("📡", "Objects", ["satélite"]),
    new Emoji("🔋", "Objects", ["bateria"]),
    new Emoji("🔌", "Objects", ["plugue_eletrico"]),
    new Emoji("💡", "Objects", ["lâmpada"]),
    new Emoji("🔦", "Objects", ["lanterna"]),
    new Emoji("🕯", "Objects", ["vela"]),
    new Emoji("🗑", "Objects", ["lixeira"]),
    new Emoji("🛢", "Objects", ["oil_drum"]),
    new Emoji("💸", "Objects", ["dinheiro_com_asas"]),
    new Emoji("💵", "Objects", ["dólar"]),
    new Emoji("💴", "Objects", ["yen"]),
    new Emoji("💶", "Objects", ["euro"]),
    new Emoji("💷", "Objects", ["libra"]),
    new Emoji("💰", "Objects", ["bolsa de dinheiro"]),
    new Emoji("💳", "Objects", ["cartão_de_crédito"]),
    new Emoji("💎", "Objects", ["gema"]),
    new Emoji("⚖️", "Objects", ["balance_scale"]),
    new Emoji("🔧", "Objects", ["chave inglesa"]),
    new Emoji("🔨", "Objects", ["martelo"]),
    new Emoji("⚒", "Objects", ["martelo_e_picareta"]),
    new Emoji("🛠", "Objects", ["martelo_e_chave_inglesa"]),
    new Emoji("⛏", "Objects", ["escolher"]),
    new Emoji("🔩", "Objects", ["porca_e_parafuso"]),
    new Emoji("⚙️", "Objects", ["engrenagem"]),
    new Emoji("⛓", "Objects", ["correntes"]),
    new Emoji("🔫", "Objects", ["arma"]),
    new Emoji("💣", "Objects", ["bomba"]),
    new Emoji("🔪", "Objects", ["hocho", "faca"]),
    new Emoji("🗡", "Objects", ["punhal"]),
    new Emoji("⚔️", "Objects", ["espadas_cruzadas"]),
    new Emoji("🛡", "Objects", ["escudo"]),
    new Emoji("🚬", "Objects", ["fumar"]),
    new Emoji("⚰️", "Objects", ["caixão"]),
    new Emoji("⚱️", "Objects", ["urna_funerária"]),
    new Emoji("🏺", "Objects", ["ânfora"]),
    new Emoji("🔮", "Objects", ["bola_de_cristal"]),
    new Emoji("📿", "Objects", ["contas_de_oração"]),
    new Emoji("💈", "Objects", ["barbeiro"]),
    new Emoji("⚗️", "Objects", ["alambique"]),
    new Emoji("🔭", "Objects", ["telescópio"]),
    new Emoji("🔬", "Objects", ["microscópio"]),
    new Emoji("🕳", "Objects", ["buraco"]),
    new Emoji("💊", "Objects", ["pílula"]),
    new Emoji("💉", "Objects", ["seringa"]),
    new Emoji("🌡", "Objects", ["termômetro"]),
    new Emoji("🚽", "Objects", ["banheiro"]),
    new Emoji("🚰", "Objects", ["água_potável"]),
    new Emoji("🚿", "Objects", ["chuveiro"]),
    new Emoji("🛁", "Objects", ["banheira"]),
    new Emoji("🛀", "Objects", ["banho"]),
    new Emoji("🛎", "Objects", ["bellhop_bell"]),
    new Emoji("🔑", "Objects", ["chave"]),
    new Emoji("🗝", "Objects", ["old_key"]),
    new Emoji("🚪", "Objects", ["porta"]),
    new Emoji("🛋", "Objects", ["couch_and_lamp"]),
    new Emoji("🛏", "Objects", ["cama"]),
    new Emoji("🛌", "Objects", ["cama_dormir"]),
    new Emoji("🖼", "Objects", ["framed_picture"]),
    new Emoji("🛍", "Objects", ["compras"]),
    new Emoji("🛒", "Objects", ["shopping_cart"]),
    new Emoji("🎁", "Objects", ["presente"]),
    new Emoji("🎈", "Objects", ["balão"]),
    new Emoji("🎏", "Objects", ["bandeiras"]),
    new Emoji("🎀", "Objects", ["fita"]),
    new Emoji("🎊", "Objects", ["confetti_ball"]),
    new Emoji("🎉", "Objects", ["tada"]),
    new Emoji("🎎", "Objects", ["bonecas"]),
    new Emoji("🏮", "Objects", ["izakaya_lantern", "lanterna"]),
    new Emoji("🎐", "Objects", ["wind_chime"]),
    new Emoji("✉️", "Objects", ["email", "envelope"]),
    new Emoji("📩", "Objects", ["envelope_com_seta"]),
    new Emoji("📨", "Objects", ["incoming_envelope"]),
    new Emoji("📧", "Objects", ["e-mail"]),
    new Emoji("💌", "Objects", ["love_letter"]),
    new Emoji("📥", "Objects", ["inbox_tray"]),
    new Emoji("📤", "Objects", ["outbox_tray"]),
    new Emoji("📦", "Objects", ["pacote"]),
    new Emoji("🏷", "Objects", ["rótulo"]),
    new Emoji("📪", "Objects", ["mailbox_closed"]),
    new Emoji("📫", "Objects", ["caixa de correio"]),
    new Emoji("📬", "Objects", ["caixa_de_correio_com_correio"]),
    new Emoji("📭", "Objects", ["caixa_de_correio_sem_correio"]),
    new Emoji("📮", "Objects", ["caixa de correio"]),
    new Emoji("📯", "Objects", ["postal_horn"]),
    new Emoji("📜", "Objects", ["scroll"]),
    new Emoji("📃", "Objects", ["page_with_curl"]),
    new Emoji("📄", "Objects", ["page_facing_up"]),
    new Emoji("📑", "Objects", ["bookmark_tabs"]),
    new Emoji("📊", "Objects", ["bar_chart"]),
    new Emoji("📈", "Objects", ["gráfico_com_tendência_ascendente"]),
    new Emoji("📉", "Objects", ["gráfico_com_tendência_descendente"]),
    new Emoji("🗒", "Objects", ["spiral_notepad"]),
    new Emoji("🗓", "Objects", ["spiral_calendar"]),
    new Emoji("📆", "Objects", ["calendário"]),
    new Emoji("📅", "Objects", ["data"]),
    new Emoji("📇", "Objects", ["card_index"]),
    new Emoji("🗃", "Objects", ["card_file_box"]),
    new Emoji("🗳", "Objects", ["ballot_box"]),
    new Emoji("🗄", "Objects", ["file_cabinet"]),
    new Emoji("📋", "Objects", ["área de transferência"]),
    new Emoji("📁", "Objects", ["pasta_de_arquivos"]),
    new Emoji("📂", "Objects", ["abrir_pasta_de_arquivos"]),
    new Emoji("🗂", "Objects", ["card_index_dividers"]),
    new Emoji("🗞", "Objects", ["newspaper_roll"]),
    new Emoji("📰", "Objects", ["jornal"]),
    new Emoji("📓", "Objects", ["caderno"]),
    new Emoji("📔", "Objects", ["caderno_com_capa_decorativa"]),
    new Emoji("📒", "Objects", ["ledger"]),
    new Emoji("📕", "Objects", ["livro_fechado"]),
    new Emoji("📗", "Objects", ["green_book"]),
    new Emoji("📘", "Objects", ["blue_book"]),
    new Emoji("📙", "Objects", ["orange_book"]),
    new Emoji("📚", "Objects", ["livros"]),
    new Emoji("📖", "Objects", ["livro", "livro_aberto"]),
    new Emoji("🔖", "Objects", ["favorito"]),
    new Emoji("🔗", "Objects", ["link"]),
    new Emoji("📎", "Objects", ["clipe de papel"]),
    new Emoji("🖇", "Objects", ["clipes de papel"]),
    new Emoji("📐", "Objects", ["triangular_ruler"]),
    new Emoji("📏", "Objects", ["straight_ruler"]),
    new Emoji("📌", "Objects", ["alfinete"]),
    new Emoji("📍", "Objects", ["round_pushpin"]),
    new Emoji("✂️", "Objects", ["tesouras"]),
    new Emoji("🖊", "Objects", ["caneta"]),
    new Emoji("🖋", "Objects", ["caneta_tinteiro"]),
    new Emoji("✒️", "Objects", ["black_nib"]),
    new Emoji("🖌", "Objects", ["pincel"]),
    new Emoji("🖍", "Objects", ["giz de cera"]),
    new Emoji("📝", "Objects", ["memorando", "lápis"]),
    new Emoji("✏️", "Objects", ["pencil2"]),
    new Emoji("🔍", "Objects", ["mag"]),
    new Emoji("🔎", "Objects", ["mag_right"]),
    new Emoji("🔏", "Objects", ["cadeado_com_caneta_de_tinta"]),
    new Emoji("🔐", "Objects", ["cadeado_fechado_com_chave"]),
    new Emoji("🔒", "Objects", ["cadeado"]),
    new Emoji("🔓", "Objects", ["desbloquear"]),
    new Emoji("❤️", "Symbols", ["coração"]),
    new Emoji("💛", "Symbols", ["coração_amarelo"]),
    new Emoji("💚", "Symbols", ["coração_verde"]),
    new Emoji("💙", "Symbols", ["coração_azul"]),
    new Emoji("💜", "Symbols", ["coração_roxo"]),
    new Emoji("🖤", "Symbols", ["coração_preto"]),
    new Emoji("💔", "Symbols", ["coração_partido"]),
    new Emoji("❣️", "Symbols", ["heavy_heart_exclamation"]),
    new Emoji("💕", "Symbols", ["dois_corações"]),
    new Emoji("💞", "Symbols", ["corações_girando"]),
    new Emoji("💓", "Symbols", ["batimento cardíaco"]),
    new Emoji("💗", "Symbols", ["heartpulse"]),
    new Emoji("💖", "Symbols", ["coração_brilhante"]),
    new Emoji("💘", "Symbols", ["cupido"]),
    new Emoji("💝", "Symbols", ["gift_heart"]),
    new Emoji("💟", "Symbols", ["decoração_de_coração"]),
    new Emoji("☮️", "Symbols", ["peace_symbol"]),
    new Emoji("✝️", "Symbols", ["latin_cross"]),
    new Emoji("☪️", "Symbols", ["estrela_e_crescente"]),
    new Emoji("🕉", "Symbols", ["om"]),
    new Emoji("☸️", "Symbols", ["roda_do_dharma"]),
    new Emoji("✡️", "Symbols", ["estrela_de_david"]),
    new Emoji("🔯", "Symbols", ["estrela_de_seis_pontas"]),
    new Emoji("🕎", "Symbols", ["menorah"]),
    new Emoji("☯️", "Symbols", ["yin_yang"]),
    new Emoji("☦️", "Symbols", ["cruz_ortodoxa"]),
    new Emoji("🛐", "Symbols", ["local_de_culto"]),
    new Emoji("⛎", "Symbols", ["ophiuchus"]),
    new Emoji("♈️", "Symbols", ["aries"]),
    new Emoji("♉️", "Symbols", ["touro"]),
    new Emoji("♊️", "Symbols", ["gemini"]),
    new Emoji("♋️", "Symbols", ["câncer"]),
    new Emoji("♌️", "Symbols", ["leo"]),
    new Emoji("♍️", "Symbols", ["virgem"]),
    new Emoji("♎️", "Symbols", ["libra"]),
    new Emoji("♏️", "Symbols", ["escorpião"]),
    new Emoji("♐️", "Symbols", ["sagitário"]),
    new Emoji("♑️", "Symbols", ["capricórnio"]),
    new Emoji("♒️", "Symbols", ["aquário"]),
    new Emoji("♓️", "Symbols", ["peixes"]),
    new Emoji("🆔", "Symbols", ["id"]),
    new Emoji("⚛️", "Symbols", ["atom_symbol"]),
    new Emoji("🉑", "Symbols", ["aceitar"]),
    new Emoji("☢️", "Symbols", ["radioativo"]),
    new Emoji("☣️", "Symbols", ["risco biológico"]),
    new Emoji("📴", "Symbols", ["celular_desligado"]),
    new Emoji("📳", "Symbols", ["vibration_mode"]),
    new Emoji("🈶", "Symbols", ["u6709"]),
    new Emoji("🈚️", "Symbols", ["u7121"]),
    new Emoji("🈸", "Symbols", ["u7533"]),
    new Emoji("🈺", "Symbols", ["u55b6"]),
    new Emoji("🈷️", "Symbols", ["u6708"]),
    new Emoji("✴️", "Symbols", ["estrela_preta_de_oito_pontas"]),
    new Emoji("🆚", "Symbols", ["vs"]),
    new Emoji("💮", "Symbols", ["flor_branca"]),
    new Emoji("🉐", "Symbols", ["ideograph_advantage"]),
    new Emoji("㊙️", "Symbols", ["secreto"]),
    new Emoji("㊗️", "Symbols", ["parabéns"]),
    new Emoji("🈴", "Symbols", ["u5408"]),
    new Emoji("🈵", "Symbols", ["u6e80"]),
    new Emoji("🈹", "Symbols", ["u5272"]),
    new Emoji("🈲", "Symbols", ["u7981"]),
    new Emoji("🅰️", "Symbols", ["a"]),
    new Emoji("🅱️", "Symbols", ["b"]),
    new Emoji("🆎", "Symbols", ["ab"]),
    new Emoji("🆑", "Symbols", ["cl"]),
    new Emoji("🅾️", "Symbols", ["o2"]),
    new Emoji("🆘", "Symbols", ["sos"]),
    new Emoji("❌", "Symbols", ["x"]),
    new Emoji("⭕️", "Symbols", ["o"]),
    new Emoji("🛑", "Symbols", ["stop_sign"]),
    new Emoji("⛔️", "Symbols", ["no_entry"]),
    new Emoji("📛", "Symbols", ["name_badge"]),
    new Emoji("🚫", "Symbols", ["no_entry_sign"]),
    new Emoji("💯", "Symbols", ["100"]),
    new Emoji("💢", "Symbols", ["raiva"]),
    new Emoji("♨️", "Symbols", ["fontes termais"]),
    new Emoji("🚷", "Symbols", ["no_pedestrians"]),
    new Emoji("🚯", "Symbols", ["não_deite_lixo"]),
    new Emoji("🚳", "Symbols", ["no_bicycles"]),
    new Emoji("🚱", "Symbols", ["água_não_potável"]),
    new Emoji("🔞", "Symbols", ["menor de idade"]),
    new Emoji("📵", "Symbols", ["no_mobile_phones"]),
    new Emoji("🚭", "Symbols", ["proibido fumar"]),
    new Emoji("❗️", "Symbols", ["exclamação", "ponto_de_exclamação_forte"]),
    new Emoji("❕", "Symbols", ["exclamação_cinza"]),
    new Emoji("❓", "Symbols", ["pergunta"]),
    new Emoji("❔", "Symbols", ["grey_question"]),
    new Emoji("‼️", "Symbols", ["bangbang"]),
    new Emoji("⁉️", "Symbols", ["interrobang"]),
    new Emoji("🔅", "Symbols", ["baixo_brilho"]),
    new Emoji("🔆", "Symbols", ["alto_brilho"]),
    new Emoji("〽️", "Symbols", ["part_alternation_mark"]),
    new Emoji("⚠️", "Symbols", ["aviso"]),
    new Emoji("🚸", "Symbols", ["children_crossing"]),
    new Emoji("🔱", "Symbols", ["tridente"]),
    new Emoji("⚜️", "Symbols", ["flor_de_lis"]),
    new Emoji("🔰", "Symbols", ["iniciante"]),
    new Emoji("♻️", "Symbols", ["reciclar"]),
    new Emoji("✅", "Symbols", ["marca_de_verificação_branca"]),
    new Emoji("🈯️", "Symbols", ["u6307"]),
    new Emoji("💹", "Symbols", ["gráfico"]),
    new Emoji("❇️", "Symbols", ["brilho"]),
    new Emoji("✳️", "Symbols", ["asterisco_de_oito_raios"]),
    new Emoji("❎", "Symbols", ["marca_de_cruz_quadrada_negativa"]),
    new Emoji("🌐", "Symbols", ["globo_com_meridianos"]),
    new Emoji("💠", "Symbols", ["formato_de_diamante_com_um_ponto_dentro"]),
    new Emoji("Ⓜ️", "Symbols", ["m"]),
    new Emoji("🌀", "Symbols", ["ciclone"]),
    new Emoji("💤", "Symbols", ["zzz"]),
    new Emoji("🏧", "Symbols", ["atm"]),
    new Emoji("🚾", "Symbols", ["wc"]),
    new Emoji("♿️", "Symbols", ["cadeira de rodas"]),
    new Emoji("🅿️", "Symbols", ["estacionamento"]),
    new Emoji("🈳", "Symbols", ["u7a7a"]),
    new Emoji("🈂️", "Symbols", ["sa"]),
    new Emoji("🛂", "Symbols", ["passport_control"]),
    new Emoji("🛃", "Symbols", ["costumes"]),
    new Emoji("🛄", "Symbols", ["baggage_claim"]),
    new Emoji("🛅", "Symbols", ["bagagem_esquerda"]),
    new Emoji("🚹", "Symbols", ["mens"]),
    new Emoji("🚺", "Symbols", ["mulheres"]),
    new Emoji("🚼", "Symbols", ["baby_symbol"]),
    new Emoji("🚻", "Symbols", ["banheiro"]),
    new Emoji("🚮", "Symbols", ["coloque_lixo_no_seu_lugar"]),
    new Emoji("🎦", "Symbols", ["cinema"]),
    new Emoji("📶", "Symbols", ["força_do_sinal"]),
    new Emoji("🈁", "Symbols", ["koko"]),
    new Emoji("🔣", "Symbols", ["símbolos"]),
    new Emoji("ℹ️", "Symbols", ["information_source"]),
    new Emoji("🔤", "Symbols", ["abc"]),
    new Emoji("🔡", "Symbols", ["abcd"]),
    new Emoji("🔠", "Symbols", ["capital_abcd"]),
    new Emoji("🆖", "Symbols", ["ng"]),
    new Emoji("🆗", "Symbols", ["ok"]),
    new Emoji("🆙", "Symbols", ["acima"]),
    new Emoji("🆒", "Symbols", ["legal"]),
    new Emoji("🆕", "Symbols", ["novo"]),
    new Emoji("🆓", "Symbols", ["grátis"]),
    new Emoji("0️⃣", "Symbols", ["0"]),
    new Emoji("1️⃣", "Symbols", ["1"]),
    new Emoji("2️⃣", "Symbols", ["2"]),
    new Emoji("3️⃣", "Symbols", ["3"]),
    new Emoji("4️⃣", "Symbols", ["4"]),
    new Emoji("5️⃣", "Symbols", ["5"]),
    new Emoji("6️⃣", "Symbols", ["6"]),
    new Emoji("7️⃣", "Symbols", ["7"]),
    new Emoji("8️⃣", "Symbols", ["8"]),
    new Emoji("9️⃣", "Symbols", ["9"]),
    new Emoji("🔟", "Symbols", ["keycap_ten"]),
    new Emoji("🔢", "Symbols", ["1234"]),
    new Emoji("#️⃣", "Symbols", ["hash"]),
    new Emoji("*️⃣", "Symbols", ["asterisco"]),
    new Emoji("▶️", "Symbols", ["seta_direita"]),
    new Emoji("⏸", "Symbols", ["pause_button"]),
    new Emoji("⏯", "Symbols", ["botão_reproduzir_ou_pausar"]),
    new Emoji("⏹", "Symbols", ["stop_button"]),
    new Emoji("⏺", "Symbols", ["record_button"]),
    new Emoji("⏭", "Symbols", ["next_track_button"]),
    new Emoji("⏮", "Symbols", ["botão_de_trilha_anterior"]),
    new Emoji("⏩", "Symbols", ["fast_forward"]),
    new Emoji("⏪", "Symbols", ["retroceder"]),
    new Emoji("⏫", "Symbols", ["arrow_double_up"]),
    new Emoji("⏬", "Symbols", ["arrow_double_down"]),
    new Emoji("◀️", "Symbols", ["seta_esquerda"]),
    new Emoji("🔼", "Symbols", ["seta_cima"]),
    new Emoji("🔽", "Symbols", ["seta_baixo"]),
    new Emoji("➡️", "Symbols", ["arrow_right"]),
    new Emoji("⬅️", "Symbols", ["arrow_left"]),
    new Emoji("⬆️", "Symbols", ["arrow_up"]),
    new Emoji("⬇️", "Symbols", ["arrow_down"]),
    new Emoji("↗️", "Symbols", ["arrow_upper_right"]),
    new Emoji("↘️", "Symbols", ["arrow_lower_right"]),
    new Emoji("↙️", "Symbols", ["arrow_lower_left"]),
    new Emoji("↖️", "Symbols", ["arrow_upper_left"]),
    new Emoji("↕️", "Symbols", ["arrow_up_down"]),
    new Emoji("↔️", "Symbols", ["seta_esquerda_direita"]),
    new Emoji("↪️", "Symbols", ["arrow_right_hook"]),
    new Emoji("↩️", "Symbols", ["seta_para_a_esquerda_com_gancho"]),
    new Emoji("⤴️", "Symbols", ["arrow_heading_up"]),
    new Emoji("⤵️", "Symbols", ["arrow_heading_down"]),
    new Emoji("🔀", "Symbols", ["twisted_rightwards_arrows"]),
    new Emoji("🔁", "Symbols", ["repetir"]),
    new Emoji("🔂", "Symbols", ["repeat_one"]),
    new Emoji("🔄", "Symbols", ["arrows_counterrelogiowise"]),
    new Emoji("🔃", "Symbols", ["arrows_clockwise"]),
    new Emoji("🎵", "Symbols", ["nota_musical"]),
    new Emoji("🎶", "Symbols", ["notas"]),
    new Emoji("➕", "Symbols", ["sinal_de_mais_pesado"]),
    new Emoji("➖", "Symbols", ["sinal_de_menos_pesado"]),
    new Emoji("➗", "Symbols", ["heavy_division_sign"]),
    new Emoji("✖️", "Symbols", ["heavy_multiplication_x"]),
    new Emoji("💲", "Symbols", ["heavy_dollar_sign"]),
    new Emoji("💱", "Symbols", ["currency_exchange"]),
    new Emoji("™️", "Symbols", ["tm"]),
    new Emoji("©️", "Symbols", ["direitos autorais"]),
    new Emoji("®️", "Symbols", ["registrado"]),
    new Emoji("〰️", "Symbols", ["traço_ondulado"]),
    new Emoji("➰", "Symbols", ["curly_loop"]),
    new Emoji("➿", "Symbols", ["loop"]),
    new Emoji("🔚", "Symbols", ["fim"]),
    new Emoji("🔙", "Symbols", ["voltar"]),
    new Emoji("🔛", "Symbols", ["ligado"]),
    new Emoji("🔝", "Symbols", ["topo"]),
    new Emoji("🔜", "Symbols", ["em breve"]),
    new Emoji("✔️", "Symbols", ["marca_de_verificação_pesada"]),
    new Emoji("☑️", "Symbols", ["caixa_de_votação_com_marcação"]),
    new Emoji("🔘", "Symbols", ["radio_button"]),
    new Emoji("⚪️", "Symbols", ["white_circle"]),
    new Emoji("⚫️", "Symbols", ["black_circle"]),
    new Emoji("🔴", "Symbols", ["red_circle"]),
    new Emoji("🔵", "Symbols", ["large_blue_circle"]),
    new Emoji("🔺", "Symbols", ["pequeno_triângulo_vermelho"]),
    new Emoji("🔻", "Symbols", ["pequeno_triângulo_vermelho_para_baixo"]),
    new Emoji("🔸", "Symbols", ["pequeno_diamante_laranja"]),
    new Emoji("🔹", "Symbols", ["pequeno_diamante_azul"]),
    new Emoji("🔶", "Symbols", ["grande_diamante_laranja"]),
    new Emoji("🔷", "Symbols", ["large_blue_diamond"]),
    new Emoji("🔳", "Symbols", ["botão_quadrado_branco"]),
    new Emoji("🔲", "Symbols", ["black_square_button"]),
    new Emoji("▪️", "Symbols", ["black_small_square"]),
    new Emoji("▫️", "Symbols", ["white_small_square"]),
    new Emoji("◾️", "Symbols", ["black_medium_small_square"]),
    new Emoji("◽️", "Symbols", ["branco_médio_pequeno_quadrado"]),
    new Emoji("◼️", "Symbols", ["black_medium_square"]),
    new Emoji("◻️", "Symbols", ["white_medium_square"]),
    new Emoji("⬛️", "Symbols", ["black_large_square"]),
    new Emoji("⬜️", "Symbols", ["white_large_square"]),
    new Emoji("🔈", "Symbols", ["alto-falante"]),
    new Emoji("🔇", "Symbols", ["mudo"]),
    new Emoji("🔉", "Symbols", ["som"]),
    new Emoji("🔊", "Symbols", ["som_alto"]),
    new Emoji("🔔", "Symbols", ["sino"]),
    new Emoji("🔕", "Symbols", ["no_bell"]),
    new Emoji("📣", "Symbols", ["mega"]),
    new Emoji("📢", "Symbols", ["alto-falante"]),
    new Emoji("👁‍🗨", "Symbols", ["eye_speech_bubble"]),
    new Emoji("💬", "Symbols", ["balão_de_discurso"]),
    new Emoji("💭", "Symbols", ["balão_de_pensamento"]),
    new Emoji("🗯", "Symbols", ["right_anger_bubble"]),
    new Emoji("♠️", "Symbols", ["espadas"]),
    new Emoji("♣️", "Symbols", ["clubes"]),
    new Emoji("♥️", "Symbols", ["corações"]),
    new Emoji("♦️", "Symbols", ["diamantes"]),
    new Emoji("🃏", "Symbols", ["black_joker"]),
    new Emoji("🎴", "Symbols", ["flores_de_jogar_cartas"]),
    new Emoji("🀄️", "Symbols", ["mahjong"]),
    new Emoji("🕐", "Symbols", ["relógio1"]),
    new Emoji("🕑", "Symbols", ["relogio2"]),
    new Emoji("🕒", "Symbols", ["relogio3"]),
    new Emoji("🕓", "Symbols", ["relogio4"]),
    new Emoji("🕔", "Symbols", ["relogio5"]),
    new Emoji("🕕", "Symbols", ["relogio6"]),
    new Emoji("🕖", "Symbols", ["relogio7"]),
    new Emoji("🕗", "Symbols", ["relogio8"]),
    new Emoji("🕘", "Symbols", ["relogio9"]),
    new Emoji("🕙", "Symbols", ["relogio10"]),
    new Emoji("🕚", "Symbols", ["relogio11"]),
    new Emoji("🕛", "Symbols", ["relogio12"]),
    new Emoji("🕜", "Symbols", ["relogio130"]),
    new Emoji("🕝", "Symbols", ["relogio230"]),
    new Emoji("🕞", "Symbols", ["relogio330"]),
    new Emoji("🕟", "Symbols", ["relogio430"]),
    new Emoji("🕠", "Symbols", ["relogio530"]),
    new Emoji("🕡", "Symbols", ["relogio630"]),
    new Emoji("🕢", "Symbols", ["relogio730"]),
    new Emoji("🕣", "Symbols", ["relogio830"]),
    new Emoji("🕤", "Symbols", ["relogio930"]),
    new Emoji("🕥", "Symbols", ["relogio1030"]),
    new Emoji("🕦", "Symbols", ["relogio1130"]),
    new Emoji("🕧", "Symbols", ["relogio1230"]),
    new Emoji("🏳️", "Flags", ["bandeira_branca"]),
    new Emoji("🏴", "Flags", ["bandeira_preta"]),
    new Emoji("🏁", "Flags", ["checkered_flag"]),
    new Emoji("🚩", "Flags", ["bandeira_triangular_no_post"]),
    new Emoji("🏳️‍🌈", "Flags", ["rainbow_flag"]),
    new Emoji("🇦🇫", "Flags", ["Afeganistão"]),
    new Emoji("🇦🇽", "Flags", ["aland_islands"]),
    new Emoji("🇦🇱", "Flags", ["albânia"]),
    new Emoji("🇩🇿", "Flags", ["argélia"]),
    new Emoji("🇦🇸", "Flags", ["american_samoa"]),
    new Emoji("🇦🇩", "Flags", ["andorra"]),
    new Emoji("🇦🇴", "Flags", ["angola"]),
    new Emoji("🇦🇮", "Flags", ["anguilla"]),
    new Emoji("🇦🇶", "Flags", ["antártica"]),
    new Emoji("🇦🇬", "Flags", ["antigua_barbuda"]),
    new Emoji("🇦🇷", "Flags", ["argentina"]),
    new Emoji("🇦🇲", "Flags", ["armênia"]),
    new Emoji("🇦🇼", "Flags", ["aruba"]),
    new Emoji("🇦🇺", "Flags", ["austrália"]),
    new Emoji("🇦🇹", "Flags", ["Áustria"]),
    new Emoji("🇦🇿", "Flags", ["azerbaijão"]),
    new Emoji("🇧🇸", "Flags", ["bahamas"]),
    new Emoji("🇧🇭", "Flags", ["bahrain"]),
    new Emoji("🇧🇩", "Flags", ["bangladesh"]),
    new Emoji("🇧🇧", "Flags", ["barbados"]),
    new Emoji("🇧🇾", "Flags", ["belarus"]),
    new Emoji("🇧🇪", "Flags", ["bélgica"]),
    new Emoji("🇧🇿", "Flags", ["belize"]),
    new Emoji("🇧🇯", "Flags", ["benin"]),
    new Emoji("🇧🇲", "Flags", ["bermuda"]),
    new Emoji("🇧🇹", "Flags", ["butão"]),
    new Emoji("🇧🇴", "Flags", ["bolivia"]),
    new Emoji("🇧🇶", "Flags", ["caribbean_netherlands"]),
    new Emoji("🇧🇦", "Flags", ["bosnia_herzegovina"]),
    new Emoji("🇧🇼", "Flags", ["botswana"]),
    new Emoji("🇧🇷", "Flags", ["brasil"]),
    new Emoji("🇮🇴", "Flags", ["british_indian_ocean_territory"]),
    new Emoji("🇻🇬", "Flags", ["british_virgin_islands"]),
    new Emoji("🇧🇳", "Flags", ["brunei"]),
    new Emoji("🇧🇬", "Flags", ["bulgária"]),
    new Emoji("🇧🇫", "Flags", ["burkina_faso"]),
    new Emoji("🇧🇮", "Flags", ["burundi"]),
    new Emoji("🇨🇻", "Flags", ["cape_verde"]),
    new Emoji("🇰🇭", "Flags", ["camboja"]),
    new Emoji("🇨🇲", "Flags", ["camarões"]),
    new Emoji("🇨🇦", "Flags", ["Canadá"]),
    new Emoji("🇮🇨", "Flags", ["canary_islands"]),
    new Emoji("🇰🇾", "Flags", ["cayman_islands"]),
    new Emoji("🇨🇫", "Flags", ["republica_central_africana"]),
    new Emoji("🇹🇩", "Flags", ["chad"]),
    new Emoji("🇨🇱", "Flags", ["chile"]),
    new Emoji("🇨🇳", "Flags", ["cn"]),
    new Emoji("🇨🇽", "Flags", ["christmas_island"]),
    new Emoji("🇨🇨", "Flags", ["cocos_islands"]),
    new Emoji("🇨🇴", "Flags", ["colômbia"]),
    new Emoji("🇰🇲", "Flags", ["comores"]),
    new Emoji("🇨🇬", "Flags", ["congo_brazzaville"]),
    new Emoji("🇨🇩", "Flags", ["congo_kinshasa"]),
    new Emoji("🇨🇰", "Flags", ["cook_islands"]),
    new Emoji("🇨🇷", "Flags", ["costa_rica"]),
    new Emoji("🇨🇮", "Flags", ["cote_divoire"]),
    new Emoji("🇭🇷", "Flags", ["croácia"]),
    new Emoji("🇨🇺", "Flags", ["cuba"]),
    new Emoji("🇨🇼", "Flags", ["curacao"]),
    new Emoji("🇨🇾", "Flags", ["Chipre"]),
    new Emoji("🇨🇿", "Flags", ["czech_republic"]),
    new Emoji("🇩🇰", "Flags", ["Dinamarca"]),
    new Emoji("🇩🇯", "Flags", ["djibouti"]),
    new Emoji("🇩🇲", "Flags", ["dominica"]),
    new Emoji("🇩🇴", "Flags", ["dominican_republic"]),
    new Emoji("🇪🇨", "Flags", ["equador"]),
    new Emoji("🇪🇬", "Flags", ["egito"]),
    new Emoji("🇸🇻", "Flags", ["el_salvador"]),
    new Emoji("🇬🇶", "Flags", ["equatorial_guinea"]),
    new Emoji("🇪🇷", "Flags", ["eritreia"]),
    new Emoji("🇪🇪", "Flags", ["estônia"]),
    new Emoji("🇪🇹", "Flags", ["etiópia"]),
    new Emoji("🇪🇺", "Flags", ["eu", "european_union"]),
    new Emoji("🇫🇰", "Flags", ["falkland_islands"]),
    new Emoji("🇫🇴", "Flags", ["faroe_islands"]),
    new Emoji("🇫🇯", "Flags", ["fiji"]),
    new Emoji("🇫🇮", "Flags", ["finlândia"]),
    new Emoji("🇫🇷", "Flags", ["fr"]),
    new Emoji("🇬🇫", "Flags", ["french_guiana"]),
    new Emoji("🇵🇫", "Flags", ["french_polynesia"]),
    new Emoji("🇹🇫", "Flags", ["french_southern_territories"]),
    new Emoji("🇬🇦", "Flags", ["gabão"]),
    new Emoji("🇬🇲", "Flags", ["gâmbia"]),
    new Emoji("🇬🇪", "Flags", ["georgia"]),
    new Emoji("🇩🇪", "Flags", ["de"]),
    new Emoji("🇬🇭", "Flags", ["Gana"]),
    new Emoji("🇬🇮", "Flags", ["gibraltar"]),
    new Emoji("🇬🇷", "Flags", ["Grécia"]),
    new Emoji("🇬🇱", "Flags", ["groenlândia"]),
    new Emoji("🇬🇩", "Flags", ["grenada"]),
    new Emoji("🇬🇵", "Flags", ["guadalupe"]),
    new Emoji("🇬🇺", "Flags", ["guam"]),
    new Emoji("🇬🇹", "Flags", ["guatemala"]),
    new Emoji("🇬🇬", "Flags", ["guernsey"]),
    new Emoji("🇬🇳", "Flags", ["guiné"]),
    new Emoji("🇬🇼", "Flags", ["guinea_bissau"]),
    new Emoji("🇬🇾", "Flags", ["guiana"]),
    new Emoji("🇭🇹", "Flags", ["haiti"]),
    new Emoji("🇭🇳", "Flags", ["honduras"]),
    new Emoji("🇭🇰", "Flags", ["hong_kong"]),
    new Emoji("🇭🇺", "Flags", ["hungria"]),
    new Emoji("🇮🇸", "Flags", ["islândia"]),
    new Emoji("🇮🇳", "Flags", ["índia"]),
    new Emoji("🇮🇩", "Flags", ["indonesia"]),
    new Emoji("🇮🇷", "Flags", ["iran"]),
    new Emoji("🇮🇶", "Flags", ["iraque"]),
    new Emoji("🇮🇪", "Flags", ["irlanda"]),
    new Emoji("🇮🇲", "Flags", ["isle_of_man"]),
    new Emoji("🇮🇱", "Flags", ["israel"]),
    new Emoji("🇮🇹", "Flags", ["it"]),
    new Emoji("🇯🇲", "Flags", ["jamaica"]),
    new Emoji("🇯🇵", "Flags", ["jp"]),
    new Emoji("🎌", "Flags", ["bandeiras_cruzadas"]),
    new Emoji("🇯🇪", "Flags", ["jersey"]),
    new Emoji("🇯🇴", "Flags", ["jordan"]),
    new Emoji("🇰🇿", "Flags", ["Cazaquistão"]),
    new Emoji("🇰🇪", "Flags", ["Quênia"]),
    new Emoji("🇰🇮", "Flags", ["kiribati"]),
    new Emoji("🇽🇰", "Flags", ["kosovo"]),
    new Emoji("🇰🇼", "Flags", ["kuwait"]),
    new Emoji("🇰🇬", "Flags", ["Quirguistão"]),
    new Emoji("🇱🇦", "Flags", ["laos"]),
    new Emoji("🇱🇻", "Flags", ["letônia"]),
    new Emoji("🇱🇧", "Flags", ["líbano"]),
    new Emoji("🇱🇸", "Flags", ["lesoto"]),
    new Emoji("🇱🇷", "Flags", ["Libéria"]),
    new Emoji("🇱🇾", "Flags", ["líbia"]),
    new Emoji("🇱🇮", "Flags", ["liechtenstein"]),
    new Emoji("🇱🇹", "Flags", ["lituânia"]),
    new Emoji("🇱🇺", "Flags", ["luxemburgo"]),
    new Emoji("🇲🇴", "Flags", ["macau"]),
    new Emoji("🇲🇰", "Flags", ["macedônia"]),
    new Emoji("🇲🇬", "Flags", ["madagascar"]),
    new Emoji("🇲🇼", "Flags", ["malawi"]),
    new Emoji("🇲🇾", "Flags", ["malásia"]),
    new Emoji("🇲🇻", "Flags", ["maldivas"]),
    new Emoji("🇲🇱", "Flags", ["mali"]),
    new Emoji("🇲🇹", "Flags", ["malta"]),
    new Emoji("🇲🇭", "Flags", ["marshall_islands"]),
    new Emoji("🇲🇶", "Flags", ["martinica"]),
    new Emoji("🇲🇷", "Flags", ["mauritânia"]),
    new Emoji("🇲🇺", "Flags", ["maurício"]),
    new Emoji("🇾🇹", "Flags", ["mayotte"]),
    new Emoji("🇲🇽", "Flags", ["méxico"]),
    new Emoji("🇫🇲", "Flags", ["micronésia"]),
    new Emoji("🇲🇩", "Flags", ["moldova"]),
    new Emoji("🇲🇨", "Flags", ["monaco"]),
    new Emoji("🇲🇳", "Flags", ["mongólia"]),
    new Emoji("🇲🇪", "Flags", ["montenegro"]),
    new Emoji("🇲🇸", "Flags", ["montserrat"]),
    new Emoji("🇲🇦", "Flags", ["marrocos"]),
    new Emoji("🇲🇿", "Flags", ["moçambique"]),
    new Emoji("🇲🇲", "Flags", ["myanmar"]),
    new Emoji("🇳🇦", "Flags", ["namíbia"]),
    new Emoji("🇳🇷", "Flags", ["nauru"]),
    new Emoji("🇳🇵", "Flags", ["nepal"]),
    new Emoji("🇳🇱", "Flags", ["Holanda"]),
    new Emoji("🇳🇨", "Flags", ["new_caledonia"]),
    new Emoji("🇳🇿", "Flags", ["nova_zelândia"]),
    new Emoji("🇳🇮", "Flags", ["nicarágua"]),
    new Emoji("🇳🇪", "Flags", ["niger"]),
    new Emoji("🇳🇬", "Flags", ["nigéria"]),
    new Emoji("🇳🇺", "Flags", ["niue"]),
    new Emoji("🇳🇫", "Flags", ["norfolk_island"]),
    new Emoji("🇲🇵", "Flags", ["northern_mariana_islands"]),
    new Emoji("🇰🇵", "Flags", ["north_korea"]),
    new Emoji("🇳🇴", "Flags", ["norway"]),
    new Emoji("🇴🇲", "Flags", ["omã"]),
    new Emoji("🇵🇰", "Flags", ["paquistão"]),
    new Emoji("🇵🇼", "Flags", ["palau"]),
    new Emoji("🇵🇸", "Flags", ["palestinian_territories"]),
    new Emoji("🇵🇦", "Flags", ["panamá"]),
    new Emoji("🇵🇬", "Flags", ["papua_new_guinea"]),
    new Emoji("🇵🇾", "Flags", ["paraguai"]),
    new Emoji("🇵🇪", "Flags", ["peru"]),
    new Emoji("🇵🇭", "Flags", ["filipinas"]),
    new Emoji("🇵🇳", "Flags", ["pitcairn_islands"]),
    new Emoji("🇵🇱", "Flags", ["Polônia"]),
    new Emoji("🇵🇹", "Flags", ["portugal"]),
    new Emoji("🇵🇷", "Flags", ["puerto_rico"]),
    new Emoji("🇶🇦", "Flags", ["qatar"]),
    new Emoji("🇷🇪", "Flags", ["reunião"]),
    new Emoji("🇷🇴", "Flags", ["romênia"]),
    new Emoji("🇷🇺", "Flags", ["ru"]),
    new Emoji("🇷🇼", "Flags", ["ruanda"]),
    new Emoji("🇧🇱", "Flags", ["st_barthelemy"]),
    new Emoji("🇸🇭", "Flags", ["st_helena"]),
    new Emoji("🇰🇳", "Flags", ["st_kitts_nevis"]),
    new Emoji("🇱🇨", "Flags", ["st_lucia"]),
    new Emoji("🇵🇲", "Flags", ["st_pierre_miquelon"]),
    new Emoji("🇻🇨", "Flags", ["st_vincent_grenadines"]),
    new Emoji("🇼🇸", "Flags", ["samoa"]),
    new Emoji("🇸🇲", "Flags", ["san_marino"]),
    new Emoji("🇸🇹", "Flags", ["sao_tome_principe"]),
    new Emoji("🇸🇦", "Flags", ["saudi_arabia"]),
    new Emoji("🇸🇳", "Flags", ["senegal"]),
    new Emoji("🇷🇸", "Flags", ["sérvia"]),
    new Emoji("🇸🇨", "Flags", ["seychelles"]),
    new Emoji("🇸🇱", "Flags", ["sierra_leone"]),
    new Emoji("🇸🇬", "Flags", ["cingapura"]),
    new Emoji("🇸🇽", "Flags", ["sint_maarten"]),
    new Emoji("🇸🇰", "Flags", ["eslováquia"]),
    new Emoji("🇸🇮", "Flags", ["eslovênia"]),
    new Emoji("🇸🇧", "Flags", ["solomon_islands"]),
    new Emoji("🇸🇴", "Flags", ["somália"]),
    new Emoji("🇿🇦", "Flags", ["south_africa"]),
    new Emoji("🇬🇸", "Flags", ["south_georgia_south_sandwich_islands"]),
    new Emoji("🇰🇷", "Flags", ["kr"]),
    new Emoji("🇸🇸", "Flags", ["south_sudan"]),
    new Emoji("🇪🇸", "Flags", ["es"]),
    new Emoji("🇱🇰", "Flags", ["sri_lanka"]),
    new Emoji("🇸🇩", "Flags", ["sudão"]),
    new Emoji("🇸🇷", "Flags", ["suriname"]),
    new Emoji("🇸🇿", "Flags", ["Suazilândia"]),
    new Emoji("🇸🇪", "Flags", ["suécia"]),
    new Emoji("🇨🇭", "Flags", ["suíça"]),
    new Emoji("🇸🇾", "Flags", ["síria"]),
    new Emoji("🇹🇼", "Flags", ["taiwan"]),
    new Emoji("🇹🇯", "Flags", ["tajiquistão"]),
    new Emoji("🇹🇿", "Flags", ["tanzânia"]),
    new Emoji("🇹🇭", "Flags", ["Tailândia"]),
    new Emoji("🇹🇱", "Flags", ["timor_leste"]),
    new Emoji("🇹🇬", "Flags", ["togo"]),
    new Emoji("🇹🇰", "Flags", ["tokelau"]),
    new Emoji("🇹🇴", "Flags", ["tonga"]),
    new Emoji("🇹🇹", "Flags", ["trinidad_tobago"]),
    new Emoji("🇹🇳", "Flags", ["tunísia"]),
    new Emoji("🇹🇷", "Flags", ["tr"]),
    new Emoji("🇹🇲", "Flags", ["turcomenistão"]),
    new Emoji("🇹🇨", "Flags", ["turks_caicos_islands"]),
    new Emoji("🇹🇻", "Flags", ["tuvalu"]),
    new Emoji("🇺🇬", "Flags", ["uganda"]),
    new Emoji("🇺🇦", "Flags", ["ucrânia"]),
    new Emoji("🇦🇪", "Flags", ["united_arab_emirates"]),
    new Emoji("🇬🇧", "Flags", ["gb", "uk"]),
    new Emoji("🇺🇸", "Flags", ["nós"]),
    new Emoji("🇻🇮", "Flags", ["us_virgin_islands"]),
    new Emoji("🇺🇾", "Flags", ["uruguai"]),
    new Emoji("🇺🇿", "Flags", ["uzbequistão"]),
    new Emoji("🇻🇺", "Flags", ["vanuatu"]),
    new Emoji("🇻🇦", "Flags", ["vatican_city"]),
    new Emoji("🇻🇪", "Flags", ["venezuela"]),
    new Emoji("🇻🇳", "Flags", ["vietnã"]),
    new Emoji("🇼🇫", "Flags", ["wallis_futuna"]),
    new Emoji("🇪🇭", "Flags", ["saara_ocidental"]),
    new Emoji("🇾🇪", "Flags", ["iêmen"]),
    new Emoji("🇿🇲", "Flags", ["zâmbia"]),
    new Emoji("🇿🇼", "Flags", ["zimbabwe"])
];var CategoryItem = /** @class */ (function (_super) {
    __extends(CategoryItem, _super);
    function CategoryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CategoryItem.prototype, "styleSVG", {
        get: function () {
            return __assign({}, this.styles);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Prop({ required: true })
    ], CategoryItem.prototype, "label", void 0);
    __decorate([
        Prop({ required: true })
    ], CategoryItem.prototype, "icon", void 0);
    __decorate([
        Prop({})
    ], CategoryItem.prototype, "styles", void 0);
    CategoryItem = __decorate([
        Component({})
    ], CategoryItem);
    return CategoryItem;
}(Vue));function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}/* script */
const __vue_script__ = CategoryItem;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"svg",style:(_vm.styleSVG),attrs:{"title":_vm.label},domProps:{"innerHTML":_vm._s(_vm.icon)}})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-3d397e3a_0", { source: ".svg[data-v-3d397e3a]{display:inline-block;vertical-align:middle}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-3d397e3a";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );var Categories = /** @class */ (function (_super) {
    __extends(Categories, _super);
    function Categories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Categories.prototype.onSelect = function (category) {
        return category;
    };
    __decorate([
        Prop({})
    ], Categories.prototype, "categories", void 0);
    __decorate([
        Prop({})
    ], Categories.prototype, "current", void 0);
    __decorate([
        Emit("select")
    ], Categories.prototype, "onSelect", null);
    Categories = __decorate([
        Component({
            components: {
                CategoryItem: __vue_component__
            }
        })
    ], Categories);
    return Categories;
}(Vue));/* script */
const __vue_script__$1 = Categories;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Categories"}},_vm._l((_vm.categories),function(category,index){return _c('div',{key:index,class:['category', { active: category.name === _vm.current }],on:{"click":function($event){return _vm.onSelect(category)}}},[_c('CategoryItem',{attrs:{"label":category.label,"icon":category.icon}})],1)}),0)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-6d975e7c_0", { source: "#Categories[data-v-6d975e7c]{display:flex;width:100%;flex-direction:row;align-items:center;border-bottom:1px solid var(--ep-color-border);background:var(--ep-color-bg);overflow-x:auto}.category[data-v-6d975e7c]{flex:1;padding:5px;text-align:center;cursor:pointer}.category.active[data-v-6d975e7c]{border-bottom:3px solid var(--ep-color-active);filter:saturate(3);padding-bottom:2px}.category>img[data-v-6d975e7c]{width:22px;height:22px}.category[data-v-6d975e7c]:hover{filter:saturate(3)}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-6d975e7c";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );var EmojiItem = /** @class */ (function (_super) {
    __extends(EmojiItem, _super);
    function EmojiItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EmojiItem.prototype, "styleSize", {
        get: function () {
            return {
                fontSize: this.size - 5 + "px",
                lineHeight: this.size + "px",
                height: this.size + "px",
                width: this.size + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Prop({})
    ], EmojiItem.prototype, "emoji", void 0);
    __decorate([
        Prop({})
    ], EmojiItem.prototype, "size", void 0);
    __decorate([
        Prop({})
    ], EmojiItem.prototype, "withBorder", void 0);
    EmojiItem = __decorate([
        Component({})
    ], EmojiItem);
    return EmojiItem;
}(Vue));/* script */
const __vue_script__$2 = EmojiItem;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['emoji', { 'border': _vm.withBorder } ],style:(_vm.styleSize),domProps:{"innerHTML":_vm._s(_vm.emoji.data)}})};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-5a35c3ac_0", { source: ".emoji[data-v-5a35c3ac]{display:inline-block;text-align:center;padding:3px;box-sizing:content-box;overflow:hidden;transition:transform .2s;cursor:pointer}.emoji[data-v-5a35c3ac]:hover{transform:scale(1.05)}.border[data-v-5a35c3ac]:hover{background:#00000010;border-radius:8px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-5a35c3ac";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );var CategoryLabel = /** @class */ (function (_super) {
    __extends(CategoryLabel, _super);
    function CategoryLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Prop({ required: true })
    ], CategoryLabel.prototype, "name", void 0);
    CategoryLabel = __decorate([
        Component({})
    ], CategoryLabel);
    return CategoryLabel;
}(Vue));/* script */
const __vue_script__$3 = CategoryLabel;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category-title"},[_vm._v(_vm._s(_vm.name))])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-b863a738_0", { source: ".category-title[data-v-b863a738]{text-transform:uppercase;font-size:.8em;padding:5px 0 0 16px;color:#676666}.category-title[data-v-b863a738]:not(:first-of-type){padding:10px 0 0 16px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-b863a738";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    createInjector,
    undefined,
    undefined
  );var EmojiList = /** @class */ (function (_super) {
    __extends(EmojiList, _super);
    function EmojiList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiList.prototype.searchByAlias = function (term, emoji) {
        var isRelevant = function (alias) { return alias.toLowerCase().includes(term); };
        return emoji.aliases.some(function (alias) { return isRelevant(alias); });
    };
    EmojiList.prototype.calcScrollTop = function () {
        return this.hasSearch ? 88 : 44;
    };
    Object.defineProperty(EmojiList.prototype, "gridDynamic", {
        get: function () {
            var percent = 100 / this.emojisByRow;
            return {
                gridTemplateColumns: "repeat(" + this.emojisByRow + ", " + percent + "%)"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "dataFiltered", {
        get: function () {
            var _this = this;
            var data = this.data[this.category];
            var searchValue = this.filter.trim().toLowerCase();
            if (searchValue) {
                data = data.filter(function (emoji) {
                    return _this.searchByAlias(searchValue, emoji);
                });
            }
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "dataFilteredByCategory", {
        get: function () {
            var _this = this;
            var _data = Object.assign({}, this.data);
            var searchValue = this.filter.trim().toLowerCase();
            if (searchValue) {
                this.categories.forEach(function (category) {
                    _data[category] = _this.data[category].filter(function (item) {
                        return _this.searchByAlias(searchValue, item);
                    });
                });
            }
            return _data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "categories", {
        get: function () {
            return Object.keys(this.data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiList.prototype, "containerEmoji", {
        get: function () {
            return this.$refs["container-emoji"];
        },
        enumerable: false,
        configurable: true
    });
    EmojiList.prototype.onSelect = function (emoji) {
        return emoji;
    };
    EmojiList.prototype.onDataChanged = function () {
        this.containerEmoji.scrollTop = 0;
    };
    EmojiList.prototype.onCategoryChanged = function (newValue) {
        if (this.continuousList) {
            var categoryEl = this.$refs[newValue][0].$el;
            this.containerEmoji.scrollTop =
                categoryEl.offsetTop - this.calcScrollTop();
        }
    };
    __decorate([
        Prop({ required: true })
    ], EmojiList.prototype, "data", void 0);
    __decorate([
        Prop({ required: true })
    ], EmojiList.prototype, "emojisByRow", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "emojiWithBorder", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "emojiSize", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "filter", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "continuousList", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "category", void 0);
    __decorate([
        Prop({})
    ], EmojiList.prototype, "hasSearch", void 0);
    __decorate([
        Emit("select")
    ], EmojiList.prototype, "onSelect", null);
    __decorate([
        Watch("data")
    ], EmojiList.prototype, "onDataChanged", null);
    __decorate([
        Watch("category")
    ], EmojiList.prototype, "onCategoryChanged", null);
    EmojiList = __decorate([
        Component({
            components: {
                EmojiItem: __vue_component__$2,
                CategoryLabel: __vue_component__$3
            }
        })
    ], EmojiList);
    return EmojiList;
}(Vue));/* script */
const __vue_script__$4 = EmojiList;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Emojis"}},[_c('div',{ref:"container-emoji",staticClass:"container-emoji"},[(_vm.continuousList)?_vm._l((_vm.dataFilteredByCategory),function(category,category_name){return _c('div',{key:category_name},[_c('CategoryLabel',{directives:[{name:"show",rawName:"v-show",value:(category.length),expression:"category.length"}],ref:category_name,refInFor:true,attrs:{"name":category_name}}),_vm._v(" "),(category.length)?_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((category),function(emoji,index_e){return _c('EmojiItem',{key:(category_name + "-" + index_e),attrs:{"emoji":emoji,"size":_vm.emojiSize,"withBorder":_vm.emojiWithBorder},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1):_vm._e()],1)}):[_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((_vm.dataFiltered),function(emoji,index){return _c('EmojiItem',{key:index,attrs:{"emoji":emoji,"size":_vm.emojiSize,"withBorder":_vm.emojiWithBorder},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1)]],2)])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-5c988bee_0", { source: "#Emojis[data-v-5c988bee]{font-family:Twemoji,NotomojiColor,Notomoji,EmojiOne Color,Symbola,Noto,Segoe UI Emoji,OpenSansEmoji,monospace;display:block;width:100%;max-width:100%;color:var(--ep-color-text)}#Emojis[data-v-5c988bee] ::-webkit-scrollbar{border-radius:4px;width:4px;overflow:hidden}.container-emoji[data-v-5c988bee]{overflow-x:hidden;overflow-y:scroll;height:350px}.grid-emojis[data-v-5c988bee]{display:grid;margin:5px 0;justify-items:center}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = "data-v-5c988bee";
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    createInjector,
    undefined,
    undefined
  );var timemout = 500;
var listenInput;
var InputSearch = /** @class */ (function (_super) {
    __extends(InputSearch, _super);
    function InputSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputSearch = "";
        return _this;
    }
    InputSearch.prototype.onInputChanged = function (newValue, old) {
        var _this = this;
        clearTimeout(listenInput);
        listenInput = setTimeout(function () { return _this.$emit("update", newValue); }, timemout);
    };
    Object.defineProperty(InputSearch.prototype, "placeholder", {
        get: function () {
            return t("search");
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Watch("inputSearch")
    ], InputSearch.prototype, "onInputChanged", null);
    InputSearch = __decorate([
        Component({})
    ], InputSearch);
    return InputSearch;
}(Vue));/* script */
const __vue_script__$5 = InputSearch;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"InputSearch"}},[_c('div',{staticClass:"container-search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputSearch),expression:"inputSearch"}],attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.inputSearch)},on:{"input":function($event){if($event.target.composing){ return; }_vm.inputSearch=$event.target.value;}}})])])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-839ecda0_0", { source: "#InputSearch[data-v-839ecda0]{display:block;width:100%;max-width:100%}.container-search[data-v-839ecda0]{display:block;justify-content:center;box-sizing:border-box;width:100%;margin:5px 0;padding:0 5%}.container-search input[data-v-839ecda0]{width:100%;font-size:14px;padding:6px 8px;box-sizing:border-box;border-radius:8px;background:var(--ep-color-sbg);color:var(--ep-color-text);border:1px solid var(--ep-color-border)}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-839ecda0";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    createInjector,
    undefined,
    undefined
  );var VEmojiPicker = /** @class */ (function (_super) {
    __extends(VEmojiPicker, _super);
    function VEmojiPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapEmojis = {};
        _this.currentCategory = _this.initialCategory;
        _this.filterEmoji = "";
        return _this;
    }
    VEmojiPicker.prototype.created = function () {
        var categoriesNames = this.customCategories.map(function (c) { return c.name; });
        if (!categoriesNames.includes(this.initialCategory)) {
            this.initialCategory = categoriesNames[0];
        }
        // Create map
        this.mapperEmojisCategory(this.customEmojis);
        this.restoreFrequentlyEmojis();
        // Configure i18n
        if (this.i18n) {
            locale.i18n(this.i18n);
        }
    };
    VEmojiPicker.prototype.beforeDestroy = function () {
        this.mapEmojis = {};
    };
    VEmojiPicker.prototype.onSearch = function (term) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.filterEmoji = term;
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.changeCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var hasEmojis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasEmojis = this.mapEmojis[category.name].length;
                        this.currentCategory = category.name;
                        if (!hasEmojis) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onChangeCategory(category)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    VEmojiPicker.prototype.updateFrequently = function (emoji) {
        return __awaiter(this, void 0, void 0, function () {
            var oldEmojis, emojis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldEmojis = this.mapEmojis["Frequently"];
                        emojis = __spread(new Set(__spread([emoji], oldEmojis)));
                        this.mapEmojis["Frequently"] = emojis.slice(0, this.limitFrequently);
                        return [4 /*yield*/, this.saveFrequentlyEmojis(emojis)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VEmojiPicker.prototype.mapperEmojisCategory = function (emojis) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.$set(this.mapEmojis, "Frequently", []);
                emojis
                    .filter(function (emoji) { return !_this.exceptEmojis.includes(emoji); })
                    .forEach(function (emoji) {
                    var _category = emoji.category;
                    if (!_this.mapEmojis[_category]) {
                        _this.$set(_this.mapEmojis, _category, []);
                    }
                    _this.mapEmojis[_category].push(emoji);
                });
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.restoreFrequentlyEmojis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jsonMapIndexEmojis, mapIndexEmojis;
            var _this = this;
            return __generator(this, function (_a) {
                jsonMapIndexEmojis = localStorage.getItem("frequentlyEmojis");
                mapIndexEmojis = JSON.parse(jsonMapIndexEmojis) || [];
                this.mapEmojis["Frequently"] = mapIndexEmojis.map(function (index) { return _this.customEmojis[index]; });
                return [2 /*return*/];
            });
        });
    };
    VEmojiPicker.prototype.saveFrequentlyEmojis = function (emojis) {
        return __awaiter(this, void 0, void 0, function () {
            var mapIndexEmojis;
            var _this = this;
            return __generator(this, function (_a) {
                mapIndexEmojis = emojis.map(function (emoji) {
                    return _this.customEmojis.indexOf(emoji);
                });
                localStorage.setItem("frequentlyEmojis", JSON.stringify(mapIndexEmojis));
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(VEmojiPicker.prototype, "categoriesFiltered", {
        get: function () {
            var _this = this;
            return this.customCategories.filter(function (category) { return !_this.exceptCategories.includes(category); });
        },
        enumerable: false,
        configurable: true
    });
    VEmojiPicker.prototype.onSelectEmoji = function (emoji) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateFrequently(emoji)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, emoji];
                }
            });
        });
    };
    VEmojiPicker.prototype.onChangeCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, category];
            });
        });
    };
    VEmojiPicker.prototype.onChangeCustomEmojis = function (newEmojis) {
        if (newEmojis && newEmojis.length) {
            this.mapEmojis = {};
            this.mapperEmojisCategory(newEmojis);
        }
    };
    __decorate([
        Prop({ default: function () { return emojisDefault; } })
    ], VEmojiPicker.prototype, "customEmojis", void 0);
    __decorate([
        Prop({ default: function () { return categoriesDefault; } })
    ], VEmojiPicker.prototype, "customCategories", void 0);
    __decorate([
        Prop({ default: 15 })
    ], VEmojiPicker.prototype, "limitFrequently", void 0);
    __decorate([
        Prop({ default: 5 })
    ], VEmojiPicker.prototype, "emojisByRow", void 0);
    __decorate([
        Prop({ default: false })
    ], VEmojiPicker.prototype, "continuousList", void 0);
    __decorate([
        Prop({ default: 32 })
    ], VEmojiPicker.prototype, "emojiSize", void 0);
    __decorate([
        Prop({ default: true })
    ], VEmojiPicker.prototype, "emojiWithBorder", void 0);
    __decorate([
        Prop({ default: true })
    ], VEmojiPicker.prototype, "showSearch", void 0);
    __decorate([
        Prop({ default: true })
    ], VEmojiPicker.prototype, "showCategories", void 0);
    __decorate([
        Prop({ default: false })
    ], VEmojiPicker.prototype, "dark", void 0);
    __decorate([
        Prop({ default: "Peoples" })
    ], VEmojiPicker.prototype, "initialCategory", void 0);
    __decorate([
        Prop({ default: function () { return []; } })
    ], VEmojiPicker.prototype, "exceptCategories", void 0);
    __decorate([
        Prop({ default: function () { return []; } })
    ], VEmojiPicker.prototype, "exceptEmojis", void 0);
    __decorate([
        Prop({})
    ], VEmojiPicker.prototype, "i18n", void 0);
    __decorate([
        Emit("select")
    ], VEmojiPicker.prototype, "onSelectEmoji", null);
    __decorate([
        Emit("changeCategory")
    ], VEmojiPicker.prototype, "onChangeCategory", null);
    __decorate([
        Watch("customEmojis")
    ], VEmojiPicker.prototype, "onChangeCustomEmojis", null);
    VEmojiPicker = __decorate([
        Component({
            components: {
                Categories: __vue_component__$1,
                EmojiList: __vue_component__$4,
                InputSearch: __vue_component__$5
            }
        })
    ], VEmojiPicker);
    return VEmojiPicker;
}(Vue));/* script */
const __vue_script__$6 = VEmojiPicker;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['emoji-picker', {dark: _vm.dark}],attrs:{"id":"EmojiPicker"}},[(_vm.showCategories)?_c('Categories',{attrs:{"categories":_vm.categoriesFiltered,"current":_vm.currentCategory},on:{"select":_vm.changeCategory}}):_vm._e(),_vm._v(" "),(_vm.showSearch)?_c('InputSearch',{on:{"update":_vm.onSearch}}):_vm._e(),_vm._v(" "),_c('EmojiList',{attrs:{"data":_vm.mapEmojis,"category":_vm.currentCategory,"filter":_vm.filterEmoji,"emojiWithBorder":_vm.emojiWithBorder,"emojiSize":_vm.emojiSize,"emojisByRow":_vm.emojisByRow,"continuousList":_vm.continuousList,"hasSearch":_vm.showSearch},on:{"select":_vm.onSelectEmoji}})],1)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-f1d527bc_0", { source: ".emoji-picker[data-v-f1d527bc]{--ep-color-bg:#f0f0f0;--ep-color-sbg:#f6f6f6;--ep-color-border:#e4e4e4;--ep-color-text:#4a4a4a;--ep-color-active:#009688;display:inline-flex;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeSpeed;flex-direction:column;align-items:center;background-color:var(--ep-color-bg);border-radius:4px;border:1px solid var(--ep-color-border);overflow:hidden;width:325px;user-select:none}@media screen and (max-width:325px){.emoji-picker[data-v-f1d527bc]{width:100%}}.dark[data-v-f1d527bc]{--ep-color-bg:#191B1A;--ep-color-sbg:#212221;--ep-color-border:#3E3D42;--ep-color-text:#f0f0f0;--ep-color-active:#009688}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-f1d527bc";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    createInjector,
    undefined,
    undefined
  );var defaultOptions = {
    i18n: {}
};
var plugin = {
    VEmojiPicker: __vue_component__$6,
    install: function (Vue, opts) {
        if (opts === void 0) { opts = defaultOptions; }
        locale.i18n(opts.i18n);
        Vue.component("VEmojiPicker", __vue_component__$6);
    }
};export default plugin;export{__vue_component__$6 as VEmojiPicker,categoriesDefault,emojisDefault};