import React from 'react';
import unsplash from '../api/unsplash';
import Searchbar from './Searchbar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { imageList: [] };

        onSearchSubmit = async (value)  => {
        const response = await unsplash.get('/search/photos', {
            params: { query: value, per_page: 30 }
        });

        this.setState({imageList: response.data.results})
    }

    render() {
        return(
            <div className="ui container">
                <Searchbar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.imageList}/>
            </div>
        );
    }
}

export default App;