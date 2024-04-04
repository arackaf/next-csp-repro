"use client";

import { FC, useState } from "react";

export const ShowInitialNonce: FC<{ nonce: string }> = props => {
  const [nonceVal] = useState(props.nonce);
  return <div>Original Nonce: {nonceVal}</div>;
};
