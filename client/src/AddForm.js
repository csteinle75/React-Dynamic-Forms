import React, { Component } from 'react'


class AddForm extends Component {
	state = {
			type: '',
			label: '',
			id: '',
			icon: '',
			options: []
		}

	render(){
		console.log('Check that spelling!')
		return(
			<div>
				<h3>Add a field to the form - unfinished</h3>
				<form>
					<input type="text" placeholder="placeholder text"/>
					<button>Add Form</button>
				</form>
			</div>
		)
	}
}

export default AddForm