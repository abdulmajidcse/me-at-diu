let basicInfo = document.querySelector("#basic-info");

setInterval(() => {
  if (basicInfo.classList.contains("bg-secondary-half")) {
    basicInfo.classList.remove("bg-secondary-half");
  } else {
    basicInfo.classList.add("bg-secondary-half");
  }
}, 1000);
