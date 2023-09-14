
export function MenuItem( {imgPath, name, description, price}) {

    return(
        <>
        <div>
            <image src={imgPath} alt={name} width={100} height={100}/>
            {description}
            {price}
        </div>
        
        </>
    )

}