import './style.css'

export default function Button(props){
    return <button className={props.variante}>{props.text}</button>
}
