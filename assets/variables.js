export const MAINNET = 'mainnet';
export const TESTNET = 'testnet';
export const NETWORK = process.env.APP_ENV === MAINNET ? MAINNET : TESTNET;
export const PURPOSE = process.env.APP_PURPOSE;
export const BASE_TITLE_NETWORK = NETWORK === MAINNET ? '' : 'Testnet ';
export const BASE_TITLE_END = ' — Minter';
export const BASE_TITLE = BASE_TITLE_NETWORK + 'Explorer' + BASE_TITLE_END;
export const BASE_DESCRIPTION = '';
export const COIN_NAME = NETWORK === MAINNET ? 'BIP' : 'MNT';
export const CHAIN_ID = NETWORK === MAINNET ? 1 : 2;
export const UNBOND_PERIOD = NETWORK === MAINNET ? 518400 : 518400;
export const MAINNET_WEB_URL = 'https://explorer.minter.network';
export const HISTORY_WEB_URL = 'https://v1-history.explorer.minter.network';
export const EXPLORER_API_URL = process.env.APP_EXPLORER_API_URL;
export const EXPLORER_RTM_URL = process.env.APP_EXPLORER_RTM_URL;
export const GATE_API_URL = process.env.APP_GATE_API_URL;
/**
 * @readonly
 * @enum {string}
 */
export const REWARD_CHART_TYPES = {
    MONTH: 'month',
    WEEK: 'week',
    DAY: 'day',
};
/**
 * @readonly
 * @enum {string}
 */
export const TAB_TYPES = {
    TX: 'tx',
    STAKE: 'stake',
    REWARD: 'reward',
    SLASH: 'slash',
};
/**
 * @readonly
 * @enum {string}
 */
export const TX_STATUS = {
    SUCCESS: 'success',
    FAILURE: 'failure',
};
