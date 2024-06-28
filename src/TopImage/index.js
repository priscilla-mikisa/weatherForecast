

const Above = ({icon, temp, nameOfPlace, region, country, localTime,condition,day}) => {
    return(
        <div>
            <div>
                <img src={icon} alt={curStatus}/>
                <h2>{temp}</h2>
                <h2>{nameOfPlace} {region} {country}</h2>
                
            </div>
            <div>
                <h2>{localTime}</h2>
                <h2>{condition} {day}</h2>
            </div>
        </div>
    )
}
export default Above;