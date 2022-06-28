import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="18" height="18" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7048_10977)">
<path d="M3.11299 7.0042L5.15381 6.99366" stroke="#2E3A59" stroke-width="1.01272" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6653 6.98364L1.89303 11.1012C1.84304 11.1198 1.78877 11.1236 1.73666 11.1123C1.68456 11.1009 1.63682 11.0748 1.59911 11.0371C1.5614 10.9994 1.53531 10.9516 1.52394 10.8995C1.51257 10.8474 1.5164 10.7932 1.53497 10.7432L2.78815 6.98364L1.53497 3.2241C1.5164 3.17411 1.51257 3.11984 1.52394 3.06774C1.53531 3.01564 1.5614 2.96789 1.59911 2.93019C1.63682 2.89248 1.68456 2.86639 1.73666 2.85502C1.78876 2.84365 1.84304 2.84748 1.89302 2.86605L10.6653 6.98364Z" stroke="#2E3A59" stroke-width="1.01272" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7048_10977">
<rect width="12.1527" height="12.1527" fill="white" transform="translate(0.078125 0.929688)"/>
</clipPath>
</defs>
</svg>
`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
