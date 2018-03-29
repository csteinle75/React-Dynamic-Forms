import React, { Component } from 'react'

import './Forms.css'

class Field extends Component{
	render(){
		if(this.props.data.type === 'select'){
			return(
				<select onChange={this.props.inputChange} id={this.props.data.id}>
					<option value="SelectLang">Select Language</option>
					{this.props.data.options.map((option, i) => (
						<option value={option.value} key={'langOpt-' + i}>{option.label}</option>
						))}
				</select>
			)
		}

		if(this.props.data.type === 'textarea'){
			return(
				<textarea onChange={this.props.inputChange} id={this.props.data.id} placeholder="Your Comments" ></textarea>
			)
		}

		//default action
		return(
			<input onChange={this.props.inputChange} type={this.props.data.type} id={this.props.data.id} placeholder={this.props.data.label} />		
		)

	}
}

class Forms extends Component{
	state = {}

	handleChange = (e) =>{
		e.preventDefault()
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault()
		console.log(this.state)
	}

	render(){
		return(
			<div id="reactForm">
				<div id="subContainer">
					<h3 id="formHeader">Give Me Your Data</h3>
					<form id="formContainer">
						{this.props.fields.map((field, i) => <Field data={field} key={'field-' + i} inputChange={this.handleChange}/>)}
						<button onClick={this.handleSubmit} id="submitForm">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Forms