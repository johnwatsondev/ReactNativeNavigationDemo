import React from 'react'
import { AppRegistry } from 'react-native';
import Navigation from './app/Navigator'

// https://github.com/react-community/react-navigation/issues/876
class MyApp extends React.Component {
  render () {
    console.log('this.props in MyApp', this.props) // This will list the initialProps.
    // StackNavigator **only** accepts a screenProps prop so we're passing
    // initialProps through that.
    return <Navigation myProps={this.props} />
  }
}

AppRegistry.registerComponent('ReactNativeNavigationDemo', () => MyApp);