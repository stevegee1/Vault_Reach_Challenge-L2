import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const interact = { ...stdlib.hasRandom };
interact.informTimeout = () => {
  console.log(`There was a timeout.`);
  process.exit(1);
};
const isAlice= await ask.ask(
  "Are you Alice?",
  ask.yesno
);
const who= isAlice? "Alice": "Bob"

console.log("Starting the vault...")

let acc= null
const createAcc= await ask.ask(
  "would you like to create account(This is Algo devnet)",
  ask.yesno
);
if(createAcc && isAlice){
  acc= await stdlib.newTestAccount(stdlib.parseCurrency(6000))
} else {
  acc= await stdlib.newTestAccount(stdlib.parseCurrency(10))

} 


let ctc = null
if(isAlice){
  ctc=acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));
const before = await getBalance();
console.log(`Your balance is ${before}`);


  interact.showTimer=(time)=>{
    console.log("The aggreement will be executed in the nearest future")
   console.log(parseInt(time),"seconds")
  }


if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to keep in the vault?`,
    stdlib.parseCurrency
  );
  interact.vaultMoney= ()=>{
    return amt
  }
  interact.deadline = parseInt(10)
  
} else {
  interact.acceptVault = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the terms with the vault money: ${fmt(amt)}?`,
      ask.yesno
    );
    if (accepted) {
      return true;
    } else {
      process.exit(0)
    }
  };
}
if(isAlice){
  const choice = await ask.ask(
    "Alice, are you still here?",
    ask.yesno
  )
  if(choice){
  interact.chooseChoice=()=>{
   return(choice )
  }
  } else{
    interact.chooseChoice=()=>{
      return(choice )
     }
  }
}
const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);

ask.done();