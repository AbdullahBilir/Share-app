const icon = document.querySelector(".icon");
const popover = document.querySelector(".poppover");
icon.addEventListener("click", () => {
  if (popover.style.opacity == 0) {
    popover.style.opacity = 1;
  } else {
    popover.style.opacity = 0;
  }
});
