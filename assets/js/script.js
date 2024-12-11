"use strict";

// Utility function to toggle element classes
const toggleClass = (element, className = "active") => {
  element.classList.toggle(className);
};

// Testimonials Modal Handler
class TestimonialsModal {
  constructor() {
    this.modalContainer = document.querySelector("[data-modal-container]");
    this.overlay = document.querySelector("[data-overlay]");
    this.modalCloseBtn = document.querySelector("[data-modal-close-btn]");

    this.modalImg = document.querySelector("[data-modal-img]");
    this.modalTitle = document.querySelector("[data-modal-title]");
    this.modalText = document.querySelector("[data-modal-text]");
    this.modalDate = document.querySelector("[data-modal-date]");

    this.testimonialsItems = document.querySelectorAll(
      "[data-testimonials-item]"
    );

    this.initEventListeners();
  }

  initEventListeners() {
    // Add click event to all testimonial items
    this.testimonialsItems.forEach((item) => {
      item.addEventListener("click", () => this.openModal(item));
    });

    // Close modal events
    this.modalCloseBtn.addEventListener("click", () => this.toggleModal());
    this.overlay.addEventListener("click", () => this.toggleModal());
  }

  openModal(item) {
    const avatar = item.querySelector("[data-testimonials-avatar]");
    const title = item.querySelector("[data-testimonials-title]");
    const text = item.querySelector("[data-testimonials-text]");
    const date = item.querySelector(".testimonial-date");

    this.modalImg.src = avatar.src;
    this.modalImg.alt = avatar.alt;
    this.modalTitle.textContent = title.textContent;
    this.modalText.innerHTML = text.innerHTML;
    this.modalDate.textContent = date.textContent;
    this.modalDate.dateTime = date.dateTime;

    this.toggleModal();
  }

  toggleModal() {
    toggleClass(this.modalContainer);
    toggleClass(this.overlay);
  }
}

// Initialize the testimonials modal
document.addEventListener("DOMContentLoaded", () => {
  new TestimonialsModal();
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
