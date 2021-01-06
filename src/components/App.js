import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component{
    state = {images: [] };
    onSearchSubmit= async term =>{
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }
    render(){
        return (
        <div className="ui container" style={{ marginTop: '20px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images} id={this.state.images.id} urls={this.state.images.urls}/>
        </div>
        );
    }
}
export default App;