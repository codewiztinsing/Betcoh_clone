import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Platform,
  RefreshControl,
  Switch,
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { SettingsScreen, SettingsData, Chevron } from "react-native-settings-screen"

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

const renderHero = () => (
  <View style={styles.heroContainer}>
    <Image source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeautiful-girls&psig=AOvVaw3ZIt7p3NGS0SifdTYC55gd&ust=1674298278790000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPD-lI_91fwCFQAAAAAdAAAAABAE'}} style={styles.heroImage} />
    <View style={{ flex: 1 }}>
      <Text style={styles.heroTitle}>Jan Söndermann</Text>
      <Text style={styles.heroSubtitle}>jan+git@primlo.com</Text>
    </View>
    <Chevron />
  </View>
)

export default class Setting extends React.Component {
  state = {
    refreshing: false,
  }

  settingsData: SettingsData = [
    { type: 'CUSTOM_VIEW', key: 'hero', render: renderHero },
    {
      type: 'SECTION',
      header: 'Font settings'.toUpperCase(),
      footer:
        'this setting adjust font family globally',
      rows: [
        {
          title: 'Font Family',
          showDisclosureIndicator: true,
        },
        { title: 'A non-tappable row' },
        {
          title: 'Font size',
          subtitle: 'Test font size',
          showDisclosureIndicator: true,
        },
        {
          title: 'Font Type',
          subtitle:
            'Test font family',
        },
        {
          title: 'Reset',
          renderAccessory: () => <Switch value onValueChange={() => {}} />,
        },

      ],
    },
    {
      type: 'SECTION',
      header: 'Color setting'.toUpperCase(),
      rows: [
        {
          title: 'Background color',
          showDisclosureIndicator: true,
        },
        {
          title: 'Tint color',
          renderAccessory: () => (
            <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
              Dapibus
            </Text>
          ),
        },
        {
          title: 'Font Color',
          subtitle: 'Adjust font color',
          renderAccessory: () => (
            <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
              Yes
            </Text>
          ),
          showDisclosureIndicator: true,
        },
        {
          title: 'Border Color',
          renderAccessory: () => (
            <Icon
              style={{ marginTop: 3, marginRight: 6 }}
              name="colours"
              size={32}
              color="black"
            />
          ),
          showDisclosureIndicator: true,
        },
      ],
    },
 
    {
      type: 'CUSTOM_VIEW',
      render: () => (
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            color: '#999',
            marginBottom: 40,
            marginTop: -30,
            fontFamily,
          }}
        >
          v1.2.3
        </Text>
      ),
    },
  ]

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#8c231a" />
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>Settings</Text>
        </View>
        <SettingsScreen
          data={this.settingsData}
          globalTextStyle={{ fontFamily }}
          scrollViewProps={{
            refreshControl: (
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({ refreshing: true })
                  setTimeout(() => this.setState({ refreshing: false }), 3000)
                }}
              />
            ),
          }}
        />
      </View>
    )
  }
}

const statusBarHeight = Platform.OS === 'ios' ? 35 : 0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    backgroundColor: '#8c231c',
    height: 44 + statusBarHeight,
    alignSelf: 'stretch',
    paddingTop: statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitle: {
    color: 'white',
    fontFamily,
    fontSize: 17,
  },
  heroContainer: {
    marginTop: 40,
    marginBottom: 50,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    flexDirection: 'row',
  },
  heroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
    marginHorizontal: 20,
  },
  heroTitle: {
    fontFamily,
    color: 'black',
    fontSize: 24,
  },
  heroSubtitle: {
    fontFamily,
    color: '#999',
    fontSize: 14,
  },
})