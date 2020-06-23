import React from "react";

import "./Home.css";
import Section from "../../components/UI/Section/Section";
import Button from "../../components/UI/Button/Button";

const Home = props => {
    return (
        // <Aux> </Aux> ?
        <div > 
            <Section className="Home" sectionType="White" gridType="Column" >
                {/* <div > */}
                <iframe 
                    title="Cat Angels video"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/_eaps__lNxc" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                <div className="Home-mission">
                    <q>
                        I also wanna help the public from schools up. I want young people to understand - they are going to be pet owners of the future - we want them to understand, being humane and kind person, it's the right thing to do.
                    </q>
                    <p>
                        - Deborah Fox, President and Founder of Cat Angels Pet Adoptions
                    </p>
                    <Button>Help Us Support Our Mission</Button>
                </div>
                {/* </div> */}

                
            </Section>

        </div>
    );
};

export default Home;