import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import NeuralNetwork from "@/components/canvas/NeuralNetwork";
import CustomCursor from "@/components/ui/CustomCursor"; // <--- Import the cursor

export default function Home() {
  return (
    <main className="relative bg-void min-h-screen selection:bg-neon selection:text-void">
      
      {/* 1. Inject the Custom Neon Cursor here! */}
      <CustomCursor />

      {/* 2. Interactive 3D Background */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <NeuralNetwork />
      </div>

      {/* 3. Global Command Palette Navigation */}
      <Navbar />

      {/* 4. The Sections (z-10 ensures they sit above the 3D canvas) */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>

      {/* 5. Global Footer */}
      <Footer />
    </main>
  );
}