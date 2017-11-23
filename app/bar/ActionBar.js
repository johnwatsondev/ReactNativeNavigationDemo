import React, {Component} from 'react'
import {DeviceEventEmitter, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import BarStyles from './BarStyles'
import {px} from '../utils/Px2dp'
import Utils from '../utils/Utils'
import Device from '../utils/Device'
import BarEvent from './BarEvent'
import Display from '../common/views/Display'

import InvokeBackKey from '../native/InvokeBackKey'
import NavigationUtils from '../utils/NavigationUtils'

const PropTypes = require('prop-types');

class ActionBar extends Component {

    //设置必须属性的检测
    static propTypes = {
        nav: PropTypes.object.isRequired,
        screenProps: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props)
        this._initData()
    }

    /**
     * 初始化data
     * @private
     */
    _initData() {
        this.data = {
            title: '',
            hideBack: false,
            style: 'white',  //white|black|transparent
            actions: [], // [{icon: R.img.carrier_logo, event: BarEvent.MORE,}]
            sysBack: NavigationUtils.sysBack(this.props.nav, this.props.screenProps),
            ...this.props.data
        }
    }

    //@Override 重写方法
    componentWillReceiveProps(nextProps) {
        this.data = {
            ...this.data,
            sysBack: NavigationUtils.sysBack(nextProps.nav, nextProps.screenProps),
            ...nextProps.data
        }
    }

    //触发返回按钮
    _goBack() {
        console.log('back', this.data)
        if (this.data.sysBack) {
            InvokeBackKey.back()
        } else {
            this.props.nav.goBack()
        }
    }

    render() {
        const barStyle = BarStyles.get(this.data.style)

        return (
            <View style={[{backgroundColor: barStyle.backgroundColor}, styles.container, this.props.style]}>

                <View style={[styles.leftActions, {
                    position: 'absolute',
                    left: 0,
                }]}>
                    {
                        this._renderBackItem()
                    }
                </View>

                <Text style={{color: barStyle.titleColor, fontSize: barStyle.titleSize}}>
                    {this.data.title}
                </Text>

                <View style={[styles.rightActions, {
                    position: 'absolute', right: 0,
                }]}>
                    {
                        this._renderActionItem()
                    }
                </View>

                <Display visible={barStyle.line}>
                    <View style={{
                        position: 'absolute', bottom: 0,
                        height: px(0.5),
                        width: Device.width,
                        backgroundColor: barStyle.lineColor,
                    }}/>
                </Display>
            </View>
        )
    }

    /**
     * 渲染返回按钮
     */
    _renderBackItem() {
        const barStyle = BarStyles.get(this.data.style)
        return <Display visible={!this.data.hideBack}>
            <TouchableOpacity style={styles.iconPress}
                              onPress={() => {
                                  this._goBack()
                              }}>
                <Image style={{resizeMode: 'contain'}} source={barStyle.backSrc}/>
            </TouchableOpacity>
        </Display>
    }

    /**
     * 渲染右侧的布局
     */
    _renderActionItem() {
        let itemAry = []

        if (Utils.isEmpty(this.data.actions)) return itemAry

        console.log('_renderActionItem', this.data.actions)
        for (let i = 0; i < this.data.actions.length; i++) {
            let action = this.data.actions[i]
            itemAry.push(
                <TouchableOpacity key={i}
                                  style={[styles.iconPress]}
                                  onPress={() => {
                                      DeviceEventEmitter.emit(BarEvent.EVENT, action)
                                  }}>
                    <Image style={{resizeMode: 'contain', width: px(23), height: px(23)}} source={action.icon}/>
                </TouchableOpacity>
            )
        }
        return itemAry
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: Device.withStatusBar(0),
        flexDirection: 'row',     //row,column
        justifyContent: 'center', //主轴方向
        alignItems: 'center', //垂直主轴方向
        height: Device.withStatusBar(Device.statusBarPx),
    },

    iconPress: {
        padding: px(8),
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Device.withStatusBar(0),
    },

    leftActions: {
        paddingLeft: px(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    rightActions: {
        paddingRight: px(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})

export default ActionBar