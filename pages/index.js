import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Daily Kanye Quotes</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Daily Kanye Quotes</h1>
        <h2 className="mt-4 text-2xl">Built With:</h2>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            href="https://nextjs.org/"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Next.js</h3>
            <p className="mt-4 text-xl">The React Framework for Production</p>
          </a>

          <a
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            href="https://quirrel.dev/"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Quirrel</h3>
            <p className="mt-4 text-xl">Job Queueing for Serverless</p>
          </a>

          <a
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            href="https://www.twilio.com/"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Twilio </h3>
            <p className="mt-4 text-xl">
              Communication APIs for SMS, Voice, Video and Authentication
            </p>
          </a>

          <a
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            href="https://kanye.rest/"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Kanye.rest</h3>
            <p className="mt-4 text-xl">
              A free REST API for random Kanye West quotes
            </p>
          </a>
        </div>
        <a
          className="mt-6 cursor-pointer"
          href="https://github.com/anmolm96/daily-kanye-quirrel"
          target="_blank"
        >
          <i className="fa fa-github"></i>
        </a>
      </main>
    </div>
  );
}
