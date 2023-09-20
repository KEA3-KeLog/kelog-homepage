import style from './Timeline.module.scss'

function Timeline() {
    return (

        <div className={`${style.wrapper}`}>
            <h1 style={{ color: "black", fontWeight: '600' }}>☑️ PROJECT TIMELINE </h1>
            <ul className={`${style.sessions}`}>
                <li className={`${style.li_item}`}>
                    <div className={`${style.time}`}>23.9.28</div>
                    <p>Establish SRS (Software Requirements Specification)</p>
                </li>
                <li className={`${style.li_item}`}>
                    <div className={`${style.time}`}>23.9.21</div>
                    <p>Make a discussion <br />about personal clone coding assignment</p>
                </li>
                <li className={`${style.li_item}`}>
                    <div className={`${style.time}`}>23.9.21</div>
                    <p>Meeting about Team Introducing Homepage</p>
                </li>
                <li className={`${style.li_item}`}>
                    <div className={`${style.time}`}>23.9.5</div>
                    <p>Made a Team Kelog in KEA</p>
                </li>
            </ul>
        </div>

    );
}

export default Timeline;