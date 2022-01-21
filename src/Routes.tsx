import { ReactLocation, Route, Router } from "react-location";
import { QuizPage } from "./pages/QuizPage";
import { loadQuestionV1 } from "./questions/loadQuestion";

const routes: Route[] = [
  {
    path: "/",
    element: <p>Top Page!</p>,
  },
  {
    path: "/quiz",
    children: [
      {
        path: "/v1",
        children: [
          {
            path: ":id",
            loader: async ({ params }) => {
              return {
                quizData: await loadQuestionV1(params.id),
              };
            },
            element: <QuizPage />,
          },
        ],
      },
    ],
  },
];

const location = new ReactLocation();

export const Routes: React.VFC = () => {
  return <Router location={location} routes={routes} />;
};
