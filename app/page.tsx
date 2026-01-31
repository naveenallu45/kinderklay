import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularCourses from './components/PopularCourses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import OurBranches from './components/OurBranches';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <Navbar />
      <Hero />
      <Features />
      <PopularCourses />
      <WhyChooseUs />
      <OurBranches />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
