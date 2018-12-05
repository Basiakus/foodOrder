import React from 'react';
import { formatPrice } from '../helpers.js';
import PropTypes from 'prop-types';


class Dish extends React.Component {

	static propTypes = {
		details: PropTypes.shape({
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			desc: PropTypes.string.isRequired,
			status: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired
		}),
		index: PropTypes.string.isRequired,
		addToOrder: PropTypes.func.isRequired
	}

	handleClick = () => {
		this.props.addToOrder(this.props.index);
	}

	render() {
		const  {name, image, desc, price, status} = this.props.details;
		return (
			<li className="dish">
				<img src={image} alt={name} />
				<div className="info">
					<h4>
						{name}
						<span>{formatPrice(price)}</span>
					</h4>
					<p>{desc}</p>
					<button 
						className={status === "unavailable" ? "unavailable" : ""}
						onClick={this.handleClick}
					>
						{status === "available"?"zamów":"wyprzedano"}
					</button>
				</div>
			</li> 
		);
	}
}

export default Dish;