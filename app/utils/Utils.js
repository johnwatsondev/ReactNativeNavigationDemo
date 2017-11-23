const Utils = {

    isEmpty: (str) => {

        if (str == undefined) return true   //undefined or null

        if (typeof str === 'object')
            return str.length === 0

        return str === '' || str === 'null'
    },

    avoidNull: (obj) => {
        return obj ? obj : {}
    },

    avoidNullArray: (obj) => {
        return obj ? obj : []
    },

    nono: (obj, defaultValue) => {
        return obj ? obj : defaultValue
    }

}

export default Utils