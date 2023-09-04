import { useSelector,useDispatch } from "react-redux"
import { instance } from "../../App"
import s from './Header.module.css'



export const Header = ()=>{

    const dispatch = useDispatch()
    const state = useSelector((state) => state.countries)
    const text = useSelector((state) => state.text)

    const reg = ['Africa' , 'Europe' , 'Asia' , 'Oceania' , 'Americas']


    const getRegion = (reg)=>{
        instance.get(`/region/${reg}`)
        .then((res) => dispatch({type : 'get_countries' , payload :  res.data}))
    }
    const all = ()=>{
        instance.get('/all')
        .then((res) => dispatch({type : 'get_countries', payload : res.data}))
    }
    return(
        <div className={s.menu}>
                     <button className={s.reg} onClick={() => all()}>ALL</button>
                {
                    reg.map((r) => <button key={r.id} className={s.reg} onClick= { () => getRegion(r)} >{r}</button>)
                }

            <div>
                <input placeholder="Search"
                value={text}
                onChange={(e) => dispatch({type: 'get_text', payload : e.target.value})}/>
            </div>
        </div>
    )
}