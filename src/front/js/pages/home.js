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
                <a
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                  name="selector"
                >
                  Computer Science Degree
                </a>
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
            <Row className="text-center">
              <Col>
                <div
                  className="collapse multi-collapse, position-absolute top-75 start-50 translate-middle-x"
                  id="multiCollapseExample1"
                >
                  <Tabs
                    defaultActiveKey="general"
                    id="uncontrolled-tab-example"
                    className="pillstyle mb-5 pt-5"
                  >
                    <Tab eventKey="general" title="General Info">
                      <div className="card card-body bg-white">
                        <CsGenInfo />
                      </div>
                    </Tab>
                    <Tab
                      eventKey="pros"
                      title="Pros"
                      className="card card-body bg-white"
                    >
                      <CsPros />
                    </Tab>
                    <Tab
                      eventKey="cons"
                      title="Cons"
                      className="card card-body bg-white"
                    >
                      <CsCons />
                    </Tab>
                  </Tabs>
                </div>
              </Col>
              <Col>
                <div
                  className="collapse multi-collapse, position-absolute top-75 start-50 translate-middle-x"
                  id="multiCollapseExample2"
                >
                  <Tabs
                    defaultActiveKey="general"
                    id="uncontrolled-tab-example"
                    className="pillstyle mb-5 pt-5"
                  >
                    <Tab eventKey="general" title="Info">
                      <div className="card card-body bg-white">
                        <CbInfo />
                      </div>
                    </Tab>
                    <Tab eventKey="pros" title="Pros" className="bg-white">
                      <CbPros />
                    </Tab>
                    <Tab eventKey="cons" title="Cons" className="bg-white">
                      <CbCons />
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
            <Col>
              <div
                className=" multi-collapse, position-absolute top-75 start-50 translate-middle-x"
                id="multiCollapseExample3"
              >
                <Tabs
                  defaultActiveKey="general"
                  id="uncontrolled-tab-example"
                  className="pillstyle mb-5 pt-5"
                >
                  <Tab eventKey="general">
                    <div className="card card-body ">
                      <CoInfo />
                     
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
