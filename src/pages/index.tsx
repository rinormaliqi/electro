import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Sun, Zap, ArrowRight, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Home, Building, Factory, DollarSign, TrendingUp, Leaf, Shield, Users, CheckCircle, User, Award, Heart, Settings, Package, Battery, Star, Clock, ToolCase, Snowflake } from "lucide-react";
import Header from "@/components/header";
import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import SolarCalculatorSimplified from "@/components/calc";

export default function Index() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-green-600">
                <Sun className="size-6" />
                <span className="text-sm font-medium tracking-wide uppercase">{t('hero.company')}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title1')}
                <span className="text-yellow-500"> {t('hero.title2')}</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact">

                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                >
                  {t('hero.button1')}
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                </a>
                
        <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
  <Button 
    variant="outline" 
    size="lg"
    className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
  >
    {t('hero.button2')}
  </Button>
</a>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">{t('hero.experience')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">25</div>
                  <div className="text-sm text-gray-600">{t('hero.warranty')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">{t('hero.projects')}</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-400 to-yellow-400 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  {/* Solar Panel Visualization */}
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="aspect-square bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center"
                      >
                        <Zap className="size-4 text-yellow-300" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Energy Meter */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Energjia e Gjeneruar</span>
                      <Sun className="size-4 text-yellow-500" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">24.7 kWh</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-green-500 to-yellow-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  {/* Savings Display */}
                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <div className="text-sm font-medium text-gray-700 mb-1">Kursime Mujore</div>
                    <div className="text-xl font-bold text-green-600">€127.43</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                <Sun className="size-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-3 shadow-lg">
                <Zap className="size-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Çmimet Section */}
      <section id="insta" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
              <DollarSign className="size-6" />
              <span className="text-sm font-medium tracking-wide uppercase">{t('pricing.title')}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.subtitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('pricing.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Home className="size-6 text-green-600" />
                  {t('pricing.tile')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-4">450€<span className="text-sm font-normal text-gray-600"> / kWp</span></div>
                <p className="text-gray-500 mb-4">{t('pricing.withoutVat')}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Instalim profesional
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Panele cilësore
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Garanci 25 vjeçare
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  {t('pricing.choose')}
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-yellow-400 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Building className="size-6 text-yellow-600" />
                  {t('pricing.tileRoof')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-4">700€<span className="text-sm font-normal text-gray-600"> / kWp</span></div>
                <p className="text-gray-500 mb-4">{t('pricing.specialized')}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-yellow-500" />
                    Teknologji e avancuar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-yellow-500" />
                    Integrim perfekt
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-yellow-500" />
                    Rezistencë ndaj motit
                  </li>
                </ul>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  {t('pricing.choose')}
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Factory className="size-6 text-green-600" />
                  {t('pricing.sandwich')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-4">600€<span className="text-sm font-normal text-gray-600"> / kWp</span></div>
                <p className="text-gray-500 mb-4">{t('pricing.complex')}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Dizajn fleksibël
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Instalim i shpejtë
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Efikasitet maksimal
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  {t('pricing.choose')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnerët Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('partners.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('partners.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="size-6 text-yellow-500" />
                {t('partners.solarPanels')}
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Luxor Solar Gmbh", desc: "Teknologji Gjermane - Cilësi Maksimale" },
                  { name: "AE Solar", desc: "Inovacion dhe Efikasitet" }
                ].map((panel, index) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-lg">
                          <Sun className="size-6 text-green-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{panel.name}</div>
                          <div className="text-sm text-gray-600">{panel.desc}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Settings className="size-6 text-green-500" />
                {t('partners.inverters')}
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Huawei", desc: "Teknologji e Avancuar Smart" },
                  { name: "Sungrow", desc: "Efikasitet dhe Besueshmëri" },
                  { name: "Growatt", desc: "Zgjidhje të Përballueshme" }
                ].map((inverter, index) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Zap className="size-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{inverter.name}</div>
                          <div className="text-sm text-gray-600">{inverter.desc}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rreth Nesh Section */}
      <div id="about" className="bg-gradient-to-br from-gray-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                <Users className="size-6" />
                <span className="text-sm font-medium tracking-wide uppercase">{t('about.title')}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('about.company')}
                <span className="text-yellow-500"> - {t('about.subtitle')}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">{t('about.mission')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.missionText')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <div className="text-green-100">{t('hero.experience')}</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-yellow-100">{t('hero.projects')}</div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{t('about.whyChoose')}</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500" />
                      {t('about.reasons.quality')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500" />
                      {t('about.reasons.savings')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500" />
                      {t('about.reasons.environment')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500" />
                      {t('about.reasons.service')}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-400 to-yellow-400 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    {/* Team Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square rounded-xl overflow-hidden border-2 border-white shadow-lg bg-gray-200 flex items-center justify-center">
                          <img 
                            src={`/images/img${i}.jpg`}
                            alt={`Projekt ${i}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />                        </div>
                      ))}
                    </div>
                    
                    {/* Experience */}
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <div className="text-sm font-medium text-green-700 mb-2">{t('about.international')}</div>
                      <div className="flex gap-2 flex-wrap">
                        {['Itali', 'Gjermani', 'Shqipëri', 'Kosovë'].map((country, index) => (
                          <div key={index} className="bg-white px-3 py-1 rounded-lg text-xs font-medium text-green-600 border border-green-200">
                            {country}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shërbimet Tona Section */}
      <div id="services" className="bg-gradient-to-br from-yellow-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                <Settings className="size-6" />
                <span className="text-sm font-medium tracking-wide uppercase">{t('services.title')}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('services.subtitle')}
                <span className="text-yellow-500"></span>
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solar Installation */}
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Sun className="size-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{t('services.solar.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {t('services.solar.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500" />
                      {t('services.solar.residential')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500" />
                      {t('services.solar.commercial')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500" />
                      {t('services.solar.industrial')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Consultation */}
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="size-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{t('services.consultation.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {t('services.consultation.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-blue-500" />
                      {t('services.consultation.needs')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-blue-500" />
                      {t('services.consultation.design')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-blue-500" />
                      {t('services.consultation.feasibility')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Maintenance */}
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <ToolCase className="size-5 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg">{t('services.maintenance.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {t('services.maintenance.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-yellow-500" />
                      {t('services.maintenance.monitoring')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-yellow-500" />
                      {t('services.maintenance.periodic')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-yellow-500" />
                      {t('services.maintenance.support')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Hydrosanitary */}
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Home className="size-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{t('services.hydro.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {t('services.hydro.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-purple-500" />
                      {t('services.hydro.homes')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-purple-500" />
                      {t('services.hydro.businesses')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-purple-500" />
                      {t('services.hydro.new')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Air Conditioning */}
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-cyan-100 p-2 rounded-lg">
                      <Snowflake className="size-5 text-cyan-600" />
                    </div>
                    <CardTitle className="text-lg">{t('services.ac.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {t('services.ac.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-cyan-500" />
                      {t('services.ac.residential')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-cyan-500" />
                      {t('services.ac.commercial')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-cyan-500" />
                      {t('services.ac.service')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Shield className="size-5 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{t('services.support.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {t('services.support.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-red-500" />
                      {t('services.support.product')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-red-500" />
                      {t('services.support.installation')}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-red-500" />
                      {t('services.support.assistance')}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Solar Calculator Section */}
      <SolarCalculatorSimplified/>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <Mail className="size-6" />
                <span className="text-sm font-medium tracking-wide uppercase">{t('contact.title')}</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('contact.subtitle')}
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                {t('contact.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="size-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('contact.phone')}</div>
                    <div className="text-gray-600">+355 69 282 3346</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="size-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('contact.email')}</div>
                    <div className="text-gray-600">eagreensolar@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="size-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('contact.location')}</div>
                    <div className="text-gray-600">{t('contact.locationText')}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-2xl border border-green-100 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="size-5 text-green-600" />
                  <span className="font-medium text-green-900">{t('contact.whyChoose')}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 bg-yellow-500 rounded-full"></div>
                    {t('contact.reasons.experience')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 bg-yellow-500 rounded-full"></div>
                    {t('contact.reasons.brands')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-1.5 bg-yellow-500 rounded-full"></div>
                    {t('contact.reasons.support')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-xl">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{t('contact.form.firstName')}</Label>
                      <Input id="firstName" placeholder={t('contact.form.firstName')} required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t('contact.form.lastName')}</Label>
                      <Input id="lastName" placeholder={t('contact.form.lastName')} required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input id="email" type="email" placeholder="email@example.com" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                    <Input id="phone" type="tel" placeholder="+355 69 000 000" />
                  </div>

                  <div>
                    <Label htmlFor="address">{t('contact.form.address')}</Label>
                    <Input id="address" placeholder={t('contact.form.address')} />
                  </div>

                  <div>
                    <Label htmlFor="service">{t('contact.form.service')}</Label>
                    <select id="service" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="solar">{t('contact.form.solar')}</option>
                      <option value="hydro">{t('contact.form.hydro')}</option>
                      <option value="ac">{t('contact.form.ac')}</option>
                      <option value="consultation">{t('contact.form.consultation')}</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea 
                      id="message" 
                      placeholder={t('contact.form.message')}
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3">
                    {t('contact.form.send')}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
