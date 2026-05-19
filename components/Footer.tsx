export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-mid py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-muted text-sm">
          © {new Date().getFullYear()} Kushal Jivan. All rights reserved.
        </p>
        {/* TODO: Replace with Kushal's real email address */}
        <a
          href="mailto:kushal@example.com"
          className="text-accent text-sm hover:underline"
        >
          kushal@example.com
        </a>
      </div>
    </footer>
  )
}
