import React from 'react';

class Searchbar extends React.Component {

    state = {term: ''};
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    handleInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" value={this.state.term} onChange={this.handleInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;