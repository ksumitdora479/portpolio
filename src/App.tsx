import { useState, useEffect } from "react";
import {
  User,
  Code2,
  BookOpen,
  Briefcase,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Terminal,
  Cpu,
  Globe,
  MessageSquare,
} from "lucide-react";
import { motion } from "motion/react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const studentData = {
    name: "K.sumit Dora",
    course: "B.Tech 2nd Year",
    university: "NIST University",
    duration: "2024 - 2028",
    about:
      "I am a B.Tech second year student deeply interested in programming and software development. I enjoy solving complex problems and building efficient solutions using modern technologies.",
    skills: [
      { name: "C/C++", icon: <Terminal className="w-5 h-5" /> },
      {
        name: "Basic Programming",
        icon: <Code2 className="w-5 h-5" />,
      },
      { name: "HTML/CSS", icon: <Globe className="w-5 h-5" /> },
      { name: "Problem Solving", icon: <Cpu className="w-5 h-5" /> },
      {
        name: "Computer Fundamentals",
        icon: <BookOpen className="w-5 h-5" />,
      },
    ],
    contact: {
      phone: "9861177090",
      email: "k.dora.cse.2024@nist.edu",
      github: "https://github.com/ksumitdora479",
      linkedin: "https://www.linkedin.com/in/subham-sahu-b22050314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    profileImage: "https://instasize.com/p/760dac49b2982f0fff05d0b4345bb14d425ec30b12cf35d99061c46a8e6cbec1",
    resumeUrl: "#", // Please provide a direct link to your resume PDF
    projects: [
      {
        title: "Personal Portfolio",
        description:
          "A professional portfolio website built with React and Tailwind CSS to showcase my skills and projects.",
        tags: ["React", "Tailwind", "Lucide Icons"],
        link: "#",
      },
      {
        title: "C++ Library Management",
        description:
          "A console-based application to manage library records, including book issuance and returns.",
        tags: ["C++", "File Handling", "OOPs"],
        link: "#",
      },
    ],
  };

  const navItems = [
    { id: "home", label: "Home", icon: <User className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <BookOpen className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code2 className="w-4 h-4" /> },
    {
      id: "projects",
      label: "Projects",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight text-indigo-600"
          >
            SS.
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 flex items-center gap-2 ${
                  activeSection === item.id
                    ? "text-indigo-600"
                    : "text-slate-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <motion.a
            href={studentData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Resume
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Available for Internships
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900">
              Hi, I'm{" "}
              <span className="text-indigo-600">{studentData.name}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              A passionate{" "}
              <span className="font-semibold text-slate-900">
                {studentData.course}
              </span>{" "}
              student at {studentData.university}, dedicated to crafting elegant
              code and solving real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-slate-800 transition-all"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <a
                  href={studentData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={studentData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square bg-indigo-600 rounded-3xl rotate-3 absolute inset-0 opacity-10"></div>
            <div className="aspect-square bg-white border-2 border-slate-100 rounded-3xl relative overflow-hidden shadow-2xl flex items-center justify-center">
              <img 
                src={studentData.profileImage} 
                alt={studentData.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <img 
                    src={studentData.profileImage} 
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {studentData.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {studentData.course}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5" />
                </span>
                About Me
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {studentData.about}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {studentData.university}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {studentData.course} • {studentData.duration}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-indigo-50 rounded-3xl">
                  <h3 className="text-3xl font-bold text-indigo-600 mb-1">
                    2nd
                  </h3>
                  <p className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                    Year Student
                  </p>
                </div>
                <div className="p-6 bg-slate-900 rounded-3xl text-white">
                  <h3 className="text-3xl font-bold mb-1">5+</h3>
                  <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                    Core Skills
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100">
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">2+</h3>
                  <p className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                    Projects Done
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-slate-400 max-w-md">
                A selection of my recent work and academic projects.
              </p>
            </div>
            <button className="text-indigo-400 font-bold flex items-center gap-2 hover:text-indigo-300 transition-colors">
              View All on GitHub <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {studentData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-800/50 border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-all overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all"
                  >
                    Explore Project{" "}
                    <ChevronRight className="w-4 h-4 text-indigo-400" />
                  </a>
                </div>
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-16 bg-indigo-600 text-white">
                <h2 className="text-4xl font-bold mb-6">Let's connect</h2>
                <p className="text-indigo-100 mb-12 text-lg">
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your visions.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-200 uppercase font-bold tracking-widest mb-1">
                        Email Me
                      </p>
                      <p className="font-medium">{studentData.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-200 uppercase font-bold tracking-widest mb-1">
                        Call Me
                      </p>
                      <p className="font-medium">{studentData.contact.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-16">
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                    Send Message <MessageSquare className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 {studentData.name}. Built with Passion.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
