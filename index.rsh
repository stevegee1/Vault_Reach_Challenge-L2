'reach 0.1';

const countTimer= 10;

const SharedParticipants= {
 showTimer: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  //Alice is the owner of the fund (5000 native token)
  const A = Participant('Alice', {
    ...SharedParticipants,
    vaultMoney: UInt,
    boolReturn: Fun([], Bool) 
    
  });
  //Bob is the attacher
  const B = Participant('Bob', {
    ...SharedParticipants,
    acceptVault: Fun([UInt], Null),
    countTimer: Fun([],Null),
    
  });
  init();
  A.only(()=>{
    const fund= declassify(interact.vaultMoney);
    const boolReturned= declassify(interact.boolReturn());
  });
  A.publish(fund,boolReturned)
   .pay(fund);
  commit();
  B.only(()=>{
    interact.acceptVault(fund);
    
  });
  B.publish()
 
  commit();
  each([A,B],()=>{
    interact.showTimer(countTimer);
  })
  // write your program here
  exit();
});
