import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2.53125C0 1.42668 0.89543 0.53125 2 0.53125H18C19.1046 0.53125 20 1.42668 20 2.53125V14.5312C20 15.6358 19.1046 16.5312 18 16.5312H2C0.895432 16.5312 0 15.6358 0 14.5312V2.53125ZM3.51859 2.53125L10 8.20248L16.4814 2.53125H3.51859ZM18 3.86002L10.6585 10.2838C10.2815 10.6137 9.71852 10.6137 9.3415 10.2838L2 3.86002V14.5312H18V3.86002Z" fill="#0D0D0D"/>
</svg>
`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
