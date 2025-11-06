export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type JourneyStop = {
  title: string;
  summary: string;
  time: string;
};

export type ProgramTrack = {
  id: string;
  name: string;
  tagline: string;
  focus: string[];
  takeaways: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const features: Feature[] = [
  {
    title: "Adaptive Rituals",
    description:
      "Layered daily exercises that flex with your schedule, from 2-minute resets to deep-dive reflections.",
    icon: "🌿",
  },
  {
    title: "Pattern Insights",
    description:
      "Live dashboards surface micro-trends across mood, habits, and energy so you can respond faster.",
    icon: "📊",
  },
  {
    title: "Human-to-Human Sparks",
    description:
      "Curated cohorts connect you with peers on similar journeys, accelerating accountability and empathy.",
    icon: "🤝",
  },
  {
    title: "Guided Audio",
    description:
      "Soundscapes and narrative guides co-created with therapists to help you recenter in under five minutes.",
    icon: "🎧",
  },
];

export const journey: JourneyStop[] = [
  {
    title: "Morning Sync",
    summary: "Intentional breath work and high-signal micro-journaling.",
    time: "06:45",
  },
  {
    title: "Noon Momentum",
    summary: "Two-question pulse check that nudges intentional resets.",
    time: "12:00",
  },
  {
    title: "Twilight Review",
    summary: "Light-touch reflections connect dots across your day.",
    time: "19:30",
  },
  {
    title: "Weekend Deep Dive",
    summary: "Long-form prompts to realign personal goals with actions.",
    time: "Saturday",
  },
];

export const tracks: ProgramTrack[] = [
  {
    id: "clarity",
    name: "Clarity Lab",
    tagline: "Reframe stories, align decisions, stay true to your narrative.",
    focus: [
      "Somatic grounding sequences",
      "Narrative reframing prompts",
      "Weekly signal summary",
    ],
    takeaways: [
      "Sharper pattern recognition",
      "Reduced decision fatigue",
      "A renewed personal mission statement",
    ],
  },
  {
    id: "momentum",
    name: "Momentum Engine",
    tagline: "Build micro-habits that compound into long-run momentum.",
    focus: [
      "Habit stacking architecture",
      "Energy rhythm mapping",
      "Adaptive accountability loops",
    ],
    takeaways: [
      "Actionable cadence to ship your goals",
      "Personalized focus scorecard",
      "Peer pod for live feedback",
    ],
  },
  {
    id: "regeneration",
    name: "Regeneration Studio",
    tagline: "Grow capacity, deepen rest, show up from a centered place.",
    focus: [
      "Restorative audio journeys",
      "Sleep quality signal tracking",
      "Boundary-setting playbooks",
    ],
    takeaways: [
      "Rest-first weekly structure",
      "Aligned boundaries map",
      "Documented renewal rituals",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Harmony Haven rebuilt how our team cares for momentum and mental clarity. Every ritual feels tailored and alive.",
    name: "Kai Morgan",
    role: "Head of Product, LumenWorks",
  },
  {
    quote:
      "The cadence is magical — short nudges, deep insights. I finally see the narrative connecting my work and rest.",
    name: "Simone Adeyemi",
    role: "Founder, Field Atlas",
  },
  {
    quote:
      "What stands out is how human it remains. Data guides you, but the community keeps you anchored.",
    name: "Noah Briggs",
    role: "Coach & Facilitator",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Who is Harmony Haven designed for?",
    answer:
      "Creators, founders, and mindful leaders who want a grounded system for sustaining their impact without burning out.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "The adaptive rhythm keeps daily rituals under 15 minutes, with optional deep-dives when you have more space.",
  },
  {
    question: "Can teams participate together?",
    answer:
      "Yes. Cohort onboarding lets teams align on shared rituals while keeping individual insights private and secure.",
  },
  {
    question: "Is Harmony Haven therapy?",
    answer:
      "We are a guided practice platform informed by clinical research and coaching — not a replacement for individual therapy.",
  },
];
