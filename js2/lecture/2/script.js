document
  .querySelector("button.dialog__button")
  .addEventListener("click", function (e) {
    const div = document.querySelector("div.dialog__window");
    setTimeout(2000, function () {
      div.hidden = !div.hidden;
    });
  });
