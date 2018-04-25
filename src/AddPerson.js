import React from 'react'
import Goop from './Goop'


const AddPerson = (props) => {
    let {match} = props
    let {path} = match
    const addHandler = (e) =>{
        e.preventDefault()
        console.log("AddPerson.addHandler()......")
        props.history.push("/")

    }

    return (
        <div>
            <h1>Add Person</h1>
            <form onSubmit={(e) => {
                addHandler(e)
            }}>
                <h3>props: {JSON.stringify(props)}</h3>
                <h3>path: {JSON.stringify(path)}</h3>
                <button type="submit" id="addBtn" className="addButton" >Add</button>
            </form>

            <Goop />
        </div>
    )
}

export default AddPerson