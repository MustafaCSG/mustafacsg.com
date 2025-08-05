import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Figma, Eye, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "Tüm Projeler" },
    { id: "ui-ux", label: "UI/UX Design" },
    { id: "development", label: "Development" },
    { id: "design-systems", label: "Design Systems" }
  ];

  const projects = [
    {
      title: "FinTech Mobile App",
      category: "UI/UX Design",
      categoryId: "ui-ux",
      description: "Kullanıcı dostu bankacılık uygulaması. Kompleks finansal işlemleri basit ve anlaşılır arayüzlerle sundum.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["Figma", "Principle", "User Research", "Prototyping"],
      type: "design",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "E-Commerce Dashboard",
      category: "Full-Stack",
      categoryId: "development",
      description: "React ve Node.js ile geliştirilen admin dashboard. Veri görselleştirme ve performans odaklı tasarım.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "Chart.js"],
      type: "development",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Healthcare Design System",
      category: "Design System",
      categoryId: "design-systems",
      description: "Sağlık sektörü için kapsamlı tasarım sistemi. 50+ komponent ve detaylı dokümantasyon.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      technologies: ["Figma", "Storybook", "Design Tokens", "Documentation"],
      type: "design",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Travel App Prototype",
      category: "Mobile Design",
      categoryId: "ui-ux",
      description: "Seyahat planlama uygulaması için interaktif prototip. Kullanıcı deneyimi odaklı tasarım yaklaşımı.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      technologies: ["Sketch", "InVision", "User Testing", "Journey Mapping"],
      type: "design",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "SaaS Platform Interface",
      category: "UI/UX Design",
      categoryId: "ui-ux",
      description: "B2B SaaS platformu için kullanıcı arayüzü tasarımı. Karmaşık veri yapılarını basit formda sunma.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      technologies: ["Adobe XD", "Figma", "Wireframing", "Usability Testing"],
      type: "design",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Real-Time Chat App",
      category: "Full-Stack",
      categoryId: "development",
      description: "Socket.io ve React kullanarak geliştirilen gerçek zamanlı mesajlaşma uygulaması.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      technologies: ["React", "Socket.io", "MongoDB", "Express.js"],
      type: "development",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.categoryId === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 design-grid opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Eye className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            Seçili <span className="gradient-primary bg-clip-text text-transparent">Projelerim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tasarım sürecinden kodlamaya kadar her aşamada kullanıcı deneyimi odaklı yaklaşımla 
            geliştirdiğim projelerden öne çıkanlar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id
                  ? "gradient-primary text-primary-foreground"
                  : "border-border hover:bg-muted hover:text-foreground transition-all duration-300"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={`${activeCategory}-${index}`} className="group bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl relative overflow-hidden animate-filter-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-gradient-to-r ${project.gradient} text-primary-foreground border-0`}>
                    {project.category}
                  </Badge>
                </div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    {project.type === 'design' ? (
                      <Button size="sm" className="bg-card/90 text-foreground hover:bg-card border border-border">
                        <Figma className="w-4 h-4 mr-2" />
                        Figma
                      </Button>
                    ) : (
                      <Button size="sm" className="bg-card/90 text-foreground hover:bg-card border border-border">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0 ml-2" />
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="text-xs border-border bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Subtle Gradient Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">
              <span className="gradient-primary bg-clip-text text-transparent">Daha Fazla Proje</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              GitHub ve Dribbble hesaplarımda daha fazla çalışmama göz atabilirsiniz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-border hover:bg-muted">
                <Github className="w-4 h-4 mr-2" />
                GitHub'da Görüntüle
              </Button>
              <Button className="gradient-primary text-primary-foreground hover:opacity-90">
                <ExternalLink className="w-4 h-4 mr-2" />
                Dribbble Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}