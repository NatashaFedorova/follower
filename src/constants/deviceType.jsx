import deviceSize from './deviceSize';

const deviceType = {
  mobile: `(min-width: ${deviceSize.mobile})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
};

export default deviceType;
