import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';


class compsGitHub extends React.Component {
  state = {
    comps: []
  }

handleClick = event =>{
	this.getListComponents();
}

 async getListComponents(){

  		axios.get('https://kctbh9vrtdwd.statuspage.io/api/v2/components.json')
  		.then(res => {

  			const comps = res.data.components;
  			this.setState({comps});
  		})
  		.catch(() => {
  			console.log('Houve um erro!');
  		})
  	}

  componentDidMount(){
  	this.getListComponents();
  }


//
  render() {
  	return(
  		<div>
  			<h1>GitHub Status</h1>
	        { this.state.comps.map(comp => 
	        	<div className='_1WX-ZNh1u_6_qUFuQYrWF' key={comp.id}> 
					{comp.name} | { comp.status == 'operational' ? 'Funcionando' : 'Fora do ar'} 
	        	</div>	
	        )}

	        <button onClick={this.handleClick}>Atualizar</button>
      	</div>
    	)
  	}
}


export default compsGitHub;