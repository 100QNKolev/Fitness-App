import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => {
    return (
        <div id="welcome-world">
            <div className={styles['welcome-message']}>
                <h2>Show your progress</h2>
                <h3>Get people motivated</h3>
                <div className={styles['catalog']}>
                    <h5><Link to="/catalog" style={{color: '#831717cb'}} >See other's peoples journey </Link></h5>
                </div>
            </div>
        </div>
    );
};