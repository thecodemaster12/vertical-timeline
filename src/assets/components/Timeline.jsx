import React from "react";
import TimelineEl from "./vertialTimeline/TimelineEl";
import {
    VerticalTimeline
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AdbIcon from '@mui/icons-material/Adb';

import './timeline.css'

const Timeline = () => {
    return (
        <>
            <div className="container">
            <VerticalTimeline>
                <TimelineEl date={'1-1'} title={'Title1'} subtitle={'subtitle1'} description={'descriptions'} icon = {<SchoolIcon/>} />
                <TimelineEl date={'1'} title={'Title2'} subtitle={'subtitle2'} description={'descriptions'} icon= {<JavascriptIcon />}/>
                <TimelineEl date={'1'} title={'Title2'} subtitle={'subtitle2'} description={'descriptions'} icon= {<AccountBalanceIcon />}/>
                <TimelineEl date={'1'} title={'Title2'} subtitle={'subtitle2'} description={'descriptions'} icon= {<AdbIcon />}/>
            </VerticalTimeline>
            </div>
        </>
    );
};

export default Timeline;
