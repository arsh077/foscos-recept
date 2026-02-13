import React from 'react';
import { InvoiceData } from '../types';

interface InvoiceFormProps {
  data: InvoiceData;
  onChange: (field: keyof InvoiceData, value: string) => void;
  onPrint: () => void;
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({ data, onChange, onPrint }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange(name as keyof InvoiceData, value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Edit Details</h2>
      
      <div className="grid grid-cols-1 gap-4">
        
        {/* State Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State Government</label>
          <input
            type="text"
            name="state"
            value={data.state}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
            placeholder="e.g. Haryana"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reference No</label>
            <input
                type="text"
                name="refNo"
                value={data.refNo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
                type="text"
                name="date"
                value={data.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
            />
            </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company / Organization Name</label>
          <input
            type="text"
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category of License</label>
          <input
            type="text"
            name="licenseCategory"
            value={data.licenseCategory}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Premises Address</label>
          <textarea
            name="address"
            rows={4}
            value={data.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kind of Business</label>
          <input
            type="text"
            name="kindOfBusiness"
            value={data.kindOfBusiness}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mode of Payment</label>
                <input
                    type="text"
                    name="paymentMode"
                    value={data.paymentMode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Fee</label>
                <input
                    type="text"
                    name="registrationFee"
                    value={data.registrationFee}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
                />
            </div>
        </div>

         <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Fee Paid</label>
            <input
                type="text"
                name="totalFee"
                value={data.totalFee}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent font-bold text-teal-700"
            />
        </div>

        <div className="grid grid-cols-1 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Transaction No.</label>
            <input
                type="text"
                name="transactionNo"
                value={data.transactionNo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">RazorPay ID</label>
            <input
                type="text"
                name="razorPayId"
                value={data.razorPayId}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-fssai focus:border-transparent"
            />
            </div>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-200">
             <button
                onClick={onPrint}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded shadow transition duration-200 flex items-center justify-center gap-2"
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
                Print / Save as PDF
             </button>
        </div>

      </div>
    </div>
  );
};