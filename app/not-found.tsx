import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto my-[12vh] w-[min(100%-40px,520px)] rounded-[20px] border border-cardlink-line bg-white p-9 shadow-profile">
      <span className="mb-[25px] grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-cardlink-navy font-heading text-xl font-extrabold text-white">
        C
      </span>

      <p className="mb-2 text-[9px] font-bold tracking-[1.7px] text-[#82909C]">
        PROFILE NOT FOUND
      </p>

      <h1 className="mb-3 font-heading text-2xl font-extrabold tracking-tight text-cardlink-ink">
        This CardLink profile doesn&apos;t exist yet.
      </h1>

      <p className="mb-6 text-sm leading-[1.7] text-cardlink-muted">
        Check the profile link or return to the home page.
      </p>

      <Link
        href="/"
        className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-cardlink-navy px-[17px] text-xs font-bold text-white transition hover:bg-[#203A50] hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </main>
  );
}