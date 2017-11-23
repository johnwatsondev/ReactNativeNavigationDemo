import React from 'react'
import {StyleSheet, Button} from 'react-native'
import {SafeAreaView} from 'react-navigation'

import SampleText from '../widget/SampleText'
import R from '../assets/R'

import InvokeJumpToApp from '../native/InvokeJumpToApp'
import InvokeBackKey from '../native/InvokeBackKey'

const MyNavScreen = ({navigation, banner, message}) => {
    return <SafeAreaView>
        <SampleText>{banner}</SampleText>
        {message ? <SampleText style={styles.sampleText}>{message}</SampleText> : null}
        <Button
            style={styles.btn}
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
            title="Go to a profile screen"
        />
        <Button
            style={styles.btn}
            onPress={() => navigation.navigate('Photos', {name: 'Jane'})}
            title="Go to a photos screen"
        />
        <Button
            style={styles.btn}
            onPress={() => InvokeJumpToApp.navigateToActivityD()}
            title="Go to a native activity D"
        />
        <Button
            style={styles.btn}
            onPress={() => navigation.navigate('UseSystemBackBehaviourScreen', {sysBack: true})}
            title="Go to UseSystemBackBehaviourScreen screen"
        />
        <Button style={styles.btn}
                onPress={() => {
                    if (!navigation.goBack(null)) {
                        InvokeBackKey.back()
                    }
                }}
                title="Go back"/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    // FIXME: 22/11/2017 no effect, why?
    btn: {
        marginVertical: 40
    },

    sampleText: {
        color: R.color.mainColor,
        fontSize: 24,
    }
})

export default MyNavScreen