import React from 'react';
import AddForm from './AddForm';
import EditDish from './EditDish';
import PropTypes from 'prop-types';


class Inventory extends React.Component {

	static propTypes = {
		dish: PropTypes.object.isRequired,
		deleteDish: PropTypes.func.isRequired,
		updateDish: PropTypes.func.isRequired
	}

	render() {
		return (
			<div className="inventory">
				<h2>Kreator Dań</h2> 
				<AddForm addDish={this.props.addDish} uploadSamples={this.props.uploadSamples}/>
				{Object.keys(this.props.dish).map( key => <EditDish 
																index={key} 
																key={key} 
																dish={this.props.dish[key]} 
																updateDish={this.props.updateDish} 
																deleteDish={this.props.deleteDish}
															/>
				)}
			</div>
		);
	}
}

export default Inventory;