import React, { Component } from 'react'

import './Forms.css'

class Field extends Component{
	render(){
		if(this.props.data.type === 'select'){
			return(
				<select id={this.props.data.id}>
					<option value="SelectLang">Select Language</option>
					{this.props.data.options.map(option => (
						<option value={option.value} key={'opt-' + option.value}>{option.label}</option>
						))}
				</select>
			)
		}

		if(this.props.data.type === 'textarea'){
			return(
				<textarea id={this.props.data.id}>
				</textarea>
			)
		}

		//default action
		return(
			<input type={this.props.data.type} id={this.props.data.id} placeholder={this.props.data.label} />		
		)

	}
}

class Forms extends Component{

	handleSubmit = (e) =>{
		e.preventDefault()
		console.log('submitted form')
	}

	render(){
		console.log(this.props.fields)
		return(
			<div id="reactForm">
				<h3>Give Me Your Data</h3>
				<form id="formContainer">
					{this.props.fields.map(field => <Field data={field} key={'field-' + field.id}/>)}
					<button onClick={this.handleSubmit}>Submit</button>
				</form>
			</div>
		)
	}
}

export default Forms