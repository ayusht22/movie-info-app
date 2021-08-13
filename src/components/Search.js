import React from 'react'

function Search({input,SetInput}) {
    
    return (
        <div className="col col-sm-4 mr-4">
            <input className="form-control" value={input} onChange={(e)=>SetInput(e.target.value) }></input>
        </div>
    )
}

export default Search
