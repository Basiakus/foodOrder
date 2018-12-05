import React from 'react';
import { getFullName } from '../helpers.js';


class Wellcome extends React.Component {

	myInput = React.createRef();

	goToStore = e => {
		e.preventDefault();
		console.log(this.myInput.current.value);
		const inputValue = this.myInput.current.value;
		this.props.history.push(`store/${inputValue}`);
	}

	render() {
		return (
			<div className="wellcome">
				<form onSubmit={this.goToStore}>
					<h2>Please enter a store</h2>
					<input 
						type="text" 
						ref={this.myInput} 
						required 
						placeholder="zyx"
						defaultValue={getFullName()}
					/>		
					<button type="submit">
						go to store <span>&#x27BE;</span>
					</button>
				</form>
			</div>		
		);
	}
}

export default Wellcome;