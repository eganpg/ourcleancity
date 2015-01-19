App.info({
  name: 'Our Clean City',
  description: 'Public Works Made Easy',
  version: '0.0.1'
});
App.icons({
  // iOS
  // 'iphone': 'resources/icons/icon-60x60.png',
  // 'iphone_2x': 'resources/icons/icon-60x60@2x.png',
  // 'ipad': 'resources/icons/icon-72x72.png',
  // 'ipad_2x': 'resources/icons/icon-72x72@2x.png',

  // Android
  'android_ldpi': 'public/image/ourcleancity.png',
  'android_mdpi': 'public/image/ourcleancity.png',
  'android_hdpi': 'public/image/ourcleancity.png',
  'android_xhdpi': 'public/image/ourcleancity.png'
});
App.launchScreens({
  // iOS
  // 'iphone': 'resources/splash/splash-320x480.png',
  // 'iphone_2x': 'resources/splash/splash-320x480@2x.png',
  // 'iphone5': 'resources/splash/splash-320x568@2x.png',
  // 'ipad_portrait': 'resources/splash/splash-768x1024.png',
  // 'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
  // 'ipad_landscape': 'resources/splash/splash-1024x768.png',
  // 'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

  // Android
  'android_ldpi_portrait': 'public/image/ourcleancity_load.png',
  'android_ldpi_landscape': 'public/image/ourcleancity_load.png',
  'android_mdpi_portrait': 'public/image/ourcleancity_load.png',
  'android_mdpi_landscape': 'public/image/ourcleancity_load.png',
  'android_hdpi_portrait': 'public/image/ourcleancity_load.png',
  'android_hdpi_landscape': 'public/image/ourcleancity_load.png',
  'android_xhdpi_portrait': 'public/image/ourcleancity_load.png',
  'android_xhdpi_landscape': 'public/image/ourcleancity_load.png'
});

// meteor build ~/build-output-directory \ --server=ourcleancity.meteor.com
// keytool -genkey -alias ourcleancity -keyalg RSA \-keysize 2048 -validity 10000
// cd ~/build-output-directory/android/jarsigner -digestalg SHA1 unaligned.apk ourcleancity
// ~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/zipalign 4 \unaligned.apk production.apk

// meteor build ~/build-output-directory \
//     --server=ourcleancity.meteor.com

// keytool -genkey -v -keystore my-release-key.keystore -alias ourcleancity -keyalg RSA -keysize 2048 -validity 10000
// jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore unaligned.apk ourcleancity