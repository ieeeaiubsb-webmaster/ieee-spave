import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center"></div>
        <div className="py-16 mt-12">
          <div className="text-center">
            <p className="text-base font-semibold text-cyan-600"></p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <AuroraText>404</AuroraText> Not Found
            </h1>

            <div className="mt-28">
              <Link
                href="/"
                className="text-base font-medium text-black hover:text-fuchsia-500"
              >
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
