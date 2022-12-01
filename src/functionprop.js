


p(){

v>
{
    <PropsExample framework="Angularjs"year="2002"</PropsExample>
    <PropsExample framework="Reactjs"year="2003"</PropsExample>
    <PropsExample framework="Vuejsjs"year="2004"</PropsExample>
}
}

function FuncPropExample(props){
    console.log(props)
    return{
        <div>
        <p>{props.framework}</p>
        <p>{props.number}</p>
        </div>
    }
}
export default FunPropExample