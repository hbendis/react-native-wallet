import { FEE_LEVELS, BTC_NETWORKS } from '../../btcService';

export const DEFAULT_FEE_LEVEL = FEE_LEVELS.NORMAL;

export const DEFAULT_NETWORK = __DEV__ ? BTC_NETWORKS.TEST_NET : BTC_NETWORKS.LIVE_NET;

export const feeLevelOptions = [
  { label: 'Urgent', value: FEE_LEVELS.URGENT },
  { label: 'Priority', value: FEE_LEVELS.PRIORITY },
  { label: 'Normal', value: FEE_LEVELS.NORMAL },
  { label: 'Economy', value: FEE_LEVELS.ECONOMY },
  { label: 'Super Economy', value: FEE_LEVELS.SUPER_ECONOMY },
];

export const networkOptions = [
  { label: 'Testnet', value: BTC_NETWORKS.TEST_NET },
  { label: 'Livenet', value: BTC_NETWORKS.LIVE_NET },
];

export const apiCallIds = {
  CREATE_WALLET: 'CREATE_WALLET',
  SEND_TRANSACTION: 'SEND_TRANSACTION',
  GENERATE_ADDRESS: 'GENERATE_ADDRESS',
  GET_BALANCE: 'GET_BALANCE',
  GET_ADDRESSES: 'GET_ADDRESSES',
  GET_TX_HISTORY: 'GET_TX_HISTORY',
  EXPORT_WALLET: 'EXPORT_WALLET',
  IMPORT_WALLET: 'IMPORT_WALLET',
};
