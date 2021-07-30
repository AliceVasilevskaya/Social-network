import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    onStatusChange = (e) => {
        this.setState(
            { status: e.currentTarget.value}
        )}
    render() {
        return <div>
            {!this.state.editMode &&
            <div onDoubleClick={this.activateEditMode}>
                <span>{this.props.status || '---'}</span>
            </div>
            }

            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
            </div>
            }

        </div>
    }
}

export default ProfileStatus