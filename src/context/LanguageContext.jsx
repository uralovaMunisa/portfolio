import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('munisa_portfolio_lang');
      if (saved === 'en' || saved === 'uz') return saved;
    }
    return 'uz'; // Uzbek as primary/default as requested
  });

  const setLang = (newLang) => {
    if (newLang !== 'uz' && newLang !== 'en') return;
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('munisa_portfolio_lang', newLang);
      document.documentElement.lang = newLang;
    }
  };

  const toggleLang = () => {
    setLang(lang === 'uz' ? 'en' : 'uz');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const currentData = portfolioData[lang] || portfolioData.uz;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, data: currentData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

