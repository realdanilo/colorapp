import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
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
                <div className="slider">
                    <Slider className="slider-nav" defaultValue={slider} min={100} max={900} onAfterChange={this.changeSlider} step={100} />

                </div>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer */}
            </div>
        )
    }
}

export default Palette