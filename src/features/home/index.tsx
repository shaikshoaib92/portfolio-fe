"use client";
import HomeStyles from "./home-styles";

const Home = () => {
  const { SubContainer, Container, HeroText } = HomeStyles;
  return (
    <Container
      style={{
        // backgroundImage: "url(./system-architecture-2.png)",
        backgroundSize: "50% 100%",
      }}
    >
      <SubContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "1.5em",
              fontWeight: 500,
              color: "#111",
              margin: 0,
            }}
          >
            Software Developer & Engineer
          </p>
          <HeroText>
            hey there, I'm{" "}
            <span
              style={{
                color: "#FF5733",
              }}
            >
              Shaik Shoaib
            </span>
          </HeroText>
          <p
            style={{
              fontSize: "1.3em",
              fontWeight: 400,
              color: "#aaa",
              margin: 0,
            }}
          >
            
            {"while( company.employees[0].name === shoaib )"}<br/>
            {"{"}<br/>
            {"console.log(Delivering Great Products)"}<br/>
            {"}"}
          </p>

        </div>
      </SubContainer>
      <img />
    </Container>
  );
};

export default Home;
