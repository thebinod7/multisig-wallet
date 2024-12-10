"use client";

import React from "react";
import { useAccount } from "wagmi";

export default function CurrentAccount() {
  const { isConnected, address } = useAccount();

  return (
    <div>
      {isConnected ? (
        <div>
          <p>
            Connected Account: <strong>{address}</strong>
          </p>
        </div>
      ) : (
        <div>
          <p>Connect your account to view your current account.</p>
        </div>
      )}
    </div>
  );
}
