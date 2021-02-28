import { useState, useEffect, useContext } from 'react';
import styles from '../assets/css/components/Countdown.module.css'
import { ChallengesContext } from '../contexts/ChallengContext';


let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext)
    // console.log(contextData);
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false)
        setTime(0.1 * 60)
    }

    // function pauseCountdown() {
    //     clearTimeout(countdownTimeout);
    //     setIsActive(false)
    // }

    
    

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (setIsActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished
                ? (
                    <button
                        disabled
                        className={styles.countdownButton}>
                        Ciclo Encerrado
                    </button>
                ) : (
                    <>
                        { isActive
                            ? (
                                <button
                                    type="button"
                                    onClick={resetCountdown}
                                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                    Abandonar o ciclo
                                </button>
                            )
                            : (
                                <button
                                    type="button"
                                    onClick={startCountdown}
                                    className={styles.countdownButton}>

                                    Iniciar um novo ciclo
                                </button>
                            )
                        }
                    </>
                )}


        </div>
    );
}