import { CTA } from '@/components/landing/CTA';
import { Demo } from '@/components/landing/Demo';
import { FAQ } from '@/components/landing/FAQ';
import { Features } from '@/components/landing/Features';
import { Hero } from '@/components/landing/Hero';
import { Pricing } from '@/components/landing/Pricing';
import { ProblemSection } from '@/components/landing/ProblemSection';

export default function HomePage() {
  return <main><Hero /><ProblemSection /><Features /><Demo /><Pricing /><FAQ /><CTA /></main>;
}
