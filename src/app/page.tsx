 import Navbar from "@/componets/Navbar/Navbar";
import Hero from "@/componets/sections/Hero/Hero";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar/>
      </header>
      <section>
        <Hero/>
      </section>   
    </div>
  );
}
