import Image from 'next/image';
import Navbar from '@/components/NavBar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home() {
  return (
    <div className="relative h-[700px] text-[#1c2340] font-sans">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      <section className="relative h-[500px] bg-[#344E41] py-15 mb-20 px-6 sm:px-16">
        <div className="max-w-4xl h-[480px] mx-auto bg-white flex flex-col lg:flex-row shadow-lg">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center bg-white py-6">
            <Image
              src="/purz.png"
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
          <a href="https://www.linkedin.com/in/purva-zinjarde/" className="text-white hover:opacity-80">
            <LinkedInIcon fontSize="medium" />
          </a>
          <a href="https://github.com/purvaz" className="text-white hover:opacity-80">
            <GitHubIcon fontSize="medium" />
          </a>
          <a href="mailto:purvajoshi2712@gmail.com" className="text-white hover:opacity-80">
            <EmailIcon fontSize="medium" />
          </a>
          <a href="https://scholar.google.com/citations?user=DXTKAG0AAAAJ&hl=en" className="text-white hover:opacity-80">
            <SchoolIcon fontSize="medium" />
          </a>
          <a href="https://pixels-by-purva.vercel.app/" className="text-white hover:opacity-80">
            <PhotoCameraIcon fontSize="medium" />
          </a>
          <a href="https://www.instagram.com/pixels_by_purva/" className="text-white hover:opacity-80">
            <InstagramIcon fontSize="medium" />
          </a>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-2xl lg:text-3xl font-light mb-6">Education & Experience</h2>
        <div className="w-18 h-1 bg-[#fab910] my-4 mx-auto rounded-full" />
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
          I hold dual Master's degrees in Computer Science and have 6+ years of experience working in EdTech, FinTech, and Research.
          <br />Being a Fullstack Engineer, I've contributed to everything from backend systems to creative frontend work, and I’m always excited to learn more and build better.
          <br />Bonus: I graduated with a near-perfect GPA both times!
        </p>
      </section>

    </div>
  );
}
