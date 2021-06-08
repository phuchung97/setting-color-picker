import React, { Component } from 'react';

class Reset extends Component {
    resetDefault = () => {
        this.props.onResetDefault(true)
    }
    render() {
        return (

                <div className="col-12 mt-3 mgl-52 ">
                <button type="button" className="btn btn-primary bt-fix" onClick={() => this.resetDefault()}>Reset</button>
            </div>
        );
    }
}

export default Reset;