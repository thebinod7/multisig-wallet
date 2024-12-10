import {
  createPublicClient,
  createWalletClient,
  custom,
  getContract,
  Hex,
  http,
  publicActions,
} from "viem";
import { baseSepolia } from "viem/chains";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants";

interface IContract {
  address: Hex;
}

export const createReadContract = ({ address }: IContract) => {
  const client = createWalletClient({
    account: address,
    chain: baseSepolia,
    transport: http(process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL),
  }).extend(publicActions);

  const contract = getContract({
    address: CONTRACT_ADDRESS as Hex,
    client,
    abi: CONTRACT_ABI,
  });
  return contract;
};

// TODO: Support more than Metamask
export const createWriteContract = ({ address }: IContract) => {
  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  });
  const client = createWalletClient({
    account: address,
    chain: baseSepolia,
    transport: custom(window.ethereum!),
  });

  const contract = getContract({
    address: CONTRACT_ADDRESS as Hex,
    client: {
      wallet: client,
      public: publicClient,
    },
    abi: CONTRACT_ABI,
  });
  return contract;
};
