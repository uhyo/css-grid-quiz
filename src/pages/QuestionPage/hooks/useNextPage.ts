import { useCallback } from "react";
import { useNavigate } from "react-location";

export function useNextPage(id: string) {
  const navigate = useNavigate();
  const idNum = Number(id);
  const nextPageUrl = `/quiz/v1/${idNum + 1}`;
  const goToNextPage = useCallback(() => {
    navigate({
      to: nextPageUrl,
      search: (old) => ({
        cheat: "",
        lang: old?.lang,
      }),
    });
  }, [nextPageUrl]);
  return {
    goToNextPage,
  };
}
