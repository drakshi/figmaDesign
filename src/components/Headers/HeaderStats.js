import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle=" revenue"
                  statTitle="$2,129"
                  statIconName="fas fa-camera-retro"
                  statbgColor="bg-revenue"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Users"
                  statTitle="$2,129"
                  statIconName="fas fa-tags"
                  statbgColor="bg-transaction"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Likes"
                  statTitle="$2,129"
                  statIconName="fas fa-thumbs-up"
                  statbgColor="bg-likes"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle=" Users"
                  statTitle="$2,129"
                  statIconName="fas fa-users"
                  statbgColor="bg-users"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
