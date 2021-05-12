const AddPokemon = () => {
    return (
        <form className= 'Add-form'>
            <div className= 'form-control'>
                <label>Pokemon Name</label>
                <input type='text' placeholder= 'Add Pokemon name'/>
            </div>
            <div className= 'form-control'>
                <label>Number</label>
                <input type='text' placeholder= 'Add Pokemon number'/>
            </div>
            <div className= 'form-control'>
                <label>Pokemon type</label>
                <input type='text' placeholder= 'Add Pokemon type'/>
            </div>
        </form>
    )
}

export default AddPokemon