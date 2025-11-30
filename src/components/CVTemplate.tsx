import { forwardRef } from "react";
import { cvDataESP } from "../data/cv-data-esp";
import { cvDataENG } from "../data/cv-data-eng";
import { FaLink, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="relative">
      <h1 className="text-2xl font-medium uppercase py-1 border-b border-gray-300">
        {title}
      </h1>
      <div className="absolute w-10 h-[3px] bg-black -bottom-px left-0"></div>
    </div>
  );
};

interface CVTemplateProps {
  language: "ENG" | "ESP";
}

export const CVTemplate = forwardRef<HTMLDivElement, CVTemplateProps>(
  ({ language }, ref) => {
    const cvData = language === "ESP" ? cvDataESP : cvDataENG;
    const { personalInfo, experiences, education, languages, skills } = cvData;
    const isSpanish = language === "ESP";

    return (
      <div
        ref={ref}
        className="bg-white shadow-xl  text-gray-800"
        style={{
          width: "794px", // A4 a 96dpi
          minHeight: "1123px", // A4 a 96dpi
          padding: "40px 50px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: "12px",
          lineHeight: "1.5",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <header className="relative border-b-2 pb-4 mb-5 py-5 space-y-4">
          <div>
            <h1 className="text-3xl font-light uppercase">
              {personalInfo.name}
            </h1>
            <h1 className="text-3xl font-black uppercase">
              {personalInfo.surnames}
            </h1>
          </div>
          <div className="w-full h-4 flex gap-4 items-center">
            <div className="w-10 bg-sky-900 h-full"></div>
            <span className="text-lg mt-1 font-light uppercase flex flex-nowrap">
              {personalInfo.title}
            </span>
            <div className="flex-1 bg-gray-300 h-full"></div>
          </div>
          <div className="absolute top-0 right-5 px-4 bg-white overflow-hidden">
            <img
              src="perfil_bw_nobg.png"
              alt=""
              width={175}
              className=" rounded bg-neutral-200"
            />
          </div>
        </header>

        <div className="w-full flex">
          <aside className="flex-1 pr-4 border-r border-gray-300">
            {/* Contact Data */}
            <section>
              <SectionTitle title={isSpanish ? "Contacto" : "Contact"} />
              <div className="flex flex-col gap-y-1 mt-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FaRegEnvelope />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-2">
                  <FaPhone />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center gap-2">
                  <FaLocationDot />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-2">
                  <FaLink />
                  {personalInfo.portfolio}
                </span>
              </div>
            </section>
            {/* Education */}
            <section className="mt-4">
              <SectionTitle title={isSpanish ? "Educación" : "Education"} />
              <div className="flex flex-col gap-y-1 mt-4 text-sm text-gray-600">
                <h3 className="font-medium uppercase text-gray-800">
                  {education[0].name}
                </h3>
                <span>{education[0].company}</span>
                <span className="text-xs text-gray-500">{education[0].date}</span>
              </div>
              <div className="flex flex-col gap-y-1 mt-4 text-sm text-gray-600">
                <h3 className="text-xs font-medium uppercase text-gray-800">
                  Erasmus experience
                </h3>
                <span>Universitas i Bergensis (Norway)</span>
                <span className="text-xs text-gray-500">2013 - 2014</span>
              </div>
            </section>
            {/* Languages */}
            <section className="mt-4">
              <SectionTitle title={isSpanish ? "Idiomas" : "Languages"} />
              <div className="space-y-2 mt-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="font-medium uppercase text-gray-800">
                      {lang.name}
                    </span>
                    <span className="text-gray-600 text-xs">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* Sills */}
            <section className="mt-4">
              <SectionTitle title="Skills"></SectionTitle>
              <div className="flex flex-col gap-y-1 mt-4 text-sm text-gray-600">
                {skills.map((skill, i) => (
                  <p key={i} className="text-sm mb-1">
                    <span className="text-gray-800 mr-2">●</span>
                    {skill}
                  </p>
                ))}
              </div>
            </section>
          </aside>
          <main className="pl-4 flex-2">
            {/* Summary */}
            <section>
              <SectionTitle title={isSpanish ? "Perfil" : "Profile"} />
              <p className="text-gray-600 text-sm mt-4">
                {personalInfo.profile}
              </p>
            </section>
            {/* Experience */}
            <section className="mt-4">
              <SectionTitle
                title={isSpanish ? "Experiencia laboral" : "Work experience"}
              />
              <div className="space-y-4 mt-4 text-sm">
                {experiences.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {exp.position}
                        </h3>
                        <p className="text-sky-900 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1 text-sm">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
);

CVTemplate.displayName = "CVTemplate";
