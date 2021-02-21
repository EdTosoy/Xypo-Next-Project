import Head from "next/head";
import About from "../components/About";
import Courses from "../components/Courses";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { MenuProvider } from "../ContextAPI/menuContext";

export default function Home() {
  return (
    <MenuProvider>
      <div>
        <Head>
          <title>Xypo</title>
          <meta
            name="description"
            content="Our menu is constantly evolving, yet always abides by a few simple constants. All of our cooking revolves around open wood fire. We work with a small group of fisherman, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce specific tastes from wild foods. Lastly, we steer clear of imported and commercial goods, opting instead to build our own pantry through patient harvesting and preservation."
          />
        </Head>
        <Header />
        <Hero />
        <About />
        <Features />
        <Courses />
        <Offers />
        <Contact />
        <Footer />
      </div>
    </MenuProvider>
  );
}
