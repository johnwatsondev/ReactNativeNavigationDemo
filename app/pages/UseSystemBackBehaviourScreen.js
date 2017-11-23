import React from 'react'
import {Button} from 'react-native'
import {SafeAreaView} from 'react-navigation'

import ActionBar from '../bar/ActionBar'
import SampleText from '../widget/SampleText'
import InvokeBackKey from '../native/InvokeBackKey'

const UseSystemBackBehaviourScreen = ({navigation}) => (
    <SafeAreaView>
        <SampleText>{'Click back key in header to return previous native activity'}</SampleText>
        <Button
            onPress={() => navigation.goBack('Home')}
            title="Jump to Home Screen and pop other Screens above in navigation stack"
        />
        <SampleText>{'If your navigation stack didn\'t have Home Screen, it will go back to previous Screen.'}</SampleText>
    </SafeAreaView>
)

UseSystemBackBehaviourScreen.navigationOptions = props => {
    const {navigation, screenProps} = props

    let sysBack = false
    if (navigation.state.params && typeof navigation.state.params.sysBack !== 'undefined') {
        sysBack = navigation.state.params.sysBack
    }
    return {
        title: 'Photos',
        header: <ActionBar
            nav={navigation}
            screenProps={screenProps}
            data={{
                title: '返回上一个 Native 界面',
                sysBack,
            }}
        />,
        backPressedListener: () => {
            console.log('UseSystemBackBehaviourScreen physical back key pressed event listener invoked...')
            InvokeBackKey.back()
            return true;
        }
    }
}

export default UseSystemBackBehaviourScreen