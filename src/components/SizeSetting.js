import React, { Component } from 'react';

class SizeSetting extends Component {

    changeSize = (value) => {
        this.props.onChangeSize(value)
    }

    render() {
        return (
            <div className="col-6 ">
                <div className="card hei-200">
                    <div className="card-header bg-primary">Size: {this.props.fontSize} </div>
                    <div className="card-body ">
                        <button type="button" className="btn btn-success bt-fix" onClick={() => this.changeSize(2)}>Up</button>
                        <button type="button" className="btn btn-success bt-fix" onClick={() => this.changeSize(-2)}>Down</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default SizeSetting;