import { Link } from 'react-router-dom';
import { FiMail, FiLinkedin, FiGithub, FiDownload, FiArrowLeft } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';

// Your resumeData object remains the same...
const resumeData = {
  name: "Leonardo V. Lunario, MSc, PMP",
  location: "Philippines & Hawaii, USA | Open to global opportunities",
  contact: {
    email: "leonardo.lunario@proton.me",
    linkedin: "linkedin.com/in/leonardolunario",
    github: "github.com/lvlunario",
  },
  summary: "Results-driven engineering leader with over 14 years of experience...",
  skills: {
    "Engineering & Systems": "System Integration & Testing, Embedded Systems...",
    "Core Expertise": "Python, C/C++, MATLAB, Visual Basic, SCADA/EMS",
    "Full-Stack Development": "HTML, CSS, JavaScript, React, Node.js, TypeScript, Vite",
    "Leadership": "PMP Certification, Agile Workflows, Risk Analysis...",
  },
  experience: [
     {
      title: "Owner & Investment Manager",
      company: "Maui Oceanfront Condominium & Casa de Oasay",
      duration: "2015-Present",
      points: [
        "Achieved 95% occupancy rates and 5-star ratings by automating booking systems and implementing data-driven marketing strategies.",
        "Managed financial planning and maintenance coordination, boosting property ROI by 20%."
      ]
    },
    {
      title: "Planning Engineer",
      company: "Maui Electric",
      duration: "2015-2020",
      points: [
        "Managed planning and execution of critical infrastructure projects related to power generation and distribution.",
        "Developed databases and software tools for system operations, streamlining data collection and reporting.",
        "Initiated and managed the Unmanned Aerial System (UAS) program for power grid inspections."
      ]
    },
  ],
  education: [
    { degree: "MSc in Engineering", school: "UCLA", duration: "2009-2012" },
    { degree: "BSc in Electrical Engineering", school: "UC San Diego", duration: "2006-2008" },
  ],
  certifications: ["PMP", "Remote Pilot in Command", "The Odin Project (Full-Stack)"]
};


const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/30 pb-2 mb-4">{title}</h2>
    {children}
  </div>
);

export default function Resume() {
  return (
    <AnimatedSection>
      <div className="bg-background text-foreground min-h-screen py-24 sm:py-32">
        <div className="max-w-4xl mx-auto p-8 bg-card-bg border border-card-border rounded-2xl shadow-2xl">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-foreground">{resumeData.name}</h1>
            <p className="text-foreground/70 mt-2">{resumeData.location}</p>
            <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-foreground/80">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-primary"><FiMail /> {resumeData.contact.email}</a>
              <a href={`https://www.${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><FiLinkedin /> LinkedIn</a>
              <a href={`https://www.${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><FiGithub /> GitHub</a>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
             <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <FiArrowLeft />
                Back to Home
              </Link>
             <a
                // IMPORTANT: For this link to work, the PDF file must be placed directly inside the `public` folder at the root of your project.
                href="/Leonardo-Lunario-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                download
              >
                <FiDownload />
                Download PDF Version
              </a>
          </div>

          {/* Summary, Skills, Experience, etc. */}
          <Section title="Professional Summary">
            <p className="text-foreground/80 leading-relaxed">{resumeData.summary}</p>
          </Section>
          <Section title="Technical Skills">
             <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-foreground mb-1">{category}</h3>
                  <p className="text-sm text-foreground/70">{skills}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Professional Experience">
            <div className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-lg text-foreground">{job.title}</h3>
                    <p className="text-sm text-foreground/60 font-medium">{job.duration}</p>
                  </div>
                  <p className="text-md text-foreground/80 font-semibold">{job.company}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-foreground/70">
                    {job.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
           <div className="grid sm:grid-cols-2 gap-8">
             <Section title="Education">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-sm text-foreground/70">{edu.school} | {edu.duration}</p>
                  </div>
                ))}
             </Section>
             <Section title="Certifications">
                <ul className="list-disc list-inside text-foreground/80">
                  {resumeData.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
                </ul>
             </Section>
           </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

