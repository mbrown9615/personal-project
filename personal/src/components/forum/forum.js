import React from 'react';
import './forum.css';
import Nav from '../nav/nav';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/user';
// import { getThreads } from '../../ducks/threads';
import Modal from './modal/modal';

class Forum extends React.Component {
    constructor() {
        super();

        this.state = {
            input: "",
            hidden: true,

            open: false,

            none:{
                height: "0px"
            }
        }

    }

    componentDidMount() {
        this.props.getUserInfo();
        // this.props.getThreads();
    }

    handleChange(event) {
        this.setState({
            input: event
        })
    }

    openModal = () => {
        this.setState({
            open: true
        })
    }

    closeModal = () => {
        this.setState({
            open: false
        })
    }



    render() {
        const { open } = this.state;

        // const threads = this.props.threads;

        return (
            <div className="forum-main">
                <Nav />
                <div className="panel">

                    <button onClick={() => this.openModal()} className="create-topic">Create Thread</button>

                </div>

                {/* <Modal style={this.state.none} close={this.closeModal}/> */}

                <div className="forum">
                    {/* {threads} */}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ user, threads }) {
    return { user, threads }
}

export default connect(mapStateToProps, { getUserInfo
    // , getThreads 
})(Forum);