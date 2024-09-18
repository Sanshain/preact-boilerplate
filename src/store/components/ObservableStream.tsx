import React from 'react';

export const ObservableStream = (observable, triggers, initialState) => Component => {
    return class extends React.Component {
        
        subscription: any; // unknown

        constructor(props) {
            super(props);

            this.state = {
                ...initialState,
            };
        }        

        componentDidMount() {
            this.subscription = observable.subscribe(newState =>
                this.setState({ ...newState }),
            );
        }

        componentWillUnmount() {
            this.subscription.unsubscribe();
        }

        render() {
            return (
                <Component {...this.props} {...this.state} {...triggers} />
            );
        }
    };
};