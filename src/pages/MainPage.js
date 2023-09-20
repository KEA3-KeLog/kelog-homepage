import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Timeline from './Timeline.js';

// 이미지 - 반응형으로 화면 크기마다 나타낼 슬라이드 수 지정
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function MainPage() {
    let [textFade, setTextFade] = useState('');
    let [imgFade, setImgFade] = useState('');
    let [infoFade, setInfoFade] = useState('');
    let [infoTextFade, setInfoTextFade] = useState('');

    // 텍스트, 이미지 - 애니메이션 효과
    useEffect(() => {
        setTimeout(() => { setTextFade('end') }, 500);
        setTimeout(() => { setImgFade('end') }, 1000);
        setTimeout(() => { setInfoFade('end') }, 2000);
        setTimeout(() => { setInfoTextFade('end') }, 2500);
    }, [textFade], [imgFade], [infoFade], [infoTextFade])

    return (
        <>
            <Container className={`start ${textFade}`} >
                <h1 className="main-page_title">
                    "Kelog"
                    <br className="main-page_title_line-break" />
                    - 프로젝트의 창을 열다
                </h1>

                <p className="main-page_sub-title">
                    Kelog은 창의적인 프로젝트와 협업을 위해 탄생한 블로그 웹사이트입니다. <br />
                    한국의 블로그 플랫폼 Velog에서 영감을 받아, 우리는 Kelog를 만들었습니다. <br />
                    이 공간은 프로젝트 팀을 소통의 공간을 제공하며, <br />
                    프로젝트에 대한 소개와 진행 내용을 공유하며 협업을 이룹니다.
                </p>
            </Container>

            <div className={`start ${imgFade}`}>
                {/* 슬라이드 컴포넌트 */}
                <Carousel
                    responsive={responsive}
                    showDots={true}
                    arrows={false}
                    partialVisible={true}
                    draggable={false}
                    autoPlay={true}
                    customTransition="transform 3000ms ease-in-out"
                    transitionDuration={1000}
                >

                    <img className="main-page_slide-image" src={`/img/main_page_img3.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/main_page_img1.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/main_page_img4.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/main_page_img5.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/main_page_img6.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/main_page_img8.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/main_page_img7.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/main_page_img9.jpg`} alt="" />
                </Carousel>
            </div>

            <div className={`start ${infoFade} main-page_info main-page_info-wrap`}>

                <div className={`start ${infoTextFade} main-page_info-title`}>
                    <h2 style={{ fontWeight: '600', marginBottom: '70px' }}>Kelog는<br />협업과 기록으로<br />미래를 새롭게 열고자 합니다.</h2>
                    <div className="main-page_info-item">
                        <div className="main-page_info-item-title">비전 첫번째 ,</div>
                        <span className="main-page_info-item-text-white">자유로운 지식 공유와 </span><span className="main-page_info-item-text-blue">아이디어 확장 </span>
                    </div>
                    <div className="main-page_info-item">
                        <div className="main-page_info-item-title">비전 두번째 ,</div>
                        <span className="main-page_info-item-text-white">새로운 스킬과 협업을 통한 </span><span className="main-page_info-item-text-blue">학습과 성장</span>
                    </div>
                    <div className="main-page_info-item">
                        <div className="main-page_info-item-title">비전 세번째 ,</div>

                        <span className="main-page_info-item-text-white">열린 커뮤니케이션을 통한 </span><span className="main-page_info-item-text-blue">성공적인 협업</span>
                    </div>
                </div>
                <div className={`start ${infoTextFade} main-page_info-description`}>
                    <Timeline />
                </div>
            </div>

            {/* <Container className={`start ${infoTextFade} main-page_support`}>
                <h1 className="main-page_support-title">다양한 기술을 사용하며 성장하는 플랫폼</h1>
                <p className="main-page_support-sub-title">Kelog는 기록과 협업을 통해 팀과 개인의 다양한 가능성을 의미 있는 성공으로 이끌어주는 공동체 입니다.</p>
                <Row md={4}>
                    <Col><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" width="150" height="100"/></Col>
                    <Col><img src="" width="170" height="120"/></Col>
                    <Col>Cloud</Col>
                    <Col>Server</Col>
                </Row>
            </Container> */}

        </>
    );
}

export default MainPage;