
import React from "react"
class ClassComponent extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>
			    <p>Name:{this.props.name}</p>
			    <p>Age:{this.props.age}</p>
			</div>
		)
	}
}
export default ClassComponent








