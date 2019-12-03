export const PERSONAL_SETTING = 'PERSONAL_SETTING';
export const PERSONAL_RECORD = 'PERSONAL_RECORD';
export const USER_INFO = 'USER_INFO';
export const RANKING_INFO = 'RANKING_INFO';
export const FUNC_GO_BACK = 'GO_BACK';
export const FUNC_CLOSE = 'CLOSE';
export const FUNC_SETTING = 'SETTING';
export const PERSONAL_DEFAULT_SETTING = {
    level: 'easy',
    image: '0',
    tips: false
};

export const PERSONAL_DEFAULT_RECORD = {
    easy: null,
    medium: null,
    hard: null
};

export const LEVEL_MAP = {
    easy: 3,
    medium: 4,
    hard: 5
};

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
