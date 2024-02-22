import React, { Component } from 'react'
import { connect } from 'react-redux'
//import * as actions from './storeModel/actionCreater'

interface Props {
}
interface State {
}
class Thumbnail extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <div className='component-Thumbnail'>

            </div>
        )
    }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Thumbnail);