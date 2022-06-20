import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { SchoolCard } from "./schoolcard.js";
import { Button, Row, Col, Tab, Tabs } from "react-bootstrap";

export const CsGenInfo = () => {
  return (
    <div>
      <p>
        Right, so you’re positive that you’d like to become a developer: you
        enjoy working on coding projects in your free time, you’re fascinated by
        new tech coming down the pipeline, and you’re certain that you’d like to
        devote your career to solving interesting engineering problems.
      </p>
      <p>
        Not only that, but you realize that the job market is on fire and you
        know that the outlook for the foreseeable future is bright. The only
        problem is that you’re not sure if you’re willing to devote (at least)
        four years to studying for it, and the price of tuition is daunting, to
        say the least. Let’s take a look at some of the pros and cons of
        becoming a software engineer through the more traditional route of a
        degree in computer science, shall we?
      </p>
    </div>
  );
};

export const CsPros = () => {
  return (
    <div>
      <p>
        {" "}
        <b>Depth:</b> Simply put, going for a CS degree at a traditional
        four-year university will allow the student to be more methodical in
        their approach to the field. Entry-level classNamees are taken at a
        younger age and allow one to mature alongside their subject material at
        a sustainable pace. The slower pace of a traditional university makes it
        possible for the student to really mull over concepts and (hopefully)
        gain a thorough understanding of the theory behind foundational skills
        being taught.{" "}
      </p>
      <p>
        <b>Breadth:</b> While you study the topics and problems assigned by your
        course professors, they’ll inevitably serve as a spark of inspiration to
        investigate other approaches and theories to leverage as you work your
        way through your className texts. Since time is on your side, you’ll be
        able to thoroughly look into the why and how of any problem you may run
        into. Aside from that, you’ll also be required to complete your general
        education studies, which will expose you to subjects that will hopefully
        enrich your approach to your career.
      </p>
      <p>
        <b>Prestige:</b> At the risk of sounding pretentious, a degree still
        means a lot in today’s job market. People will assert that employers
        just care about if you can do the work needed, but there is still a huge
        part of the market that gives the CS graduate complete preference over
        the competition. When a potential employer or recruiter sees that CS
        degree on your resume, it communicates that you have a thorough
        understanding of the fundamental theories and concepts of computing as
        well as the grit and determination to stick with a difficult major for
        the entirety of the four-year program.
      </p>
    </div>
  );
};

export const CsCons = () => {
  return (
    <div>
      <p>
        <b>Cost:</b> No matter how you slice it, college is expensive, and often
        preventatively so. If a student is indeed able to swing the cost of a
        four-year degree, it comes with a huge price tag which may ironically
        prevent the graduate from realizing the lifestyle they went to college
        for in the first place. Many experts also question the value of a
        Bachelor’s degree these days with the proliferation of higher education
        being made more accessible. In many fields a Bachelor’s may be seen as
        the lowest bar of entry with a Master’s or PhD now being required for a
        person to set themselves apart from the competition.
      </p>
      <p>
        <b>Time:</b> Four years is a long time, and often a full-time student
        may feel like they are sitting in a state of arrested development as
        they devote the majority of their waking hours getting to className, sat
        in front of a computer screen cranking out assignments, or with their
        nose buried in a book. This often makes it impossible to hold down a
        job, which means that your time spent at school negates the possibility
        for real world experience to build on the theory you’re learning in
        className.
      </p>
      <p>
        In summary, a CS degree’s advantages lean toward quality over quantity.
        You will be going about it at a slower clip, but there will be plenty of
        opportunity to dig deeper into the material at your own pace. This will
        come at a cost of one’s time and energy going exclusively into the
        course of study, especially if done on a full-time basis.
      </p>
    </div>
  );
};

export const CbInfo = () => {
  return (
    <div>
      <p>
        Coding bootcamps require several months of intense, practical,
        project-based training. Bootcamp enrollees will encounter in-person,
        online, hybrid, full-time, and part-time formats, delivered
        synchronously and asynchronously. Unlike massive open online courses,
        coding bootcamps provide a scheduled, highly structured learning
        environment with experienced instructors guiding you from start to
        finish.
      </p>
      <p>
        Learners can choose coding bootcamps focused on specific tech job
        sectors. Popular emphases include full-stack development, data science,
        cybersecurity, UX/UI, and software engineering.
      </p>
      <p>
        Bootcamps teach students how to code and apply code to workplace
        projects. These programs commonly cover programming languages like
        JavaScript, SQL, and Python, along with modules on current industry
        software, tools, and techniques.
      </p>
    </div>
  );
};

export const CbPros = () => {
  return (
    <div>
      <p>
        Coding bootcamps can cost thousands of dollars less than a traditional
        college degree. Bootcamp tuition often ranges from $10,000-$15,000, with
        the average cost falling at around $13,500 (based on data collected by
        BestColleges in 2020). In contrast, tuition for a computer science
        program often costs upwards of $65,000 according to data from
        the National Center for Education Statistics, which reported an average
        yearly undergraduate tuition of around $16,300 at four-year schools in
        2018-19.{" "}
      </p>
      <p>
        Coding bootcamps sometimes offer tuition deferral plans that allow
        students to postpone tuition payment until after they complete the
        program and find a job. Students may put down a small deposit, or they
        may be able to start with no money down. As mentioned previously,
        bootcamps sometimes offer a tuition reimbursement program in conjunction
        with this option: If a graduate is not able to find a qualifying job
        within an allotted time frame, they won't need to pay back their
        tuition.{" "}
      </p>
      <p>
        Many bootcamps offer a similar payment option called an income share
        agreement. Like tuition deferral, students pay nothing or a small fee
        upfront, and then repay their tuition once they find a job. However,
        instead of paying a fixed tuition amount, graduates pay a fixed
        percentage of their salary over a set amount of time. Payment options
        such as these may appeal to students who don't have the funds to finance
        their education up front.{" "}
      </p>
    </div>
  );
};

export const CbCons = () => {
  return (
    <div>
      <p>
        Despite costing less than many degree programs, attending a coding
        bootcamp can still be expensive. While college students at many
        institutions can access federal financial aid, such as grants and loans
        with favorable repayment terms, bootcamp students cannot receive this
        type of aid since bootcamps do not hold educational accreditation.
      </p>
      <p>
        Bootcamp payment options such as tuition deferral plans and income share
        agreements may seem like convenient alternatives to a financial aid
        package, but they come with strings attached. For instance, you may be
        required to take the first job offer that comes your way. And if the
        income share agreement lacks a repayment cap, then the total cost of
        your bootcamp tuition can end up being just as high or higher than a
        college degree in the long run. Since these payment options are
        unregulated, read the fine print carefully before enrolling.
      </p>
    </div>
  );
};

export const CoInfo = () => {
  return (
    <div>
      <p>
        When it comes to comparing a bootcamp vs. college, both can lead to
        ample career opportunities for graduates. Both equip students with
        marketable tech skills and offer career preparation services. Most
        bootcamps include career coaching, resume help, mock interviews, and
        portfolio reviews, along with opportunities to network with alumni,
        employers, and other industry professionals.
      </p>
      <p>
        Bootcamps do generally have a strong track record for job placement.
        According to the Council on Integrity in Results Reporting -- a
        nonprofit organization that provides reporting standards for bootcamps
        and audits bootcamp member outcome data -- the average percentage of
        graduates employed in the field within 180 days of graduation was around
        79%. This is based on data collected from 46 coding bootcamps between
        January and June 2019.
      </p>
      <p>
        Coding bootcamp graduates commonly find jobs as web developers, software
        developers, or junior developers. Individuals who want upper-level
        executive positions may need to pursue a bachelor's and/or master's
        degree. With a bachelor's degree in computer science, graduates often
        secure jobs as web developers, software engineers, and computer systems
        analysts.
      </p>   
      <p>Here you might find a general idea of which options you
                      have available so you can start your career!</p>
    </div>
  );
};
