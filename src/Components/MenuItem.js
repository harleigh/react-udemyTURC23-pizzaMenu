
export function MenuItem( {imgPath, name, description, price, isSoldOut}) {
//className={`pizza ${isSoldOut ? "sold-out" : ""}`}
    return(
        <>
        <li className={`pizza ${isSoldOut? "sold-out":""}`} >
            <img src={imgPath} alt={name} width={100} height={100}/>
                <div>
                    {isSoldOut? <span style={{color: "red", fontSize:"x-small"}} >Currently Sold Out!</span>:""}
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                </div> 
        </li>
        </>
    )

}