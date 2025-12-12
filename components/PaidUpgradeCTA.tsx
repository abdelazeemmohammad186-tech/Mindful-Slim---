import React from 'react';
import { Crown } from 'lucide-react';

export const PaidUpgradeCTA: React.FC = () => {
  return (
    <section className="py-16 text-center bg-blue-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
            <Crown className="w-10 h-10 text-yellow-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">هل تريد الحصول على النسخ الكاملة من الخطط الاحترافية؟</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
          يمكنك الترقية للوصول إلى خطط 7 أيام و14 يوم و30 يوم + محتوى احترافي ومتابعة شخصية.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
          ترقية الحساب
        </button>
      </div>
    </section>
  );
};