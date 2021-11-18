import { useState } from 'react';
import './style.css';

const SearchInput = () =>{
    const [value, setValue] = useState('')

    const handleChange = (event) =>{
        console.log(event.target.value)
        setValue(event.target.value)
    }

    const handleClick = () =>{
        console.log('valor a retornar', value)
    }
    
    return (
        <div>
            {/*<input type="search" onChange={(event)=>handleChange(event)}/>*/}
            <input className={'searcher'} type="search" onChange={handleChange} value={value}/>
            <button className={'button-search'} onClick={handleClick}>Search</button>
            <div>{value}</div>
        </div>
    )
}

export default SearchInput