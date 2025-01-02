// ######################### ULS COMPONENT ######################### //
import './css/Uls-css.css'

export default function Uls({array, row}){
    if(row === true){
        array = array.slice().reverse()
        return(
            <ul className="row">
            {array.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        )
    }

    return(
        <div className="ul-div">
        {array.map((ul, ulindex) => (
            <ul key={ulindex} className="column">
            {ul.map((item, index) =>(
                index === 0 ? (
                <h3 key={index}>{item}</h3>
                ) : (
                <li key={index}>{item}</li>
                )
            ))}
            </ul>
        ))}
        </div>
    )
    }
