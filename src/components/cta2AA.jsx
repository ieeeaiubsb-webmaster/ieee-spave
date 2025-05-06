export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-green-700 to-green-400">
      <div className="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Boost your productivity.</span>
          <span className="block text-green-900">
            Start using our app today.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-cyan-100">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-50 py-3 px-5 text-base font-medium text-green-700 hover:bg-green-200 sm:w-auto"
        >
          Sign up for free
        </a>
      </div>
    </div>
  );
}
