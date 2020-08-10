import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            format: 'hex',
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }
    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true }, () => {
            this.props.handleFormat(this.state.format)
            setTimeout(() => this.setState({ open: false }), 5000)
        })

    }
    closeSnackbar() {
        this.setState({ open: false })
    }
    render() {
        const { slider, changeSlider } = this.props
        const { format, open } = this.state
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
                    <Select onChange={this.handleFormatChange} value={format}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={open}
                    autoHideDuration={3000}
                    message={<span id="message-id">{`Format Changed to ${format.toUpperCase()}`}</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    action={[<IconButton onClick={this.closeSnackbar} key="close" aria-label="close"><CloseIcon /></IconButton>]}
                    onClose={this.closeSnackbar}
                />
            </nav>

        )
    }
}
export default Navbar