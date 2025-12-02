import Navbar from "@/componets/Navbar/Navbar";
import Hero from "@/componets/Sections/Hero/Hero";
import Collections from "@/componets/Sections/Collections/Collections"; 
import ProductSection from "@/componets/Sections/Product/ProductSection";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar/>
      </header>
      <section>
        <Hero/>
      </section>  
      <section>
        <Collections/>
      </section>   
      <section>
        <ProductSection/>
      </section>
    </div>
  );
}
