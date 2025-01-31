import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";

const FaqRow = ({ question, openQuestion, onSetOpenQuestion }) => {
  return (
    <div
      key={question.id}
      className="mx-auto flex max-w-[80vw] items-start justify-between gap-2 rounded-[10px] border-2 p-6 pr-3 md:max-w-[60vw]"
    >
      <div className="space-y-4">
        <p className="text-size-18 font-medium">{question.question}</p>
        {openQuestion === question.id && (
          <>
            <p className="text-size-18 text-paragraph3">{question.answerP1}</p>
            <p className="text-size-18 text-paragraph3">{question.answerP2}</p>
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
          className="h-[25px] w-[25px]"
        />
      </button>
    </div>
  );
};

export default FaqRow;
