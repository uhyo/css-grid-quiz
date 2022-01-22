import { useEffect } from "react";
import { useMatch, useSearch } from "react-location";
import { QuestionData } from "../../questions/QuestionData";
import { QuizPage } from "./QuizPage";
import { TutorialPage } from "./TutorialPage";

export const QuestionPage: React.VFC = () => {
  const {
    params: { id },
    data: { quizData },
  } = useMatch<{
    LoaderData: {
      quizData: QuestionData;
    };
  }>();
  const { cheat } = useSearch<{
    Search: { cheat?: string };
  }>();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);
  if (quizData === undefined) {
    return null;
  }
  if (quizData.type === "tutorial") {
    return <TutorialPage id={id} tutorial={quizData} />;
  }
  return <QuizPage quizId={id} quizData={quizData} cheat={!!cheat} />;
};
