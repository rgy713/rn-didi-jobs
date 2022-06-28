import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="18" height="18" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7048_10985)">
<path d="M6.4043 2.53906V9.62811" stroke="#2E3A59" stroke-width="1.01272" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.85938 6.08398H9.94842" stroke="#2E3A59" stroke-width="1.01272" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7048_10985">
<rect width="12.1527" height="12.1527" fill="white" transform="translate(0.328125 0.0078125)"/>
</clipPath>
</defs>
</svg>
`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
