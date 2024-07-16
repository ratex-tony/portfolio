import { NetworkId } from '@sonarwatch/portfolio-core';
import { airdropStatics } from './constants';
import {
  AirdropFetcher,
  AirdropFetcherExecutor,
  getAirdropRaw,
} from '../../AirdropFetcher';

const fetchAirdropExecutor: AirdropFetcherExecutor = async () => {
  throw new Error('myerror sanctum happened');
  return getAirdropRaw({
    statics: airdropStatics,
    items: [
      {
        amount: 0,
        isClaimed: false,
        label: 'CLOUD',
      },
    ],
  });
};
const airdropFetcher: AirdropFetcher = {
  id: airdropStatics.id,
  networkId: NetworkId.solana,
  executor: fetchAirdropExecutor,
};

export default airdropFetcher;