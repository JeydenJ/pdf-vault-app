import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen items-center justify-center p-8 gap-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="max-w-xl w-full flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-extrabold">PDF Vault</h1>
        <p className="text-lg max-w-md">
          Securely sell and share your PDFs with paywall protection. Upload your documents, set prices, and get paid.
        </p>

        <div className="flex gap-6">
          <a
            href="/upload"
            className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Upload PDF
          </a>
          <a
            href="https://github.com/JeydenJ/pdf-vault-app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-800 transition"
          >
            View on GitHub
          </a>
        </div>
      </main>

      <footer className="text-sm text-center text-gray-600 dark:text-gray-400">
        Made with ❤️ using Next.js, Tailwind CSS, Supabase, and Stripe
      </footer>
    </div>
  );
}
