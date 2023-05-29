import React from 'react';

class App extends React.Component {
    state = {
        projects: [
            {
                title: 'Project 1',
                student: 'Student 1',
                description: 'Description 1',
                imageUrl: '/path/to/image1.png',
            },
            {
                title: 'Project 2',
                student: 'Student 2',
                description: 'Description 2',
                imageUrl: '/path/to/image2.png',
            },
            // More projects here...
        ]
    };

    render() {
        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f2f2f2',
            padding: '50px',
            fontFamily: 'Arial, sans-serif',
        };

        const cardStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
            margin: '20px',
            padding: '30px',
            borderRadius: '15px',
            width: '300px',
        };

        const imageStyle = {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
        };

        const titleStyle = {
            fontSize: '1.5em',
            color: '#333',
        };

        const studentStyle = {
            fontSize: '1.2em',
            color: '#666',
        };

        return (
            <div className="App" style={containerStyle}>
                <h1>Welcome to Our Student Projects Showcase</h1>
                <div className="projects-container">
                    {this.state.projects.map((project, index) => (
                        <div className="project-card" key={index} style={cardStyle}>
                            <img src={project.imageUrl} alt={project.title} style={imageStyle} />
                            <h2 style={titleStyle}>{project.title}</h2>
                            <h3 style={studentStyle}>By: {project.student}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;