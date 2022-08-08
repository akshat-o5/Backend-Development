
// EXAMPLE OF COMMON JS MODULE

function simple() {
    // console.log("simple")
    console.log("Simple is complex")
}

module.exports = simple






// EXAMPLE OF ECHMASCRIPT [ES6] MODULES
// THEY USE .mjs EXTENSTION
export function simple() {
    // console.log("simple")
    console.log("Simple is complex")
    return 45
}




// export  function simple2(){
//     console.log("Simple2 is complex")

// }




export default function simple2() {
    console.log("Simple2 is complex")

}