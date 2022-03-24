import "tailwindcss/tailwind.css";
import ProductProvider from "../contexts/productContext";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}
