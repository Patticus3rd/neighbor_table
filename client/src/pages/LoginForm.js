import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin } from '../redux/actions/userAction';

class LoginForm extends Component {
    // componentWillMount() {
    //     if (this.props.user !== null) {
    //         // console.log(this.props.history);
    //         this.props.history.push('/');
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div style={{ marginTop: '-20px' }}>
                        <h1>NeighborTable Login</h1>
                        <h2>
                            Login With Google
                        </h2>
                    </div>

                    <div>
                        <button onClick={this.props.googleLogin}>
                            Login with Google
                        </button>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, onwProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { googleLogin })(LoginForm);