"use client";

import type { NextPage } from "next";

const BlockExplorer: NextPage = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        <div className="text-center mt-8 bg-secondary p-10">
          <h1 className="text-4xl my-0">Block Explorer</h1>
          <p className="text-neutral">
            Blockchain functionality is temporarily disabled.
            <br />
            This feature will be available in a future update.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockExplorer;
