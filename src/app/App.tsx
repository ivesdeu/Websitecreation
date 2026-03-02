import { Header } from './components/header';
import { Hero } from './components/hero';
import { SocialProof } from './components/social-proof';
import { Services } from './components/services';
import { WhyChoose } from './components/why-choose';
import { Process } from './components/process';
import { Testimonials } from './components/testimonials';
import { ServiceArea } from './components/service-area';
import { CTASection } from './components/cta-section';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyChoose />
        <Process />
        <Testimonials />
        <ServiceArea />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}