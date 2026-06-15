// Expected binary asset paths for the final app bundle.
// These files are intentionally not committed in this PR because binary assets
// are not accepted by the pull request interface. Add the real files locally at
// the documented paths and replace the fallback requires below when binaries are
// allowed in the repository.
export const expectedAssetPaths = {
  fonts: {
    helveticaNeueBold: 'assets/fonts/HelveticaNeueBold.ttf',
    neueHaasGrotesk: 'assets/fonts/NeueHaasGrotesk.ttf',
  },
  images: {
    loginBg: 'assets/images/login-bg.jpg',
    logo: 'assets/images/logo-malcolm-verse.png',
    malcolm: 'assets/images/malcolm.jpg',
    reese: 'assets/images/reese.jpg',
    dewey: 'assets/images/dewey.jpg',
    francis: 'assets/images/francis.jpg',
    lois: 'assets/images/lois.jpg',
    hal: 'assets/images/hal.jpg',
    stevie: 'assets/images/stevie.jpg',
    herkabe: 'assets/images/herkabe.jpg',
    epGraduacion: 'assets/images/ep-graduacion.jpg',
    epHomeAlone: 'assets/images/ep-home-alone.jpg',
    epHalloween: 'assets/images/ep-halloween.jpg',
    epFlechazos: 'assets/images/ep-flechazos.jpg',
    clip: 'assets/images/clip.png',
  },
};

const fallbackImage = require('../../assets/icon.png');
const fallbackSplash = require('../../assets/splash-icon.png');

export const images = {
  logo: fallbackSplash,
  collage: fallbackImage,
  family: fallbackImage,
  school: fallbackImage,
  graduation: fallbackImage,
  clip: fallbackImage,
  profile: fallbackImage,
  malcolm: fallbackImage,
  reese: fallbackImage,
  dewey: fallbackImage,
  francis: fallbackImage,
  lois: fallbackImage,
  hal: fallbackImage,
  stevie: fallbackImage,
  herkabe: fallbackImage,
};
