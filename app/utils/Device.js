import React from 'react'
import {Dimensions, Platform} from 'react-native'
import {px} from './Px2dp'

export default {

  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,

  statusBarPx: Platform.OS === 'ios' ? 44 : 48,

  withStatusBar: (height) => {
    return px(height) + (Platform.OS === 'ios' ? px(20) : px(0))
  },
}