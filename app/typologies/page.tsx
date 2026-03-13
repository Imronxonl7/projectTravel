import TypologiesTourCards from "@/components/TypologiesTourCards"
import getData from "@/utils/api"
import Image from "next/image"

 const TypologiesPage = async() => {
  const typologies = await getData({ url: "category" })

  return (
    <div className='w-full'>

      <div className='relative w-full h-96 overflow-hidden'>
        <Image
          src='https://www.irishexaminer.com/cms_media/module_img/8956/4478389_3_org_iStock-1137373430.jpg'
          alt='Footer Background'
          fill
          className='object-cover scale-x-[-1] object-center'
          priority
        />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,#1d1d1d,rgba(0,0,0,0)_100%)] z-10' />
        <div className='relative z-20 flex items-center justify-center h-full'>
          <p className='text-[50px] font-bold text-white'>Typologies</p>
        </div>
      </div>

      {/* Cards - hero dan TASHQARIDA */}
      <TypologiesTourCards typologies={typologies} />
    </div>
  )
}
export default TypologiesPage
