import { useMemo } from "react";
import { appUrl } from "../../../const";
import classes from "./Tutorial.module.css";

export const Congratulations: React.VFC = () => {
  const twitterIntent = useMemo(() => {
    const text = "I solved all the problems in CSS Grid Mastery Quiz!\n";
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(appUrl)}`;
  }, []);
  return (
    <article className={classes.tutorial}>
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
    </article>
  );
};
