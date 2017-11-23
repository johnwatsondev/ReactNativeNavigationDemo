import {NativeModules} from 'react-native'

const native = NativeModules.InvokeJumpToApp

export default {
    navigateToActivityD: () => {
        return native.navigateToActivityD()
    }
}