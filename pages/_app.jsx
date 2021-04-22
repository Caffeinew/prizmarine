import "../style/global.css";
import "tailwindcss/tailwind.css";
import { Scrollbar } from "react-scrollbars-custom";

export default function app({ Component, pageProps }) {
  return (
    <Scrollbar style={{ width: "100%", height: "100%" }}>
      <Component {...pageProps} />
    </Scrollbar>
  );
}
