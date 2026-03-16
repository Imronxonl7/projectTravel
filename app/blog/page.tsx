import BlogCards from '@/components/BlogCards'
import getData from '@/utils/api'
import Image from 'next/image'
import { Category } from '@/types/Category'

const BlogPage = async () => {
  const categories: Category[] = await getData({ url: "category" })

  // Categorylardan iconlarni alohida array qilib chiqaramiz
  const images = categories.map((cat) => cat.icon)

  return (
    <div className='w-full'>
      <div className='relative w-full h-96 overflow-hidden'>
        <Image
          src='https://www.healthpartners.com/content/dam/brand-identity/photography/stock/lifestyle/family/getty1137373368-2000x666.jpg'
          alt='Blog Background'
          fill
          className='object-cover object-center'
          priority
        />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,#1d1d1d,rgba(0,0,0,0)_100%)] z-10' />
        <div className='relative z-20 flex items-center justify-center h-full'>
          <p className='text-[50px] font-bold text-white'>Our Blog</p>
        </div>
      </div>
      <BlogCards categories={categories} images={images} />
    </div>
  )
}

export default BlogPage