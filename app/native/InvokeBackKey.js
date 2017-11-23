import {NativeModules} from 'react-native'

const native = NativeModules.InvokeBackKey

export default {

    back: () => {
        return native.back()
    }
}