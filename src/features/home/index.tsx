'use client'
import HomeStyles from "./home-styles"

const Home = () => {
    const { SubContainer, Container, HeroText } = HomeStyles
    return (
        <Container>
            <SubContainer>
                <div style={{
                    display:'flex',
                    flexDirection:'column'
                    , width:'60%',
                }}>
                    <HeroText>Hey there, I'm Shaik Shoaib a Sofware Engineer</HeroText>
                    <p
                    style={{
                        color:'#505863',
                        textAlign:'left',
                        letterSpacing:'1px',
                        lineHeight:'1.4em'
                        // textTransform:''

                    }}
                    >Passionate and results-driven software engineer with a proven track record of creating innovative solutions. Proficient in a variety of programming languages and frameworks, with a keen interest in staying abreast of emerging technologies. Dedicated to delivering high-quality, scalable software solutions that meet both user and business needs. From concept to deployment, I thrive on turning complex ideas into streamlined, efficient, and user-friendly applications. Let's collaborate and bring your digital vision to life!</p>
                </div>
                <img src="./shoaib-img-2.png" style={{
                    width:'400px',
                    height:'500px'
                }}/>
            </SubContainer>
        </Container>
    )
}

export default Home


