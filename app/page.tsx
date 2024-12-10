"use client";
import react from "react";
import { useReadContract } from "wagmi";

import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./constants";
import Owner from "./components/Owner";
import Spinner from "./components/Spinner";
export default function Home() {
  const { data, isLoading }: any = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getOwners",
    args: [],
  });

  console.log({ isLoading });

  const handleCreateTxn = () => {};
  return (
    <main>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        Multisig Wallet
      </h1>

      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Enhance trust and safety with transactions requiring multiple
        approvals—perfect for collaborative ventures or safeguarding digital
        assets.
      </p>

      <hr />

      <div className="flex flex-row">
        <div className="basis-1/3">
          <div className="mt-5">
            <h3>Create Transaction</h3>
            <button
              onClick={handleCreateTxn}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create Txn
            </button>
          </div>

          <div>
            <h3>Confirm Transaction</h3>
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Confirm Txn
            </button>
          </div>

          <div>
            <h3>Execute Transaction</h3>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Execute Txn
            </button>
          </div>

          <div>
            <h3>Cancel Transaction</h3>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Cancel Txn
            </button>
          </div>
        </div>
        <div className="basis-auto">
          <div className="mt-5">
            <strong>Contract Owners:</strong>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {data?.map((owner: any, ind: number) => {
                  return <Owner key={ind} walletAddress={owner} id={ind + 1} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
