import minimist from "minimist"
import { coinFlips, countFlips } from "./modules/coin.mjs"

const args = minimist(process.argv.slice(2))
if (args.number == null) { args.number = 1 }

let record = coinFlips(args.number)

if (args.number <= 1) {
    let data = countFlips(record)
    if (data.heads == 1) {
        console.log("['" + "heads" + "']")
        console.log("{heads: " + data.heads + "}")
    } else {
        console.log("['" + "tails" + "']")
        console.log("{tails: " + data.tails + "}")
    }
} else {
    console.log(record)
    console.log(countFlips(record))
}