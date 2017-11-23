import React from 'react'
import {Button} from 'react-native'
import MyNavScreen from './MyNavScreen'

const MyProfileScreen = (props) => {
    const {navigation} = props;

    return <MyNavScreen
        banner={props.screenProps.myProps.NAME
            ? `${props.screenProps.myProps.NAME}'s Profile`
            : (
                `${navigation.state.params.mode === 'edit'
                    ? 'Now Editing '
                    : ''}${navigation.state.params.name}'s Profile`
            )
        }
        navigation={navigation}
        message={props.screenProps.myProps.MESSAGE}
    />
}

MyProfileScreen.navigationOptions = props => {
    const {navigation} = props
    const {state, setParams} = navigation
    const {params} = state
    return {
        headerTitle: params && params.name ? `${params.name}'s Profile!` : `${props.screenProps.myProps.NAME}'s Profile!`,
        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode.
        headerRight: (
            <Button
                title={params && params.mode === 'edit' ? 'Done' : 'Edit'}
                onPress={() =>
                    setParams({mode: params && params.mode === 'edit' ? '' : 'edit'})}
            />
        ),
    }
}

export default MyProfileScreen