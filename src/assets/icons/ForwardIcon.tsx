import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.0371 6.90487C22.0371 7.58596 21.508 8.13809 20.8553 8.13809L6.67316 8.13809C4.71502 8.13809 3.12763 9.79449 3.12763 11.8378L3.12763 16.7707C3.12763 17.4518 2.5985 18.0039 1.94579 18.0039C1.29307 18.0039 0.763943 17.4518 0.763943 16.7707L0.763945 11.8378C0.763947 8.43231 3.40959 5.67164 6.67316 5.67164L20.8553 5.67164C21.508 5.67164 22.0371 6.22377 22.0371 6.90487Z" fill="#0D0D0D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.691 6.03284C22.1525 6.51445 22.1525 7.29528 21.691 7.77689L16.9636 12.7098C16.502 13.1914 15.7537 13.1914 15.2922 12.7098C14.8307 12.2282 14.8307 11.4474 15.2922 10.9657L19.1839 6.90487L15.2922 2.84398C14.8307 2.36238 14.8307 1.58154 15.2922 1.09993C15.7537 0.618328 16.502 0.61833 16.9636 1.09994L21.691 6.03284Z" fill="#0D0D0D"/>
</svg>
`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;