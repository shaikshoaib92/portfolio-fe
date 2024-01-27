"use client";
import HorizontalBoxComponent from "./components/HorizontalBoxComponent";
import VerticalBoxComponent from "./components/VerticalBoxComponent";
import ProjectStyles from "./projects-styles";

let projectData = [
  {
    id: 1,
    type: "work",
    title: "Queue Managment System",
    desc: "An Application to manage long queues at airports",
    role: "Worked on creating various screens for this application",
    img: "./queue.jpg",
  },
  {
    id: 2,
    type: "work",
    title: "Data Access Layer",
    desc: "An Application to manage all the data in differnt data warehouses and databases",
    role: "I was responsible for creating front-end and api integratio with various third party applications.",
    img: "./data-access-layer.png",
  },
  {
    id: 3,
    type: "work",
    title: "Turn Arround Mangement System",
    desc: "This application is used for managing the turnarounds of an Air-plain at the airport which can help the airport's to deeply undetstand thir processes and decrease the waitig time of the passengers",
    role: "I was responsible for building various screens and their respective api's.",
    img: "./turn-arround-management.jpg",
  },
  {
    id: 4,
    type: "work",
    title: "Illigcal Taxi Violation System (POC)",
    desc: "This is application can help you to detect illigal taxi-driver's",
    role: "I was responsible for building the platform (both front-end and back-end) and integrate with computer vision algorithm",
    img: "./taxi.jpg",
  },
  {
    id: 5,
    type: "work",
    title: "SASO (POC)",
    desc: "This application is used for managing vehicles",
    role: "I was responsible for building the platform (both front-end and back-end) and integrate with computer vision algorithm",
    img: "./saso.jpg",
  },
  {
    id: 6,
    type: "personal",
    title: "Blog webisite",
    desc: "This application is used for creating your daily blogs",
    role: "I have created the application and integrated it with the no sql database",
    img: "./blog.webp",
  },
  {
    id: 7,
    type: "personal",
    title: "Login and Registration Page",
    desc: "a simple web page used for regestring and logging in of the existing user",
    role: "I have created the application and integrated it with the no sql database",
    img: "./login-authentication.jpg",
  },
];

const Projects = () => {
  const { Container, SubContainer, HorizontalBox } = ProjectStyles;

  return (
    <Container>
      <SubContainer>
        {projectData.map((item: any) => {
          return (
            <HorizontalBox
              key={item.id}
              sx={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p
                style={{
                  color: "#11111",
                  fontSize: "1em",
                  fontWeight: 700,
                  paddingLeft: 15,
                }}
              >
                {item.title}
              </p>
            </HorizontalBox>
          );
        })}
      </SubContainer>
    </Container>
  );
};

export default Projects;
