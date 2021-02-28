import { createContext, ReactNode, useState } from 'react';
import challenges from '../..//challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number; 
    currentExperience: number; 
    challengeCompleted: number;
    experienceNextLevel: number;
    activeChallenge: Challenge; 
    levelUp: () => void; 
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengesProviderProp {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children } : ChallengesProviderProp) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience]  = useState(0);
    const [challengeCompleted, setChallengeCompleted]  = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {

        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
         
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceNextLevel) {
            finalExperience = finalExperience - experienceNextLevel;
            levelUp();
        }
        
        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);
    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currentExperience, 
                challengeCompleted, 
                experienceNextLevel,
                activeChallenge,
                levelUp, 
                startNewChallenge,
                resetChallenge,
                completeChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    );
}
 