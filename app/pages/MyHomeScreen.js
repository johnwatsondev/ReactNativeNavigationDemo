import React from 'react'
import MyNavScreen from './MyNavScreen'

const MyHomeScreen = ({navigation}) => (
    <MyNavScreen banner="Home Screen" navigation={navigation}/>
)
MyHomeScreen.navigationOptions = {
    title: 'Welcome',
}

export default MyHomeScreen