import { QuizData } from "./QuizData";

export async function loadQuestionV1(id: string): Promise<QuizData> {
  try {
    const ns = await import(`./v1/${id}.ts`);
    if (ns.quizData) {
      return ns.quizData;
    }
  } catch (err) {
    console.error(err);
  }
  throw new Error(`Cannot load quiz for v1/${id}`);
}
