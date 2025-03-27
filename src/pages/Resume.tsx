import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Resume() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 mb-8 text-white">
        Resume
      </h1>

      <div id="skills" className="scroll-mt-48 w-full mt-[50px] text-center">
        <h1 className="text-white font-semibold text-2xl 2xl:text-3xl mb-7">
          Skills
        </h1>
        <div>
          <Skills />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          href="/2024-Resume-Coding-Portfolio-Version.pdf"
          download
        >
          Resume
        </a>
      </div>

      <Footer />
    </>
  );
}
