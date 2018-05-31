import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button,InputGroup,InputGroupAddon,Form } from 'reactstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTodo = ({ dispatch }) => {
  let input

  return (
	<div>
		<Form onSubmit={e => {
			e.preventDefault();
			if(!input.value.trim()){
				return
			}
			dispatch(addTodo(input.value))
			input.value = ''
		}}>
			<InputGroup>
				<input ref={node => input = node} placeholder="Enter words" className="form-control"/>
				<InputGroupAddon addonType="append">
					<Button color = 'success' type="submit">
						<span>ADD</span>
					</Button>
				</InputGroupAddon>
			</InputGroup>
		</Form>
	</div>
  )
}

export default connect()(AddTodo)
