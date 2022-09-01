export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  let socialBlockListItems = Array.from(document.querySelectorAll(`.social-block__link`));
  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
    let delay = 500;
    socialBlockListItems.forEach((item) => {
      setTimeout(() => item.classList.add(`social-block__link--fadein`), delay);
      delay += 500;
    });
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    socialBlockListItems.forEach((item) => item.classList.remove(`social-block__link--fadein`));
  });
};
