import { useMediaQuery } from 'react-responsive';

export const deviceWidth = {
  desktop: 1280,
  laptop: 1279,
  tablet: 1023,
  fold: 767,
  mobileLg: 673,
  mobile: 427,
  mobileSm: 359,
};

export const useIsDeviceViewport = () => {
  return {
    isDesktopViewport: useMediaQuery({ minWidth: deviceWidth.desktop }),
    isLaptopViewport: useMediaQuery({ maxWidth: deviceWidth.laptop }),
    isTabletViewport: useMediaQuery({ maxWidth: deviceWidth.tablet }),
    isFoldViewport: useMediaQuery({ maxWidth: deviceWidth.fold }),
    isMobileLgViewport: useMediaQuery({ maxWidth: deviceWidth.mobileLg }),
    isMobileViewport: useMediaQuery({ maxWidth: deviceWidth.mobile }),
    isMobileSmViewport: useMediaQuery({ maxWidth: deviceWidth.mobileSm }),
  };
};

export const useIsDevice = () => {
  const viewport = useIsDeviceViewport();
  return {
    isDesktop: viewport.isDesktopViewport,
    isLaptop: viewport.isLaptopViewport,
    isTablet: viewport.isTabletViewport,
    isFold: viewport.isFoldViewport,
    isMobileLg: viewport.isMobileLgViewport,
    isMobile: viewport.isMobileViewport,
    isMobileSm: viewport.isMobileSmViewport,
  };
};

export const device = {
  desktop: `@media screen and (min-width: ${deviceWidth.desktop}px)`,
  laptop: `@media screen and (max-width: ${deviceWidth.laptop}px)`,
  tablet: `@media screen and (max-width: ${deviceWidth.tablet}px)`,
  fold: `@media screen and (max-width: ${deviceWidth.fold}px)`,
  mobileLg: `@media screen and (max-width: ${deviceWidth.mobileLg}px)`,
  mobile: `@media screen and (max-width: ${deviceWidth.mobile}px)`,
  mobileSm: `@media screen and (max-width: ${deviceWidth.mobileSm}px)`,
};

export const getDeviceName = () => {
  const device = useIsDevice();
  if (device.isMobileLg) {
    return 'mobile';
  } else if (device.isTablet) {
    return 'tablet';
  } else if (device.isLaptop) {
    return 'laptop';
  } else {
    return 'desktop';
  }
};
