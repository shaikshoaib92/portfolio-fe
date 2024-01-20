import React from "react";

const AboutMe = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        // overflowY: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "100px",
          paddingRight: "100px",
          //   height: "100",
          //   overflowY: "scroll",
        }}
      >
        <h1>About Me</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="./shoaib-img-4.png"
            style={{
              width: "50%",
              height: "50%",
            }}
          />
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "#3e3e3e",
                fontSize: "2em",
                fontWeight: 500,
              }}
            >
              Get to Know{" "}
              <span
                style={{
                  color: "#d7aaaa",
                }}
              >
                me
              </span>
              , I'm{" "}
              <span
                style={{
                  color: "#FF5733",
                }}
              >
                Shaik Shoaib
              </span>
            </p>
            <p
              style={{
                color: "#505863",
                textAlign: "left",
                letterSpacing: "1px",
                lineHeight: "2em",
              }}
            >
              A passionate and results-driven software engineer with a proven
              track record of creating innovative solutions. Proficient in a
              variety of programming languages and frameworks, with a keen
              interest in staying abreast of emerging technologies.
              <br /> <br />
              Dedicated to delivering high-quality, scalable software solutions
              that meet both user and business needs. From concept to
              deployment, I thrive on turning complex ideas into streamlined,
              efficient, and user-friendly applications. Let's collaborate and
              bring your digital vision to life!
            </p>
            <p
              style={{
                color: "#333333",
                textAlign: "left",
                letterSpacing: "1px",
                lineHeight: "2em",
                fontWeight:600
                , marginBottom:50
                ,fontSize:'1.2em'
              }}
            >
              If you’re interested in working together, contact me!{" "}
            </p>

          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutMe;
