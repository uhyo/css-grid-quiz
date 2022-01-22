import { QuestionData } from "./QuestionData";

export async function loadQuestionV1(id: string): Promise<QuestionData> {
  try {
    const ns = await import(`./v1/${id}.tsx`);
    if (ns.data) {
      return ns.data;
    }
  } catch (err) {
    console.error(err);
  }
  throw new Error(`Cannot load quiz for v1/${id}`);
}
