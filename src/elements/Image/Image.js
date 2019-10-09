import React, { Component } from 'react'
import './Image.scss';

export class Image extends Component {

    constructor() {
        super();
        this.state = { loaded: false };
    }

    //Peut-être bien que ça a fonctionné...
    componentWillReceiveProps(nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({ src: nextProps.src });
        }
    }

    render() {
        return (
            <>
                {this.state.loaded ? null :
                    <div
                        className="placeholder"
                    >
                        <div className="lds-circle">
                            <div></div>
                        </div>
                    </div>
                }
                <img
                    style={this.state.loaded ? {} : { opacity: 0 }}
                    src={this.props.src}
                    onLoad={() => this.setState({ loaded: true })}
                />  
            </>
        )
    }
}

export default Image