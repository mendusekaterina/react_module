export default function SimpsonComponent(props){
    let {CharacterFirstPart, pic,altDesc,Desc}=props
    return(
        <div className="stylecard">
            <h5>{CharacterFirstPart}</h5>
            <img src={pic} alt={altDesc}/>
            <p>{Desc}</p>
        </div>
    )
}