import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to an API
    console.log("Subscribing email:", email);
    alert("شكرًا لاشتراكك! (هذا نموذج تجريبي)");
    setEmail('');
  };

  return (
    <section id="subscribe" className="py-16 bg-white text-center px-6 border-b border-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">اشترك للحصول على محتوى حصري مجانًا</h2>
        <p className="text-gray-700 mb-8">
          اشترك ببريدك الإلكتروني للحصول على خطط مجانية، مقالات جديدة، وتنبيهات عند إضافة محتوى احترافي.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
          <input 
            type="email" 
            placeholder="ادخل بريدك الإلكتروني" 
            className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors">
            اشترك الآن
          </button>
        </form>
      </div>
    </section>
  );
};