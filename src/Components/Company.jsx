import { motion } from "framer-motion";

const boxes = [
  {
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQA4dRwhXrD8bddHFBXA2xJs9siLz1f-TwN9KWx7cLqDsfy51ma",
    content:
      '"Partnering with VerdiNexus has been a game changer their clear ESG insights and practical guidance made sustainability compliance simple and impactful" ',
  },
  {
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZZWvEBiO39ogEYpRj73gnsXV3Ax2H4mzglOPnLjaC7h-4IQZh",
    content:
      "“VerdiNexus brings clarity and innovation to ESG an inspiring partner driving real sustainability progress.”",
  },
  {
    img:
      "data:image/png;base64,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",
    content:
      "“VerdiNexus is a reliable and insightful ESG partner helping us enhance compliance and sustainability with confidence.”",
  },
  {
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROJ5zpu6KY1DoCxDXyMjcwCPgoKkIEsR7o1VpkK2wAjx6SejWc",
    content: "“VerdiNexus is a trusted ESG partner, helping InitHealth advance its sustainability goals with purpose.”",
  },
];

const Company = () => {
  // Duplicate for smooth infinite scroll
  const testimonials = [...boxes, ...boxes];

  return (
    <div className="overflow-hidden w-full md:h-[100vh]">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 18,
        }}
      >
        {testimonials.slice(0, testimonials.length).map((item, index) => (
          <div
            key={index}
            className="min-w-[450px] h-[300px] bg-white border border-gray-200 text-center py-6 px-2 shadow-md rounded-xl text-lg font-medium text-gray-700"
          >
            <img
              className="object-cover my-2 w-[300px] h-[160px] rounded mx-auto"
              src={item.img}
              alt=""
            />
            <p className="w-full text-sm">{item.content}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Company;