"use client";
import Header from "./Header";
import Footer from "./Footer";

const HeaderSection = ({ id }) => {
  return (
    <section id={id}>
      <div className="w-screen h-screen bg-zinc-900 overflow-x-hidden">
        {/*Do we still need this? */}
        <Footer />
        <div className="flex flex-col overflow-x-hidden relative w-full h-full bg-noise-texture bg-cover bg-center bg-blend-overlay  p-screen z-10">
          <Header />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
