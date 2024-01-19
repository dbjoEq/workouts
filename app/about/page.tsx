import React from 'react';
import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

const AboutPage = () => {
    return (
        <Card className={"py-4 px-8 my-4 mx-8"}>
            <h1>Welcome to Fat Fighters!</h1>
            <Separator className={"my-4"}/>
            <p>
                Welcome to Fat Fighters, where we believe in the transformative power of fitness and a healthy lifestyle. Our mission is to guide and inspire individuals on their journey to optimal well-being through physical activity and mindful living.
            </p>
            <p>
                At Fat Fighters, we understand that every fitness journey is unique. Our dedicated team of certified trainers is committed to providing personalized support, tailored workout plans, and expert guidance to help you achieve your health and fitness goals.
            </p>
            <p>
                We believe in the importance of building a strong foundation for both body and mind. Our diverse range of fitness programs encompasses cardio, strength training, flexibility, and mindfulness, ensuring a holistic approach to your overall well-being.
            </p>
            <p>
                Our state-of-the-art facilities are designed to create a welcoming and motivating environment. Whether you are a beginner taking your first steps towards a healthier lifestyle or a seasoned fitness enthusiast looking for new challenges, Fat Fighters is the place for you.
            </p>
            <p>
                Join us in the pursuit of excellence, as we strive to empower individuals to become the best version of themselves. Your journey towards a healthier, happier, and more fulfilling life begins here at Fat Fighters.
            </p>
            <p>
                Thank you for choosing Fat Fighters as your partner in wellness. Together, let's embark on a path of self-discovery, resilience, and achievement. Here's to a healthier you!
            </p>
        </Card>
    );
};

export default AboutPage;