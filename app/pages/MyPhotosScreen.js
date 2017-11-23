import React from 'react'
import MyNavScreen from './MyNavScreen'

const MyPhotosScreen = ({navigation}) => (
    <MyNavScreen
        banner={`${navigation.state.params.name}'s Photos`}
        navigation={navigation}
    />
)
MyPhotosScreen.navigationOptions = {
    title: 'Photos',
}

export default MyPhotosScreen