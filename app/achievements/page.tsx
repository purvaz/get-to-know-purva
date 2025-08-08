'use client';

import Navbar from '@/components/Navbar';

const achievements = {
  Academic: [
    { title: 'Distinguished Achievement Award for Academic Excellence', description: 'Received in Computer Science at San Francisco State University.', date: 'May 2024' },
    { title: "Master's in Computer Science (SFSU)", description: 'Graduated with academic excellence from San Francisco State University.', date: 'May 2024' },
    { title: "Master's in Computer Science (Pune University)", description: 'Graduated top of class from University of Pune.', date: 'May 2017' },
    { title: "Rank 1 in Master's Program", description: 'Awarded for securing First Rank throughout the program.', date: 'Aug 2017' },
    { title: "Rank 2 in Bachelor's Program", description: "Second Rank in the Bachelor's Program at Pune University.", date: 'Aug 2015' },
  ],
  Scholarships: [
    { title: 'Late Dattatreya Nilkanth Pujari Scholarship', description: "Awarded for securing Rank 1 in the Master's Program.", date: 'Aug 2017' },
    { title: 'Late Mukundrao Wachcasundar Memorial Scholarship', description: 'Scholarship for academic excellence in Computer Science.', date: 'Aug 2017' },
  ],
  Research: [
    { title: 'Student Project Showcase Winner', description: 'Second place for VR Earthquake Training tool at Annual Research Competition.', date: 'May 2023' },
  ],
};

// Gradients (slightly deepened so they play well with dark text)
const bgVariants = [
  'from-[#527A67] to-[#344E41]', // dark green (white text ok)
  'from-[#F7C948] to-[#FDE19B]', // golden yellow (needs dark text)
  'from-[#4E9E91] to-[#2F7D72]', // richer teal (white text ok)
];

// Per-section typography + card styling to guarantee contrast
const sectionStyles = [
  { sectionText: 'text-white', headingBorder: 'border-white/40', card: 'bg-white/20 border-white/20', cardTitle: 'text-white', cardBody: 'text-white/90', cardMeta: 'text-white/80' },
  { sectionText: 'text-gray-700', headingBorder: 'border-black/20', card: 'bg-white/30 border-black/10', cardTitle: 'text-gray-700', cardBody: 'text-gray-700', cardMeta: 'text-gray-700' },
  { sectionText: 'text-white', headingBorder: 'border-white/40', card: 'bg-white/20 border-white/20', cardTitle: 'text-white', cardBody: 'text-white/90', cardMeta: 'text-white/80' },
];

export default function AchievementsPage() {
  const categories = Object.entries(achievements);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-2">
          Key Achievements
        </h2>
        <p className="text-center text-gray-600 text-sm mb-12">Professional Milestones</p>

        {categories.map(([category, awards], idx) => {
          const style = sectionStyles[idx % sectionStyles.length];
          return (
            <section
              key={category}
              className={`py-16 px-6 border-t-2 border-white bg-gradient-to-br ${bgVariants[idx % bgVariants.length]} ${style.sectionText}`}
            >
              <div className="max-w-5xl mx-auto">
                <h3 className={`text-2xl font-semibold mb-8 border-b pb-2 ${style.headingBorder}`}>
                  {category}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {awards.map((award, i) => (
                    <div
                      key={i}
                      className={`rounded-lg p-6 shadow-lg backdrop-blur-sm ring-1 ring-black/5 ${style.card}`}
                    >
                      <h4 className={`font-semibold text-lg mb-1 ${style.cardTitle}`}>
                        {award.title}
                      </h4>
                      <p className={`text-sm mb-1 ${style.cardBody}`}>
                        {award.description}
                      </p>
                      <p className={`text-xs italic ${style.cardMeta}`}>{award.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
