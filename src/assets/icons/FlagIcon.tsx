import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6926_639)">
<path d="M3.97656 3.95703V15.9714" stroke="#475569" stroke-width="1.44761" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0115 3.95703V10.7151" stroke="#475569" stroke-width="1.44761" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.97656 3.95606C4.64648 3.26814 5.54716 2.88281 6.48523 2.88281C7.42331 2.88281 8.32399 3.26814 8.99391 3.95606C9.66383 4.64398 10.5645 5.0293 11.5026 5.0293C12.4407 5.0293 13.3413 4.64398 14.0113 3.95606" stroke="#475569" stroke-width="1.44761" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.97656 10.7139C4.64648 10.0259 5.54716 9.64062 6.48523 9.64062C7.42331 9.64062 8.32399 10.0259 8.99391 10.7139C9.66383 11.4018 10.5645 11.7871 11.5026 11.7871C12.4407 11.7871 13.3413 11.4018 14.0113 10.7139" stroke="#475569" stroke-width="1.44761" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_6926_639">
<rect width="17.2023" height="18.0215" fill="white" transform="translate(0.392548 0.203125)"/>
</clipPath>
</defs>
</svg>
`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
