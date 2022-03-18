import { useState } from "react";
import { useSelector } from "react-redux";
import Icon from "../../components/Icon/Icon";
import { RootState } from "../../store";

type Props = {
  question: String;
  answer: String;
};

const Accordian = ({ question = "", answer = "" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <div className="accordian mb-6">
      <h2
        type="button"
        className="flex mb-5 cursor-pointer items-center text-black-400 dark:text-white"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? (
          <Icon
            name="plus"
            color={darkMode ? "#FFFFFF" : "#000000"}
            className="mr-7"
          />
        ) : (
          <Icon
            name="minus"
            className="mr-7"
            color={darkMode ? "#FFFFFF" : "#000000"}
          />
        )}
        <p>{question}</p>
      </h2>
      {isOpen && (
        <div className="content ml-12 border-l  border-link pl-6">
          <p className="max-w-3xl text-light-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
