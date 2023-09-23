import markdownToHTML from "@/mypackage"

export default async function Home() {
  const html = await markdownToHTML("# Hello, Neptune!")
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
