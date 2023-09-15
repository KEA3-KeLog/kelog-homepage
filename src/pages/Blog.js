import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";

const Blog = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onLbjNotion01ImageClick = useCallback(() => {
    window.open(
      "https://chestnut-pest-92d.notion.site/KAKAO-Enterprise-Academy-0b351038ba694fffaf895e81ae9f9a97?pvs=4"
    );
  }, []);

  const onImageClick = useCallback(() => {
    window.open("https://github.com/KEA3-KeLog");
  }, []);

  const onFigmaLogoIcon1472891ImageClick = useCallback(() => {
    window.open("https://www.figma.com/files/team/1283970495007828691");
  }, []);

  return (
    <div className={styles.blog}>
      <div className={styles.blogChild} />
      <div className={styles.ourWork}>Our Work</div>
      <img
        className={styles.kelogLogo1Icon}
        alt=""
        src="/kelog-logo-2@2x.png"
      />
      <div className={styles.parent}>
        <div className={styles.div} onClick={onTextClick}>
          <p className={styles.p}>팀 소개</p>
        </div>
        <div className={styles.div} onClick={onText1Click}>
          <p className={styles.p}>사람들</p>
        </div>
        <b className={styles.b}>
          <p className={styles.p}>작업물</p>
        </b>
      </div>
      <div className={styles.blogItem} />
      <div className={styles.lbjNotion01Parent}>
        <img
          className={styles.lbjNotion01Icon}
          alt=""
          src="/lbj-notion-0-1@2x.png"
          onClick={onLbjNotion01ImageClick}
        />
        <img
          className={styles.icon}
          alt=""
          src="/25231-1@2x.png"
          onClick={onImageClick}
        />
        <img
          className={styles.icon}
          alt=""
          src="/figma-logo-icon-147289-1@2x.png"
          onClick={onFigmaLogoIcon1472891ImageClick}
        />
      </div>
    </div>
  );
};

export default Blog;
