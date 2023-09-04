import { useSelector } from "react-redux";
import s from './Main.module.css'
import { Link } from "react-router-dom";
export const Main = ({setInfo})=>{
  const state = useSelector((state)=> state.countries)

  const click = (e)=>{
    setInfo(e)
  }
    return(
        <div className={s.table}>
            {
                state.map((e)=>{
                 return   <div onClick={()=> click(e)} className={s.card}  key={e.id}>
                    <Link  to={`/Info/${e.name.common}`}>
                      <img src={e.flags.png} alt="" />
                      </Link>
                        <h3>{e.name.common}</h3>
                    </div>
                })
            }
        </div>
    )
}