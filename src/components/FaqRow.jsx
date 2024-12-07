import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";

const FaqRow = ({ question, openQuestion, onSetOpenQuestion }) => {
  return (
    <div
      key={question.id}
      className="p-6 pr-3 flex justify-between border-2 gap-2 items-start max-w-[80vw] md:max-w-[60vw] mx-auto rounded-[10px]"
    >
      <div className="space-y-4">
        <p className="text-size-18 font-medium">{question.question}</p>
        {openQuestion === question.id && (
          <>
            <p className="text-paragraph3 text-size-18">{question.answerP1}</p>
            <p className="text-paragraph3 text-size-18">{question.answerP2}</p>
          </>
        )}
      </div>
      <button
        onClick={() =>
          onSetOpenQuestion(openQuestion === question.id ? null : question.id)
        }
        className="shrink-0"
      >
        <img
          src={openQuestion === question.id ? minus : plus}
          alt=""
          className="w-[25px] h-[25px] "
        />
      </button>
    </div>
  );
};

export default FaqRow;
