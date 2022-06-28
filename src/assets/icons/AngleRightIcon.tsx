import React from 'react';
import {SvgXml} from 'react-native-svg';
const svg = `<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.13128 12.3687C0.789573 12.027 0.789573 11.473 1.13128 11.1313L5.76256 6.5L1.13128 1.86872C0.789572 1.52701 0.789572 0.97299 1.13128 0.631282C1.47299 0.289573 2.02701 0.289573 2.36872 0.631282L7.61872 5.88128C7.96043 6.22299 7.96043 6.77701 7.61872 7.11872L2.36872 12.3687C2.02701 12.7104 1.47299 12.7104 1.13128 12.3687Z" fill="#0D0D0D" fill-opacity="0.4"/>
</svg>
`;
const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
