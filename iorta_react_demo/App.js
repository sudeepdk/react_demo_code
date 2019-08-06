import React, { Component } from 'react';
import { SafeAreaView , ScrollView ,Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

var DeviceInfo = require('react-native-device-info');

type Props = {};
 
export default class Touchables extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deviceinfo: {},
    };
  }

  async componentDidMount() {
    let deviceJSON = {};
    const ios = Platform.OS === 'ios';

    try {

      // deviceJSON.testString = "Test data";
      // deviceJSON.uniqueID = DeviceInfo.getUniqueID();
      // deviceJSON.manufacturer = DeviceInfo.getManufacturer();
      // deviceJSON.brand = DeviceInfo.getBrand();
      // deviceJSON.model = DeviceInfo.getModel();
      // deviceJSON.deviceId = DeviceInfo.getDeviceId();
      // deviceJSON.systemName = DeviceInfo.getSystemName();
      // deviceJSON.systemVersion = DeviceInfo.getSystemVersion();
      // deviceJSON.buildId = DeviceInfo.getBuildId();
      // deviceJSON.bundleId = DeviceInfo.getBundleId();
      
      // deviceJSON.buildNumber = DeviceInfo.getBuildNumber();
      // deviceJSON.version = DeviceInfo.getVersion();
      // deviceJSON.readableVersion = DeviceInfo.getReadableVersion();
      // // deviceJSON.deviceName = DeviceInfo.getDeviceName(); // needs android.permission.BLUETOOTH ?
      // deviceJSON.userAgent = DeviceInfo.getUserAgent();
      // deviceJSON.deviceLocale = DeviceInfo.getDeviceLocale();
      // deviceJSON.preferredLocales = DeviceInfo.getPreferredLocales();
      // deviceJSON.deviceCountry = DeviceInfo.getDeviceCountry();
      // deviceJSON.timezone = DeviceInfo.getTimezone();
      
      
      deviceJSON.isEmulator = DeviceInfo.isEmulator();
      deviceJSON.isTablet = DeviceInfo.isTablet();
      deviceJSON.fontScale = DeviceInfo.getFontScale();
      deviceJSON.hasNotch = DeviceInfo.hasNotch();
      
      
      
      // deviceJSON.IPAddress = await DeviceInfo.getIPAddress();
      // // deviceJSON.MACAddress = await DeviceInfo.getMACAddress(); // needs android.permission.ACCESS_WIFI_STATE ?
      
      
      // deviceJSON.carrier = DeviceInfo.getCarrier();
      // deviceJSON.totalMemory = DeviceInfo.getTotalMemory();
      
      // // deviceJSON.totalDiskCapacity = DeviceInfo.getTotalDiskCapacity(); // FIXME needs a patch for integer overflow on Android
      // // deviceJSON.freeDiskStorage = DeviceInfo.getFreeDiskStorage(); // FIXME needs a patch for integer overflow on Android
      // deviceJSON.batteryLevel = await DeviceInfo.getBatteryLevel();
      // deviceJSON.isLandscape = DeviceInfo.isLandscape();
      
      
      // deviceJSON.deviceType = DeviceInfo.getDeviceType();
      // // deviceJSON.isPinOrFingerprintSet = 'unknown';
      // deviceJSON.supportedABIs = DeviceInfo.supportedABIs();
      
      
      
      // deviceJSON.isLocationEnabled = await DeviceInfo.isLocationEnabled();
      // deviceJSON.getAvailableLocationProviders = await DeviceInfo.getAvailableLocationProviders();
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    } catch (e) {
      deviceJSON.error = e;
      console.log('Trouble getting device info ', e);
    }

    // DeviceInfo.isPinOrFingerprintSet()(this.keyguardCallback);

    console.log('loaded info');
    this.setState({ deviceinfo: deviceJSON });
    // this.forceUpdate();
    console.log(this.state.deviceinfo);
  }




  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>react-native-device-info example - info:</Text>
        <ScrollView>
          <Text style={styles.instructions}>{JSON.stringify(this.state.deviceinfo, null, '\t')}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});


// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Touchables);
