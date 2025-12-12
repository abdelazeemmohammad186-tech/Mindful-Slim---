import React from 'react';
import { ContentCard } from '../types';
import { FileText, Heart, Headphones } from 'lucide-react';

const contentData: (ContentCard & { icon: React.ReactNode })[] = [
  {
    title: "خطة 3 أيام لتحسين المزاج",
    description: "برنامج قصير لتحسين الصحة النفسية عبر التنفس العميق وتمارين الاسترخاء.",
    linkText: "اقرأ الخطة",
    linkUrl: "#",
    icon: <Heart className="w-6 h-6 text-blue-500" />
  },
  {
    title: "10 نصائح غذائية للصحة اليومية",
    description: "نصائح بسيطة يمكنك تطبيقها فورًا لتحسين صحتك بدون دايت.",
    linkText: "اقرأ المزيد",
    linkUrl: "#",
    icon: <FileText className="w-6 h-6 text-green-500" />
  },
  {
    title: "تأمل صوتي لمدة 5 دقائق",
    description: "جلسة تأمل قصيرة تساعدك على تصفية ذهنك ورفع طاقتك.",
    linkText: "استمع الآن",
    linkUrl: "#",
    icon: <Headphones className="w-6 h-6 text-purple-500" />
  }
];

export const FreeContent: React.FC = () => {
  return (
    <section className="py-16 px-6 container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-10 relative inline-block w-full">
        <span className="relative z-10 bg-gray-100 px-4">محتوى مجاني بالكامل</span>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 -z-0"></div>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {contentData.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
            <div className="mb-4 p-3 bg-blue-50 rounded-full w-fit">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
            <a href={item.linkUrl} className="text-blue-600 hover:text-blue-800 font-medium hover:underline inline-flex items-center gap-1">
              {item.linkText}
              <span aria-hidden="true">&larr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};