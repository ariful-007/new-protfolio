import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Govt Titumir College"
            date="2014 — 2015"
            description="I completed my Honors in Bengali from Govt Titumir College, gaining deep insights into Bengali literature. Studying authors like Rabindranath Tagore and Kazi Nazrul Islam, I developed strong analytical skills. Faculty support and seminar participation enriched my academic journey."
          />
          <TimelineItem
            title="A.M.M.M College"
            date="2012 — 2014"
            description="I completed my Intermediate from Alamgir Mansoor Mintu Memorial College, where I developed a strong academic foundation. This experience prepared me for further studies and provided valuable skills for my educational journey."
          />
          <TimelineItem
            title="Enayetpur High School"
            date="2007 — 2012"
            description="I completed my education at Enayetpur High School, where I gained a solid academic foundation and essential skills, preparing me well for further studies and future endeavors."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Frontend Development With React js"
            date="2023 — Present"
            description="I completed a course in Frontend Development with React.js, mastering the fundamentals of building dynamic user interfaces. Through hands-on projects, I gained expertise in React.js concepts such as components, state management, and routing, empowering me to create efficient and interactive web applications."
          />
          <TimelineItem
            title="Responsive Web Design"
            date="2022 — 2024"
            description="I completed a course in Responsive Web Design, learning to create flexible, mobile-friendly websites. The course covered HTML, CSS, and media queries, equipping me with skills to build and optimize web pages for various devices and screen sizes"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML" value={90} />
          <SkillItem title="CSS" value={80} />
          <SkillItem title="javaScript" value={60} />
          <SkillItem title="React JS" value={70} />
          <SkillItem title="Tailwind Css" value={80} />
          <SkillItem title="Bootstrap 5" value={70} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
