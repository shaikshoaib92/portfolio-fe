"use client";

import ExererienceStyles from "./experienct-styles";

const Experience = () => {
  const { CompanyNameHeading, TotalTenure, RoleText, RoleTenure } =
    ExererienceStyles;

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width:"30%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <img
            src="./master-works-logo.jpeg"
            style={{
              width: "15%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CompanyNameHeading>Master Works</CompanyNameHeading>
            <TotalTenure>1 year 8 months</TotalTenure>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <div
            style={{
              width: "15%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                borderRight: "2px solid grey",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 30,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <RoleText>Software Engineer</RoleText>
              <RoleTenure>Jun 2023 - Present . 9 mos</RoleTenure>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <RoleText>Software Engineer - Internship</RoleText>
              <RoleTenure>Dec 2022 - May 2023 . 6 mos</RoleTenure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
