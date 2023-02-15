import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>The Weighter</title>
        <link rel="icon" href="@/public/logo.png" />
      </Head>
      <Header />
      <div className="flex w-full h-[80vh] justify-center items-center bg-neutral-200 text-black flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
