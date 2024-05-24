// // Находим все метки с классом bookBoxInput__label
// const labels = document.querySelectorAll(".bookBoxInput__label");

// // Начиная с индекса 1 (второй метки), добавляем свойство padding-top
// for (let i = 1; i < labels.length; i++) {
//   labels[i].style.paddingTop = "5px";
// }

//добавление svg
const titleBookEl = document.querySelector(".titleBook");
if (titleBookEl) {
  const imgElement = document.createElement("img");
  imgElement.classList.add("bookBoxInput__svg");
  imgElement.src = "/svg/book-2-svgrepo-com.svg";

  titleBookEl.insertBefore(imgElement, titleBookEl.firstChild);
}
const authorBookEl = document.querySelector(".authorBook");
if (authorBookEl) {
  const imgElement = document.createElement("img");
  imgElement.classList.add("bookBoxInput__svg");
  imgElement.src = "/svg/user-id-svgrepo-com.svg";
  authorBookEl.insertBefore(imgElement, authorBookEl.firstChild);
}
const pagesBookEl = document.querySelector(".pagesBook");
if (pagesBookEl) {
  const imgElement = document.createElement("img");
  imgElement.classList.add("bookBoxInput__svg");
  imgElement.src = "/svg/hashtag-circle-svgrepo-com.svg";

  pagesBookEl.insertBefore(imgElement, pagesBookEl.firstChild);
}
//--------------------------------------

const nameStudentEl = document.querySelector(".nameStudent");
if (nameStudentEl) {
  const imgElement = document.createElement("img");
  imgElement.classList.add("studentBoxInput__svg");
  imgElement.src = "/svg/user-circle-svgrepo-com.svg";

  nameStudentEl.insertBefore(imgElement, nameStudentEl.firstChild);
}

const ageStudentEl = document.querySelector(".ageStudent");
if (ageStudentEl) {
  const imgElement = document.createElement("img");
  imgElement.classList.add("studentBoxInput__svg");
  imgElement.src = "/svg/calendar-svgrepo-com.svg";

  ageStudentEl.insertBefore(imgElement, ageStudentEl.firstChild);
}

const gradeStudentEl = document.querySelector(".gradeStudent");
if (gradeStudentEl) {
  const imgElement = document.createElement("img");
  imgElement.classList.add("studentBoxInput__svg");
  imgElement.src = "/svg/hashtag-circle-svgrepo-com.svg";

  gradeStudentEl.insertBefore(imgElement, gradeStudentEl.firstChild);
}
