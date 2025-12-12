import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <BrainCircuit className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold">Mindful Slim - النسخة المجانية</h1>
      </div>
      <p className="text-gray-600 mt-2">منصة مجانية للصحة النفسية والجسمانية بدون تسجيل وبدون رسوم</p>
    </header>
  );
};