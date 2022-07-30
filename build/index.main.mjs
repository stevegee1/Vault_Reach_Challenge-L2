// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  
  
  const v62 = stdlib.protect(ctc0, interact.vaultMoney, 'for Alice\'s interact field vaultMoney');
  
  const v65 = stdlib.protect(ctc1, await interact.boolReturn(), {
    at: './index.rsh:26:55:application',
    fs: ['at ./index.rsh:24:9:application call to [unknown function] (defined at: ./index.rsh:24:12:function exp)'],
    msg: 'boolReturn',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v62, v65],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [v62, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v67, v68], secs: v70, time: v69, didSend: v31, from: v66 } = txn1;
      
      sim_r.txns.push({
        amt: v67,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v67, v68], secs: v70, time: v69, didSend: v31, from: v66 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v77, time: v76, didSend: v40, from: v75 } = txn2;
  const v79 = stdlib.add(v67, v67);
  ;
  ;
  stdlib.protect(ctc2, await interact.showTimer(stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '10')), {
    at: './index.rsh:40:23:application',
    fs: ['at ./index.rsh:39:7:application call to [unknown function] (defined at: ./index.rsh:39:16:function exp)'],
    msg: 'showTimer',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v67, v68], secs: v70, time: v69, didSend: v31, from: v66 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptVault(v67), {
    at: './index.rsh:32:25:application',
    fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:12:function exp)'],
    msg: 'acceptVault',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v67],
    evt_cnt: 0,
    funcNum: 1,
    lct: v69,
    onlyIf: true,
    out_tys: [],
    pay: [v67, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v77, time: v76, didSend: v40, from: v75 } = txn2;
      
      const v79 = stdlib.add(v67, v67);
      sim_r.txns.push({
        amt: v67,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v75,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v77, time: v76, didSend: v40, from: v75 } = txn2;
  const v79 = stdlib.add(v67, v67);
  ;
  ;
  stdlib.protect(ctc2, await interact.showTimer(stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '10')), {
    at: './index.rsh:40:23:application',
    fs: ['at ./index.rsh:39:7:application call to [unknown function] (defined at: ./index.rsh:39:16:function exp)'],
    msg: 'showTimer',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQEMKGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAPCMSRCM0ARJENARJIhJMNAISEUQpZEk1Axc1/4AEmouRdLA0/4gA1bEisgE0/0kIsggjshAxALIHs0IAUkiBoI0GiAC4IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/VwgBFzX+gAR/9YLwNP8WUDT+FlEHCFCwNP+IAIM0/xYpSwFXAAhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 8,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v68",
                "type": "bool"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v68",
                "type": "bool"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610761380380610761833981016040819052610022916101dd565b60008055436003556040805133815282516020808301919091528084015180518385015201511515606082015290517f2fbd261e209972b4f2c71dc3a4d7abb6c394221d99c98cee9b70fb6cc561e7fa9181900360800190a160208101515161008e90341460076100e5565b60408051602080820183526000808352848201515180845260019182905543909155835191820152909101604051602081830303815290604052600290805190602001906100dd92919061010e565b505050610283565b8161010a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461011a90610248565b90600052602060002090601f01602090048101928261013c5760008555610182565b82601f1061015557805160ff1916838001178555610182565b82800160010185558215610182579182015b82811115610182578251825591602001919060010190610167565b5061018e929150610192565b5090565b5b8082111561018e5760008155600101610193565b604080519081016001600160401b03811182821017156101d757634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101f057600080fd5b6101f86101a7565b835181526040601f198301121561020e57600080fd5b6102166101a7565b9150602084015182526040840151801515811461023257600080fd5b6020838101919091528101919091529392505050565b600181811c9082168061025c57607f821691505b6020821081141561027d57634e487b7160e01b600052602260045260246000fd5b50919050565b6104cf806102926000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b36600461033c565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610224565b604051610064929190610354565b6100c860016000541460096102c1565b6100e2813515806100db57506001548235145b600a6102c1565b6000808055600280546100f4906103b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103b1565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103e6565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101b8929190610436565b60405180910390a180516101cf90341460086102c1565b805133906108fc906101e19080610473565b6040518115909202916000818181858888f19350505050158015610209573d6000803e3d6000fd5b5060008080556001819055610220906002906102e6565b5050565b600060606000546002808054610239906103b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610265906103b1565b80156102b25780601f10610287576101008083540402835291602001916102b2565b820191906000526020600020905b81548152906001019060200180831161029557829003601f168201915b50505050509050915091509091565b816102205760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102f2906103b1565b6000825580601f10610302575050565b601f0160209004906000526020600020908101906103209190610323565b50565b5b808211156103385760008155600101610324565b5090565b60006040828403121561034e57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103885785810183015185820160600152820161036c565b8181111561039a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103c557607f821691505b6020821081141561034e57634e487b7160e01b600052602260045260246000fd5b6000602082840312156103f857600080fd5b6040516020810181811067ffffffffffffffff8211171561042957634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461046457600080fd5b80604085015250509392505050565b6000821982111561049457634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220e8637d66d5824c103a1fa854d570993a05ae785e64c34d5ff2c7aa29828dd28b64736f6c634300080c0033`,
  BytecodeLen: 1889,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:38:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
