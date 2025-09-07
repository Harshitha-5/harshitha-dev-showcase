import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { 
  Moon, 
  Sun, 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Code,
  Database,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
  User,
  Home,
  FolderOpen,
  Trophy,
  MessageCircle,
  Menu,
  X,
  Calendar,
  Star
} from 'lucide-react';
import harshithaProfile from '@/assets/harshitha-profile.png';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'Java', level: 90, icon: '☕' },
    { name: 'Python', level: 60, icon: '🐍' },
    { name: 'C', level: 60, icon: '💻' },
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 85, icon: '⚡' },
    { name: 'SQL', level: 85, icon: '🗄️' },
    { name: 'Git', level: 80, icon: '📦' },
    { name: 'VS Code', level: 95, icon: '💻' },
    { name: 'Power BI', level: 75, icon: '📊' },
  ];

  const projects = [
    {
      title: 'Mini E-Commerce Console App',
      description: 'Java-based console application with frontend prototype for e-commerce functionality',
      tech: ['Java', 'Console App', 'Frontend'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Hand Cricket Game',
      description: 'Interactive web-based hand cricket game with responsive design',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Currency Converter Web App',
      description: 'Real-time currency conversion application with live exchange rates',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with dark mode and animations',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    }
  ];

  const certifications = [
    {
      title: 'Java Bootcamp',
      issuer: 'LetsUpgrade',
      date: '2023',
      description: 'Comprehensive Java programming bootcamp covering core concepts and advanced topics'
    },
    {
      title: 'HTML/CSS/Bootstrap',
      issuer: 'LetsUpgrade',
      date: '2023',
      description: 'Frontend development certification covering modern web technologies'
    },
    {
      title: 'Development Training',
      issuer: 'Deloitte',
      date: '2024',
      description: 'Professional development training program'
    },
    {
      title: 'Internship Program',
      issuer: 'Cognifyz',
      date: '2024',
      description: 'Practical internship experience in software development'
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites using latest technologies',
      icon: Globe,
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization']
    },
    {
      title: 'Java Development',
      description: 'Robust backend solutions and enterprise applications',
      icon: Code,
      features: ['Backend APIs', 'Desktop Applications', 'System Integration']
    },
    {
      title: 'Data Handling & SQL',
      description: 'Database design and data analysis solutions',
      icon: Database,
      features: ['Database Design', 'Query Optimization', 'Data Analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Harshitha Muli
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="ml-4"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="grid grid-cols-2 gap-2 mt-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'bg-blue-600 text-white' 
                          : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-blue-400 ring-offset-4 ring-offset-slate-900">
              <AvatarImage src={harshithaProfile} alt="Harshitha Muli" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600">HM</AvatarFallback>
            </Avatar>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Harshitha Muli
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              Software Developer
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Building Scalable Applications & Impactful Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => scrollToSection('about')}
              >
                View Resume
              </Button>
              <Button 
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3"
                onClick={() => scrollToSection('projects')}
              >
                Explore Projects
              </Button>
              <Button 
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
              <Button 
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Harshitha_Muli_Resume.pdf';
                  link.download = 'Harshitha_Muli_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a dedicated Computer Science Engineering student with a CGPA of 9.37, passionate about 
                creating innovative software solutions. With strong expertise in Java, SQL, and Web Development, 
                I've successfully solved over 600+ coding problems and completed multiple impactful projects.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                My journey in software development is driven by a commitment to excellence and continuous learning. 
                I thrive on challenges and enjoy building applications that make a meaningful difference.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Education Timeline</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-2 mt-1">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">B.E Computer Science Engineering</h4>
                    <p className="text-blue-400">Velammal Institute of Technology</p>
                    <p className="text-slate-400">2023 – 2027 | CGPA: 9.37</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 rounded-full p-2 mt-1">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Higher Secondary Certificate</h4>
                    <p className="text-purple-400">Krishna Chaitanya Junior College</p>
                    <p className="text-slate-400">2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 rounded-full p-2 mt-1">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Secondary School Certificate</h4>
                    <p className="text-teal-400">Don Bosco English Medium School</p>
                    <p className="text-slate-400">2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-slate-400">{skill.level}%</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 p-8 text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-center justify-center">
                        <Star className="h-3 w-3 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-2 mt-1">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                    <p className="text-blue-400 mb-2">{cert.issuer}</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-400 text-sm">{cert.date}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">600+ Problems Solved</h3>
                <p className="text-slate-400 mb-4">Successfully solved over 600 coding problems across various platforms</p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                  onClick={() => window.open('https://skillrack.com/profile/harshitha', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  SkillRack Profile
                </Button>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Academic Excellence</h3>
                <p className="text-slate-400">Maintained CGPA of 9.37 while balancing academics with projects and internships</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Active Participation</h3>
                <p className="text-slate-400">Regular participation in coding contests and volunteering activities</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400">Phone</p>
                    <p className="text-white">+91-9063937049</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 rounded-full p-3">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400">Email</p>
                    <p className="text-white">harshitha2229995@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/harshitha-muli-908838317" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      linkedin.com/in/harshitha-muli-908838317
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-slate-600 rounded-full p-3">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400">GitHub</p>
                    <a 
                      href="https://github.com/Harshitha-5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      github.com/Harshitha-5
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 rounded-full p-3">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400">Portfolio</p>
                    <a 
                      href="https://harshitha-codecraft-folio.lovable.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      harshitha-codecraft-folio.lovable.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 mb-4">
            © 2024 Harshitha Muli. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Harshitha-5" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/harshitha-muli-908838317" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:harshitha2229995@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;