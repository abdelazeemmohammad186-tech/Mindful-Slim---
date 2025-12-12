import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-gray-600 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <p className="mb-2">© {new Date().getFullYear()} Mindful Slim - النسخة المجانية</p>
        <div className="text-sm space-x-4 space-x-reverse">
            <a href="#" className="hover:text-blue-600 transition-colors">سياسة الخصوصية</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
};