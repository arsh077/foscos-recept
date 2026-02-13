import React from 'react';
import { InvoiceData } from '../types';

interface InvoicePreviewProps {
    data: InvoiceData;
}

export const InvoicePreview: React.FC<InvoicePreviewProps> = ({ data }) => {
    // Reduced widths to bring values closer to labels as requested ("thora sa paas lao")
    const labelClassLeft = "font-bold w-40 shrink-0 leading-snug";
    const labelClassRight = "font-bold w-36 shrink-0 leading-snug";

    return (
        <div className="bg-gray-500 p-4 md:p-8 flex justify-center overflow-auto h-full">
            {/* A4 Paper Simulation */}
            <div
                id="receipt-preview"
                className="bg-white w-[210mm] min-h-[297mm] shadow-2xl p-[10mm] relative text-[11pt] leading-snug text-gray-900"
                style={{ fontFamily: 'Arimo, Arial, sans-serif' }}
            >

                {/* Header Section */}
                <div className="flex justify-between items-start mb-4">
                    {/* FSSAI Logo */}
                    <div className="w-32 h-32 flex flex-col items-center justify-center">
                        <img
                            src="/images/fssai-logo.png"
                            alt="FSSAI Logo"
                            className="w-32 h-32 object-contain"
                            onError={(e) => {
                                // Fallback to placeholder if image not found
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        {/* Fallback placeholder if image is not available */}
                        <div className="hidden relative w-32 h-24">
                            <div className="text-5xl font-bold text-orange-500 italic font-serif" style={{ transform: 'scaleY(1.5)' }}>fssai</div>
                            <div className="h-1 bg-green-600 w-full mt-1 rounded-full"></div>
                            <div className="h-1 bg-orange-400 w-3/4 mt-1 rounded-full mx-auto"></div>
                        </div>
                    </div>

                    {/* Center Header Text */}
                    <div className="text-center flex-1 px-4">
                        <h1 className="font-bold text-lg text-black">Government of {data.state}</h1>
                        <h2 className="font-bold text-md text-gray-800">Department Of Food and Drug Administration</h2>
                        <h2 className="font-bold text-md text-gray-800">Food Safety and Standards Authority of India</h2>
                        <h2 className="font-bold text-md text-gray-800">Food Safety Compliance System (FoSCoS)</h2>
                        <a href="https://foscos.fssai.gov.in" className="text-blue-800 underline font-bold block mt-1">https://foscos.fssai.gov.in</a>
                    </div>

                    {/* State Government Emblem */}
                    <div className="w-32 h-32 flex flex-col items-center justify-center">
                        <img
                            src="/images/state-emblem.png"
                            alt={`${data.state} Government Emblem`}
                            className="w-32 h-32 object-contain"
                            onError={(e) => {
                                // Fallback to placeholder if image not found
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        {/* Fallback placeholder if image is not available */}
                        <div className="hidden w-32 h-32 rounded-full border-2 border-blue-900 flex items-center justify-center p-1">
                            <div className="text-center text-[10px] font-bold text-blue-900 uppercase">
                                {data.state}<br />
                                Govt.<br />
                                Emblem
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title Bar */}
                <div className="bg-[#5daeb3] text-white text-center font-bold py-2 mb-6 print:bg-[#5daeb3] print:print-color-adjust-exact text-lg">
                    Receipt
                </div>

                {/* Details Grid */}
                <div className="flex flex-wrap text-sm relative">

                    {/* Row 1 */}
                    <div className="w-[55%] mb-3 pr-2 flex items-start">
                        <span className={labelClassLeft}>Reference No:</span>
                        <span className="align-top">{data.refNo}</span>
                    </div>
                    <div className="w-[45%] mb-3 pl-2 flex items-start">
                        <span className={labelClassRight}>Date:</span>
                        <span className="align-top">{data.date}</span>
                    </div>

                    {/* Row 2 */}
                    <div className="w-[55%] mb-3 pr-2 flex items-start">
                        <span className={labelClassLeft}>Name of Company/<br />Organization:</span>
                        <span className="uppercase font-normal">{data.companyName}</span>
                    </div>
                    <div className="w-[45%] mb-3 pl-2 flex items-start">
                        <span className={labelClassRight}>Category of License:</span>
                        <span className="flex-1">{data.licenseCategory}</span>
                    </div>

                    {/* Row 3 - Address */}
                    <div className="w-full mb-5 flex items-start mt-2">
                        <span className={labelClassLeft}>Premises Address:</span>
                        <div className="flex-1">
                            {data.address}
                        </div>
                    </div>

                    {/* Row 4 - Kind of Business */}
                    <div className="w-full mb-3 flex items-start">
                        <span className={labelClassLeft}>Kind of Business:</span>
                        <div className="flex-1">
                            {data.kindOfBusiness}
                        </div>
                    </div>

                    {/* Row 5 - Payment Mode */}
                    <div className="w-full mb-3 flex items-start">
                        <span className={labelClassLeft}>Mode of Payment:</span>
                        <div className="flex-1">
                            {data.paymentMode}
                        </div>
                    </div>

                    {/* Row 6 - Registration Fee */}
                    <div className="w-full mb-3 flex items-start">
                        <span className={labelClassLeft}>Registration Fee</span>
                        <div className="flex-1">
                            {data.registrationFee}
                        </div>
                    </div>

                    {/* Row 7 - Total Fee */}
                    <div className="w-full mb-3 flex items-start">
                        <span className={labelClassLeft}>Total Fee Paid:</span>
                        <div className="flex-1">
                            {data.totalFee}
                        </div>
                    </div>

                    {/* Row 8 - Transaction */}
                    <div className="w-full mb-3 flex items-start">
                        <span className={labelClassLeft}>Transaction No.:</span>
                        <div className="flex-1">
                            {data.transactionNo}
                        </div>
                    </div>

                    {/* Row 9 - RazorPay ID */}
                    <div className="w-full mb-3 flex items-start">
                        <span className={labelClassLeft}>RazorPay ID:</span>
                        <div className="flex-1">
                            {data.razorPayId}
                        </div>
                    </div>
                </div>

                {/* Footer Notes */}
                <div className="mt-8 text-sm">
                    <p className="font-bold mb-2">Note:</p>
                    <ol className="list-decimal pl-5 space-y-3 text-justify leading-relaxed">
                        <li>
                            FSSAI doesn't contact applicants over telephone for License/ Registration. Queries relating to License/Registration are only raised online. License related complaints may be reported at helpdesk - 1800110100 and foscos-notification@fssai.gov.in.
                        </li>
                        <li>
                            In case you receive queries by authorities on your application, You are required to respond within 30 days to avoid rejection of your application by login into FSSAI's Food Safety Compliance System (https://foscos.fssai.gov.in) with your user id and password or call us at 1800112100 for any clarification.
                        </li>
                        <li>
                            You must keep a copy of Form A (application) for any kind of communication with the authorities till obtaining Registration Certificate.
                        </li>
                        <li>
                            GST applicability on this transaction is on reverse charge basis
                        </li>
                    </ol>
                </div>

                {/* Page Count */}
                <div className="absolute bottom-8 left-0 right-0 text-center text-sm">
                    Page 1 of 1
                </div>

            </div>
        </div>
    );
};