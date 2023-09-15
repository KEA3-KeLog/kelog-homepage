import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img
        className={styles.kelogLogo2Icon}
        alt=""
        src="/kelog-logo-2@2x.png"
      />
      <div className={styles.div1} onClick={onTextClick}>
        <p className={styles.p}>팀 소개</p>
      </div>
      <b className={styles.b}>
        <p className={styles.p}>사람들</p>
      </b>
      <div className={styles.div2} onClick={onText2Click}>
        <p className={styles.p}>작업물</p>
      </div>
      <div className={styles.child} />
      <div className={styles.item} />
      <div className={styles.inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.div3}>함께하는 사람들</div>
      <div className={styles.div4}>
        <p className={styles.p}>
          조직의 위대함은 개인 혼자서는 불가능한 일을 가능하게 만드는 것에
          있습니다.
        </p>
        <p
          className={styles.p}
        >{`좋은 영향을 주고 받으며 불가능을 가능케하는 팀원들을 소개합니다. `}</p>
      </div>
    </div>
  );
};

export default Frame;
