import Link from "next/link"

// create a react component styled with tailwind css that centers the text on the left side of the screen
const About = () => {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 py-28">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        About Nindle
      </h1>
      <p className="pt-6 text-gray-600 dark:text-gray-400 mb-8">
        Nindle is a useful app because it allows users to easily access and organize their Kindle highlights in a single, centralized location. By syncing the highlights with a Notion database, users can search, filter, and categorize their highlights, making it easier to find and reference them later.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Additionally, using a database like Notion allows users to add their own notes and comments to the highlights, which can be useful for studying, writing, or sharing with others. This can help users to better understand and retain the information from the books they have read, and can provide a convenient way to access and share important ideas and insights from their reading.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Overall, Nindle&apos;s ability to sync Kindle highlights with a Notion database offers a number of useful features and benefits that can help users to better manage organize, and make use of their reading highlights.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        <Link className="text-blue-500" href="https://youtu.be/LkVeFpL3FPU">Try it out for yourself!</Link>
      </p>
    </div>
  )
}

export default About