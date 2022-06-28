import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.2914C18.6274 23.2914 24 18.2348 24 11.9972C24 5.75967 18.6274 0.703125 12 0.703125C5.37258 0.703125 0 5.75967 0 11.9972C0 18.2348 5.37258 23.2914 12 23.2914ZM14.3787 7.76195H7.5V4.93842H15.6213L18 7.17718V12.582L15.6213 14.8208H10.5V11.9972H14.3787L15 11.4125V8.34672L14.3787 7.76195ZM10.5 19.0561V16.2325H13.5V19.0561H10.5Z" fill="#E3AB1A"/>
</svg>
`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
