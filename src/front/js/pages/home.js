import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Search } from "../component/search";
import { Link } from "react-router-dom";
import { Button, Row, Col, Tab, Tabs } from "react-bootstrap";
import {
  CsPros,
  CsGenInfo,
  CsCons,
  CbInfo,
  CbPros,
  CbCons,
  CoInfo,
} from "../component/paragraphs.js";

import { Video } from "../component/videos";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className="text-white vh-100">
        <h1>Welcome to Modern Education</h1>
        <h2>
          We're here to help you find the right information in your computer
          programming education!
        </h2>
        <h3>
          Check Out the Information in the Tabs Below, and Take a Look at the
          Videos at the Bottom of this Page for More Information!
        </h3>
        {!store.activeUser ? (
          <div>
            <p>
              If this is your first time here, click{" "}
              <Link to="/signup">Here</Link> to create an account!
            </p>
            <p>
              If you are a returning user, click <Link to="/login">Here</Link>{" "}
              to Login!
            </p>
          </div>
        ) : (
          <div className="d-grid gap-2 col-4 mx-auto my-5">
            <Link to="/user">
              <button className="btn btn-lg btn-info" type="button">
                Click Here to Search for Schools!
              </button>
            </Link>
          </div>
        )}

        <div id="mygroup">
          <Row>
            <Col xs={6} md={4}>
              <button
                className="btn btn-primary"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                name="selector"
              >
                Computer Science Degree
              </button>
            </Col>

            <Col xs={6} md={4}>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
                name="selector"
              >
                Coding Bootcamp
              </button>
            </Col>
            <Col xs={6} md={4}>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample3"
                aria-expanded="false"
                aria-controls="multiCollapseExample3"
                name="selector"
              >
                Career oportunities
              </button>
            </Col>
          </Row>
          <div className="accordion-group">
            <Row className="text-center">
              <Col>
                <div
                  className="collapse position-absolute top-75 start-50 translate-middle-x"
                  id="multiCollapseExample1"
                  data-bs-parent="#mygroup"
                >
                  <Tabs
                    defaultActiveKey="general"
                    id="uncontrolled-tab-example"
                    className="pillstyle mb-5 pt-5"
                  >
                    <Tab eventKey="general" title="General Info">
                      <div className="card card-body bg-white text-black">
                        <CsGenInfo />
                      </div>
                    </Tab>
                    <Tab
                      eventKey="pros"
                      title="Pros"
                      className="card card-body bg-white text-black"
                    >
                      <CsPros />
                    </Tab>
                    <Tab
                      eventKey="cons"
                      title="Cons"
                      className="card card-body bg-white text-black"
                    >
                      <CsCons />
                    </Tab>
                  </Tabs>
                </div>
              </Col>
              <Col>
                <div
                  className="collapse position-absolute top-75 start-50 translate-middle-x"
                  id="multiCollapseExample2"
                  data-bs-parent="#mygroup"
                >
                  <Tabs
                    defaultActiveKey="general"
                    id="uncontrolled-tab-example"
                    className="pillstyle mb-5 pt-5"
                  >
                    <Tab eventKey="general" title="Info">
                      <div className="card card-body bg-white text-black">
                        <CbInfo />
                      </div>
                    </Tab>
                    <Tab
                      eventKey="pros"
                      title="Pros"
                      className="bg-white text-black"
                    >
                      <CbPros />
                    </Tab>
                    <Tab
                      eventKey="cons"
                      title="Cons"
                      className="bg-white text-black"
                    >
                      <CbCons />
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
            <Col>
              <div
                className=" collapse position-absolute top-75 start-50 translate-middle-x"
                id="multiCollapseExample3"
                data-bs-parent="#mygroup"
              >
                <Tabs
                  defaultActiveKey="general"
                  id="uncontrolled-tab-example"
                  className="pillstyle mb-5 pt-5"
                >
                  <Tab eventKey="general">
                    <div className="card card-body  bg-white text-black">
                      <CoInfo />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </div>
        </div>
      </div>
      <div className="videos">
        <Video />
      </div>
    </div>
  );
};
