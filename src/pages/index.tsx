import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Sun, Zap, ArrowRight, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Home, Building, Factory, DollarSign, TrendingUp, Leaf, Shield, Users, CheckCircle, User, Award, Heart, Settings, Package, Battery, Star, Clock, ToolCase } from "lucide-react";
import Header from "@/components/header";
import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

// Define types for calculator data and results
interface CalculatorData {
  monthlyBill: string;
  roofArea: string;
  location: string;
}

interface CalculatorResults {
  systemSize: string;
  annualProduction: number;
  annualSavings: number;
  systemCost: number;
  federalTaxCredit: number;
  netCost: number;
  paybackPeriod: string;
  monthlySavings: number;
}

export default function Index() {
  const { t } = useTranslation();
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    monthlyBill: '',
    roofArea: '',
    location: ''
  });

  const [calculatorResults, setCalculatorResults] = useState<CalculatorResults | null>(null);

  const handleCalculatorSubmit = (e: FormEvent) => {
    e.preventDefault();
    const monthlyBill = parseFloat(calculatorData.monthlyBill);
    const roofArea = parseFloat(calculatorData.roofArea);
    
    if (monthlyBill && roofArea) {
      // Basic calculation logic
      const systemSize = Math.min(roofArea * 0.15, monthlyBill * 12 / 1200); // kW
      const annualProduction = systemSize * 1400; // kWh per year
      const annualSavings = annualProduction * 0.12; // $0.12 per kWh
      const systemCost = systemSize * 3000; // $3 per watt
      const federalTaxCredit = systemCost * 0.30;
      const netCost = systemCost - federalTaxCredit;
      const paybackPeriod = netCost / annualSavings;
      
      setCalculatorResults({
        systemSize: systemSize.toFixed(1),
        annualProduction: Math.round(annualProduction),
        annualSavings: Math.round(annualSavings),
        systemCost: Math.round(systemCost),
        federalTaxCredit: Math.round(federalTaxCredit),
        netCost: Math.round(netCost),
        paybackPeriod: paybackPeriod.toFixed(1),
        monthlySavings: Math.round(annualSavings / 12)
      });
    }
  };

  const projects = [
    {
      title: t('projects.projects.0.title'),
      location: t('projects.projects.0.location'),
      capacity: t('projects.projects.0.capacity'),
      savings: t('projects.projects.0.savings'),
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"
    },
    {
      title: t('projects.projects.1.title'),
      location: t('projects.projects.1.location'),
      capacity: t('projects.projects.1.capacity'), 
      savings: t('projects.projects.1.savings'),
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop"
    },
    {
      title: t('projects.projects.2.title'),
      location: t('projects.projects.2.location'),
      capacity: t('projects.projects.2.capacity'),
      savings: t('projects.projects.2.savings'),
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-blue-600">
                <Sun className="size-6" />
                <span className="text-sm font-medium tracking-wide uppercase">{t('hero.badge')}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
                <span className="text-yellow-500">{t('hero.titleHighlight')}</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                >
                  {t('hero.buttons.getQuote')}
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                >
                  {t('hero.buttons.learnMore')}
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.installations')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">25 {t('hero.stats.warranty')}</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.warranty')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">30%</div>
                  <div className="text-sm text-gray-600">{t('hero.stats.taxCredit')}</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-400 to-yellow-400 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  {/* Solar Panel Visualization */}
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center"
                      >
                        <Zap className="size-4 text-yellow-300" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Energy Meter */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{t('hero.dashboard.energyGenerated')}</span>
                      <Sun className="size-4 text-yellow-500" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">24.7 kWh</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-blue-500 to-yellow-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  {/* Savings Display */}
                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <div className="text-sm font-medium text-gray-700 mb-1">{t('hero.dashboard.monthlySavings')}</div>
                    <div className="text-xl font-bold text-green-600">€127.43</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                <Sun className="size-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 shadow-lg">
                <Zap className="size-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Rreth Nesh Section */}
<div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
          <Users className="size-6" />
          <span className="text-sm font-medium tracking-wide uppercase">Ekipi Jonë</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ekspertët në 
          <span className="text-yellow-500"> Energji Diellore</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Me më shumë se 15 vjet përvojë në industri, ne sjellim inovacion dhe besueshmëri në çdo projekt
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Staff */}
        <div className="space-y-8">
          {/* Team Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Profesionistë të Certifikuar</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100">
              <div className="text-3xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-gray-700">Vite Përvojë</div>
            </div>
          </div>

          {/* Company Facts */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Fakte për Kompaninë</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="size-5 text-yellow-300" />
                <span>Kompania e parë me certifikim EUROPEAN në vend</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="size-5 text-yellow-300" />
                <span>Partner i autorizuar me 20+ marka botërore</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="size-5 text-yellow-300" />
                <span>Operojmë në 5 vende të Ballkanit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Visual - Team Illustration */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-400 to-yellow-400 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white rounded-2xl p-6">
              {/* Team Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
     {[
  "/images/img4.jpg",
  "/images/img6.jpg", 
  "/images/img5.jpg",
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg"
].map((photo, i) => (
  <div key={i} className="aspect-square rounded-xl overflow-hidden border-2 border-white shadow-lg">
    <img 
      src={photo} 
      alt={`Anëtar i ekipit ${i + 1}`}
      className="w-full h-full object-cover"
    />
  </div>
))}
              </div>
              
              {/* Certifications */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="text-sm font-medium text-blue-700 mb-2">Certifikimet Tona</div>
                <div className="flex gap-2">
                  {['ISO 9001', 'TÜV', 'EU Solar'].map((cert, index) => (
                    <div key={index} className="bg-white px-3 py-1 rounded-lg text-xs font-medium text-blue-600 border border-blue-200">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-3 shadow-lg">
            <Award className="size-6 text-white" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-full p-3 shadow-lg">
            <Heart className="size-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Shërbimet Tona Section */}
<div className="bg-gradient-to-br from-yellow-50 to-blue-50 py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
          <Settings className="size-6" />
          <span className="text-sm font-medium tracking-wide uppercase">Shërbimet Tona</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Zgjidhje Complete 
          <span className="text-yellow-500"> Diellore</span>
        </h2>
      </div>

      {/* 3-Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Left Column - Installation Services */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Home className="size-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Instalime Diellore</h3>
          </div>
          
          <ul className="space-y-4 text-gray-600 mb-6">
            <li className="flex items-center gap-3">
              <CheckCircle className="size-5 text-green-500" />
              <span>Sisteme rezidenciale</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="size-5 text-green-500" />
              <span>Sisteme komerciale</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="size-5 text-green-500" />
              <span>Sisteme industriale</span>
            </li>
          </ul>
          
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <Star className="size-4 text-yellow-500" />
              <span className="font-medium text-blue-700">Instalim Profesional</span>
            </div>
            <div className="text-sm text-blue-600">Ekip i certifikuar me përvojë 10+ vjeçare</div>
          </div>
        </div>

        {/* Middle Column - Products */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-100 p-3 rounded-xl">
              <Package className="size-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Produktet</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mb-6">
            {[
              { name: 'Panele Solar', desc: 'Efikasitet i lartë 20-22%' },
              { name: 'Inverterë', desc: 'Konvertim optimal i energjisë' },
              { name: 'Bateri', desc: 'Ruajtje e zgjeruar e energjisë' },
              { name: 'Sisteme Monitorimi', desc: 'Kontroll në kohë reale' }
            ].map((product, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Zap className="size-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-800">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.desc}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="size-4 text-yellow-600" />
              <span className="font-medium text-yellow-700">Garanci 25 Vjeçare</span>
            </div>
            <div className="text-sm text-yellow-600">Mbulim i plotë për të gjitha produktet</div>
          </div>
        </div>

        {/* Right Column - Maintenance & Support */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-xl">
              <Settings className="size-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Mirëmbajtja & Mbështetja</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Clock className="size-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-medium text-gray-800">Shërbim 24/7</div>
                <div className="text-sm text-gray-500">Ndihmë teknike gjatë gjithë orës</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <ToolCase className="size-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-medium text-gray-800">Mirëmbajtje Periodike</div>
                <div className="text-sm text-gray-500">Kontroll dhe pastrim i rregullt</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <TrendingUp className="size-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-medium text-gray-800">Monitorim Performancës</div>
                <div className="text-sm text-gray-500">Analizë e efikasitetit të sistemit</div>
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
            Kërko Konsultim Falas
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Solar Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
              <DollarSign className="size-6" />
              <span className="text-sm font-medium tracking-wide uppercase">{t('calculator.badge')}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('calculator.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('calculator.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator Form */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="size-5 text-yellow-500" />
                  {t('calculator.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCalculatorSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="monthlyBill">{t('calculator.form.monthlyBill')}</Label>
                    <Input
                      id="monthlyBill"
                      type="number"
                      placeholder="150"
                      value={calculatorData.monthlyBill}
                      onChange={(e) => setCalculatorData({...calculatorData, monthlyBill: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="roofArea">{t('calculator.form.roofArea')}</Label>
                    <Input
                      id="roofArea"
                      type="number"
                      placeholder="800"
                      value={calculatorData.roofArea}
                      onChange={(e) => setCalculatorData({...calculatorData, roofArea: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">{t('calculator.form.location')}</Label>
                    <Input
                      id="location"
                      placeholder="Prishtinë, Kosovë"
                      value={calculatorData.location}
                      onChange={(e) => setCalculatorData({...calculatorData, location: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {t('calculator.form.calculate')}
                    <TrendingUp className="ml-2 size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {calculatorResults ? (
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-blue-900">{t('calculator.results.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-gray-600">{t('calculator.results.systemSize')}</div>
                        <div className="text-2xl font-bold text-blue-600">{calculatorResults.systemSize} kW</div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-gray-600">{t('calculator.results.annualProduction')}</div>
                        <div className="text-2xl font-bold text-blue-600">{calculatorResults.annualProduction.toLocaleString()} kWh</div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-gray-600">{t('calculator.results.monthlySavings')}</div>
                        <div className="text-2xl font-bold text-green-600">€{calculatorResults.monthlySavings}</div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-gray-600">{t('calculator.results.annualSavings')}</div>
                        <div className="text-2xl font-bold text-green-600">€{calculatorResults.annualSavings.toLocaleString()}</div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="text-sm text-gray-700 mb-2">{t('calculator.results.investmentDetails')}</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>{t('calculator.results.systemCost')}</span>
                          <span className="font-medium">€{calculatorResults.systemCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('calculator.results.federalTaxCredit')}</span>
                          <span className="font-medium text-green-600">-€{calculatorResults.federalTaxCredit.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-yellow-300 pt-2">
                          <span className="font-medium">{t('calculator.results.netCost')}</span>
                          <span className="font-bold">€{calculatorResults.netCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('calculator.results.paybackPeriod')}</span>
                          <span className="font-medium">{calculatorResults.paybackPeriod} {t('calculator.results.years')}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="p-8 text-center bg-gray-50">
                  <Sun className="size-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">{t('calculator.placeholder.title')}</h3>
                  <p className="text-gray-500">{t('calculator.placeholder.description')}</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
              <Building className="size-6" />
              <span className="text-sm font-medium tracking-wide uppercase">{t('projects.badge')}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    {index === 0 && <Home className="size-4" />}
                    {index === 1 && <Building className="size-4" />}
                    {index === 2 && <Factory className="size-4" />}
                    <span className="text-sm font-medium">
                      {index === 0 ? t('projects.types.residential') : index === 1 ? t('projects.types.commercial') : t('projects.types.industrial')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="size-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <div>
                        <div className="text-sm text-gray-600">{t('projects.systemSize')}</div>
                        <div className="text-lg font-bold text-blue-600">{project.capacity}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">{t('projects.annualSavings')}</div>
                        <div className="text-lg font-bold text-green-600">{project.savings}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              {t('projects.viewAll')}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Mail className="size-6" />
                <span className="text-sm font-medium tracking-wide uppercase">{t('contact.badge')}</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('contact.title')}
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                {t('contact.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('contact.info.call')}</div>
                    <div className="text-gray-600">+383 45 123 456</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('contact.info.email')}</div>
                    <div className="text-gray-600">info@solarpro.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('contact.info.visit')}</div>
                    <div className="text-gray-600">Rruga Diellore 123, Prishtinë, Kosovë 10000</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="size-5 text-blue-600" />
                  <span className="font-medium text-blue-900">{t('contact.whyChoose.title')}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 bg-yellow-500 rounded-full"></div>
                    {t('contact.whyChoose.points.0')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 bg-yellow-500 rounded-full"></div>
                    {t('contact.whyChoose.points.1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 bg-yellow-500 rounded-full"></div>
                    {t('contact.whyChoose.points.2')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{t('contact.form.firstName')}</Label>
                      <Input id="firstName" placeholder="Arben" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t('contact.form.lastName')}</Label>
                      <Input id="lastName" placeholder="Gashi" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input id="email" type="email" placeholder="arben@example.com" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                    <Input id="phone" type="tel" placeholder="+383 45 123 456" />
                  </div>

                  <div>
                    <Label htmlFor="address">{t('contact.form.address')}</Label>
                    <Input id="address" placeholder="Rruga Kryesore 123, Prishtinë, Kosovë" />
                  </div>

                  <div>
                    <Label htmlFor="electricBill">{t('contact.form.electricBill')}</Label>
                    <Input id="electricBill" placeholder="€150" />
                  </div>

                  <div>
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea 
                      id="message" 
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    {t('contact.form.submit')}
                    <Sun className="ml-2 size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Main Footer */}
          <div className="py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
             <div className="bg-gradient-to-r from-blue-600 to-yellow-500 p-2 rounded-lg">
    <img
      src="/logo.jpg" // update with your image path
      alt="Logo"
      width={24}
      height={24}
      className="object-contain"
    />
  </div>
                  <span className="text-2xl font-bold">Electron Solar</span>
                </div>
                
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  {t('footer.description')}
                </p>
                
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                    <Facebook className="size-5" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                    <Twitter className="size-5" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                    <Instagram className="size-5" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                    <Linkedin className="size-5" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-yellow-400">{t('footer.services.title')}</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.residential')}</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.commercial')}</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.maintenance')}</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.battery')}</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.evCharging')}</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-yellow-400">{t('footer.contact.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{t('footer.contact.address')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="size-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{t('footer.contact.phone')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{t('footer.contact.email')}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/50 to-yellow-900/50 rounded-lg border border-blue-800/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="size-4 text-green-400" />
                    <span className="text-sm font-medium text-green-400">{t('footer.environmental.title')}</span>
                  </div>
                  <p className="text-xs text-gray-300">{t('footer.environmental.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                {t('footer.bottom.copyright',"2025")}
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.bottom.privacy')}</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.bottom.terms')}</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.bottom.license')}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
