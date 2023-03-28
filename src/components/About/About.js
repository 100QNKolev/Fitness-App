import styles from './About.module.css';

export const About = () => {

    return (
        <div>
            <div className={styles['logo']}></div>
            <div className={styles['about-block']}>
                <div className={styles['heading']}>
                    <h1>About Us</h1>
                </div>
                <div className={styles['description']}>
                    <pre>
                        <br />
                        Welcome to our fitness forum, a community of fitness enthusiasts who are passionate about health and wellness. Our forum is a place where people come together to share their experiences, insights, and tips on all things fitness.
                        <br />&nbsp;<br />
                        Our mission is to create a supportive and inclusive community that encourages and inspires people to achieve their fitness goals. Whether you're a beginner or an experienced athlete, our forum has something for everyone. We cover a wide range of topics, including workout routines, nutrition, supplements, injury prevention, and much more.
                        <br />&nbsp;<br />
                        Our forum is a safe and welcoming space where you can ask questions, share your achievements, and connect with other like-minded individuals. We believe that the journey to fitness is not a solo one, and that having a supportive community can make all the difference.
                        <br />&nbsp;<br />
                        Our team of moderators and administrators is dedicated to maintaining a positive and respectful atmosphere in the forum. We encourage open and honest communication, but we also have strict guidelines to ensure that everyone feels safe and respected.
                        <br />&nbsp;<br />
                        At our fitness forum, we are committed to promoting a healthy and sustainable approach to fitness. We believe that fitness is not just about looking good, but also about feeling good and living a healthy lifestyle. Our goal is to help our members create a balanced and sustainable approach to fitness that they can maintain for the long term.
                        <br />&nbsp;<br />
                        Thank you for being a part of our fitness community. We hope that you find our forum informative, inspiring, and supportive. If you have any questions or suggestions, please don't hesitate to contact us. We are here to help you achieve your fitness goals.
                        <br />&nbsp;<br />
                    </pre>
                </div>
            </div>
        </div>
    );
};