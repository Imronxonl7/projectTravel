import React, { JSX } from 'react'
import getData from '@/utils/api'
import SingleDestinationPage from '@/components/SingleDestinationPage';

const DestinationSinglePage = async ({ params }: { params: Promise<{ SingleDestination: string }> }): Promise<JSX.Element> => {
    const { SingleDestination } = await params;

    const destinationData = await getData({ url: `destination/${SingleDestination}` })

    console.log(destinationData);

    if (!destinationData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-500 text-xl">Destination not found.</p>
            </div>
        )
    }

    return (
        <div>
            <SingleDestinationPage destinationData={destinationData} />
        </div>
    )
}

export default DestinationSinglePage;
