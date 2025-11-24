import React, { useState } from 'react';

const faqData = [
  {
    question: "I run a small business. Do I need to comply with CSRD?",
    answer: "If your company meets two out of three conditions (250+ employees, €40M+ turnover, €20M+ assets) or is part of a larger supply chain, you may fall under CSRD obligations directly or indirectly. Even if you're exempt, showing ESG readiness builds trust and investor appeal."
  },
  {
    question: " Do I need to talk to a consultant to use your services?",
    answer: "Not at all. All our services are designed to be self-service. Just choose your service, pay, and we’ll deliver everything to your inbox."
  },
  {
    question: "Can I request custom services or packages?",
    answer: " Yes. Contact us via the form and we can create a bundled offer or custom pricing based on your needs."
  },
  {
    question: "Are your tools officially certified?",
    answer: "While VerdiNexus is not a government body, our tools are designed in alignment with EU regulations like CSRD, ESRS, and the Green Claims Directive. We use verified data sources and compliance frameworks."
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen  bg-gray-50 ">
        <div className='bg-[#0f2c2c]  m-0 h-[50vh] items-end flex justify-center'>
        <h2 className="text-4xl font-bold text-center text-white mb-10">Frequently Asked Questions</h2>
        </div>
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-md shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-4 py-3 bg-white hover:bg-gray-100 focus:outline-none flex justify-between items-center"
              >
                <span className="text-lg font-medium text-gray-700">{item.question}</span>
                <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 bg-gray-50 text-gray-600 transition-all duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Faq;