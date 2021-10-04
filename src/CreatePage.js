import React, { Component } from 'react'
import request from 'superagent'

export default class CreatePage extends Component {
    state = {
        name: '',
        rating: '',
        worldchampion: 'true',
        image: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await request
                .post('https://lab-06b.herokuapp.com/chessplayers')
                .send({
                    name: this.state.name,
                    rating: this.state.rating,
                    worldchampion: this.state.worldchampion,
                    image: this.state.image
                })
                this.props.history.push('/');
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleRatingChange = e => this.setState({rating: e.target.value})
                        
    handleImageChange = e => this.setState({image: e.target.value})

    handleWorldChampion = e => {this.setState({worldchampion: e.target.value})}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <button disabled={ this.state.rating === '' || this.state.name === ''}>Submit</button>
                </form>
            </div>
        )
    }
}
