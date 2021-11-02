// Code Keypad Component Here
function Keypad(){
    function logInput(){
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={logInput}></input>
    )
}

export default Keypad