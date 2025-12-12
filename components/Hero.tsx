import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-b from-blue-50 to-gray-100 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">ابدأ تحسين صحتك الجسدية والنفسية الآن مجانًا</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-8 text-lg">
        هذه النسخة المجانية تقدم أدوات ونصائح وتمارين لتحسين المزاج، خفض التوتر، وتنظيم العادات الصحية دون أي اشتراك.
      </p>

      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
        ابدأ الآن مجانًا
      </button>
    </section>
  );
};