import { strict } from 'assert';
import { useContext } from 'react';
import styles from '../assets/css/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengContext';

// import level from '../assets/icons/level.svg';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.ProfileContainer}>
            <img src="https://github.com/R4YC0NLima.png" alt="Raycon Lima"/>
            <div>
                <strong>Raycon Lima</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}