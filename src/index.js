import "locomotive-scroll/src/locomotive-scroll.scss";
import "./style/index.scss"

import LocomotiveScroll from "locomotive-scroll";

new LocomotiveScroll({
  el: document.querySelector("#container"),
  smooth: true,
  lerp: 0.05,
});