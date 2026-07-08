export default function Footer() {
  return (
    <footer className="bg-ink py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} McLean Tutoring Center. All rights reserved.
          </p>
          <p className="text-white/50 text-xs mt-1">
            Serving McLean, Tysons, Great Falls &amp; Vienna, VA
          </p>
        </div>
        <a
          href="mailto:mcleantutors21@gmail.com"
          className="text-amber text-sm hover:underline"
        >
          mcleantutors21@gmail.com
        </a>
      </div>
    </footer>
  )
}
