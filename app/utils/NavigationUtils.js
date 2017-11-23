export default {
    sysBack: (navigation, screenProps) => {
        if (!navigation || !screenProps) return false
        if (navigation.state && navigation.state.params && navigation.state.params.sysBack) {
            return true
        }
        return screenProps.myProps && screenProps.myProps.SCREEN === navigation.state.routeName
    }
}