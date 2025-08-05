import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageSquare, Calendar, Coffee } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    setFormData({ name: '', email: '', project: '', message: '' });
    alert('Mesajınız gönderildi! 24 saat içinde dönüş yapacağım.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "mustafa.cosgun@email.com",
      description: "Proje teklifleri için",
      link: "mailto:mustafa.cosgun@email.com",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+90 555 123 45 67",
      description: "Acil durumlar için",
      link: "tel:+905551234567",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lokasyon",
      value: "İstanbul, Türkiye",
      description: "GMT+3 saat dilimi",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Kahve Sohbeti",
      value: "Calendly ile randevu",
      description: "30 dakikalık ücretsiz görüşme",
      link: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: "GitHub", url: "https://github.com", color: "hover:text-white" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "https://twitter.com", color: "hover:text-sky-400" }
  ];

  const projectTypes = [
    "Web Sitesi Tasarımı",
    "Mobil Uygulama UI/UX",
    "E-ticaret Platformu",
    "SaaS Dashboard",
    "Design System",
    "Brand Identity",
    "Diğer"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary">Let's Talk</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">İşbirliği</span> Yapalım
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Yeni bir proje mi var aklınızda? Ya da sadece tasarım ve teknoloji hakkında sohbet etmek mi istiyorsunuz? 
            Benimle iletişime geçin, fikirlerinizi hayata geçirelim.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl mb-6">İletişim Yolları</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 overflow-hidden relative">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                            <div className="text-foreground">
                              {method.icon}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-foreground mb-1">{method.title}</h4>
                          <a 
                            href={method.link}
                            className="text-primary hover:text-primary/80 transition-colors text-sm block truncate"
                          >
                            {method.value}
                          </a>
                          <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4">Sosyal Medya</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card/80 hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground">Şu an müsait</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Yeni projeler için müsaitim. Genellikle 24 saat içinde geri dönüş yapıyorum.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden relative">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <Send className="w-4 h-4 text-foreground" />
                  </div>
                  <h3 className="text-xl">Proje Hakkında Konuşalım</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">Adınız</label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-input border-border focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">E-posta</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-input border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Proje Türü</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:border-primary transition-colors text-foreground"
                    >
                      <option value="">Proje türünü seçin</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Proje Detayları</label>
                    <Textarea
                      name="message"
                      placeholder="Projeniz hakkında detay verin. Hedefleriniz, zaman çerçevesi ve bütçe hakkında bilgi verebilirsiniz..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none bg-input border-border focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      type="submit"
                      className="flex-1 gradient-primary hover:opacity-90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Mesajı Gönder
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-border hover:bg-muted flex-shrink-0"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Randevu Al
                    </Button>
                  </div>
                </form>
                
                {/* Subtle Background Gradient */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-2xl"></div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="glass-effect border-border inline-block">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                <span className="text-primary">💡</span> Acil projeniz mi var? WhatsApp'tan direkt ulaşın
              </p>
              <Button className="gradient-secondary text-primary-foreground hover:opacity-90">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp'tan Yaz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}