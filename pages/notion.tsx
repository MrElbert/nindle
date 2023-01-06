import Link from "next/link"

// create a react component styled with tailwind css that centers the text on the left side of the screen
const Notion = () => {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 py-28">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        What is a Notion database?
      </h1>
      <p className="pt-6 text-gray-600 dark:text-gray-400 mb-8">
        A Notion database is a type of digital database that can be used to organize, store, and manage various types of information. Notion is a flexible and versatile tool that can be used for a wide range of purposes, including task management, project planning, knowledge management, and more.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        <Link className="text-blue-500" href="/">Try it out for yourself!</Link>
      </p>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white pt-12">
        Why use Nindle?
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        In the context of Nindle, a Notion database is a digital database that is used to store and manage the user&apos;s Kindle highlights. Nindle is an app that syncs the user&apos;s Kindle highlights with a Notion database, allowing them to access and organize their highlights in a single, centralized location.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        <Link className="text-blue-500" href="https://youtu.be/LkVeFpL3FPU">Watch this tutorial!</Link>
      </p>
    </div>
  )
}

export default Notion