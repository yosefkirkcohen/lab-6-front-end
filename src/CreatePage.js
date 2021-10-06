import React, { Component } from 'react'
import request from 'superagent'

export default class CreatePage extends Component {
    state = {
        name: '',
        rating: '',
        worldchampion: 'true',
        image: '',
        country: '',
        category_id: '1'
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await request
                .post('https://lab-06b.herokuapp.com/chessplayers')
                .send({
                    name: this.state.name,
                    rating: this.state.rating,
                    worldchampion: this.state.worldchampion,
                    image: this.state.image,
                    country: this.state.country,
                    category_id: this.state.category_id
                })
                this.props.history.push('/');
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleRatingChange = e => this.setState({rating: e.target.value})
                        
    // handleImageChange = e => this.setState({image: e.target.value})

    handleWorldChampion = e => {this.setState({worldchampion: e.target.value})}

    handleCountryChange = e => this.setState({country: e.target.value})

    handleCategory = e => this.setState({category_id: e.target.value})

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='create'>
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
                    {/* <label>
                        Put in the image name
                        <input onChange={this.handleImageChange} value={this.state.image}/>
                    </label> */}
                    <label>
                        Country
                        <input onChange={this.handleCountryChange} value={this.state.country}/>
                    </label>
                    <label>
                        Category 
                        <select onChange={this.handleCategory} value={this.state.category_id}>
                            <option value='1'>Grandmaster</option>
                            <option value='2'>International Master</option>
                            <option value='3'>FIDE Master</option>
                            <option value='4'>National Master</option>
                        </select>
                    </label>
                    <button className='create-button' disabled={ this.state.rating === '' || this.state.name === ''}>Submit</button>
                </form>
            </div>
        )
    }
}
