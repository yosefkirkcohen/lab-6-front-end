import React, { Component } from 'react'
import request from 'superagent'

export default class CreatePage extends Component {
    state = {
        name: '',
        rating: '',
        worldchampion: '',
        image: '',
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleRatingChange = e => this.setState({rating: e.target.value})

    render() {
        return (
            <div>
                <form>
                    <label>
                        Name
                        <input onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Rating
                        <input onChange={this.handleRatingChange}/>
                    </label>
                    <label>
                        World Champion?
                        <input type='radio' value='true'/>
                        <input type='radio' value='false'/>
                    </label>
                </form>
            </div>
        )
    }
}
