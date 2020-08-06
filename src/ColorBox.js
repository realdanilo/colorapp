import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }
    render() {
        const { name, background } = this.props
        let { copied } = this.state
        return (
            <div style={{ backgroundColor: background }} className="ColorBox">
                <div style={{ backgroundColor: background }} className={`copy-overlay ${copied && "show"} `}></div>
                <div className={`copy-message ${copied && "show"} `}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                        <button className="copy-button">Copy</button>
                    </CopyToClipboard>

                </div>
                <span className="see-more">More</span>
            </div>

        )
    }
}

export default ColorBox