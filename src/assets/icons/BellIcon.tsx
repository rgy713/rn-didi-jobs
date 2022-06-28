import React from 'react';
import {SvgXml} from 'react-native-svg';
const svg = `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.15377 4.61538C5.15377 2.06638 7.22015 0 9.76916 0C12.3182 0 14.3845 2.06638 14.3845 4.61538V7.38462L16.2307 9.23077V11.0769H3.30762V9.23077L5.15377 7.38462V4.61538Z" fill="black"/>
<path d="M9.76916 14.7692C10.7888 14.7692 11.6153 13.9427 11.6153 12.9231H7.923C7.923 13.9427 8.74955 14.7692 9.76916 14.7692Z" fill="black"/>
<path d="M19 0.904297L0.999999 12.4757" stroke="#FF0000" stroke-width="1.54286"/>
</svg>

`;
const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
