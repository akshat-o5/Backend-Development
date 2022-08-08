
// EXAMPLE OF COMMON JS MODULE
const simple = require('./module-second.mjs')

simple()





// EXAMPLE OF ECHMASCRIPT [ES6] MODULES
import {simple} from './module-second.mjs'

simple()





import { simple, simple2 } from "./module-second.mjs";

simple()
simple2()







import { simple, simple2 } from "./module-second.mjs"

simple()
simple2()






import * as a2 from "./module-second.mjs"

// console.log(a2)

console.log(a2.simple()) // RETURNS 45