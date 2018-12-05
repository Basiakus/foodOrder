import React from 'react';

class AddForm extends React.Component {

	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	imageRef = React.createRef();
	descRef = React.createRef();

	createDish = (e) => {
		e.preventDefault();
		const dish = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value),
			status: this.statusRef.current.value,
			image: this.imageRef.current.value,
			desc: this.descRef.current.value
		}
		this.props.addDish(dish);
		e.currentTarget.reset();
	}

	render() {
		return (
			<form 
				className="addForm" 
				onSubmit={this.createDish}
			>
				<div className="inputs">
					<input ref={this.nameRef} name="name" type="text" placeholder="Nazwa" required></input>
					<input ref={this.priceRef} name="price" type="number" min="0" placeholder="zł Cena" required></input>
					<select ref={this.statusRef} name="status">
						<option value="available">dostępne</option>
						<option value="unavailable">brak</option>
					</select>
				</div>
				<input ref={this.imageRef} name="image" type="text" placeholder="zdjęcie"></input>
				<textarea ref={this.descRef} name="desc" type="text" placeholder="opis" />
				<input type="submit" value="+ dodaj danie"></input>
				<button onClick={this.props.uploadSamples}>pobierz menu</button>
			</form>
		);
	}

}

export default AddForm;