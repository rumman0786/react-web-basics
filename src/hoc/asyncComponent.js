import React, { Component } from 'react';

const asyncComponent = (lazyComponent) => {
    
    return class extends Component {

        state = {
            component: null
        };

        componentDidMount() {
            lazyComponent()
            .then(cmp => {
                this.setState({component: cmp.default});
            })
        }

        render() {
            const Comp = this.state.component;
                
            return (
                Comp ? <Comp {...this.props} /> : null
            );
        }
    }
}

export default asyncComponent;
