import Link from "next/link"

const Amazon = () => {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 py-28">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Why is Nindle asking for my Amazon credentials?
      </h1>
      <p className="pt-6 text-gray-600 dark:text-gray-400 mb-8">
        The reason that Nindle asks for your Amazon user ID and password is that Amazon does not currently provide an OAuth 2.0 solution for accessing Kindle highlights. OAuth 2.0 is a widely used standard for secure authentication and authorization, and it allows users to grant third-party apps access to their information without having to share their login credentials.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        However, since Amazon does not offer an OAuth 2.0 solution for accessing Kindle highlights, we are currently unable to use this standard for authentication. As a result, we must ask for your Amazon user ID and password in order to access and sync your Kindle highlights with your Notion database.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        We understand that this may not be the most convenient or secure solution, and we are always looking for ways to improve our app and provide a better user experience. In the meantime, we want to assure you that we will handle your information with the utmost care and will never willingly use it for any purpose other than syncing your Kindle highlights with your Notion database. Thank you again for using Nindle, and please do not hesitate to contact us if you have any questions or concerns.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        <Link className="text-blue-500" href="/">Go back to home</Link>
      </p>
    </div>
  )
}

export default Amazon