import React from 'react';
import {SvgXml} from 'react-native-svg';

const svg = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.83221 2.53125H7.32216L8.76937 6.14928L6.44449 7.6992C6.16629 7.88467 5.99919 8.1969 5.99919 8.53125C6.00173 8.62488 5.99919 8.53225 5.99919 8.53225L5.99919 8.5333L5.9992 8.53554L5.99923 8.54058L5.99938 8.55292C5.99952 8.56214 5.99977 8.57333 6.0002 8.58644C6.00104 8.61265 6.00257 8.64655 6.00531 8.68761C6.01078 8.76971 6.0211 8.88069 6.04049 9.01642C6.07925 9.28771 6.15447 9.65936 6.30051 10.0975C6.59374 10.9772 7.16992 12.1162 8.29208 13.2384C9.41424 14.3605 10.5533 14.9367 11.433 15.2299C11.8711 15.376 12.2427 15.4512 12.514 15.4899C12.6497 15.5093 12.7607 15.5197 12.8428 15.5251C12.8839 15.5279 12.9178 15.5294 12.944 15.5302C12.9571 15.5307 12.9683 15.5309 12.9775 15.5311L12.9899 15.5312L12.9949 15.5312L12.9971 15.5312L12.9982 15.5312C12.9982 15.5312 13.1098 15.5251 12.9992 15.5312C13.378 15.5312 13.7242 15.3172 13.8936 14.9785L14.5633 13.6391L18.9992 14.3784V18.6982C16.8881 19.0035 11.1866 19.3044 6.7063 14.8241C2.226 10.3438 2.52691 4.64235 2.83221 2.53125ZM8.07284 9.01734L9.87877 7.81338C10.6657 7.28876 10.9776 6.28463 10.6263 5.4065L9.17911 1.78847C8.87538 1.02915 8.13996 0.53125 7.32216 0.53125H2.77996C1.87145 0.53125 1.01628 1.16241 0.867131 2.14815C0.527821 4.39075 0.0659738 11.0122 5.29208 16.2384C10.5182 21.4645 17.1397 21.0026 19.3823 20.6633C20.368 20.5142 20.9992 19.659 20.9992 18.7505V14.3784C20.9992 13.4007 20.2924 12.5663 19.328 12.4056L14.8921 11.6663C14.026 11.5219 13.1671 11.9593 12.7745 12.7446L12.428 13.4376C12.3191 13.4109 12.1975 13.3766 12.0654 13.3326C11.4451 13.1258 10.5841 12.702 9.7063 11.8241C8.82846 10.9463 8.40464 10.0853 8.19787 9.46502C8.142 9.29741 8.10178 9.1467 8.07284 9.01734Z" fill="#0D0D0D"/>
</svg>
`;

const Icon = () => {
  return <SvgXml xml={svg} />;
};

export default Icon;
