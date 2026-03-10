import getData from '@/utils/api'
import React from 'react'
import PackageCard from './PackageCards';

const DestinationCard = async () => {

  const packages = await getData({ url: "package" });
  console.log(packages);


  return (
    <div>
      <PackageCard />
    </div>
  )
}

export default DestinationCard
