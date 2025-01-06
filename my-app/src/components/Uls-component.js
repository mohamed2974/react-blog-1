// ######################### ULS COMPONENT ######################### //

export default function Uls({array, row, style, listItemStyle}){
    if(row === true){
        array = array.slice().reverse()
        return(
            <ul className={`flex justify-between flex-row-reverse ${style}`}>
            {array.map((item, index) => (
                <li key={index} className={`capitalize ${listItemStyle}`}>{item}</li>
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
