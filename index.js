import React, { useState } from 'react';
import en from './en.json';
import es from './es.json';

export function useTranslation() {
    const [language, setLanguage] = useState('en');

    const translate = (key) => {
        const translations = language === 'en' ? en : es;
        return translations[key] || '';
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    return { translate, toggleLanguage };
}
