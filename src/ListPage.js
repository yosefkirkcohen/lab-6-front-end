import React, { Component } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

export default class ListPage extends Component {
    
    state = {
        chessplayers: []
    }

    componentDidMount = async() => {
        const response = await request.get('https://lab-06b.herokuapp.com/chessplayers')
        this.setState({chessplayers: response.body})
    }
    
    render() {
        return (
            <div>
                {this.state.chessplayers.map(player => <Link to={`edit/${player.id}`} key={player.id} ><div>
                    Name: {player.name} <br/>
                    Country: {player.country} <br/>
                    Rating: {player.rating} <br/>
                    Is world champion? {player.worldchampion ? 'yes' : 'no'} <br/>
                    Category: {player.category} <br/>
                    <img src={`${player.image}`} alt='person'/> <br/>
                    <br/> <br/> 
                </div></Link>)}
                
            </div>
        )
    }
}
