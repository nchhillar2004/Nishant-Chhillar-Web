const errorShow = `
  visibility: inherit;
`;
const errorClose = `
  visibility: hidden;
`;
const reducePadding= `
  padding: 0px;
`;
const increasePadding= `
  padding: 12px;
`;

const element = document.querySelector('.error-center');
const error = document.querySelector('.error');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    element.style.cssText = errorShow;
    error.style.cssText = increasePadding;
});

const error_close = document.querySelector('.error__close');
error_close.addEventListener('click', () => {
    element.style.cssText = errorClose;
    error.style.cssText = reducePadding;
});

const code = document.querySelector('.cssbuttons-io');
code.addEventListener('click', () => {
  window.open("https://github.com/nchhillar2004/personal-web");
});
