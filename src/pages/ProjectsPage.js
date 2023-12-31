import { Container } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';
import './ProjectsPage.css'
import '../App.css'


function ProjectPage() {

    let [first, setfirst] = useState('');
    let [second, setsecond] = useState('');
    let [third, setthird] = useState('');

    useEffect(() => {
        setTimeout(() => { setfirst('end') }, 400);
    }, [first])

    useEffect(() => {
        setTimeout(() => { setsecond('end') }, 500);
    }, [second])

    useEffect(() => {
        setTimeout(() => { setthird('end') }, 600);
    }, [third])

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
        <Container>
            <div>
                <div className={`start ${first}`}>
                    <h1 className='projectpage_title'>우리들의 이야기</h1>
                </div>
                <div className={`start ${second}`}>
                    <p className='projectpage_subtitle'>Kakao Enterprise Academy에서 우리가 발전하는 과정과 결과입니다.</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className={`start ${third}`}>
                    <div>
                        <hr />
                        <div className='postinglist'>
                            <h3>첫 포스팅은 무엇일까?</h3>
                            <p>발행일</p>
                            <hr />
                        </div>
                        <div className='postinglist'>
                            <h3>두번쩨 포스팅은 무엇일까?</h3>
                            <p>발행일</p>
                            <hr />
                        </div>
                        <div className='postinglist'>
                            <h3>세번쨰 포스팅은 무엇일까?</h3>
                            <p>발행일</p>
                            <hr />
                        </div>
                        <div className='postinglist'>
                            <h3>네번쨰 포스팅은 무엇일까?</h3>
                            <p>발행일</p>
                            <hr />
                        </div>
                        <div className='postinglist'>
                            <h3>다섯번째 포스팅은 무엇일까?</h3>
                            <p>발행일</p>
                            <hr />
                        </div>
                        <div className='postinglist'>
                            <h3>여섯번째 포스팅은 무엇일까?</h3>
                            <p>발행일</p>
                            <hr />
                        </div>
                    </div>
                </div>
                <footer className='footer'>
                    <div className='footermain'>
                        <h1 className='footertitle'>Kakao Enterprise Academy</h1>
                        <ul className='footerlink'>

                            <img className='linkimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/100px-Notion-logo.svg.png	'
                                onClick={onLbjNotion01ImageClick} />

                            <img className='linkimg' src='	https://cdn-icons-png.flaticon.com/512/889/889192.png'
                                onClick={onImageClick} />

                            <img className='linkimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/64px-Figma-logo.svg.png'
                                onClick={onFigmaLogoIcon1472891ImageClick} />

                        </ul>
                    </div>
                </footer>
            </div>
        </Container>
    );
}
export default ProjectPage;