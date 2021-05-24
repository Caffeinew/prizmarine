import "locomotive-scroll/src/locomotive-scroll.scss";
import "./style/index.scss";

import LocomotiveScroll from "locomotive-scroll";

new LocomotiveScroll({
  el: container,
  smooth: true,
  lerp: 0.05,
});

formElement.onSubmit = (event) => {
  event.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(formElement)).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};
