import { useMemo } from "react";
import { appUrl } from "../../../const";
import { useI18n } from "../../../utils/i18n/LanguageContext";
import classes from "./Tutorial.module.css";

export const Congratulations: React.VFC = () => {
  const shareText = useI18n({
    en: "I solved all the problems in CSS Grid Mastery Quiz!\n",
    ja: "CSS Grid Mastery Quizで全ての問題をクリアしました！\n",
  });

  const twitterIntent = useMemo(() => {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(appUrl)}`;
  }, [shareText]);
  const contents = useI18n({
    en: (
      <>
        <h1>Congratulations!</h1>
        <p>You solved all the problems in CSS Grid Mastery Quiz.</p>
        <p>
          You are now <b>CSS Grid Master</b>!
        </p>
        <p>
          <a
            className={classes.shareOnTwitter}
            href={twitterIntent}
            target="_blank"
            rel="external noopener"
          >
            Share on Twitter
          </a>
        </p>
      </>
    ),
    ja: (
      <>
        <h1>完全制覇！</h1>
        <p>
          おめでとうございます！　CSS Grid Mastery
          Quizの全ての問題をクリアしました。
        </p>
        <p>
          あなたは<b>CSS Gridマスター</b>です！
        </p>
        <p>
          <a
            className={classes.shareOnTwitter}
            href={twitterIntent}
            target="_blank"
            rel="external noopener"
          >
            Twitterでシェアする
          </a>
        </p>
      </>
    ),
  });
  return <article className={classes.tutorial}>{contents}</article>;
};
