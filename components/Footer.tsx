export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-mid py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-slate-muted text-sm">
            © {new Date().getFullYear()} McLean Tutors. All rights reserved.
          </p>
          <p className="text-slate-muted text-xs mt-1">
            Serving McLean, Tysons, Great Falls &amp; Vienna, VA
          </p>
        </div>
        <a
          href="mailto:mcleantutors21@gmail.com"
          className="text-accent text-sm hover:underline"
        >
          mcleantutors21@gmail.com
        </a>
      </div>
    </footer>
  )
}
