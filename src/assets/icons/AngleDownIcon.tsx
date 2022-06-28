import React from 'react';
import {SvgXml} from 'react-native-svg';
const svg = `<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.631282 1.13128C0.97299 0.789573 1.52701 0.789573 1.86872 1.13128L6.5 5.76256L11.1313 1.13128C11.473 0.789572 12.027 0.789572 12.3687 1.13128C12.7104 1.47299 12.7104 2.02701 12.3687 2.36872L7.11872 7.61872C6.77701 7.96043 6.22299 7.96043 5.88128 7.61872L0.631282 2.36872C0.289573 2.02701 0.289573 1.47299 0.631282 1.13128Z" fill="#0D0D0D" fill-opacity="0.4"/>
</svg>
`;
const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
