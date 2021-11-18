import './style.css';

const SearchInput = () =>{
    const handleChange = (event) =>{
        console.log(event.target.value)
    }
    
    return (
        <div>
            {/*<input type="search" onChange={(event)=>handleChange(event)}/>*/}
            <input className={'searcher'} type="search" onChange={handleChange}/>
            <button className={'button-search'}>Search</button>
        </div>
    )
}

export default SearchInput