import { useContext } from 'react';
import styles from '../assets/css/components/ExperienceBar.module.css'
import { ChallengesContext } from '../contexts/ChallengContext';

export function ExperienceBar() {

    const { currentExperience, experienceNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 XP</span>
            <div>
                <div style={{ width: `${ percentToNextLevel}%` }}></div>
                <span className={styles.currentExperience} style={{ left: `${ percentToNextLevel}%` }}>
                    {currentExperience} XP
                </span>
            </div>            
            <span>{experienceNextLevel} XP</span>

        </header>
    );
}