import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Search } from "../component/search";
import { Link } from "react-router-dom";
import { Button, Row, Col, Tab, Tabs } from "react-bootstrap";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 vh-100">
      {!store.activeUser ? (
        <div className="background h-100">
          <h1>Welcome to Modern Education</h1>
          <h2>
            We're here to help you find the right full-stack development
            education program for you!
          </h2>
          <p>
            If this is your first time here, click{" "}
            <Link to="/signup">Here</Link> to create an account!
          </p>
          <p>
            If you are a returning user, click <Link to="/login">Here</Link> to
            Login!
          </p>
          <div>
            {" "}
            <Row>
              <Col xs={6} md={4}>
                {" "}
                <Button
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Computer Science Degree
                </Button>
              </Col>

              <Col xs={6} md={4}>
                <Button
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample2"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample2"
                >
                  Coding Bootcamp
                </Button>
              </Col>
              <Col xs={6} md={4}>
                <Button
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample3"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample3"
                >
                  Career oportunities
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample1"
                >
                  <Tabs
                    defaultActiveKey="general"
                    id="uncontrolled-tab-example"
                    className="pillstyle mb-5 pt-5"
                  >
                    <Tab eventKey="general" title="General Info">
                      <div className="card card-body bg-white">
                        <p>
                          Right, so you’re positive that you’d like to become a
                          developer: you enjoy working on coding projects in
                          your free time, you’re fascinated by new tech coming
                          down the pipeline, and you’re certain that you’d like
                          to devote your career to solving interesting
                          engineering problems.
                        </p>
                        <p>
                          Not only that, but you realize that the job market is
                          on fire and you know that the outlook for the
                          foreseeable future is bright. The only problem is that
                          you’re not sure if you’re willing to devote (at least)
                          four years to studying for it, and the price of
                          tuition is daunting, to say the least. Let’s take a
                          look at some of the pros and cons of becoming a
                          software engineer through the more traditional route
                          of a degree in computer science, shall we?
                        </p>
                      </div>
                    </Tab>
                    <Tab eventKey="pros" title="Pros" className="bg-white">
                      <p>
                        <h5>Depth:</h5> Simply put, going for a CS degree at a
                        traditional four-year university will allow the student
                        to be more methodical in their approach to the field.
                        Entry-level classNamees are taken at a younger age and
                        allow one to mature alongside their subject material at
                        a sustainable pace. The slower pace of a traditional
                        university makes it possible for the student to really
                        mull over concepts and (hopefully) gain a thorough
                        understanding of the theory behind foundational skills
                        being taught.{" "}
                      </p>
                      <p>
                        <h5>Breadth:</h5> While you study the topics and
                        problems assigned by your course professors, they’ll
                        inevitably serve as a spark of inspiration to
                        investigate other approaches and theories to leverage as
                        you work your way through your className texts. Since
                        time is on your side, you’ll be able to thoroughly look
                        into the why and how of any problem you may run into.
                        Aside from that, you’ll also be required to complete
                        your general education studies, which will expose you to
                        subjects that will hopefully enrich your approach to
                        your career.
                      </p>
                      <p>
                        <h5>Prestige:</h5> At the risk of sounding pretentious,
                        a degree still means a lot in today’s job market. People
                        will assert that employers just care about if you can do
                        the work needed, but there is still a huge part of the
                        market that gives the CS graduate complete preference
                        over the competition. When a potential employer or
                        recruiter sees that CS degree on your resume, it
                        communicates that you have a thorough understanding of
                        the fundamental theories and concepts of computing as
                        well as the grit and determination to stick with a
                        difficult major for the entirety of the four-year
                        program.
                      </p>
                    </Tab>
                    <Tab eventKey="cons" title="Cons" className="bg-white">
                      <p>
                        <h5>Cost:</h5> No matter how you slice it, college is
                        expensive, and often preventatively so. If a student is
                        indeed able to swing the cost of a four-year degree, it
                        comes with a huge price tag which may ironically prevent
                        the graduate from realizing the lifestyle they went to
                        college for in the first place. Many experts also
                        question the value of a Bachelor’s degree these days
                        with the proliferation of higher education being made
                        more accessible. In many fields a Bachelor’s may be seen
                        as the lowest bar of entry with a Master’s or PhD now
                        being required for a person to set themselves apart from
                        the competition.
                      </p>
                      <p>
                        <h5>Time:</h5> Four years is a long time, and often a
                        full-time student may feel like they are sitting in a
                        state of arrested development as they devote the
                        majority of their waking hours getting to className, sat
                        in front of a computer screen cranking out assignments,
                        or with their nose buried in a book. This often makes it
                        impossible to hold down a job, which means that your
                        time spent at school negates the possibility for real
                        world experience to build on the theory you’re learning
                        in className.
                      </p>
                      <p>
                        <bold>In summary,</bold> a CS degree’s advantages lean
                        toward quality over quantity. You will be going about it
                        at a slower clip, but there will be plenty of
                        opportunity to dig deeper into the material at your own
                        pace. This will come at a cost of one’s time and energy
                        going exclusively into the course of study, especially
                        if done on a full-time basis.
                      </p>
                    </Tab>
                  </Tabs>
                </div>
              </Col>
              <Col>
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample2"
                >
                  <Tabs
                    defaultActiveKey="general"
                    id="uncontrolled-tab-example"
                    className="pillstyle mb-5 pt-5"
                  >
                    <Tab eventKey="general" title="Info">
                      <div className="card card-body bg-white">
                        <p>
                          Coding Bootcamp is a shorter and more focused path
                          into coding making you job ready on the technologies
                          that are most used today by all compnies in the Globe.
                        </p>
                      </div>
                    </Tab>
                    <Tab eventKey="pros" title="Pros" className="bg-white">
                      <p>
                        Coding bootcamps can cost thousands of dollars less than
                        a traditional college degree. Bootcamp tuition often
                        ranges from $10,000-$15,000, with the average cost
                        falling at around $13,500 (based on data collected by
                        BestColleges in 2020). In contrast, tuition for a
                        computer science program often costs upwards of $65,000
                        according to data from the National Center for Education
                        Statistics, which reported an average yearly
                        undergraduate tuition of around $16,300 at four-year
                        schools in 2018-19.{" "}
                      </p>
                      <p>
                        Coding bootcamps sometimes offer tuition deferral
                        plans that allow students to postpone tuition payment
                        until after they complete the program and find a job.
                        Students may put down a small deposit, or they may be
                        able to start with no money down. As mentioned
                        previously, bootcamps sometimes offer a tuition
                        reimbursement program in conjunction with this option:
                        If a graduate is not able to find a qualifying job
                        within an allotted time frame, they won't need to pay
                        back their tuition.{" "}
                      </p>
                      <p>
                        Many bootcamps offer a similar payment option called
                        an income share agreement. Like tuition deferral,
                        students pay nothing or a small fee upfront, and then
                        repay their tuition once they find a job. However,
                        instead of paying a fixed tuition amount, graduates pay
                        a fixed percentage of their salary over a set amount of
                        time. Payment options such as these may appeal to
                        students who don't have the funds to finance their
                        education up front.{" "}
                      </p>
                    </Tab>
                    <Tab eventKey="cons" title="Cons" className="bg-white">
                      <p>
                        Despite costing less than many degree programs,
                        attending a coding bootcamp can still be expensive.
                        While college students at many institutions can access
                        federal financial aid, such as grants and loans with
                        favorable repayment terms, bootcamp students cannot
                        receive this type of aid since bootcamps do not hold
                        educational accreditation.
                      </p>
                      <p>
                        Bootcamp payment options such as tuition deferral plans
                        and income share agreements may seem like convenient
                        alternatives to a financial aid package, but they come
                        with strings attached. For instance, you may be required
                        to take the first job offer that comes your way. And if
                        the income share agreement lacks a repayment cap, then
                        the total cost of your bootcamp tuition can end up being
                        just as high or higher than a college degree in the long
                        run. Since these payment options are unregulated, read
                        the fine print carefully before enrolling.
                      </p>
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
            <Col>
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample3"
              >
                <Tabs
                  defaultActiveKey="general"
                  id="uncontrolled-tab-example"
                  className="pillstyle mb-5 pt-5"
                >
                  <Tab eventKey="general" title="Info">
                    <div className="card card-body">
                      <p>
                        When it comes to comparing a bootcamp vs. college, both
                        can lead to ample career opportunities for graduates.
                        Both equip students with marketable tech skills and
                        offer career preparation services. Most bootcamps
                        include career coaching, resume help, mock interviews,
                        and portfolio reviews, along with opportunities to
                        network with alumni, employers, and other industry
                        professionals. Career centers at most colleges offer
                        similar services, though they may not be as focused as a
                        bootcamp on providing specialized career support for
                        tech disciplines.
                      </p>
                      <p>
                        Bootcamps do generally have a strong track record for
                        job placement. According to the Council on Integrity in
                        Results Reporting -- a nonprofit organization that
                        provides reporting standards for bootcamps and audits
                        bootcamp member outcome data -- the average percentage
                        of graduates employed in the field within 180 days of
                        graduation was around 79%. This is based on data
                        collected from 46 coding bootcamps between January and
                        June 2019.
                      </p>
                      <p>
                        Coding bootcamp graduates commonly find jobs as web
                        developers, software developers, or junior developers.
                        Individuals who want upper-level executive positions may
                        need to pursue a bachelor's and/or master's degree. With
                        a bachelor's degree in computer science, graduates often
                        secure jobs as web developers, software engineers, and
                        computer systems analysts.
                      </p>
                      <p>
                        Who says you must choose between a coding bootcamp vs.
                        college? Coding bootcamps and bachelor's degrees in
                        computer science both serve as viable pathways to tech
                        careers.
                      </p>
                      <p>
                        Many degree-holders attend coding bootcamps to brush up
                        on their skills or learn a new specialty. Coding
                        bootcamps can complement a college education since
                        bootcamps quickly alter their curricula to reflect
                        industry standards and changes in technology.
                        Additionally, some employers may pay for you to attend a
                        bootcamp if it benefits the company.
                      </p>
                      Here you might find a general idea of which options you
                      have available so you can start your career!
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </div>
          {/* from flask import Flask app = Flask(__name__) @app.route('/') def
          homepage(): return """ */}
          {/* <h1>First Video</h1>
          <iframe
            src="https://www.youtube.com/watch?v=34sxyECkEkw"
            width="500"
            height="300"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
          src="https://www.youtube.com/watch?v=-dYwGxLulOY"
          width="500"
          height="300"
          frameborder="0"
          allowfullscreen
          ></iframe>
          """ if __name__ == '__main__': app.run(debug=True, use_reloader=True) */}
          {/* <h1>First video</h1>
          <iframe src="https://www.youtube.com/watch?v=t6wZR2P-ZqA"></iframe> */}
        </div>
      ) : (
        // <div className="background vh-100">
        //   <div className="container py-5 h-100">
        //     <div className="row d-flex align-items-center h-100">
        //       <div className="col-4">
        //         <div
        //           className="card signupCardBackground shadow-2-strong"
        //           style={{ borderRadius: "1rem" }}
        //         >
        //           <div className="card-body p-5 text-center">
        //             <ul
        //               className="nav d-flex justify-content-center"
        //               id="myTab"
        //               role="tablist"
        //             />
        //             <div className="form input d-flex justify-content-center">
        //               <form className="loginForm">
        //                 <Tabs
        //                   defaultActiveKey="general"
        //                   id="uncontrolled-tab-example"
        //                   className="pillstyle mb-5 pt-5"
        //                 >
        //                   <Tab eventKey="general" title="General Info"></Tab>
        //                   <Tab eventKey="pros" title="Pros"></Tab>
        //                   <Tab eventKey="cons" title="Cons"></Tab>
        //                 </Tabs>
        //                 <br />
        //               </form>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>

        //   <div className="container py-5 h-100">
        //     <div className="row d-flex align-items-center h-100">
        //       <div className="col-4">
        //         <div
        //           className="card signupCardBackground shadow-2-strong"
        //           style={{ borderRadius: "1rem" }}
        //         >
        //           <div className="card-body p-5 text-center">
        //             <ul
        //               className="nav d-flex justify-content-center"
        //               id="myTab"
        //               role="tablist"
        //             />
        //             <div className="form input d-flex justify-content-center">
        //               <form className="loginForm">
        //                 <Tabs
        //                   defaultActiveKey="general"
        //                   id="uncontrolled-tab-example"
        //                   className="pillstyle mb-5 pt-5"
        //                 >
        //                   <Tab eventKey="general" title="General Info"></Tab>
        //                   <Tab eventKey="pros" title="Pros"></Tab>
        //                   <Tab eventKey="cons" title="Cons"></Tab>
        //                 </Tabs>
        //                 <br />
        //               </form>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div>
          <h1>Welcome to Modern Education</h1>
          <h2>
            We're here to help you find the right full-stack development
            education program for you!
          </h2>
          <Button className="btn btn-success btn-lg">
            Click Here to Search for Schools!
          </Button>
        </div>
      )}
    </div>
  );
};
