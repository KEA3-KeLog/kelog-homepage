import { useCallback } from "react";
import styles from "./Blog.module.css";
import notionLogo from '../img/lbj_notion_0.png';
import githubLogo from '../img/25231.png';
import figmaLogo from '../img/figma_logo_icon_147289.png';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
function Blog() {
  let [fade, setFade] = useState('');

  useEffect(() => {
      setTimeout(() => { setFade('end') }, 500);
  }, [fade])

  const onLbjNotion01ImageClick = useCallback(() => {
    window.open(
      "https://chestnut-pest-92d.notion.site/KAKAO-Enterprise-Academy-0b351038ba694fffaf895e81ae9f9a97?pvs=4"
    );
  }, []);

  const onFigmaLogoIcon1472891ImageClick = useCallback(() => {
    window.open("https://www.figma.com/files/team/1283970495007828691");
  }, []);

  const onImageClick = useCallback(() => {
    window.open("https://github.com/KEA3-KeLog");
  }, []);

  return (
    <>

    <Container className={`start ${fade}`} >
      <h1 className={styles.ourWork}>Our Works</h1>
      <p className={styles.subtitle}>
                '성공이란 매일 반복되는 작은 노력의 결과이다.' <br/>
                KeLog는 다양한 툴을 활용해 소통과 협업을 이어갑니다.<br/>
                우리가 쌓은 노력의 발자취를 공개합니다. 
                
            </p>
    </Container>

    <img
      className={styles.lbjNotion01Icon}
      alt=""
      src={notionLogo}
      onClick={onLbjNotion01ImageClick}
    />
    <img
      className={styles.figmaLogoIcon1472891}
      alt=""
      src={figmaLogo}
      onClick={onFigmaLogoIcon1472891ImageClick}
    />

    <img
      className={styles.icon}
      alt=""
      src={githubLogo}
      onClick={onImageClick}
    />

    </>
  );
};

export default Blog;
