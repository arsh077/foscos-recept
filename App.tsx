import React, { useState, useRef } from 'react';
import { InvoiceForm } from './components/InvoiceForm';
import { InvoicePreview } from './components/InvoicePreview';
import { initialData, InvoiceData } from './types';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  const [data, setData] = useState<InvoiceData>(initialData);
  
  const handleDataChange = (field: keyof InvoiceData, value: string) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-200 overflow-hidden">
        {/* Left Side: Form Controls - Hidden on Print */}
      <div className="w-full md:w-1/3 lg:w-1/4 h-full p-4 print:hidden z-10">
        <InvoiceForm 
          data={data} 
          onChange={handleDataChange} 
          onPrint={handlePrint}
        />
      </div>

      {/* Right Side: Preview */}
      <div className="w-full md:w-2/3 lg:w-3/4 h-full relative">
        <InvoicePreview data={data} />
      </div>
    </div>
  );
};

export default App;