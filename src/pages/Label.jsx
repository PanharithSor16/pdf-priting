// src/App.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import html2pdf from 'html2pdf.js';
import PrintComponent from '../components/PrintComponent';

const Label = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPdf = () => {
    const element = componentRef.current;
    const paper = "A6"
    const opt = {
        margin: 0,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: paper.toLowerCase(), orientation: 'landscape' },
      };
    html2pdf().from(element).set(opt).save();
    handlePrint();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <PrintComponent ref={componentRef}  />

      <div className="mt-4 space-x-4">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Print
        </button>
        <button
          onClick={handleDownloadPdf }
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Label;
