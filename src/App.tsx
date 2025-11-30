import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CVTemplate } from './components/CVTemplate';
import { HiOutlineDownload } from 'react-icons/hi';

function App() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: 'mi-cv',
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Preview CV</h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <HiOutlineDownload/>
            Download PDF
          </button>
        </div>

        {/* CV Preview */}
        <div className="overflow-auto">
          <CVTemplate ref={cvRef} />
        </div>
      </div>
    </div>
  );
}

export default App;