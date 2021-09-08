export const ontologyExchangeContractSellOnt =
  "14972f644a4c43a9e097ee55968f877ce799754d";
export const ethereumExchangeContractSellOnt =
  "0x9aed75e6166ebad43223e3370706983bcd19772a";

export const users = {
  alice: {
    name: "alice",
    displayName: "Alice",
    ethAddress: "0xb0Cf03378907bAB550E97918bD2c286D6b4A36B1",
    ethPrivKey: "2b118472f020523d5cb1ef8d6efcbfff84445c44d71ddb21cc7430d667c1dc5b",
    ontAddress: "AMWU53JjEG1YeR8N2fwzPhDmadyFfGc4EW",
    ontAddressByteArray: "fa88f5244be19659bbd24477caeeacac7cbf781b",
    ontPrivKey:
      "ce0f13044308356acbe458b03bcf9977b7020c7b0804a2088d6eeea8a2165c01"
  },
  bob: {
    name: "bob",
    displayName: "Bob",
    ethAddress: "0xB1d8c225648641D30870c6b9A490020e1828E825",
    ethPrivKey: "3df07655552fc81200559af0f62df6665081909752dd1c49da7bdf3b6dbb02d8",
    // junior fringe moment drum aware cup pepper insane month subway gloom burger candy winter uncle climb online photo normal circle crop senior move speak
    ontAddress: "AP3tE7BrkGMdZiczBwzer6BKob71HqWEZX",
    ontAddressByteArray: "04f57cb174af1feb5d7a34197ea72621778c8988",
    ontPrivKey:
      "c138236a374c7da7375fd69c8317d737d7563e615dfba6331b797cc6103a5070"
  }
};

export const layoutPermissionsByUser = {
  alice: [
    {
      displayName: "Home",
      route: "/"
    },
    {
      displayName: "Create order",
      route: "/create-order"
    },
    {
      displayName: "Check order data",
      route: "/order-data"
    },
    {
      displayName: "Cancel and refund",
      route: "/refund"
    },
    {
      displayName: "Lock buyer address",
      route: "/lock-address"
    },
    {
      displayName: "Claim ETH",
      route: "/claim"
    }
  ],
  bob: [
    {
      displayName: "Home",
      route: "/"
    },
    {
      displayName: "Respond to order",
      route: "/respond-to-order"
    },
    {
      displayName: "Check order data",
      route: "/order-data"
    },
    {
      displayName: "Cancel and refund",
      route: "/refund"
    },
    {
      displayName: "Lock initiator address",
      route: "/lock-address"
    },
    {
      displayName: "Claim ONT",
      route: "/claim"
    }
  ]
};

export const ontNodeEndpoint = "http://polaris1.ont.io:20334";

export const notifyTimeout = 30000;

export const ethDecimals = 10 ** 18;
export const ethGasLimit = 2000000;
export const ethContractJsonInterface = [
  {
    constant: false,
    inputs: [
      {
        name: "hashlock",
        type: "bytes32"
      },
      {
        name: "secret",
        type: "string"
      }
    ],
    name: "claimEth",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "hashlock",
        type: "bytes32"
      }
    ],
    name: "refundEth",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "hashlock",
        type: "bytes32"
      }
    ],
    name: "respondToOrder",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "orderList",
    outputs: [
      {
        name: "initiatorAddress",
        type: "address"
      },
      {
        name: "buyerAddress",
        type: "address"
      },
      {
        name: "hashlock",
        type: "bytes32"
      },
      {
        name: "amountEthLocked",
        type: "uint256"
      },
      {
        name: "refundTimelock",
        type: "uint256"
      },
      {
        name: "claimTimelock",
        type: "uint256"
      },
      {
        name: "secret",
        type: "string"
      },
      {
        name: "status",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "hashlock",
        type: "bytes32"
      },
      {
        name: "initiatorAddress",
        type: "address"
      }
    ],
    name: "lockIntiatorAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];
