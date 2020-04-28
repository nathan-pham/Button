import React, {Component} from 'react'
import './App.css'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			count: JSON.parse(localStorage.getItem('count')) || 0
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		
		this.setState(prevState => {
			localStorage.setItem('count', prevState.count + 1 || 0)
			return {
				count: prevState.count + 1
			}
		})
	}
	render(){
		return(
			<main className="container">
				<h1 className="count">{this.state.count}</h1>
				<button onClick={this.handleClick}>CLICK</button>
			</main>
		)
	}
}

export default App

