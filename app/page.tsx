import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center w-full">
      <Navbar />
      <main>
      <section id="hero">
        <Hero />
      </section>
      <section>
        <div className="h-100">
          <h2>p</h2>
        </div>
      </section>
      </main>
    </div>
  );
}
