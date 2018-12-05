import React, { Component } from 'react'
import MediaCard from '../MediaCard'

class DashBoard extends Component {
    render() {
        return(
            <div style = {{opacity:'0.8'}}>
                <MediaCard />
            </div>
        )
    }
}

export default DashBoard
