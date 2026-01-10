import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter dark:text-neutral-800">
        Starting a company
      </h1>
      <p>The process of starting a company is a journey that requires a lot of planning, research, and execution. Here are some of the steps we are taking to start a company with my friends.</p>
      <BlogPosts />
    </section>
  )
}
