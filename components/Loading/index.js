import React from 'react';
import styles from './Loading.scss';
export class Loading extends React.Component {
    state = {
        showLoading: false,
    };

    componentDidMount() {
        this.timer = setTimeout(() => this.setState({showLoading: true}), this.props.delay);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            this.state.showLoading && (
                <div className={styles['loading']}>
                    <div className={styles['loading__spinner']}>
                        <div />
                        <div />
                        <div />
                    </div>
                    <h2>Načítám...</h2>
                </div>
            )
        );
    }
}

export default Loading;
