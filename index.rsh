'reach 0.1';

const countTimer= 10;

const SharedParticipants= {
 showTimer: Fun([UInt], Null),
 informTimeout: Fun([], Null)
}

export const main = Reach.App(() => {
  //Alice is the owner of the fund (5000 native token)
  const A = Participant('Alice', {
    ...hasRandom,
    ...SharedParticipants,
    vaultMoney: Fun([], UInt),
    chooseChoice: Fun([], Bool) ,
    deadline: UInt
    
  });
  //Bob is the attacher
  const B = Participant('Bob', {
    ...hasRandom,
    ...SharedParticipants,
    acceptVault: Fun([UInt], Bool),
    
    
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  A.only(()=>{
    const fund= declassify(interact.vaultMoney());
    const deadline= declassify(interact.deadline);
   
  });
  A.publish(fund,deadline)
   
   .pay(fund);
  
  commit();
  B.only(()=>{
   const terms= declassify(interact.acceptVault(fund));
    
  });
  B.publish(terms);
 
  commit();
  each([A,B],()=>{
    interact.showTimer(countTimer);
  })
  A.only(()=>{
    const choice= declassify(interact.chooseChoice());
  })
  A.publish(choice)
  if (choice){
    transfer(balance()).to(A);
  } else{
    transfer(balance()).to(B);
  }
  commit();
  // write your program here
  exit();
});
