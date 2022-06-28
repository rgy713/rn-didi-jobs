import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11.1523" cy="11.7304" r="10.9492" fill="#118CFE"/>
    <circle cx="5.40439" cy="12.002" r="1.9161" fill="white"/>
    <circle cx="10.879" cy="12.002" r="1.9161" fill="white"/>
    <circle cx="16.3536" cy="12.002" r="1.9161" fill="white"/>
    <path d="M1.47449 15.5796L8.38604 21.7948L0.477553 24.3196L1.47449 15.5796Z" fill="#118CFE"/>
    </svg>
    `;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
