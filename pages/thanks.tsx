import Link from "next/link"

const Thanks = () => {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 py-28">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
       🥳🎉
      </h1>
      <p className="pt-6 text-gray-600 dark:text-gray-400 mb-8">
        Thank you for using Nindle! We are glad that our app is able to help you manage and organize your Kindle highlights in a convenient and effective way.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        As a reminder, Nindle will automatically sync your Kindle highlights every day, so you can always have the latest and most up-to-date information available in your Notion database. We hope that this feature will make it even easier for you to access and use your highlights in a way that is most useful and relevant to you.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Once again, thank you for using Nindle. We value your feedback and appreciate your support. If you have any suggestions or ideas for how we can improve our app, please don&apos;t hesitate to let us know. We are constantly working to make Nindle the best it can be, and we are grateful to have users like you who help us to do that. Have a great day!
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        <Link className="text-blue-500" href="/">Back to home!</Link>
      </p>
    </div>
  )
}

export default Thanks