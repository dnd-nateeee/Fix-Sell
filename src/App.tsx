import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { AIDiagnostic } from './components/AIDiagnostic';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Footer, MobileBar } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <div className="bg-black text-white font-body font-light overflow-x-hidden pt-[60px]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <AIDiagnostic />
      <Reviews />
      <Location />
      <Footer />
      <MobileBar />
      <ChatWidget />
    </div>
  );
}
