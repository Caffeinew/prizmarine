import "tailwindcss/tailwind.css";
import "../style/global.css";
import { Scrollbar } from "react-scrollbars-custom";

export default function App({ Component, pageProps }) {
  return (
    <Scrollbar style={{ width: "100%", height: "100%" }}>
      <Component {...pageProps} />
    </Scrollbar>
  );
}
