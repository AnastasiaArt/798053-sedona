  var link = document.querySelector(".popupsearch");
  var popup = document.querySelector(".search-hotels-form");
  var arrival = popup.querySelector("[name=data-in]");
  var isStorageSupport = true;
  var storage = "";

  try {
  storage = localStorage.getItem("data-in");
  } catch (err) {
  isStorageSupport = false;
  }
  link.addEventListener("click", function (evt) {
    if (!popup.classList.contains("modal-show")){
    evt.preventDefault();
          popup.classList.add("modal-show");
    if (storage) {
    arrival.value = storage;
  }
  }else {
    popup.classList.remove("modal-show");
  }
    arrival.focus();
  });
  popup.addEventListener("submit", function (evt) {
    if (!arrival.value) {
    evt.preventDefault();
    console.log("Нужно ввести дату заезда");
  } else {
    localStorage.setItem("data-in", arrival.value);
  }
  });
  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
  });
