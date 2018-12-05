import React from 'react';
import {formatPrice} from '../helpers.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';


class Order extends React.Component {

	static propTypes = {
		removeFromOrder: PropTypes.func.isRequired

	}

	renderOrder = order => {
		const dish = this.props.dish[order];
		const count = this.props.order[order];
		const isAvailable = dish && dish.status === "available";
		
		if(!dish) return null;
		if(!isAvailable) {
			return (
				<CSSTransition classNames="order" key={order} timeout={{enter: 500, exit: 500}}>
					<li key={order} className='disable'>
						<span>{dish?dish.name:'danie'}</span> 
						nie jest dostępne
					</li>
				</CSSTransition>	
			)
		}
		return (
			<CSSTransition classNames="order" key={order} timeout={{enter: 500, exit: 500}}>
				<li key={order} index={order}>
					<span className='count'>
						<TransitionGroup component="span" className="counter">
							<CSSTransition classNames="counter" key={count} timeout={{enter: 300, exit: 300}}>
								<span>{count}</span>
							</CSSTransition>
						</TransitionGroup>x
						<span className='name'>
							{dish.name}
							<span className='delete' onClick={()=>{this.props.removeFromOrder(order)}}> usuń</span>
						</span>
					</span> 
					<span className='price'>
						{formatPrice(dish.price)}
					</span>
				</li>
			</CSSTransition>
		)
	}

	render() {
		const orders = Object.keys(this.props.order);
		const globalPrice = orders
		.reduce((prev, key) => {
			const dish = this.props.dish[key];
			const count = this.props.order[key];
			const isAvailable = dish && dish.status === "available";
			if(isAvailable) {
				return prev + count * dish.price;
			}
			return prev;
		}, 0);
		
		return (
			<div className="order">
				<h2>Zamówienie</h2>
				<TransitionGroup component="ul" className='orderList'>
					{orders.map(this.renderOrder)}
				</TransitionGroup>
				<span className="globalPrice">{formatPrice(globalPrice)}</span> 
			</div>
		);
	}
}

export default Order;