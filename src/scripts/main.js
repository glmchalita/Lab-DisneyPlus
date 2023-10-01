document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (button) {
      const targetTab = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
      hideActiveTab();
      hideActiveButton();
      tab.classList.add("shows__list--is-active");
      button.target.classList.add("shows__tabs__button--is-active");
    });
  }
});

function hideActiveButton() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function hideActiveTab() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
