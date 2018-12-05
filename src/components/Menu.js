import React from 'react';
import Dish from './Dish.js'
import PropTypes from 'prop-types';

class Menu extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		state: PropTypes.object.isRequired,
		addToOrder: PropTypes.func.isRequired
	}
	
	render() {
		return (
			<div className="menu">
				<h2>{this.props.title}</h2>
				<ul>
					{Object
						.keys(this.props.state.dishes)
						.map( dish => 
								<Dish 
									key={dish}
									index={dish} 
									details={this.props.state.dishes[dish]}
									addToOrder={this.props.addToOrder}
								/>
							)
					}
				</ul>
			</div> 
		);
	}
}


export default Menu;