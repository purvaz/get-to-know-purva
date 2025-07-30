import Navbar from '@/components/Navbar';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TerminalIcon from '@mui/icons-material/Terminal';
import TopicIcon from '@mui/icons-material/Topic';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MoodIcon from '@mui/icons-material/Mood';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
    const projects = [
        {
            title: 'VREE',
            skill: 'Fullstack Development',
            description: 'Designed and built interactive 3D and VR simulations to help structural engineers explore earthquake-damaged buildings in a safe, virtual environment. These tools enabled practical, site-like learning without the need for physical presence, making training more accessible, immersive, and impactful.',
            tech: ['C#', 'Unity', 'VR/AR', 'OOPs', 'HMD'],
            icon: <ViewInArIcon fontSize="inherit" />,
        },
        {
            title: 'Pixels by Purva',
            skill: 'Design & Development',
            description: 'Created a responsive photography portfolio featuring 500+ high-quality images, organized into thoughtfully curated categories and stories. Built with performance in mind, it includes optimized delivery and seamless cloud hosting for a smooth visual experience (link on homepage).',
            tech: ['TypeScript', 'Next.js', 'Tailwind CSS'],
            icon: <PhotoCameraIcon fontSize="inherit" />,
        },
        {
            title: 'Autograder Plugin',
            skill: 'Fullstack Development',
            description: 'Built an autograder plugin that automatically tested and graded programming assignments, streamlining the evaluation process in tech courses. This reduced grading time by 65% and ensured faster, more consistent feedback for students.',
            tech: ['Java', 'AWS', 'HTML/CSS', 'Bootstrap'],
            icon: <TerminalIcon fontSize="inherit" />,
        },
        {
            title: 'STEM Data Automation',
            skill: 'Backend Development',
            description: 'Developed a flexible Python pipeline to crawl nested folders, extract and process STEM data, and generate consolidated reports. It automated error checks, applied custom filters, and reduced processing time by over 70%.',
            tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
            icon: <TopicIcon fontSize="inherit" />,
        },
        {
            title: 'GatorJobs',
            skill: 'Fullstack Development',
            description: 'Designed a skills-based job matching platform that connected students with roles aligned to their strengths. Matched 200+ students to relevant opportunities through an intuitive and streamlined experience.',
            tech: ['Node.js', 'Flask', 'MySQL', 'GCP'],
            icon: <ScreenSearchDesktopIcon fontSize="inherit" />,
        },
        {
            title: 'Genetic Risk Prediction Engine',
            skill: 'ML Engineering / NLP',
            description: 'Engineered a transcript analysis system to mine patient history for hereditary disease indicators. Reached 92% prediction accuracy by applying rule-based logic and pattern detection to medical text data.',
            tech: ['Python', 'Pattern Analysis', 'NLP', 'Scikit-learn', 'Pandas', 'NumPy'],
            icon: <MedicalInformationIcon fontSize="inherit" />,
        },
        {
            title: 'Histopathology Cancer Detector',
            skill: 'ML Engineering / Classifier',
            description: 'Developed multiple machine learning classifiers (SVM, CNN, KNN) to detect metastatic cancer from histopathologic scans. Achieved over 90% accuracy in distinguishing cancerous from non-cancerous lymph node cells.',
            tech: ['Python', 'Classification', 'KNN', 'SVM', 'CNN', 'Keras', 'PyTorch', 'TensorFlow'],
            icon: <MonitorHeartIcon fontSize="inherit" />,
        },
        {
            title: 'Blossom',
            skill: 'Frontend Development',
            description: 'Designed the UI for a mental health app with a focus on accessibility, clarity, and user well-being. Applied core HCI and UX principles to build a responsive, engaging experience that supports emotional self-tracking and reflection.',
            tech: ['React.js', 'D3.js', 'UI/UX', 'HCI'],
            icon: <MoodIcon fontSize="inherit" />,
        },

    ];

    const bgVariants = [
        'from-[#527A67] to-[#344E41]',      // dark green
        'from-[#FBC337] to-[#FDE19B]',      // soft yellow
        'from-[#9DBEAE] to-[#78A590]',        // light green
    ];

    return (
        <div className="bg-[#CAD2C5] min-h-screen">
            <Navbar />

            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 flex justify-center items-center gap-2">
                    Projects
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-sm">
                A selection of projects that showcase my experience across backend systems, frontend development, all powered by enough caffeine to supply a small village!
                </p>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className={`flex flex-col md:flex-row shadow-xl overflow-hidden bg-white min-h-[320px] ${i % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Side */}
                            <div className="w-full md:w-1/2 p-8 text-left relative">
                                <div className="absolute left-0 top-8 h-15 w-2.5 bg-[#fab910]" />
                                <h3 className="text-2xl font-extrabold text-gray-800 pl-4 mb-1">{proj.title}</h3>
                                <p className="text-md font-bold text-[#fab910] pl-4 mb-3">{proj.skill}</p>
                                <p className="text-md text-gray-700 pl-4">{proj.description}</p>
                            </div>

                            {/* Icon + Tech Side */}
                            <div className={`w-full md:w-1/2 min-h-[260px] flex flex-col justify-center items-center 
              bg-gradient-to-br ${bgVariants[i % bgVariants.length]} px-6 py-8`}>
                                <div className="text-9xl text-white drop-shadow-md mb-12">{proj.icon}</div>

                                <div className="flex flex-wrap justify-center gap-2 text-sm">
                                    {proj.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-white border border-gray-300 px-4 py-1 rounded-xl text-gray-800 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
