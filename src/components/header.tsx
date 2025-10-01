import { useState } from "react";
import { Sun, Menu, X, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle.tsx";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar - Desktop Only (NOT sticky) */}
      <div className="hidden lg:block bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="size-3" />
                <span>{t('header.topBar.phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-3" />
                <span>{t('header.topBar.email')}</span>
              </div>
            </div>
            <div className="text-yellow-300 font-medium">
              {t('header.topBar.promotion')}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header (STICKY) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-yellow-500 p-2 rounded-lg">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">Electron Solar</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 font-medium relative group transition-colors"
              >
                {t('header.nav.home')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 font-medium relative group transition-colors"
              >
                {t('header.nav.services')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 font-medium relative group transition-colors"
              >
                {t('header.nav.projects')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 font-medium relative group transition-colors"
              >
                {t('header.nav.about')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 font-medium relative group transition-colors"
              >
                {t('header.nav.contact')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Desktop CTA Buttons & Language Toggle */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageToggle />
              <Button 
                variant="outline" 
                size="sm"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
              >
                {t('header.buttons.calculate')}
              </Button>
              <Button 
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {t('header.buttons.quote')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2"
              >
                {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  {t('header.nav.home')}
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  {t('header.nav.services')}
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  {t('header.nav.projects')}
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  {t('header.nav.about')}
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                  {t('header.nav.contact')}
                </a>
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    {t('header.buttons.calculate')}
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {t('header.buttons.quote')}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}