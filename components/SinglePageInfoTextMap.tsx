import { Package } from '@/types/Package'

function SinglePageInfoTextMap({ packageData }: { packageData: Package }) {
    return (
        <div className='w-2/3 flex flex-col gap-6'>
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Enjoy the Adventure</h1>
                <p className="text-gray-500 mb-2">Are you looking for an adventure of a lifetime? Join us on an unforgettable journey through some of the
                    world&apos;s most stunning landscapes and cultural destinations. {packageData.description}</p>

            </div>
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Included / Excluded</h1>
                <div className='flex gap-10'>
                    <p className="text-gray-500 mb-6 flex flex-col">{packageData.includes.map((item: string) => (
                        <span className='flex items-center gap-1' key={item}>✔️<span>{item}</span></span>
                    ))}</p>
                    <p className="text-gray-700 leading-relaxed flex flex-col">{packageData.excludes.map((item: string) => (
                        <span className='flex items-center gap-1' key={item}>❌<span>{item}</span></span>
                    ))}</p>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Itinerary</h1>
                <p className="text-gray-500 mb-2">
                    We have carefully planned out each day to give you the best possible experience. From exploring historic
                    landmarks to tasting delicious local cuisine, each day is packed with adventure and excitement. Join us
                    as we take you on a journey through some of the most fascinating destinations in the world.
                </p>
                <div className='text-[18px]'>
                    {
                        packageData.itinerary
                    }
                </div>

            </div>
            
        </div>
    )
}

export default SinglePageInfoTextMap