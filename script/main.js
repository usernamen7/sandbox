function showText(elem) {
  if (elem.previousElementSibling.clientHeight === 85) {
    elem.previousElementSibling.style.height = "100%";
    elem.innerHTML = "Show Less...";
  } else {
    elem.previousElementSibling.style.height = "80px";
    elem.innerHTML = "Read More...";
  }
}
