import { Hero } from '../components/Hero';
import { BobaShakeSpotlight } from '../components/BobaShakeSpotlight';
import { Collections } from './Collections';
import { DigitalOrderingSection } from '../components/DigitalOrderingSection';
import { CinematicScroll } from '../components/CinematicScroll';
import { JourneyTimeline } from '../components/JourneyTimeline';
import { Story } from './Story';
import { Community } from './Community';
import { SocialFeed } from '../components/SocialFeed';
import { NextChapter } from '../components/NextChapter';

export function Home() {
  return (
    <div className="bg-warm-cream">
      
      {/* 1. THE HOOK */}
      <Hero />
      
      {/* 2. THE HYPE (New Launches) */}
      <div id="boba-shakes-spotlight">
        <BobaShakeSpotlight />
      </div>

      {/* 3. THE OFFERING (Menu & Products) */}
      <div id="collections">
        <Collections />
      </div>

      {/* 4. THE ACTION (Ordering Systems) */}
      <div id="digital-ordering">
        <DigitalOrderingSection />
      </div>

      {/* 5. THE CULTURE (Brand Ethos) */}
      <div id="home">
        <CinematicScroll />
      </div>

      {/* 6. THE LORE (History & Story) */}
      <div id="timeline">
        <JourneyTimeline />
      </div>
      
      <div id="story">
        <Story />
      </div>

      {/* 7. SOCIAL PROOF */}
      <div id="community">
        <Community />
      </div>

      <div id="social-feed">
        <SocialFeed />
      </div>

      {/* 8. FOOTER CALL TO ACTION */}
      <div id="next-chapter">
        <NextChapter />
      </div>
      
    </div>
  );
}
