import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "red",
      newColorName: "",
    };
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  handleColorChange = (color) => {
    this.setState({ currentColor: color.hex });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = () => {
    let newColor = {
      name: this.state.newColorName,
      color: this.state.currentColor,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  };
  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.handleColorChange}
        />

        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            label="Color Name"
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "this field is required",
              "Name already in use",
              "Color  already in use",
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor,
            }}
          >
            {paletteIsFull ? "Palette is full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
export default ColorPickerForm;
