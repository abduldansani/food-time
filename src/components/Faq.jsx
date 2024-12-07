import { useState } from "react";
import FaqRow from "./FaqRow";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleSetOpenQuestion = (questionId) => {
    setOpenQuestion(questionId);
  };
  return (
    <section className="pb-28">
      <div className="container space-y-9 mx-auto px-2 max-w-7xl">
        <h2 className="font-semibold text-size-30 lg:text-size-40 text-paragraph1 text-center">
          Frequently asked questions
        </h2>
        <div className="flex gap-2 md:gap-2.5 justify-center">
          <button className="rounded-[120px] py-2 px-6 md:py-4 md:px-14 font-medium text-size-18 md:text-size-22 bg-primary text-white">
            General
          </button>
          <button className="rounded-[120px] py-2 px-6 md:py-4 md:px-14 font-medium text-size-18 md:text-size-22 text-primary border border-primary">
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
    </section>
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
