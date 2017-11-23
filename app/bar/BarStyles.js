import R from '../assets/R'

const BarStyles = {

    white: {
        backgroundColor: R.color.white,
        titleColor: R.color.font_black,
        titleSize: 18,
        backSrc: R.img.arrow_back,
        line: true,
        lineColor: R.color.gray_line
    },
    black: {
        backgroundColor: R.color.black,
        titleColor: R.color.white,
        titleSize: 16,
        backSrc: R.img.action_white_back,
        line: true,
        lineColor: R.color.transparent
    },
    transparent: {
        backgroundColor: R.color.transparent,
        titleColor: R.color.white,
        titleSize: 16,
        backSrc: R.img.action_white_back,
        line: false,
        lineColor: R.color.transparent
    },

    get: (name) => {
        return BarStyles[name] || BarStyles['white']
    },
}

export default BarStyles