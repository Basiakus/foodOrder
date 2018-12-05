import React from 'react';
import PropTypes from 'prop-types';

class EditDish extends React.Component {

	static propTypes = {
		dish: PropTypes.shape({
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			desc: PropTypes.string.isRequired,
			status: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired
		}),
		index: PropTypes.string.isRequired,
		deleteDish: PropTypes.func.isRequired
	}

	render() {
		return (
			<div className="editDish">
				<div className="inputs">
					<input name="name" onChange={this.handleChange} value={this.props.dish.name} type="text" ></input>
					<input name="price" onChange={this.handleChange} value={this.props.dish.price} type="number" min="0" placeholder="cena / groszy" ></input>
					<select name="status" onChange={this.handleChange} value={this.props.dish.status}> 
						<option value="available">dostępne</option>
						<option value="unavailable">brak</option>
					</select>
				</div>
				<input name="image" onChange={this.handleChange} value={this.props.dish.image} type="text" placeholder="zdjęcie"></input>
				<textarea  name="desc" onChange={this.handleChange} value={this.props.dish.desc} type="text" placeholder="opis" />
				<button onClick={()=>{this.props.deleteDish(this.props.index)}}>usuń danie</button>

			</div>
		);
	}
	handleChange = e => {
		const updateDish = {
			...this.props.dish,
			[e.target.name]: e.target.value
		}
		this.props.updateDish(this.props.index, updateDish);
	};

}

export default EditDish;