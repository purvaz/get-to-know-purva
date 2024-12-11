'use client';

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer'
import ResumeButtons from '@/components/ResumeButtons'

type TimelineItem = {
  years: string;
  title: string;
  org: string;
  bullets?: string[];
};

const EXPERIENCE: TimelineItem[] = [
  {
    years: 'Dec 2023 — Mar 2025',
    title: 'Software Engineer',
    org: 'San Francisco State University',
    bullets: [
      '- Built a modular VR system for post-earthquake structural damage assessment, achieving 95% accuracy & minimizing on-site inspections.',
      '- Developed training and evaluation features using Unity and C#, using object-oriented design and reusable components.',
      '- Improved runtime efficiency by 28% through performance tuning and scalable architecture rollout to 50+ HMD users.',
    ],
  },
  {
    years: 'Feb 2023 - Jul 2023',
    title: 'Research Scholar',
    org: 'Google',
    bullets: [
      '- Investigated fairness analysis of AI models using custom surveys of 50+ participants, designed and tested 3 prototypes to reduce bias in AI models.',
      '- Shared findings in weekly research reviews, influencing internal approaches to bias mitigation.',
    ],
  },
  {
    years: 'Jul 2017 — Dec 2021',
    title: 'Senior Software Engineer',
    org: 'MKCL',
    bullets: [
      '- Developed end-to-end solutions for an e-learning platform using Go, Vue, Python, and MongoDB.',
      '- Led a team of 6 engineers to launch a revamped learning workflow in 3 months, improving accessibility for 400,000+ students and driving a 23% revenue uplift.',
      '- Directed migration to remote learning during  COVID-19, enabling uninterrupted access for 150,000+ students.',
      '- Designed a comprehensive drill-down dashboard, enabling real-time access to platform-wide metadata, reducing developer support requests by 78% and accelerating issue resolution',
      '- Redesigned monolithic architecture to microservices and distributed designs, improving deployment efficiency and platform scalability.',
    ],
  },
  {
    years: 'Jun 2018 - Dec 2020',
    title: 'Lecturer of Cybersecurity',
    org: 'University of Pune',
    bullets: [
      'Delivered lectures to 100+ students on cybersecurity, network protocols, and threat models, designed interactive labs to enhance practical learning.',
    ],
  },
  {
    years: 'Dec 2016 - Jul 2017',
    title: 'Project Intern',
    org: 'Omniscient Software',
    bullets: [
      '- Developed and integrated a new dashboard to the fintech app using Java, Spring, and MySQL, leading to a 21% increase in user engagement through expanded analytics and account tracking capabilities.',
      '- Maintained system stability through rigorous unit testing, benchmarking, and troubleshooting.',
    ],
  },
];

const EDUCATION: TimelineItem[] = [
  {
    years: '2022 — 2023',
    title: 'M.S., Computer Science',
    org: 'San Francisco State University',
    bullets: ['Distinguished Achievement Award for Academic Excellence'],
  },
  {
    years: '2015 — 2017',
    title: 'Master’s, Computer Science',
    org: 'University of Pune',
    bullets: ['Award for Rank 1 in Masters Program, 2 Merit Scholarships.'],
  },
  {
    years: '2012 — 2015',
    title: 'B.S., Computer Science',
    org: 'University of Pune',
    bullets: ['Award for Rank 2 in Bachelors Program'],
  },
];

/** Theme tints for the RIGHT card only (subtle, alternated) */
const RIGHT_TINTS = [
  { bg: 'bg-[#354e41]', border: 'border-[#51796E]', dot: '#354e41', text: 'text-white' }, // soft green
  { bg: 'bg-[#FFF4CF]', border: 'border-[#FBC337]', dot: '#FBC337', text: 'text-gray-900' }, // soft gold
  { bg: 'bg-[#9FBCA4]', border: 'border-[#78A590]', dot: '#78A590', text: 'text-gray-900' }, // lighter green
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#F2F8F2] text-[#1c2340]">
      <Navbar />

      {/* Header */}
      <header className="px-6 lg:px-10 pt-16 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          {/* Left: title + subtitle */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">Experience</h1>
            <p className="text-sm text-gray-600 mt-2">
              The roles I’ve taken on and the projects I’ve built, each shaping how I think, solve problems, and create.
            </p>
          </div>

          {/* Right: buttons */}
          <div className="shrink-0 flex flex-col items-end">
            <ResumeButtons />
            <p className="mt-2 text-xs text-gray-500">Last updated: Aug 2025</p>
          </div>
        </div>
      </header>


      {/* Experience */}
      <section className="px-6 lg:px-10 pb-16">
        <Timeline items={EXPERIENCE} />
      </section>

      <div className="h-px w-full bg-gray-200" />

      {/* Education */}
      <header className="px-6 lg:px-10 pt-16 border-t border-white pb-16 bg-[#DDEBD8]">
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">Education</h1>
        <p className="text-sm text-gray-600 mt-2">The education that built my foundation as an engineer.</p>
      </header>

      <section className="px-6 lg:px-10 pb-16 bg-[#DDEBD8]">
        <Timeline items={EDUCATION} />
      </section>
      <Footer />
    </div>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Darker, offset line */}
      <div className="hidden md:block absolute left-[40%] top-0 bottom-0 border-l border-[#344E41] z-0" />

      <ul className="space-y-12">
        {items.map((item, idx) => {
          const tint = RIGHT_TINTS[idx % RIGHT_TINTS.length];
          return (
            <li key={idx} className="grid grid-cols-12 gap-6 items-start relative">
              {/* Left column */}
              <div className="col-span-12 md:col-span-4 md:text-right">
                <p className="text-xs tracking-widest text-gray-800 uppercase">{item.years}</p>
                <p className="mt-1 font-semibold">{item.title}</p>
              </div>

              {/* Middle column with dot */}
              <div className="col-span-12 md:col-span-1 h-full flex md:block justify-center relative z-10">
                <span
                  className="block rounded-full"
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: tint.dot,
                    boxShadow: `0 0 0 10px ${hexToRgba(tint.dot, 0.15)}`,
                  }}
                />
              </div>

              {/* Right card */}
              <div
                className={`col-span-12 md:col-span-7 relative z-10 rounded-lg ${tint.bg} ${tint.text} border ${tint.border} shadow-md`}
              >
                <div className="px-6 py-5">
                  <p className="text-sm font-semibold">{item.org}</p>
                  <ul className="mt-2 space-y-1">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="text-sm leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="h-[3px] rounded-b-lg" style={{ backgroundColor: tint.dot }} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>

  );
}


/** util: convert hex #RRGGBB to rgba with alpha */
function hexToRgba(hex: string, alpha = 1) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
