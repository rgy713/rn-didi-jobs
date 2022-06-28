import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.6915 1.11744C24.2247 1.57315 24.2727 2.35817 23.7988 2.87084L10.021 17.7747C9.77586 18.0398 9.42452 18.1915 9.05557 18.1915C8.68662 18.1915 8.33528 18.0398 8.09017 17.7747L1.20128 10.3228C0.727341 9.8101 0.775366 9.02507 1.30854 8.56936C1.84172 8.11365 2.65815 8.15983 3.13208 8.6725L9.05557 15.0801L21.8679 1.22058C22.3419 0.707909 23.1583 0.661731 23.6915 1.11744Z" fill="#E3AB1A"/>
    </svg>
        `;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
