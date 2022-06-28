import React from 'react';
import {SvgXml} from 'react-native-svg';
const Icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.77648 7.4617C4.77648 3.44211 8.035 0.183594 12.0546 0.183594C16.0742 0.183594 19.3327 3.44211 19.3327 7.4617V11.8286L22.2439 14.7398V17.651H1.86523V14.7398L4.77648 11.8286V7.4617Z" fill="black"/>
<path d="M12.0546 23.4735C13.6624 23.4735 14.9658 22.1701 14.9658 20.5623H9.14334C9.14334 22.1701 10.4467 23.4735 12.0546 23.4735Z" fill="black"/>
</svg>
`;
const BellIcon = () => {
  return <SvgXml xml={Icon} />;
};

export default BellIcon;
