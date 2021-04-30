import "tailwindcss/tailwind.css";
import "../style/global.css";
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export default function App({ Component, pageProps }) {
  return (
    <OverlayScrollbarsComponent style={{ maxHeight: '100vh' }}>
      <Component {...pageProps} />
    </OverlayScrollbarsComponent>
  );
}
