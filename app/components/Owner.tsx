import React from "react";

interface OwnerProps {
  walletAddress: string;
  id: number;
}

export default function Owner({ id, walletAddress }: OwnerProps) {
  return (
    <div className="flex items-center gap-4 mt-2">
      <img className="w-10 h-10 rounded-full" src="/images/binod.jpeg" alt="" />
      <div className="font-medium dark:text-white">
        <div className="text-gray-500">Owner {id}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {walletAddress.slice(0, 4)}....{walletAddress.slice(-4)}
        </div>
      </div>
    </div>
  );
}
