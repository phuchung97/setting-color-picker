import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state={
            colors:["red", "blue", "green", "#ccc"]
        }
    }
    colorPicker = (color) => {
        return{
            backgroundColor: color
        }
    }
    onRecieveColor = (color) => {
        this.props.onRecieveColor(color)
    }

    render() {

        var elmColor = this.state.colors.map((color, index) => {
            return  <span
                        key={index}
                        style={this.colorPicker(color)}
                        className={this.props.color === color ? "active" : ""}
                        onClick={() => this.onRecieveColor(color)}

                    ></span>
        })
   
        return (
            <div className="col-6 ">
                <div className="card hei-200">
                    <div className="card-header bg-primary">Color Picker</div>
                    <div className="card-body">
                        {elmColor}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;