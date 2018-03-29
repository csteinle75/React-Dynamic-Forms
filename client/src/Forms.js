import React, { Component } from 'react'

//styles
import 'font-awesome/css/font-awesome.min.css'
import './Forms.css'

class Field extends Component{
	render(){
		if(this.props.data.type === 'select'){
			return(
				<div className="posRel">
					<select onChange={this.props.inputChange} id={this.props.data.id}>
						<option value="SelectLang">Select Language</option>
						{this.props.data.options.map((option, i) => (
							<option value={option.value} key={'langOpt-' + i}>{option.label}</option>
							))}
					</select>
				</div>
			)
		}

		if(this.props.data.type === 'textarea'){
			return(
				<div className="posRel">
					<i className={'fa ' + this.props.data.icon + ' icons'} ></i>
					<textarea onChange={this.props.inputChange} id={this.props.data.id} placeholder="Your Comments" ></textarea>
				</div>
			)
		}

		//default action
		return(
			<div className="posRel">
				<i className={'fa ' + this.props.data.icon + ' icons'}></i>
				<input onChange={this.props.inputChange} type={this.props.data.type} id={this.props.data.id} placeholder={this.props.data.label} />		
			</div>
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
						<button onClick={this.handleSubmit} id="submitForm"><i className="fa fa-user"></i> Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Forms