import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import CookieBanner from './components/CookieBanner';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import { useOnScreen } from './hooks/useOnScreen';
import Imprint from './components/Imprint';
import Privacy from './components/Privacy';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  Home as HomeIcon,
  Building,
  Trash2,
  TreePine,
  Square,
  HardHat,
  CheckCircle,
  ArrowUp,
  Clock,
  Loader2,
  Menu
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx';
import logo from './assets/simonas_reinigungsservice_logo.png';
import './App.css';

// Helper component for fade-in animations
const AnimatedSection = ({ children, id }) => {
  const [ref, isVisible] = useOnScreen({
    rootMargin: '0px',
    threshold: 0.2,
  });

  return (
    <section id={id} ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </section>
  );
};

// Home Page Content Component
  const Home = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus(null);

    emailjs.sendForm('service_rosfkhc', 'template_v5znds6', form.current, '-ggIPIrLQuz_B_h57')
      .then((result) => {
          console.log(result.text);
          setFormStatus('success');
          form.current.reset(); // Clear form fields
      }, (error) => {
          console.log(error.text);
          setFormStatus('error');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const services = [
    { icon: <Sparkles className="w-8 h-8 text-primary" />, title: "Allgemeine Reinigungsarbeiten", description: "Professionelle Reinigung für alle Bereiche Ihres Zuhauses oder Büros" },
    { icon: <Square className="w-8 h-8 text-primary" />, title: "Glas- und Fensterreinigung", description: "Kristallklare Fenster und Glasflächen für perfekte Durchsicht" },
    { icon: <HardHat className="w-8 h-8 text-primary" />, title: "Bauendreinigung", description: "Gründliche Reinigung nach Bau- oder Renovierungsarbeiten" },
    { icon: <Trash2 className="w-8 h-8 text-primary" />, title: "Entrümpelung", description: "Professionelle Entrümpelung von Wohnungen, Häusern und Büros" },
    { icon: <HomeIcon className="w-8 h-8 text-primary" />, title: "Dachinnenreinigung", description: "Spezialisierte Reinigung von Dachböden und schwer zugänglichen Bereichen" },
    { icon: <TreePine className="w-8 h-8 text-primary" />, title: "Gartenarbeiten aller Art", description: "Komplette Gartenpflege und -gestaltung für Ihr grünes Paradies" }
  ];

  const testimonials = [
    { name: "Maria Schmidt", rating: 5, text: "Simona und ihr Team haben unsere Wohnung nach der Renovierung perfekt gereinigt. Sehr professionell und zuverlässig!" },
    { name: "Thomas Weber", rating: 5, text: "Regelmäßige Büroreinigung auf höchstem Niveau. Unsere Mitarbeiter fühlen sich in den sauberen Räumen sehr wohl." },
    { name: "Anna Müller", rating: 5, text: "Die Fensterreinigung war fantastisch. Alle Scheiben sind streifenfrei und kristallklar. Sehr empfehlenswert!" }
  ];
  
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Simona's Reinigungsservice",
    "image": "https://www.simona-reinigungsservice.de/assets/simonas_reinigungsservice_logo.png",
    "url": "https://www.simona-reinigungsservice.de",
    "telephone": "+4917629181838",
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hohe Warte 28",
      "addressLocality": "Sigmaringen",
      "postalCode": "72488",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.9749172,
      "longitude": 11.5822864
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "06:00",
      "closes": "19:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Maria Schmidt"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Simona und ihr Team haben unsere Wohnung nach der Renovierung perfekt gereinigt. Sehr professionell und zuverlässig!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Thomas Weber"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Regelmäßige Büroreinigung auf höchstem Niveau. Unsere Mitarbeiter fühlen sich in den sauberen Räumen sehr wohl."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Anna Müller"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Die Fensterreinigung war fantastisch. Alle Scheiben sind streifenfrei und kristallklar. Sehr empfehlenswert!"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Simona's Reinigungsservice - Professionelle Gebäudereinigung in Sigmaringen</title>
        <meta name="description" content="Simona's Reinigungsservice bietet professionelle Reinigungsdienstleistungen in Sigmaringen und Umgebung. Kontaktieren Sie uns für ein kostenloses Angebot." />
        <link rel="canonical" href="https://simona-reinigungsservice.de" />
        <meta property="og:title" content="Simona's Reinigungsservice - Professionelle Reinigungsservice in Sigmaringen" />
        <meta property="og:description" content="Simona's Reinigungsservice bietet professionelle Reinigungsdienstleistungen in Sigmaringen und Umgebung. Kontaktieren Sie uns für ein kostenloses Angebot." />
        <meta property="og:url" content="https://simona-reinigungsservice.de" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://simona-reinigungsservice.de/src/assets/simonas_reinigungsservice_logo.png" />
        <meta property="og:site_name" content="Simona's Reinigungsservice" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <AnimatedSection id="hero">
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Professionelle Gebäudereinigung</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vertrauen Sie auf unsere Erfahrung und Qualität. Wir bieten umfassende Reinigungsdienstleistungen für private und gewerbliche Kunden.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => handleScrollTo('contact')}>
                Jetzt Kontakt aufnehmen
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>Für Privat & Gewerbe</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>Versichert & Zuverlässig</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>Faire Preise</span></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection id="services">
        <div className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unsere Leistungen</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Von der regelmäßigen Reinigung bis zur Bauendreinigung - wir bieten alle Dienstleistungen rund um Sauberkeit und Ordnung.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about">
        <div className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Über Simona's Reinigungsservice</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Mit jahrelanger Erfahrung in der Gebäudereinigung bieten wir Ihnen professionelle und zuverlässige Dienstleistungen. Unser Team ist speziell geschult und verwendet nur hochwertige, umweltfreundliche Reinigungsmittel.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Ob private Haushalte oder gewerbliche Objekte - wir passen unsere Leistungen individuell an Ihre Bedürfnisse an und sorgen für ein sauberes und hygienisches Umfeld.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="text-sm py-2 px-4"><Building className="w-4 h-4 mr-2" />Gewerblich</Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-4"><HomeIcon className="w-4 h-4 mr-2" />Privat</Badge>
                  <Badge variant="secondary" className="text-sm py-2 px-4"><CheckCircle className="w-4 h-4 mr-2" />Versichert</Badge>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-foreground mb-6">Warum uns wählen?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5" /><span>Erfahrenes und geschultes Personal</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5" /><span>Umweltfreundliche Reinigungsmittel</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5" /><span>Flexible Terminvereinbarung</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5" /><span>Faire und transparente Preise</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-primary mt-0.5" /><span>Vollständig versichert</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials">
        <div className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Was unsere Kunden sagen</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Zufriedene Kunden sind unser bester Beweis für Qualität und Zuverlässigkeit.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base italic">"{testimonial.text}"</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact">
        <div className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kontakt aufnehmen</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns auf Ihre Nachricht!
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-6">Kontaktinformationen</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-primary" /><div><p className="font-semibold">Telefon</p><p className="text-muted-foreground">+49 (0) 176 29181838</p><p className="text-muted-foreground">+49 (0) 155 10787433</p></div></div>
                  <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-primary" /><div><p className="font-semibold">E-Mail</p><p className="text-muted-foreground">info@simona-reinigungsservice.de</p></div></div>
                  <div className="flex items-center gap-4"><Clock className="w-6 h-6 text-primary" /><div><p className="font-semibold">Öffnungszeiten</p><p className="text-muted-foreground">Montag - Samstag: 06:00 - 19:00 Uhr</p></div></div>
                  <div className="flex items-center gap-4"><MapPin className="w-6 h-6 text-primary" /><div><p className="font-semibold">Servicegebiet</p><p className="text-muted-foreground">Sigmaringen und Umgebung</p></div></div>
                </div>
              </div>
              <Card className="bg-white shadow-xl rounded-lg p-6">
                <CardHeader className="text-center mb-6">
                  <CardTitle className="text-3xl font-bold text-primary">Kostenvoranschlag anfordern</CardTitle>
                  <CardDescription className="text-muted-foreground">Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <Input placeholder="Name" name="user_name" required className="border-gray-300 focus:border-primary focus:ring-primary" />
                    <Input placeholder="E-Mail-Adresse" type="email" name="user_email" required className="border-gray-300 focus:border-primary focus:ring-primary" />
                    <Input placeholder="Telefon" type="tel" name="user_phone" className="border-gray-300 focus:border-primary focus:ring-primary" />
                    <Textarea placeholder="Nachricht" rows={5} name="message" required className="border-gray-300 focus:border-primary focus:ring-primary" />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3" disabled={isSending}>
                      {isSending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Senden...
                        </>
                      ) : (
                        'Anfrage senden'
                      )}
                    </Button>
                  </form>
                  {formStatus === 'success' && <p className="text-green-500 text-center mt-4">Ihre Nachricht wurde erfolgreich gesendet!</p>}
                  {formStatus === 'error' && <p className="text-red-500 text-center mt-4">Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.</p>}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

// Layout Component: Includes Header, Footer, and scroll functionality
const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // New state for sheet
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handles scrolling to sections on the homepage
  const handleScrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = headerRef.current ? headerRef.current.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsSheetOpen(false); // Close sheet after navigation
  };
  
  // Effect for handling hash links when the page loads
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = headerRef.current ? headerRef.current.offsetHeight : 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Scroll to top on route change if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);


  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header ref={headerRef} className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img src={logo} alt="Simona's Reinigungsservice Logo" className="h-16 w-16" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-primary">Simona's</h1>
              <p className="text-sm text-muted-foreground">Reinigungsservice</p>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" onClick={scrollTop} className="text-foreground hover:text-primary transition-colors">Start</Link>
            <a href="/#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }} className="text-foreground hover:text-primary transition-colors">Leistungen</a>
            <a href="/#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }} className="text-foreground hover:text-primary transition-colors">Über uns</a>
            <a href="/#testimonials" onClick={(e) => { e.preventDefault(); handleScrollTo('testimonials'); }} className="text-foreground hover:text-primary transition-colors">Bewertungen</a>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }} className="text-foreground hover:text-primary transition-colors">Kontakt</a>
          </nav>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[300px] flex flex-col">
                <div className="flex flex-col space-y-4 pt-8 px-6 flex-grow">
                  <Link to="/" onClick={() => { scrollTop(); setIsSheetOpen(false); }} className="text-foreground hover:text-primary transition-colors text-lg py-2 w-full text-center">Start</Link>
                  <a href="/#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }} className="text-foreground hover:text-primary transition-colors text-lg py-2 w-full text-center">Leistungen</a>
                  <a href="/#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }} className="text-foreground hover:text-primary transition-colors text-lg py-2 w-full text-center">Über uns</a>
                  <a href="/#testimonials" onClick={(e) => { e.preventDefault(); handleScrollTo('testimonials'); }} className="text-foreground hover:text-primary transition-colors text-lg py-2 w-full text-center">Bewertungen</a>
                  <a href="/#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }} className="text-foreground hover:text-primary transition-colors text-lg py-2 w-full text-center">Kontakt</a>
                  <Button onClick={() => handleScrollTo('contact')} className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4 w-full">
                    Kostenlos anfragen
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button onClick={() => handleScrollTo('contact')} className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            Kostenlos anfragen
          </Button>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Simona's Reinigungsservice Logo" className="h-16 w-16" />
                <div>
                  <h5 className="font-bold text-lg">Simona's</h5>
                  <p className="text-sm opacity-90">Reinigungsservice</p>
                </div>
              </div>
              <p className="text-sm opacity-90">
                Ihr zuverlässiger Partner für professionelle Gebäudereinigung und Gartenarbeiten.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Leistungen</h5>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2"><Sparkles className="w-4 h-4" />Allgemeine Reinigung</li>
                <li className="flex items-center gap-2"><Square className="w-4 h-4" />Fensterreinigung</li>
                <li className="flex items-center gap-2"><HardHat className="w-4 h-4" />Bauendreinigung</li>
                <li className="flex items-center gap-2"><Trash2 className="w-4 h-4" />Entrümpelung</li>
                <li className="flex items-center gap-2"><TreePine className="w-4 h-4" />Gartenarbeiten</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Öffnungszeiten</h5>
              <div className="space-y-2 text-sm opacity-90">
                <p className="flex items-center gap-2"><Clock className="w-4 h-4" />Montag - Samstag</p>
                <p className="ml-6">06:00 - 19:00 Uhr</p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Kontakt</h5>
              <div className="space-y-2 text-sm opacity-90">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" />+49 (0) 176 29181838</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" />+49 (0) 155 10787433</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" />info@simona-reinigungsservice.de</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" />Sigmaringen und Umgebung</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; 2025 Simona's Reinigungsservice. Alle Rechte vorbehalten.</p>
            <p className="mt-4 md:mt-0">Design by <a href="https://www.web-matrix.me" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">WebMatrix</a></p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/impressum" className="underline hover:text-accent transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="underline hover:text-accent transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>

      <Button onClick={scrollTop} className={`scroll-to-top ${showScroll ? 'visible' : ''}`} variant="outline" size="icon">
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
};

// Main App Component with Router
function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (cookieAccepted) {
      setShowCookieBanner(false);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowCookieBanner(false);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/datenschutz" element={<Privacy />} />
        </Routes>
      </Layout>
      {showCookieBanner && <CookieBanner onAccept={handleCookieAccept} />}
    </Router>
  );
}

export default App;