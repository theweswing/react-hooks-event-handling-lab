// Code EyesOnMe Component Here
function EyesOnMe(){
    function goodFocus(){
        console.log("Good!")
    }
    function heyBlur(){
        console.log("Hey! Eyes on me!")
    } 
    return (
        <button onFocus={goodFocus} onBlur={heyBlur}>Eyes on me</button>
    )
}

export default EyesOnMe