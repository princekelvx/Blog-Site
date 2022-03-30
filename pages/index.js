import Head from 'next/head'
import { PostCard, Categories, PostWidget } from "../components"
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections"

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto px-2 lg:px-10 mb-8">
      <Head>
        <title>Juice Blog</title>
        <link type="image/png" sizes="64x64" rel="icon" href="/blog.png"></link>
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index}/>
          ))}
        </div>
       
        <div className='lg:col-span-4 col-span-1'>
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Home
export const getServerSideProps = async() => {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
