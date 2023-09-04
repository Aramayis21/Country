import s from './Info.module.css'
import { Link } from 'react-router-dom'
export const Info = ({info})=>{
    return(
        <div className={s.info}>
            <Link style={{textDecoration:'none', backgroundColor:'blue',width:'100px', margin: 'auto',color:'white'}} to={`/`}>HOME</Link>
            <img src={info?.flags?.png} alt="" />
            <h2>{info?.name?.common}</h2>
            <h3>Time : {info?.timezones}</h3>
            <h4>Continent : {info?.continents}</h4>
        </div>
    )
} 