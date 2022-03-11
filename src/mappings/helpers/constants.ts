import { BigDecimal, BigInt, Address, dataSource } from '@graphprotocol/graph-ts';

export let ZERO = BigInt.fromI32(0);
export let ZERO_BD = BigDecimal.fromString('0');
export let ONE_BD = BigDecimal.fromString('1');
export const SWAP_IN = 0;
export const SWAP_OUT = 1;

export let ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export class AddressByNetwork {
  public avalanche: string;
  public dev: string;
}

let network: string = dataSource.network();

let vaultAddressByNetwork: AddressByNetwork = {
  avalanche: '0x83e04C35BC67dba37Aa296EA5f37984f648f691B',
  dev: '0xa0B05b20e511B1612E908dFCeE0E407E22B76028',
};

let wethAddressByNetwork: AddressByNetwork = {
  avalanche: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
  dev: '0x4CDDb3505Cf09ee0Fa0877061eB654839959B9cd',
};

let wbtcAddressByNetwork: AddressByNetwork = {
  avalanche: '0x50b7545627a5162F82A992c33b87aDc75187B218',
  dev: '0xcD80986f08d776CE41698c47f705CDc99dDBfB0A',
};

let usdAddressByNetwork: AddressByNetwork = {
  avalanche: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', // USDC
  dev: '0x1528f3fcc26d13f7079325fb78d9442607781c8c',
};

let usdcAddressByNetwork: AddressByNetwork = {
  avalanche: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
  dev: '0x7c0c5AdA758cf764EcD6bAC05b63b2482f90bBB2',
};

let usdtAddressByNetwork: AddressByNetwork = {
  avalanche: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
  dev: '0x7c0c5AdA758cf764EcD6bAC05b63b2482f90bBB2',
};

let balAddressByNetwork: AddressByNetwork = {
  avalanche: '0x0000000000000000000000000000000000000000',
  dev: '0xf702269193081364E355f862f2CFbFCdC5DB738C',
};

let daiAddressByNetwork: AddressByNetwork = {
  avalanche: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
  dev: '0x5C0E66606eAbEC1df45E2ADd26C5DF8C0895a397',
};

let altDaiAddressByNetwork: AddressByNetwork = {
  avalanche: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
};

let altUsdcAddressByNetwork: AddressByNetwork = {
  avalanche: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
};

let altUsdtAddressByNetwork: AddressByNetwork = {
  avalanche: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
};

let linearDaiAddressByNetwork: AddressByNetwork = {
  avalanche: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
};

let linearUsdcAddressByNetwork: AddressByNetwork = {
  avalanche: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
};

let linearUsdtAddressByNetwork: AddressByNetwork = {
  avalanche: '0x0000000000000000000000000000000000000000',
  dev: '0x0000000000000000000000000000000000000000',
};

function forNetwork(addressByNetwork: AddressByNetwork, network: string): Address {
  if (network == 'avalanche') {
    return Address.fromString(addressByNetwork.avalanche);
  } else {
    return Address.fromString(addressByNetwork.dev);
  }
}

export let VAULT_ADDRESS = forNetwork(vaultAddressByNetwork, network);
export let WETH: Address = forNetwork(wethAddressByNetwork, network);
export let WBTC: Address = forNetwork(wbtcAddressByNetwork, network);
export let USD: Address = forNetwork(usdAddressByNetwork, network);
export let USDC: Address = forNetwork(usdcAddressByNetwork, network);
export let USDT: Address = forNetwork(usdtAddressByNetwork, network);
export let BAL: Address = forNetwork(balAddressByNetwork, network);
export let DAI: Address = forNetwork(daiAddressByNetwork, network);

let ALT_DAI = forNetwork(altDaiAddressByNetwork, network);
let ALT_USDC = forNetwork(altUsdcAddressByNetwork, network);
let ALT_USDT = forNetwork(altUsdtAddressByNetwork, network);
let LINEAR_DAI = forNetwork(linearDaiAddressByNetwork, network);
let LINEAR_USDC = forNetwork(linearUsdcAddressByNetwork, network);
let LINEAR_USDT = forNetwork(linearUsdtAddressByNetwork, network);

export let PRICING_ASSETS: Address[] = [
  WETH,
  WBTC,
  USDC,
  DAI,
  USDT,
  BAL,
  ALT_DAI,
  ALT_USDC,
  ALT_USDT,
  LINEAR_DAI,
  LINEAR_USDC,
  LINEAR_USDT,
];
export let USD_STABLE_ASSETS: Address[] = [USDC, DAI, USDT, ALT_DAI, ALT_USDC, ALT_USDT];
