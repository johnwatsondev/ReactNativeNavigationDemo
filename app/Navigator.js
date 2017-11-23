import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'

import MyHomeScreen from './pages/MyHomeScreen'
import MyProfileScreen from './pages/MyProfileScreen'
import MyPhotosScreen from './pages/MyPhotosScreen'
import UseSystemBackBehaviourScreen from './pages/UseSystemBackBehaviourScreen'

class Navigation extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let Navigator = StackNavigator({
            Home: {
                screen: MyHomeScreen,
            },
            Profile: {
                path: 'people/:name',
                screen: MyProfileScreen,
            },
            Photos: {
                path: 'photos/:name',
                screen: MyPhotosScreen,
            },
            UseSystemBackBehaviourScreen: {
                screen: UseSystemBackBehaviourScreen
            },
        }, {
            // navigationOptions: ({navigation, screenProps}) => ({
            //     header: null
            // }),
            initialRouteName: this.props.myProps.SCREEN,
            mode: 'card'
        })
        console.log('Navigation', this.props)
        return (
            <Navigator screenProps={this.props}/>
        )
    }
}

export default Navigation