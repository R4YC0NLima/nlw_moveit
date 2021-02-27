import { strict } from 'assert';
import styles from '../assets/css/components/Profile.module.css';

// import level from '../assets/icons/level.svg';

export function Profile() {

    return (
        <div className={styles.ProfileContainer}>
            <img src="https://github.com/R4YC0NLima.png" alt="Raycon Lima"/>
            <div>
                <strong>Raycon Lima</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    );
}