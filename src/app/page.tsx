"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "High-End Gaming PC Interior with Colorful RGB Lights" },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/8041344/pexels-photo-8041344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Vibrant studio photoshoot featuring diverse models and photographers working closely together." },
  { "id": "featureImage", "url": "https://images.pexels.com/photos/14165792/pexels-photo-14165792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Explore the sleek and luxurious interior of a modern Mercedes sports car." },
  { "id": "teamImage", "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc={''}
          brandName="AI Startup"
          navItems={[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Features', id: 'features' },
            { name: 'Contact', id: 'contact' }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to AI Startup"
            description="Empowering innovation with cutting-edge AI solutions"
            imageSrc={assetMap.find(a => a.id === 'heroImage')?.url}
            buttons={[{ text: "Get Started", href: "about" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "We’re at the forefront of AI technology, dedicated to innovative solutions.",
              "Our mission is to drive progress and promote accessibility for AI."
            ]}
            buttons={[{ text: "Learn More", href: "features" }]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Features"
            description="Discover the tools and capabilities that make our platform powerful"
            features={[
              { title: "Advanced Analytics", description: "Get insights into your business performance", imageSrc: assetMap.find(a => a.id === 'featureImage')?.url },
              { title: "Seamless Integration", description: "Easily integrate with existing systems", imageSrc: assetMap.find(a => a.id === 'featureImage')?.url }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              { id: "1", name: "Alice Johnson", role: "CTO", imageSrc: assetMap.find(a => a.id === 'teamImage')?.url, socialLinks: [{ icon: "Twitter", url: "https://twitter.com/alice" }, { icon: "Linkedin", url: "https://linkedin.com/in/alice" }] },
              { id: "2", name: "Bob Smith", role: "Lead Developer", imageSrc: assetMap.find(a => a.id === 'teamImage')?.url, socialLinks: [{ icon: "Github", url: "https://github.com/bob" }] }
            ]}
            title="Meet Our Team"
            description="The talent behind our success"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Connected"
            description="Join our newsletter to receive updates and exclusive content."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Careers", href: "jobs" }] },
              { title: "Legal", items: [{ label: "Privacy", href: "privacy" }, { label: "Terms", href: "terms" }] }
            ]}
            copyrightText="© 2025 | AI Startup"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
