import { useContext } from 'react';
import styles from '../assets/css/components/CompletedChallenges.module.css'
import { ChallengesContext } from '../contexts/ChallengContext';

export function CompletedChallenges() {

    const { challengeCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{ challengeCompleted }</span>

        </div>
    );
}