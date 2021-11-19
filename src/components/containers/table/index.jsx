import { useState } from 'react';
import Buscador from "../../ui/searchInput"
import {urlPeopleBase} from '../../../config/endpoints.js'
import {getData} from '../../../config/api.js'
import './styles.css';


function Table (){
    const [list, setList] = useState([]);
    console.log('LIST', list)

    const onBusqueda = (value) =>{
        console.log('pepito', value)
        getData(urlPeopleBase, value)
        .then(res => {
            setList(res)
            console.log('LIST', res)
        })
    }

    return (
        <>
            <div>Search people</div>
            <Buscador onSearch={(param)=>onBusqueda(param)}/>
            <ul className={'list'}>
                <div className={'list-header'}>
                    <p>Name</p>
                    <p>Gender</p>
                    <p>Birth Year</p>
                    <p>Eye Color</p>
                    <p></p>
                </div>
                {list.map((item, key)=>{
                    console.log(item);
                    return(
                        <li className={'item'} key={key}>{item.name}</li>
                    )
                })}
            </ul>
        </>
        
    )
}

export default Table