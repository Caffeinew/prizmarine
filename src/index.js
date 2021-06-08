import "locomotive-scroll/src/locomotive-scroll.scss";
import "./style/index.scss";

import LocomotiveScroll from "locomotive-scroll";

new LocomotiveScroll({
  el: document.querySelector("#container"),
  smooth: true,
  lerp: 0.05,
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}

(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(80457868, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
});
