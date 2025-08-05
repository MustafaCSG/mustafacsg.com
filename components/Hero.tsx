import { Button } from "./ui/button";
import { ChevronDown, Figma, Palette, Layout, Zap } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    'Figma', 'Adobe XD', 'Sketch', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 
    'MongoDB', 'PostgreSQL', 'Python', 'GraphQL', 'Vue.js', 'Angular', 'Express.js', 'FastAPI',
    'Docker', 'AWS', 'Firebase', 'Stripe', 'PayPal', 'REST API', 'SCSS', 'Bootstrap'
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-background overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 design-grid opacity-30 animate-grid"></div>
      
      {/* Floating Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-violet-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="mb-8">
          <div className="relative mx-auto mb-8">
            <div className="w-40 h-40 mx-auto gradient-primary p-1 rounded-full animate-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center border border-border">
                <span className="text-5xl text-foreground">MC</span>
              </div>
            </div>
            
            {/* Design Tools Icons */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-card rounded-full border border-border flex items-center justify-center animate-float">
              <Figma className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute top-8 -left-4 w-10 h-10 bg-card rounded-full border border-border flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
              <Palette className="w-5 h-5 text-purple-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-11 h-11 bg-card rounded-full border border-border flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
              <Layout className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="absolute bottom-6 -right-4 w-9 h-9 bg-card rounded-full border border-border flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
              <Zap className="w-4 h-4 text-violet-400" />
            </div>
          </div>
        </div>
        
        <div className="space-y-6 mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 border border-border">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl tracking-tight mb-6">
            <span className="text-foreground">Ben </span>
            <span className="gradient-primary bg-clip-text text-transparent">Mustafa</span>
            <br />
            <span className="gradient-secondary bg-clip-text text-transparent">Coşgun</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
              <span className="text-primary">UI/UX Designer</span> & <span className="text-purple-400">Full-Stack Developer</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Kullanıcı deneyimini odak noktasına alan, estetik ve işlevsel dijital çözümler tasarlıyorum. 
              Modern tasarım prensipleri ile kod arasında mükemmel uyum sağlıyorum.
            </p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="gradient-primary hover:opacity-90 text-primary-foreground px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 animate-glow"
          >
            <Layout className="mr-2 h-5 w-5" />
            Tasarımlarımı İncele
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="border-border hover:bg-muted hover:text-foreground px-8 py-4 text-lg transition-all duration-300 bg-card/50 backdrop-blur-sm"
          >
            <Zap className="mr-2 h-5 w-5" />
            İşbirliği Yap
          </Button>
        </div>
        
        {/* Infinite Skills Swiper */}
        <div className="infinite-swiper mb-16 max-w-5xl mx-auto">
          <div className="flex gap-4 animate-infinite-scroll">
            {/* First set of skills */}
            {skills.concat(skills).map((skill, index) => (
              <span 
                key={`${skill}-${index}`} 
                className="px-4 py-2 bg-card text-foreground border border-border rounded-full text-sm font-medium whitespace-nowrap hover:bg-muted/50 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-border flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}