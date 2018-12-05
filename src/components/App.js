import React from "react";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import Menu from "./Menu.js";
import sampleDishes from '../sampleDishes.js';
import myBase from "../base.js";




class App extends React.Component {

	state = {
		dishes: {},
		order: {}
	}

	addDish = dish => {
		const dishes = { ...this.state.dishes };
		dishes[`dish${Date.now()}`] = dish;
		this.setState({
			dishes: dishes
		});
	}

	addToOrder = dish => {
		const order = {...this.state.order};
		order[dish] = order[dish] + 1 || 1;
		this.setState({
			order: order
		});
	}

	removeFromOrder = dish => {
		const order = {...this.state.order};
		delete order[dish];
		this.setState({
			order: order
		});
	}

	deleteDish = dish => {
		const dishes = {...this.state.dishes};
		dishes[dish] = null;
		this.setState({
		dishes: dishes
		});
	}

	updateDish = (dish, updateDish) => {
		const dishes = {...this.state.dishes};
		dishes[dish] = updateDish;
		this.setState({
			dishes: dishes
		});
	}

	uploadSamples = () => {
		this.setState({
			dishes: sampleDishes
		});
	}

	componentDidMount() {
		const localStorageRef = localStorage.getItem(`${this.props.match.params.storeId}`);
		if(localStorageRef) {
			this.setState({order: JSON.parse(localStorageRef)})
		};
		this.ref = myBase.syncState(`${this.props.match.params.storeId}/dishes`, {
			context: this,
			state: 'dishes'
		});
		console.log(localStorageRef);
	}

	componentWillUnmount() {
		myBase.removeBinding(this.ref);
	}

	componentDidUpdate() {
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	render() {
		return (
			<div className="app">
				<Menu 
					title="Dania na dziś"
					state={this.state}
					addToOrder={this.addToOrder}
				/>
				<Order 
					dish={this.state.dishes}
					order={this.state.order}
					removeFromOrder={this.removeFromOrder}
				/>
				<Inventory 
					order={this.state.order}
					dish={this.state.dishes}
					addDish={this.addDish} 
					uploadSamples={this.uploadSamples}
					updateDish={this.updateDish}
					deleteDish={this.deleteDish}
				/>
			</div>
		);
  	}
}

export default App;
