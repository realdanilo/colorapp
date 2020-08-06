import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'
class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slider: 500
        }
        this.changeSlider = this.changeSlider.bind(this)
    }
    changeSlider(newSlider) {
        this.setState({ slider: newSlider })
    }
    render() {
        const { colors } = this.props.palette
        const { slider } = this.state
        const colorBoxes = colors[slider].map((color, i) => <ColorBox key={i} background={color.hex} name={color.name} />)
        return (
            <div className="Palette">
                <Navbar className="navbar" slider={slider} changeSlider={this.changeSlider} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer */}
            </div>
        )
    }
}

export default Palette