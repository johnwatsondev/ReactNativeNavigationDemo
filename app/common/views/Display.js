import React, {Component} from 'react'

function ifDisplay(view, visible) {
    return visible ? view : null
}

/**
 * 包裹视图可见性控制
 */
class Display extends Component {

    /**
     * 属性说明
     *
     * 基本参数
     *
     * visible :boolean 是否可见
     *
     */
    static defaultProps: {
        visible: true
    }

    render() {
        return (
            ifDisplay(this.props.children, this.props.visible)
        )
    }
}

export default Display