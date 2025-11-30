// LanguageSwitch.tsx
interface Props {
  language: 'ENG' | 'ESP';
  onChange: (lang: 'ENG' | 'ESP') => void;
}

const LanguageSwitch = ({ language, onChange }: Props) => {
  return (
    <div className="flex rounded-lg overflow-hidden border border-gray-300">
      <button
        type="button"
        onClick={() => onChange('ENG')}
        className={`px-3 py-1 text-sm transition-colors ${
          language === 'ENG' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        ENG
      </button>
      <button
        type="button"
        onClick={() => onChange('ESP')}
        className={`px-3 py-1 text-sm transition-colors ${
          language === 'ESP' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        ESP
      </button>
    </div>
  );
};

export default LanguageSwitch;