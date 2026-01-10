import { BlogPosts } from 'app/components/posts'
import Newsletter from 'app/components/Newsletter'
export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter text-orange-500 dark:text-orange-600">
        Learn to navigate the world
      </h1>
      <p className="text-sm">
        Learning Artificial Intelligence to find the link between mind and the world. 
        This section shows the learning progress in different fields to answer certain 
        questions that won't leave my mind. Perhaps evolving into some study, perhaps 
        destined to be lost forever. Who knows.
      </p>
      <br></br>
      <BlogPosts />
      <Newsletter />
    </section>
  )
}
