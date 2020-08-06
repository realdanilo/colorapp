import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
class Navbar extends Component {
    render() {
        const { slider, changeSlider } = this.props
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
                    <p>Right</p>
                </div>

            </nav>
        )
    }
}
export default Navbar