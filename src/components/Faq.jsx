import { useState } from "react";
import FaqRow from "./FaqRow";

import { motion } from "motion/react";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleSetOpenQuestion = (questionId) => {
    setOpenQuestion(questionId);
  };
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="pb-28"
    >
      <div className="container mx-auto max-w-7xl space-y-9 px-2">
        <h2 className="text-center text-size-30 font-semibold text-paragraph1 lg:text-size-40">
          Frequently asked questions
        </h2>
        <div className="flex justify-center gap-2 md:gap-2.5">
          <button className="rounded-[120px] bg-primary px-6 py-2 text-size-18 font-medium text-white md:px-14 md:py-4 md:text-size-22">
            General
          </button>
          <button className="rounded-[120px] border border-primary px-6 py-2 text-size-18 font-medium text-primary md:px-14 md:py-4 md:text-size-22">
            For business
          </button>
        </div>
        <div className="grid gap-8 xl:grid-cols-2">
          <div className="space-y-8">
            {questionsRow1.map((question) => (
              <FaqRow
                key={question.id}
                question={question}
                openQuestion={openQuestion}
                onSetOpenQuestion={handleSetOpenQuestion}
              />
            ))}
          </div>
          <div className="space-y-8">
            {questionsRow2.map((question) => (
              <FaqRow
                key={question.id}
                question={question}
                openQuestion={openQuestion}
                onSetOpenQuestion={handleSetOpenQuestion}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const questionsRow1 = [
  {
    id: 1,
    question: "What de I need to apply for the account?",
    answerP1:
      "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.",
    answerP2:
      "Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
  },

  {
    id: 2,
    question: "How the subscription process works?",
    answerP1:
      "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.",
    answerP2:
      "Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
  },
  {
    id: 3,
    question: "What de I need to apply for the account?",
    answerP1:
      "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.",
    answerP2:
      "Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
  },
];

const questionsRow2 = [
  {
    id: 4,
    question: "What de I need to apply for the account?",
    answerP1:
      "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.",
    answerP2:
      "Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
  },
  {
    id: 5,
    question: "Is foodtime available 24 hours?",
    answerP1:
      "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.",
    answerP2:
      "Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
  },
  {
    id: 6,
    question: "What de I need to apply for the account?",
    answerP1:
      "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.",
    answerP2:
      "Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
  },
  {
    id: 7,
    question: "Is there any hidden fee included?",
    answerP1:
      "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.",
    answerP2:
      "Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
  },
];

export default Faq;
