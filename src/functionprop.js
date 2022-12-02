import { render } from "@testing-library/react"


function FuncPropExample(props){
    render()
    console.log(this.props)
    return{
        <div>
        <p>{props.framework}</p>
        <p>{props.year}</p>
        </div>
    }
}
export default FunPropExample