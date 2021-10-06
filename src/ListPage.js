import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPlayers } from './fetch-utils'

export default class ListPage extends Component {
    
    state = {
        chessplayers: []
    }

    componentDidMount = async() => {
        const players = await getPlayers()
        this.setState({chessplayers: players})
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
