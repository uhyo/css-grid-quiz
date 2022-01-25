import { useMemo } from "react";
import { Link } from "react-location";
import { appUrl } from "../../const";
import { useI18n } from "../../utils/i18n/LanguageContext";
import logoImage from "./logo.png";
import classes from "./TopPage.module.css";

export const TopPage: React.VFC = () => {
  const shareOnTwitterlink = useMemo(() => {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      "CSS Grid Mastery Quiz\n"
    )}&url=${encodeURIComponent(appUrl)}`;
  }, []);

  const langs = useI18n({
    en: {
      intro: (
        <>
          <p>
            Learn how CSS Grid works through a number of CSS Grid questions!
          </p>
          <p>
            With the current version, you can learn how grid placement
            properties work.
          </p>
        </>
      ),
      proceed: "Proceed to Tutorial",
      progress: (
        <>
          <h2>How do I save my progress?</h2>
          <p>
            To save your progress, just save current URL. To continue, open that
            URL and go on!
          </p>
        </>
      ),
    },
    ja: {
      intro: (
        <>
          <p>数々のCSS Gridの問題を解いてCSS Gridの仕組みを学習しよう！</p>
          <p>
            現在のバージョンでは、グリッドアイテムの配置にかかわるプロパティの挙動を学ぶことができます。
          </p>
        </>
      ),
      proceed: "チュートリアルに進む",
      progress: (
        <>
          <h2>進捗を保存する方法</h2>
          <p>
            現在の進捗を保存するには、現在のURLを保存しておくだけで構いません。そのURLを開けば再開できます。
          </p>
        </>
      ),
    },
  });

  return (
    <div className={classes.topPage}>
      <header>
        <h1>
          <img
            className={classes.logo}
            src={logoImage}
            width={1000}
            height={400}
            alt="CSS Grid Mastery Quiz"
          />
        </h1>
        <p>
          <Link to="/" search={{}} replace>
            English
          </Link>{" "}
          |{" "}
          <Link
            to="/"
            search={{
              lang: "ja",
            }}
            replace
          >
            日本語
          </Link>
        </p>
      </header>
      {langs.intro}
      <p className={classes.tutorialLink}>
        <Link to="/quiz/v1/1" search>
          {langs.proceed}
        </Link>
      </p>
      {langs.progress}
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
