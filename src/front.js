import "locomotive-scroll/src/locomotive-scroll.scss";
import "./style/index.scss";

import LocomotiveScroll from "locomotive-scroll";

new LocomotiveScroll({
  el: container,
  smooth: true,
  lerp: 0.05,
});

formElement.onsubmit = (event) => {
  event.preventDefault();

  fetch("http://localhost:80/request", {
    method: "POST",
    body: new FormData(formElement),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};