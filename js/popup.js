  var link = document.querySelector(".popupsearch");
  var popup = document.querySelector(".search-hotels-form");
  var arrival = popup.querySelector("[name=data-in]");
  var departure = popup.querySelector("[name=data-out]");
  var isStorageSupport = true;
  var storage = "";
  popup.classList.remove("modal-show");
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
      popup.classList.remove("modal-error");
    }
      arrival.focus();
  });
  popup.addEventListener("submit", function (evt) {
    if (!arrival.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("data-in", arrival.value);
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
