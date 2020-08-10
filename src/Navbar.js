import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            format: 'hex'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ format: e.target.value }, () => this.props.handleFormat(this.state.format))

    }
    render() {
        const { slider, changeSlider } = this.props
        const { format } = this.state
        return (
            <nav className="Navbar">
                <div className="left-navbar">
                    <div className="logo">
                        <a href="#">React Color Picker</a>
                    </div>
                    <div className="slider">
                        <span>Level {slider}</span>
                        <Slider className="slider-nav" defaultValue={slider} min={100} max={900} onAfterChange={changeSlider} step={100} />

                    </div>
                </div>
                <div className="right-navbar">
                    <Select onChange={this.handleChange} value={format}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
                    </Select>
                </div>

            </nav>
        )
    }
}
export default Navbar