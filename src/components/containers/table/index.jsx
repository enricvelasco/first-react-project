import SearchInput from "../../ui/searchInput"

function Table (){
    const onBusqueda = (value) =>{
        console.log('pepito', value)
    }

    return (
        <>
            <div>Search people</div>
            <SearchInput onSearch={(param)=>onBusqueda(param)}/>
        </>
        
    )
}

export default Table