import { useContext } from 'react';
import styles from '../assets/css/components/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengContext';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

    // const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>

            { activeChallenge
                ? (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} XP</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                            <footer>
                                <button 
                                    onClick={resetChallenge} 
                                    className={styles.challengeFailedButton}>
                                        Falhei
                                </button>
                                <button onClick={completeChallenge} className={styles.challengeSucceededButton}>Completei</button>
                            </footer>
                        </main>
                    </div>
                )
                : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>

                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de nível, completando o desafio....
                </p>
                    </div>
                )
            }


        </div >
    );
}