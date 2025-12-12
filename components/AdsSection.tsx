import React from 'react';

export const AdsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center border-y border-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">مساحة إعلانية</h2>
        <p className="text-gray-600 mb-6">هنا يمكنك وضع إعلانات Google AdSense أو عروض التسويق بالعمولة لزيادة الأرباح.</p>
        <div className="bg-gray-100 h-40 max-w-3xl mx-auto rounded-xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
          <span>مكان الإعلان</span>
        </div>
      </div>
    </section>
  );
};