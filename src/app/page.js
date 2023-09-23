import Hero from "@/components/Hero"
import markdownToHTML from "@/mypackage"

export default async function Home() {
  const html = await markdownToHTML("# Hello, Neptune!")
  return (
    <>
      <Hero />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}
