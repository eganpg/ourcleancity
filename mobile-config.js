App.info({
  name: 'Our Clean City',
  description: 'Public Works Made Easy',
  version: '0.0.1'
});
App.icons({
  // iOS
  'iphone': 'public/image/ourcleancity.png',
  'iphone_2x': 'public/image/ourcleancity.png',
  'ipad': 'public/image/ourcleancity.png',
  'ipad_2x': 'public/image/ourcleancity.png',

  // Android
  'android_ldpi': 'public/image/ourcleancity.png',
  'android_mdpi': 'public/image/ourcleancity.png',
  'android_hdpi': 'public/image/ourcleancity.png',
  'android_xhdpi': 'public/image/ourcleancity.png'
});
App.launchScreens({
  // iOS
  'iphone': 'public/image/ourcleancity.png',
  'iphone_2x': 'public/image/ourcleancity.png',
  'iphone5': 'public/image/ourcleancity.png',
  'ipad_portrait': 'public/image/ourcleancity.png',
  'ipad_portrait_2x': 'public/image/ourcleancity.png',
  'ipad_landscape': 'public/image/ourcleancity.png',
  'ipad_landscape_2x': 'public/image/ourcleancity.png',

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