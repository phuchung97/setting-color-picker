import React, { Component } from 'react';

class Result extends Component {

    setStyle = () => {
        return{
            color: this.props.color,
            fontSize: this.props.fontSize,
            border: this.props.color

        }
    }

    render() {
        return (

            <div className="col-12 ">
                <div className="card">
                    <div className="card-header bg-default">Color: {this.props.color}  - Fontsize: {this.props.fontSize} </div>
                    <div style={this.setStyle()} >
                        <p >Setting text color</p>
                    </div>

                </div>
            </div>

        );
    }
}

export default Result;