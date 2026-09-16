export interface NavLink {
  id: string;
  label: string;
}

export interface StatItem {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
}

export interface PrincipleItem {
  n: string;
  h: string;
  p: string;
}

export interface ExpertiseCard {
  prop: 'brain' | 'chip' | 'gem' | 'chart' | 'arrow' | 'node';
  h: string;
  p: string;
  tags: string[];
}

export interface TestimonialItem {
  initial: string;
  quote: string;
  name: string;
  org: string;
}

export interface MascotClip {
  clip: 'wave' | 'run' | 'cheer';
  label: string;
}

export interface ProgrammeStep {
  h: string;
  p: string;
  flagship?: boolean;
  cert?: boolean;
}

export interface ProgrammeTab {
  id: 'corporate' | 'university';
  label: string;
  steps: ProgrammeStep[];
}

export interface ConsultingItem {
  prop: 'chart' | 'chip' | 'node';
  h: string;
  p: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface BarMetric {
  label: string;
  value: number;
}

export interface TourFeature {
  h: string;
  p: string;
}

export interface ClientPartner {
  n: string;
  t: string;
  c: 'academic' | 'corporate';
  img: string;
  rel: string;
}

export interface ContactToken {
  icon: 'mail' | 'phone' | 'pin';
  strong: string;
  span: string;
}

export interface DataStrideFeature {
  ico: string;
  h: string;
  p: string;
}
