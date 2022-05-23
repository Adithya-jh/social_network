import React from 'react'
import Widgets from "../components/Widgets";
import { getProviders, getSession, useSession } from "next-auth/react";


function explore({ trendingResults, followResults, providers }) {
  return (
      <div>

          <div className="text-white">explore</div>
      
          <Widgets className="flex min-h-screen  max-w-[1500px] mx-auto"
          trendingResults={trendingResults}
          followResults={followResults}
        />
          
      </div>
  )
}

export default explore


export async function getServerSideProps(context) {
    const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
      (res) => res.json()
    );
    const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
      (res) => res.json()
    );
    const providers = await getProviders();
    const session = await getSession(context);
  
    return {
      props: {
        trendingResults,
        followResults,
        providers,
        session,
      },
    };
  }