import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";

const faqData = [
  {
    question: "How to choose an app design agency?",
    answer:
      "Select an agency with a proven track record in app design, focusing on their portfolio, client feedback, and their ability to understand and translate your vision into an engaging app experience.",
  },
  {
    question: "How much does app design cost?",
    answer:
      "App design costs start at $20,000 but can vary based on project complexity and specific requirements. Investing in quality design ensures your app's appeal and functionality align with your business objectives.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the open accordion

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked accordion and close others
  };

  return (
    <div className=" bg-gray-100 rounded-2xl max-w-5xl mx-auto my-8">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 md:mx-6 mx-4">
          {/* Accordion Header */}
          <div
            className="flex justify-between items-center md:p-6 p-2 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <h3 className="font-semibold md:text-2xl text-xl">
              {item.question}
            </h3>
            {/* Toggle between down and up icons */}
            <div className="flex flex-col justify-center items-center">
              {/* {openIndex === index ? ( */}
              <BiChevronUp
                className={`text-gray-900 w-5 h-5 md:w-7 md:h-7 duration-300 ease-linear ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              <BiChevronDown
                className={`text-gray-900 w-5 h-5 md:w-7 md:h-7 md:-mt-6 -mt-4 duration-300 ease-linear ${
                  openIndex === index ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="p-4 pb-10 bg-gray-100 transition-all duration-300 ease-in-out text-lg">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
