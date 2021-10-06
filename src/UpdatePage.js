import React, { Component } from 'react'
import { deletePlayer, editPlayer, getCategories, getPlayer } from './fetch-utils'

export default class UpdatePage extends Component {

    state = {
        id: '',
        name: '',
        country: '',
        rating: '',
        image: '',
        worldchampion: true,
        category_id: 1,
        categories: [],
        
    }
    componentDidMount = async () => {
        const categories = await getCategories();
        const player = await getPlayer(this.props.match.params.id);
        
        console.log(player)

        this.setState({
            categories: categories,
            id: player.id,
            name: player.name,
            country: player.country,
            rating: player.rating,
            image: player.image,
            worldchampion: player.worldchampion,
            category_id: player.category_id
            
        }) 
        console.log(this.state)
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleRatingChange = e => this.setState({rating: e.target.value})
                        
    handleImageChange = e => this.setState({image: e.target.value})

    handleWorldChampion = e => {this.setState({worldchampion: e.target.value})}

    handleCategoryChange = e => this.setState({category_id: e.target.value})

    deleteAndRoute = async () => {
        await deletePlayer(this.props.match.params.id)
        this.props.history.push('/')
    }

    handleSubmit = async e => {
        e.preventDefault();
        await editPlayer(this.props.match.params.id, this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div >
                UPDATE THE PLAYER
                <form onSubmit={this.handleSubmit} className='update'>
                    <label>
                        Name
                        <input onChange={this.handleNameChange} value ={this.state.name}/>
                    </label>
                    <label>
                        Rating
                        <input type='number' onChange={this.handleRatingChange} value={this.state.rating}/>
                    </label>
                    <label>
                        World Champion? 
                        <select onChange={this.handleWorldChampion} value={this.state.worldchampion}>
                            <option>true</option>
                            <option>false</option>
                        </select>
                    </label>
                    <label>
                        Put in the image name
                        <input onChange={this.handleImageChange} value={this.state.image}/>
                    </label>
                    <label>
                        Category
                        <select onChange= {this.handleCategoryChange}>
                            {this.state.categories.map((category => {
                                return <option key={category.id} value={category.id}>
                                    {category.category}
                                       </option>
                            }))}
                        </select>
                    </label>
                    <button className='update-button' disabled={ this.state.rating === '' || this.state.name === ''}>UPDATE THIS GUY</button>
                </form>
                <button className='delete-button' onClick={() => this.deleteAndRoute()}  >DELETE THIS MF</button>
            </div>
        )
    }
}
