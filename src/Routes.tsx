import { ReactLocation, Route, Router } from "react-location";
import { QuestionPage } from "./pages/QuestionPage";
import { TopPage } from "./pages/TopPage";
import { loadQuestionV1 } from "./questions/loadQuestion";
import { DefineLanguageRoute } from "./utils/i18n/DefineLanguageRoute";

const routes: Route[] = [
  {
    element: <DefineLanguageRoute />,
    children: [
      {
        path: "/",
        element: <TopPage />,
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
                element: <QuestionPage />,
              },
            ],
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
