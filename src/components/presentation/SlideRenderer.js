// Import all slide templates
import CoverSlide from '@/components/slides/templates/CoverSlide';
import HeroSlide from '@/components/slides/templates/HeroSlide';
import StatementSlide from '@/components/slides/templates/StatementSlide';
import NumbersSlide from '@/components/slides/templates/NumbersSlide';
import PillarSlide from '@/components/slides/templates/PillarSlide';
import PillarGridSlide from '@/components/slides/templates/PillarGridSlide';
import ManifestoSlide from '@/components/slides/templates/ManifestoSlide';
import SlidoSlide from '@/components/slides/templates/SlidoSlide';
import ImageSlide from '@/components/slides/templates/ImageSlide';
import VideoSlide from '@/components/slides/templates/VideoSlide';
import VideoGallerySlide from '@/components/slides/templates/VideoGallerySlide';
import FinancialGoalsSlide from '@/components/slides/templates/FinancialGoalsSlide';
import CheckerSlide from '@/components/slides/templates/CheckerSlide';
import GoogleChatSlide from '@/components/slides/templates/GoogleChatSlide';
import LogoGridSlide from '@/components/slides/templates/LogoGridSlide';
import ContactWowSlide from '@/components/slides/templates/ContactWowSlide';
import BeforeAfterSlide from '@/components/slides/templates/BeforeAfterSlide';
import BarChartSlide from '@/components/slides/templates/BarChartSlide';
import InstagramSlide from '@/components/slides/templates/InstagramSlide';
import ImageGallerySlide from '@/components/slides/templates/ImageGallerySlide';
import CreativeVariantsSlide from '@/components/slides/templates/CreativeVariantsSlide';
import LinksSlide from '@/components/slides/templates/LinksSlide';
import TableSlide from '@/components/slides/templates/TableSlide';

// Map template names to components
const SLIDE_TEMPLATES = {
  CoverSlide,
  HeroSlide,
  StatementSlide,
  NumbersSlide,
  PillarSlide,
  PillarGridSlide,
  ManifestoSlide,
  SlidoSlide,
  ImageSlide,
  VideoSlide,
  VideoGallerySlide,
  FinancialGoalsSlide,
  CheckerSlide,
  GoogleChatSlide,
  LogoGridSlide,
  ContactWowSlide,
  BeforeAfterSlide,
  BarChartSlide,
  InstagramSlide,
  ImageGallerySlide,
  CreativeVariantsSlide,
  LinksSlide,
  TableSlide,
};

/**
 * SlideRenderer component
 * Dynamically renders the appropriate slide template based on slide.template
 */
export default function SlideRenderer({ slide }) {
  if (!slide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white text-2xl">No slide data</p>
      </div>
    );
  }

  // Get the template component
  const Template = SLIDE_TEMPLATES[slide.template];

  if (!Template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white text-2xl">
          Unknown template: {slide.template}
        </p>
      </div>
    );
  }

  // Render the template with slide content and config
  return <Template slide={slide} content={slide.content} config={slide.config} />;
}
