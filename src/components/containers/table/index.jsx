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
            <div className={'title-first-container'}>Search people</div>
            <Buscador onSearch={(param)=>onBusqueda(param)}/>
            <div className={'list-header'}>
                    <p>Name</p>
                    <p>Gender</p>
                    <p>Birth Year</p>
                    <p>Eye Color</p>
            </div>
            <div className={'list-container'}>
                <ul className={'list'}>
                    {list.map((item, key)=>{
                        console.log(item);
                        return(
                            <li className={'item'} key={key}>{item.name}</li>
                        )
                    })}
                </ul>
                <ul className={'list'}>
                    {list.map((item, key)=>{
                        console.log(item);
                        return(
                            <li className={'item'} key={key}>{item.gender}</li>
                        )
                    })}
                </ul>
                <ul className={'list'}>
                    {list.map((item, key)=>{
                        console.log(item);
                        return(
                            <li className={'item'} key={key}>{item.birth_year}</li>
                        )
                    })}
                </ul>
                <ul className={'list'}>
                    {list.map((item, key)=>{
                        console.log(item);
                        return(
                            <li className={'item'} key={key}>{item.eye_color}</li>
                        )
                    })}
                </ul>
                <ul className={'list'}>
                    {list.map((item, key)=>{
                        console.log(item);
                        return(
                            <li className={'item'} key={key}>button</li>
                        )
                    })}
                </ul>
                
            </div>
        </>
        
    )
}

export default Table