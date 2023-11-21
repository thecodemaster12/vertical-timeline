import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";


const TimelineEl = ({ date, title, subtitle, description, icon }) => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={date}
        // dateClassName={ {display="block"} }
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
        icon={icon}
      >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
        <p>{description}</p>
      </VerticalTimelineElement>
    </>
  );
};

export default TimelineEl;
