import react, { useState } from 'react';

function Handleform() {
    const [name, setname] = useState("");
    const [movie, setmovie] = useState("");
    const [check, setcheck] = useState(false);

    function getformdata(e) {
        e.preventDefault()
        console.log(name, movie, check)
    }
    return (
        <>
            <form onSubmit={getformdata}>
                Name:
<input type="text" onChange={(e) => {
                    setname(e.target.value);
                    console.log(e.target.value)
                }} />
                <select onChange={(e) => { setmovie(e.target.value) }}>
                    <option>Select Options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select>
                <input type="checkbox" onChange={(e) => { setcheck(e.target.checked) }} /><span>Do you agree to terms and conditions</span>
                <input type="submit" />
            </form>
        </>
    )
}
export { Handleform };