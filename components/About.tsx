import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Figma, Palette, Code, Smartphone, Monitor, Users, Lightbulb, Target } from "lucide-react";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationType = element.dataset.animation;
            if (animationType) {
              element.classList.add(animationType);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      const animateElements = sectionRef.current.querySelectorAll('.scroll-animate');
      animateElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const designSkills = [
    "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "InVision", "Principle", "Framer"
  ];
  
  const developmentSkills = [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Python", "Tailwind CSS", "SCSS", "MongoDB", "PostgreSQL"
  ];

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Kullanıcı araştırması, wireframe, prototype ve görsel tasarım süreçleri",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development", 
      description: "Modern React, Next.js ve TypeScript ile responsive web uygulamaları",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Design Systems",
      description: "Tutarlı ve ölçeklenebilir tasarım sistemleri ve komponent kütüphaneleri",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Design",
      description: "iOS ve Android için native görünümlü mobil uygulama tasarımları",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Research",
      description: "Kullanıcı testleri, persona geliştirme ve kullanılabilirlik analizi",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Product Strategy",
      description: "Ürün vizyonu belirleme ve kullanıcı odaklı çözüm geliştirme",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const designProcess = [
    { step: "01", title: "Research", description: "Kullanıcı ve pazar araştırması" },
    { step: "02", title: "Ideation", description: "Fikir geliştirme ve brainstorming" },
    { step: "03", title: "Prototype", description: "Hızlı prototip oluşturma" },
    { step: "04", title: "Design", description: "Görsel tasarım ve UI geliştirme" },
    { step: "05", title: "Test", description: "Kullanıcı testleri ve geri bildirim" },
    { step: "06", title: "Develop", description: "Kodlama ve geliştirme süreci" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="scroll-animate inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6" data-animation="animate-fade-in">
            <Lightbulb className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary">About Me</span>
          </div>
          <h2 className="scroll-animate text-5xl md:text-6xl mb-6" data-animation="animate-slide-in-up">
            <span className="gradient-primary bg-clip-text text-transparent">Tasarım</span> ve{' '}
            <span className="gradient-secondary bg-clip-text text-transparent">Kod</span> Arasında
          </h2>
          <p className="scroll-animate text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-animation="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            5+ yıldır kullanıcı deneyimi tasarımı ve yazılım geliştirme alanında çalışıyorum. 
            Her projede estetik, işlevsellik ve kullanılabilirliği harmanlayarak etkili dijital çözümler üretiyorum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="scroll-animate group bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden" data-animation="animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                      <div className="text-foreground">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Design Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="scroll-animate text-3xl mb-4" data-animation="animate-slide-in-up">
              <span className="gradient-primary bg-clip-text text-transparent">Tasarım Sürecim</span>
            </h3>
            <p className="scroll-animate text-muted-foreground max-w-2xl mx-auto" data-animation="animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              Her projede kullandığım sistematik yaklaşım ile kullanıcı odaklı çözümler geliştiriyorum
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {designProcess.map((process, index) => (
              <div key={index} className="scroll-animate text-center group" data-animation="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-purple-500 p-0.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{process.step}</span>
                  </div>
                </div>
                <h4 className="mb-2 text-foreground group-hover:text-primary transition-colors">{process.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{process.description}</p>
                {index < designProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="scroll-animate bg-card/50 backdrop-blur-sm border-border overflow-hidden relative" data-animation="animate-slide-in-left">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-0.5">
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <Figma className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <h3 className="ml-4 text-xl">Design Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-2xl"></div>
            </CardContent>
          </Card>

          <Card className="scroll-animate bg-card/50 backdrop-blur-sm border-border overflow-hidden relative" data-animation="animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 p-0.5">
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <h3 className="ml-4 text-xl">Development Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {developmentSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}