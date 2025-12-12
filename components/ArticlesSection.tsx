import React from 'react';
import { Article } from '../types';

const articles: Article[] = [
  {
    title: "أفضل 5 عادات صباحية لتحسين صحتك النفسية",
    content: "ابدأ يومك بروتين صحي يساعد على رفع الطاقة وتقليل التوتر. من بين هذه العادات: شرب الماء فور الاستيقاظ، التنفس العميق لمدة دقيقتين، المشي الخفيف، التعرض لضوء الشمس، وكتابة نوايا يومك.",
    linkUrl: "#"
  },
  {
    title: "ما هو الأكل العاطفي وكيف تتحكم فيه؟",
    content: "الأكل العاطفي يحدث عندما نستخدم الطعام للهروب من المشاعر. تعلم كيفية التعرف على محفزاتك وتطبيق تقنيات فعّالة للتحكم مثل كتابة المشاعر، شرب الماء، أو ممارسة التأمل.",
    linkUrl: "#"
  },
  {
    title: "أفضل وجبات خفيفة صحية تعزز الطاقة",
    content: "تعرف على بدائل خفيفة وصحية تمنحك طاقة مثل المكسرات، الفواكه المجففة، زبادي البروتين، والعصائر الطبيعية الخفيفة.",
    linkUrl: "#"
  }
];

export const ArticlesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 container mx-auto bg-gray-50/50">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">مقالات مجانية لزيادة الوعي والصحة</h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {articles.map((article, index) => (
          <article key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900">{article.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{article.content}</p>
            <a href={article.linkUrl} className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1">
              اقرأ المزيد
              <span aria-hidden="true">&larr;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};