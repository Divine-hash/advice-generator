"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const button = document.querySelector('[type="button"]');
const url = 'https://api.adviceslip.com/advice';
button.addEventListener('click', onclickEvent);
function onclickEvent() {
    return __awaiter(this, void 0, void 0, function* () {
        addLoader(true);
        let advice = yield fetchAdvice(url);
        setTimeout(() => {
            addLoader(false);
            renderContent(advice);
        }, 1000);
    });
}
function fetchAdvice(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        return response.json();
    });
}
function renderContent(obj) {
    let elem = document.querySelector('.card > p');
    let heading = document.querySelector('.card > h1');
    heading.innerHTML = `ADVICE #${obj.slip.id}`;
    elem.innerHTML = `<q>${obj.slip.advice}</q>`;
}
function addLoader(isLoader) {
    let elem = document.querySelector('.card > p');
    let heading = document.querySelector('.card > h1');
    let loader = document.querySelector('.card > .loader-container');
    if (isLoader) {
        loader.classList.remove('hidden');
    }
    else {
        loader.classList.add('hidden');
    }
    elem.innerHTML = '';
    heading.innerHTML = '';
}
