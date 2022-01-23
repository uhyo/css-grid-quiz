import { useMemo } from "react";
import { Link } from "react-location";
import { appUrl } from "../../const";
import logoImage from "./logo.png";
import classes from "./TopPage.module.css";

export const TopPage: React.VFC = () => {
  const shareOnTwitterlink = useMemo(() => {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      "CSS Grid Mastery Quiz\n"
    )}&url=${encodeURIComponent(appUrl)}`;
  }, []);
  return (
    <div className={classes.topPage}>
      <h1>
        <img
          className={classes.logo}
          src={logoImage}
          width={1000}
          height={400}
          alt="CSS Grid Mastery Quiz"
        />
      </h1>
      <p>Learn how CSS Grid works through a number of CSS Grid questions!</p>
      <p>
        With the current version, you can learn how grid placement properties
        work.
      </p>
      <p className={classes.tutorialLink}>
        <Link to="/quiz/v1/1">Proceed to Tutorial</Link>
      </p>
      <h2>How do I save my progress?</h2>
      <p>
        To save your progress, just save current URL. To continue, open that URL
        and go on!
      </p>
      <hr />
      <p>
        <a href="https://github.com/uhyo/css-grid-quiz" rel="external">
          GitHub
        </a>
      </p>
      <p>
        <a href={shareOnTwitterlink} target="_blank" rel="external noopener">
          Share on Twitter
        </a>
      </p>
      <p>
        <small>
          This site is using{" "}
          <a href="https://twemoji.twitter.com/" rel="external">
            Twemoji
          </a>
          .
        </small>
      </p>
    </div>
  );
};
