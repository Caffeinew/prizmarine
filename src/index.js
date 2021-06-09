import "locomotive-scroll/src/locomotive-scroll.scss";
import "nprogress/nprogress.css"
import "./style/index.scss";
import Swal from "sweetalert2";
import LocomotiveScroll from "locomotive-scroll";
import NProgress from "nprogress"

NProgress.configure({ showSpinner: false });

new LocomotiveScroll({
  el: document.querySelector("#container"),
  smooth: true,
  lerp: 0.05,
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");

    formElement.onsubmit = async (event) => {
      event.preventDefault();
      NProgress.start()
      const formData = Object.fromEntries(new FormData(formElement).entries());

      const data = await fetch("/.netlify/functions/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await data.json();
      NProgress.done()
      if (res.result) {
        Swal.fire({
          title: "Отлично 🙂",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Что-то пошло не так 😕",
          icon: "error",
        });
      }
    };
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
