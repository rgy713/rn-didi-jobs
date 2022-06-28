import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.29289 3.70711L0 11V15H4L11.2929 7.70711L7.29289 3.70711Z" fill="black"/>
<path d="M8.70711 2.29289L12.7071 6.29289L14.1716 4.82843C14.702 4.29799 15 3.57857 15 2.82843C15 1.26633 13.7337 0 12.1716 0C11.4214 0 10.702 0.297995 10.1716 0.828428L8.70711 2.29289Z" fill="black"/>
</svg>
`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
