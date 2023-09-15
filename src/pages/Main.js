import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  return (
    <div className={styles.main}>
      <img
        className={styles.kelogLogo2Icon}
        alt=""
        src="/kelog-logo-2@2x.png"
      />
      <div className={styles.parent}>
        <b className={styles.b}>
          <p className={styles.p}>팀 소개</p>
        </b>
        <div className={styles.div} onClick={onText1Click}>
          <p className={styles.p}>사람들</p>
        </div>
        <div className={styles.div} onClick={onText2Click}>
          <p className={styles.p}>작업물</p>
        </div>
      </div>
      <b className={styles.kelog}>"Kelog - 프로젝트의 창을 열다"</b>
    </div>
  );
};

export default Main;
