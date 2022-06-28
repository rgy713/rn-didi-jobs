import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="23" height="22" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.08332 9.66485L2.32607 11.6403L3.04379 7.45628L0 4.49345L4.20043 3.88469L6.07906 0.078125L7.95769 3.88469L12.1581 4.49345L9.11433 7.45628L9.83206 11.6403L6.08332 9.66485Z" fill="#FFAA00"/>
</svg>`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
