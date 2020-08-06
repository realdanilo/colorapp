import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorBox extends Component {
    render() {
        const { name, background } = this.props
        return (

            <div style={{ backgroundColor: background }} className="ColorBox">
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background}>
                        <button className="copy-button">Copy</button>
                    </CopyToClipboard>

                </div>
                <span className="see-more">More</span>
            </div>

        )
    }
}

export default ColorBox