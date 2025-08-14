"use client"

import Image from 'next/image';
import Navbar from '@/components/NavBar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from '@/components/Footer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import ResumeButtons from '@/components/ResumeButtons';

const SKILLS = [
  {
    title: 'Languages',
    items: ['Go', 'TypeScript', 'Python', 'JavaScript', 'Java', 'C/C++', 'C#', 'PHP'],
    palette: {
      cardBg: 'bg-white',
      cardBorder: 'border-[#5a8770]',
      headerText: 'text-gray-900',
      chipBg: 'bg-[#5a8770]/50',
      chipBorder: 'border-[#5a8770]',
      accent: 'bg-[#5a8770]',
    },
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Node.js', 'Flask', 'Spring', 'React.js', 'Next.js', 'Vue.js', 'TailwindCSS'],
    palette: {
      cardBg: 'bg-white',
      cardBorder: 'border-amber-200',
      headerText: 'text-amber-900',
      chipBg: 'bg-amber-100/60',
      chipBorder: 'border-amber-200',
      accent: 'bg-amber-300',
    },
  },
  {
    title: 'ML Libraries',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'NumPy', 'Pandas', 'NLTK', 'SciPy', 'Matplotlib'],
    palette: {
      cardBg: 'bg-white',
      cardBorder: 'border-[#5a8770]',
      headerText: 'text-gray-900',
      chipBg: 'bg-[#5a8770]/50',
      chipBorder: 'border-[#5a8770]',
      accent: 'bg-[#5a8770]',
    },
  },
  {
    title: 'Cloud Technology & Databases',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Redis', 'MongoDB', 'MySQL', 'Oracle', 'PostgreSQL'],
    palette: {
      cardBg: 'bg-white',
      cardBorder: 'border-amber-200',
      headerText: 'text-amber-900',
      chipBg: 'bg-amber-100/60',
      chipBorder: 'border-amber-200',
      accent: 'bg-amber-300',
    },
  },
  {
    title: 'Tools & Platforms',
    items: ['Postman', 'Jupyter', 'IntelliJ', 'VS Code', 'Unity', 'Figma', 'Tableau', 'Jira'],
    palette: {
      cardBg: 'bg-white',
      cardBorder: 'border-[#5a8770]',
      headerText: 'text-gray-900',
      chipBg: 'bg-[#5a8770]/50',
      chipBorder: 'border-[#5a8770]',
      accent: 'bg-[#5a8770]',
    },
  },
];

export default function Home() {

  const [status, setStatus] = useState<{ sending: boolean; ok: boolean | null; msg: string }>({
    sending: false,
    ok: null,
    msg: '',
  });

  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // Honeypot: real users never fill this
    if (fd.get('company')) return;

    setStatus({ sending: true, ok: null, msg: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first: fd.get('first'),
          last: fd.get('last'),
          email: fd.get('email'),
          subject: fd.get('subject'),
          message: fd.get('message'),
        }),
      });

      if (res.ok) {
        setStatus({ sending: false, ok: true, msg: 'Thanks. I’ll get back to you soon.' });
        setSubmitted(true);
      } else {
        setStatus({ sending: false, ok: false, msg: 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ sending: false, ok: false, msg: 'Network error. Please try again.' });
    }
  }

  return (
    <div className="relative h-[700px] text-[#1c2340] font-sans">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      <section className="relative h-[520px] bg-[#344E41] py-15 mb-20 px-6 sm:px-16">
        <div className="max-w-4xl h-[500px] mx-auto bg-white flex flex-col lg:flex-row shadow-lg">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center bg-white py-6">
            <Image
              src="/purvaz.png"
              alt="Purva Zinjarde"
              width={800}
              height={1000}
              className="w-[380px] h-auto object-cover"
            />
          </div>

          {/* Right - Info */}
          <div className="w-full lg:w-1/2 px-8 py-10 bg-gray-100">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Hey there!</h1>
            <p className="text-lg text-gray-800 mb-4">I'm Purva. I am passionate about coding and doing creative things.</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <LocationOnIcon fontSize="inherit" className="text-[#fab910]" />
              <span>San Francisco Bay Area</span>
            </p>
            <div className="w-18 h-1 bg-[#fab910] my-4 rounded-full" />

            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold mb-3">A few things about me...</p>
                <p className="text-md text-gray-800">I’m a software engineer by day, but I’ve always needed a creative outlet. So I paint, take photos, and travel when I can. I like to learn languages for fun (my 3+ year Duolingo streak says hi), and I’m that friend who always has a meme reference for the moment. I care about honest effort, clear thinking, and building things that actually make an impact. </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Social Icons */}
        <div className="max-w-lg mx-auto bg-[#5A8770] py-5 px-8 flex justify-center space-x-8 mt-[8px]">
          <a href={`${process.env.NEXT_LINKEDIN}`} className="text-white hover:opacity-80">
            <LinkedInIcon fontSize="medium" />
          </a>
          <a href={`${process.env.NEXT_GITHUB}`} className="text-white hover:opacity-80">
            <GitHubIcon fontSize="medium" />
          </a>
          <a href={`mailto:${process.env.NEXT_CONTACT_EMAIL}`} className="text-white hover:opacity-80">
            <EmailIcon fontSize="medium" />
          </a>
          <a href={`${process.env.NEXT_GOOGLE_SCHOLAR}`} className="text-white hover:opacity-80">
            <SchoolIcon fontSize="medium" />
          </a>
          <a href={`${process.env.NEXT_PIXELS_BY_PURVA}`} className="text-white hover:opacity-80">
            <CameraEnhanceIcon fontSize="medium" />
          </a>
          <a href={`${process.env.NEXT_INSTAGRAM}`} className="text-white hover:opacity-80">
            <InstagramIcon fontSize="medium" />
          </a>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-2xl lg:text-3xl font-light mb-6">Education &amp; Experience</h2>
        <div className="w-18 h-1 bg-[#fab910] my-4 mx-auto rounded-full" />
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
          I hold dual Master's degrees in Computer Science and have 6+ years of experience working in EdTech, FinTech, and Research.
          <br />Being a Fullstack Engineer, I've contributed to everything from backend systems to creative frontend work, and I’m always excited to learn more and build better.
          <br />Bonus: I graduated with a near-perfect GPA both times!
        </p>
      </section>

      <section className="bg-[#F2F8F2] border-t border-[#ddebd8] mb-14">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-tight text-[#1c2340] text-center">
            Technologies &amp; Skills
          </h2>
          <div className="w-16 h-1 bg-[#fab910] mt-4 mx-auto rounded-full" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {SKILLS.map((cat) => {
              const p = cat.palette;
              return (
                <div
                  key={cat.title}
                  className={`group overflow-hidden rounded-2xl border ${p.cardBorder} ${p.cardBg} shadow-sm transition-shadow hover:shadow-md`}
                >
                  <div className={`h-1.5 ${p.accent}`} />
                  <div className="p-5">
                    <h3 className={`text-sm font-semibold tracking-wide ${p.headerText}`}>{cat.title}</h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className={`text-xs px-2.5 py-1 rounded-full border ${p.chipBorder} ${p.chipBg} text-gray-900`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 relative border-t-5 border-[#fab910]">
        {/* full-bleed split background */}
        <div aria-hidden className="absolute inset-0 grid md:grid-cols-2">
          <div className="bg-[#344E41]" />
          <div className="bg-[#EBEDE9]" />
          {/* subtle divider on desktop */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-black/10" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT: Profile summary (like your reference) */}
            <div className="text-white">
              <h3 className="text-3xl text-white mb-2 font-light tracking-tight">Purva Zinjarde</h3>
              <p className="mt-1 text-xs mb-6 text-[#fab910] sm:text-sm uppercase tracking-[0.2em]">
                <LocationOnIcon fontSize="inherit" className="text-[#fab910]" /> San Francisco Bay Area
              </p>
              <div className="w-18 h-1 bg-[#fab910] mt-3 mb-8 rounded-full" />

              <div className="mt-8 space-y-5 text-md">
                <div className="pr-12 md:pr-16 lg:pr-24 xl:pr-32">
                  <p className="font-light">Whether you're looking to build something awesome, collaborate, or just fancy a good chat, I'm all ears.</p>
                  <p>Shoot me an email, or get in touch on LinkedIn and I'll get back to you in a jiffy!</p>
                </div>
              </div>

              <div className="mt-10 pt-6">
                <div className="flex items-center gap-6">
                  <a
                    href={`${process.env.NEXT_LINKEDIN}`}
                    aria-label="LinkedIn"
                    className="text-white hover:opacity-80"
                  >
                    <LinkedInIcon fontSize="medium" />
                  </a>
                  <a
                    href={`${process.env.NEXT_GITHUB}`}
                    aria-label="GitHub"
                    className="text-white hover:opacity-80"
                  >
                    <GitHubIcon fontSize="medium" />
                  </a>
                  <a
                    href={`${process.env.NEXT_INSTAGRAM}`}
                    aria-label="Instagram"
                    className="text-white hover:opacity-80"
                  >
                    <InstagramIcon fontSize="medium" />
                  </a>
                  <a href={`${process.env.NEXT_GOOGLE_SCHOLAR}`} className="text-white hover:opacity-80">
                    <SchoolIcon fontSize="medium" />
                  </a>
                  <a
                    href={`${process.env.NEXT_PIXELS_BY_PURVA}`}
                    aria-label="Photography site"
                    className="text-white hover:opacity-80"
                  >
                    <CameraEnhanceIcon fontSize="medium" />
                  </a>
                </div>
              </div>
              <div className="mt-10 text-[#1c2340]">
                <ResumeButtons></ResumeButtons>
              </div>
            </div>


            {/* RIGHT: Form */}
            <div className="relative pl-10">
              <form onSubmit={handleSubmit} className="grid gap-5" noValidate aria-busy={status.sending}>
                {/* Client honeypot (keep it) */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first" className="block text-xs font-medium text-gray-700">First Name *</label>
                    <input
                      id="first" name="first" required maxLength={60} autoComplete="given-name"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fab910]"
                    />
                  </div>
                  <div>
                    <label htmlFor="last" className="block text-xs font-medium text-gray-700">Last Name *</label>
                    <input
                      id="last" name="last" required maxLength={60} autoComplete="family-name"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fab910]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700">Email *</label>
                  <input
                    id="email" name="email" type="email" required maxLength={120} autoComplete="email"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fab910]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-700">Subject *</label>
                  <input
                    id="subject" name="subject" required maxLength={120}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fab910]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700">Message *</label>
                  <textarea
                    id="message" name="message" rows={5} required maxLength={4000}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fab910]"
                  />
                  <p className="mt-1 text-[11px] text-gray-500">Max 4000 characters</p>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={status.sending || submitted}
                    aria-disabled={status.sending || submitted}
                    className={`inline-flex items-center rounded-lg bg-[#354e41] text-white border px-4 py-2 text-sm font-medium
                  ${submitted ? 'opacity-60 cursor-not-allowed' : 'hover:bg-[#5a8770]'}`}
                  >
                    {status.sending ? 'Sending…' : submitted ? 'Sent' : 'Submit'}
                  </button>
                </div>

                {status.msg && (
                  <p className={`text-sm ${status.ok ? 'text-green-700' : 'text-red-700'}`} aria-live="polite" role="status">
                    {status.msg}
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
