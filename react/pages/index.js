import Head from "next/head";
import Footer from "../components/Footer/Footer";
import ImageDisplay from "../components/imageDisplay/ImageDisplay";
import ProductDetail from "../components/ProductDetail/ProductDetail";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="container mx-auto py-16">
        <header className="pb-6 border-b border-gray-300">
          <h1 className="text-4xl font-extrabold">
            Get your Kemper Profiling Amp
          </h1>
          <h2 className="text-xl text-gray-500">
            All your favorite amps and effects, together in one little box.
          </h2>
        </header>
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="col-span-1">
            <ImageDisplay />
          </div>
          <div className="col-span-1">
            <ProductDetail />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
