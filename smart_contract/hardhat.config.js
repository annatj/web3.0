//https://eth-sepolia.g.alchemy.com/v2/pR-65ON3760ic2toD-NW2N1OwNTXRWn5

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/pR-65ON3760ic2toD-NW2N1OwNTXRWn5',
      accounts: ['22a30ab2e1730c0633afcdeccf22df4f629d16b14cefd59dad91c4a38350b8a9']
    }
  }
}
