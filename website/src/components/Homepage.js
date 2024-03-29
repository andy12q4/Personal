import React from 'react';
import styled from 'styled-components';
import ihp from '../images/IHP.PNG';
import overlord from '../images/overlord.PNG';
import h2w from '../images/h2w.PNG';
import background from '../images/background.jpg';
import githubIcon from '../images/git.png';
import linkedinIcon from '../images/l.png';
import emailIcon from '../images/gmail.png';



const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-right: 50px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ReadMoreButton = styled.button`
  border: none;
  background-color: white;
  color: black;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  margin-left: 140px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  color: white;
  font-family: Arial, sans-serif;
  flex-grow: 1;
  min-height: 100vh;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 20px;
`;

const TextSection = styled.div`
  text-align: left;
  max-width: 460px;
  margin-top: 250px;
  margin-bottom: 400px;
  margin-right: 1200px;
  color: 'gray';
  p {
    font-size: 24px; 
  };
  h1 {
    font-size: 36px; 
    margin-bottom: 30px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 240px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 15px;
  width: 300px;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 75%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

class ProjectsPage extends React.Component {
  state = {
    projects: [
      {
        title: 'Project 1',
        imageUrl: ihp,
        description: 'Description 1',
      },
      {
        title: 'Project 2',
        imageUrl: overlord,
        description: 'Description 2',
      },
      {
        title: 'Project 3',
        imageUrl: h2w,
        description: 'Description 3',
      },
    ],
  };
  render() {
    return (
        <Container>
            <Content>
                <TextSection>
                    <h1>Welcome to my Website</h1>
                    <p>My name is Andy Chen. I am a student at RPI with a dual major in Computer Science and ITWS.</p>
                    
                    <IconContainer>
                        <Icon src={githubIcon} alt="GitHub" onClick={() => window.open("https://github.com/yourusername", "_blank")} />
                        <Icon src={linkedinIcon} alt="LinkedIn" onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")} />
                        <Icon src={emailIcon} alt="Email" onClick={() => window.location.href="mailto:youremail@gmail.com"} />
                    </IconContainer>

                    <ReadMoreButton onClick={() => {
                        // Define your 'read more' action here
                        console.log("Read more clicked!");
                    }}>
                        Read more
                    </ReadMoreButton>
                </TextSection>

                <h1>View my Projects</h1>
                <ProjectContainer>
                    {this.state.projects.map((project, index) => (
                        <ProjectCard key={index}>
                            <ImageContainer>
                                <Image src={project.imageUrl} alt={project.title} />
                            </ImageContainer>
                            <Title>{project.title}</Title>
                            <Description>{project.description}</Description>
                        </ProjectCard>
                    ))}
                </ProjectContainer>
            </Content>
        </Container>
    );
}
}
export default ProjectsPage;
