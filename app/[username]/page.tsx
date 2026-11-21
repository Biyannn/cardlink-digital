
import { notFound } from "next/navigation";
import Image from "next/image";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  QrCode,
} from "lucide-react";

import { QRCodeSVG } from "qrcode.react";
import { profiles } from "@/data/profiles";
import SaveContactButton from "@/components/SaveContactButton";

type PageProps = {
  params: Promise<{
    username: string;
  }>;
};

export default async function ProfilePage({ params }: PageProps) {
  const { username } = await params;
  const profile = profiles[username.toLowerCase()];

  if (!profile) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  const profileUrl = siteUrl
    ? `${siteUrl}/${profile.username}`
    : `https://your-cardlink-domain.com/${profile.username}`;

  return (
    <main className="mx-auto w-full max-w-[1020px] px-5 pb-10 pt-7 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">

      {/* TOPBAR */}
      <div className="mb-5 flex items-center justify-between gap-3 sm:mb-7">
        <a
          href="/"
          aria-label="CardLink home"
          className="inline-flex shrink-0 items-center gap-2.5 font-heading text-xl font-extrabold tracking-tight sm:text-[21px]"
        >
          <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-cardlink-navy text-lg text-white sm:h-[34px] sm:w-[34px] sm:text-xl">
            C
          </span>

          <span>
            Card<span className="text-[#8B98A4]">Link</span>
          </span>
        </a>

        <span className="flex items-center gap-1.5 text-right text-[8px] font-bold tracking-[1px] text-[#73808D] sm:gap-2 sm:text-[10px] sm:tracking-[1.8px]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7E9A86]" />
          DIGITAL BUSINESS CARD
        </span>
      </div>

      {/* PROFILE CARD */}
      <section className="mx-auto max-w-[780px] overflow-hidden rounded-[18px] border border-[#E9E7E0] bg-white shadow-profile sm:rounded-[24px]">

        {/* COVER */}
        <div className="relative flex h-[145px] items-end justify-between overflow-hidden bg-gradient-to-br from-cardlink-deep via-cardlink-navy to-[#2A4052] px-5 py-5 text-white sm:h-[175px] sm:px-7 sm:py-6 md:h-[190px] md:px-[34px] md:py-7">

          <div className="pointer-events-none absolute -right-[65px] -top-[190px] h-[290px] w-[290px] rounded-full border border-white/[0.12] shadow-[0_0_0_28px_rgba(255,255,255,0.025),0_0_0_58px_rgba(255,255,255,0.025)] sm:-right-[55px] sm:-top-[210px] sm:h-[340px] sm:w-[340px]" />

          <div className="pointer-events-none absolute -bottom-[175px] right-[15%] h-[210px] w-[210px] rounded-full bg-white/[0.025]" />

          <span className="relative z-10 text-[8px] font-semibold tracking-[1.5px] text-[#C5D0DA] sm:text-[10px] sm:tracking-[2.2px]">
            YOUR IDENTITY, CONNECTED.
          </span>

          <div className="relative z-10 font-heading text-[26px] font-extrabold tracking-[-2px] sm:text-[32px]">
            C<span className="text-[#9EAFBE]">.</span>
          </div>
        </div>

        {/* PROFILE CONTENT */}
        <div className="px-5 pb-6 sm:px-7 sm:pb-8 md:px-[42px] md:pb-9">

          {/* PROFILE HEADING - FIXED */}
          <div className="relative z-10 -mt-8 flex items-start gap-3 sm:-mt-10 sm:gap-4 md:-mt-[42px] md:gap-5">

            {/* PROFILE PHOTO */}
            <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border-4 border-white bg-[#DFE5E9] shadow-avatar sm:h-[92px] sm:w-[92px] sm:border-[5px] md:h-[104px] md:w-[104px] md:border-[6px]">
              <Image
                src="/asset/FOTO.jpg"
                alt={`Foto profil ${profile.name}`}
                fill
                priority
                sizes="(max-width: 480px) 76px, (max-width: 768px) 92px, 104px"
                className="object-cover"
              />
            </div>

            {/* NAME AND ROLE - FIXED POSITION */}
            <div className="min-w-0 flex-1 pt-9 sm:pt-11 md:pt-12">

              <p className="mb-1 text-[7px] font-bold tracking-[1px] text-[#82909C] sm:mb-[7px] sm:text-[9px] sm:tracking-[1.7px]">
                PROFESSIONAL PROFILE
              </p>

              <h1 className="mb-1 break-words font-heading text-[clamp(18px,5vw,27px)] font-extrabold leading-[1.2] tracking-[-0.7px] text-cardlink-ink sm:mb-[7px] sm:text-[clamp(23px,3vw,31px)] sm:tracking-[-1.1px]">
                {profile.name}
              </h1>

              <p className="m-0 break-words text-[10px] leading-relaxed text-[#6C7985] sm:text-[12px] md:text-[13px]">
                {profile.role}
                <span className="px-1.5 text-[#C0C7CC] sm:px-2">/</span>
                {profile.company}
              </p>
            </div>
          </div>

          {/* BIO */}
          <p className="mb-5 mt-5 max-w-[620px] break-words text-[13px] leading-[1.8] text-[#65717D] sm:mb-[22px] sm:mt-6 sm:text-sm md:mt-[27px]">
            {profile.bio}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-2.5 min-[420px]:flex-row min-[420px]:flex-wrap sm:gap-[10px]">
            <a
              href="https://wa.me/message/VM5FQ7HKBA6TI1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-cardlink-navy px-4 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#203A50] min-[420px]:w-auto sm:px-[17px]"
            >
              <MessageCircle size={17} />
              Contact me
              <ArrowUpRight size={16} />
            </a>

            <SaveContactButton profile={profile} />
          </div>

          {/* DIVIDER */}
          <div className="my-6 h-px bg-cardlink-line sm:my-[30px]" />

          {/* DETAILS */}
          <section className="mt-6 sm:mt-7">
            <div className="mb-4">
              <span className="mb-[7px] block text-[8px] font-bold tracking-[1.4px] text-[#82909C] sm:text-[9px] sm:tracking-[1.7px]">
                01 / DETAILS
              </span>

              <h2 className="m-0 font-heading text-[18px] font-bold tracking-[-0.6px] text-cardlink-ink sm:text-[19px]">
                Let's connect
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2.5 min-[520px]:grid-cols-2 sm:gap-[10px]">

              {/* EMAIL */}
              <a
                href={`mailto:${profile.email}`}
                className="flex min-w-0 items-center gap-2.5 rounded-xl border border-[#EEEFEC] bg-[#FDFDFC] p-3 transition hover:border-[#C6D0DA] hover:bg-[#F7F8F8] sm:gap-3 sm:p-[14px]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#EDF1F3] text-[#32495B]">
                  <Mail size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <small className="text-[10px] text-[#89939C]">
                    Email
                  </small>

                  <strong className="break-all text-[11px] font-semibold leading-relaxed text-[#2A3946] sm:break-normal sm:truncate">
                    {profile.email}
                  </strong>
                </span>

                <ArrowUpRight
                  size={15}
                  className="ml-auto shrink-0 text-[#A0AAB2]"
                />
              </a>

              {/* PHONE */}
              <a
                href="https://wa.me/message/VM5FQ7HKBA6TI1"
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center gap-2.5 rounded-xl border border-[#EEEFEC] bg-[#FDFDFC] p-3 transition hover:border-[#C6D0DA] hover:bg-[#F7F8F8] sm:gap-3 sm:p-[14px]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#EDF1F3] text-[#32495B]">
                  <Phone size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <small className="text-[10px] text-[#89939C]">
                    Phone
                  </small>

                  <strong className="break-words text-[11px] font-semibold text-[#2A3946]">
                    {profile.phone}
                  </strong>
                </span>

                <ArrowUpRight
                  size={15}
                  className="ml-auto shrink-0 text-[#A0AAB2]"
                />
              </a>

              {/* LOCATION */}
              <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-[#EEEFEC] bg-[#FDFDFC] p-3 sm:gap-3 sm:p-[14px]">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#EDF1F3] text-[#32495B]">
                  <MapPin size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <small className="text-[10px] text-[#89939C]">
                    Location
                  </small>

                  <strong className="break-words text-[11px] font-semibold leading-relaxed text-[#2A3946]">
                    {profile.location}
                  </strong>
                </span>
              </div>

              {/* WEBSITE */}
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center gap-2.5 rounded-xl border border-[#EEEFEC] bg-[#FDFDFC] p-3 transition hover:border-[#C6D0DA] hover:bg-[#F7F8F8] sm:gap-3 sm:p-[14px]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#EDF1F3] text-[#32495B]">
                  <Globe size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <small className="text-[10px] text-[#89939C]">
                    Website
                  </small>

                  <strong className="break-all text-[11px] font-semibold leading-relaxed text-[#2A3946] sm:break-normal sm:truncate">
                    {profile.website.replace(/^https?:\/\//, "")}
                  </strong>
                </span>

                <ArrowUpRight
                  size={15}
                  className="ml-auto shrink-0 text-[#A0AAB2]"
                />
              </a>
            </div>
          </section>

          {/* SOCIAL */}
          <section className="mt-6 sm:mt-7">
            <div className="mb-4">
              <span className="mb-[7px] block text-[8px] font-bold tracking-[1.4px] text-[#82909C] sm:text-[9px] sm:tracking-[1.7px]">
                02 / SOCIAL
              </span>

              <h2 className="m-0 font-heading text-[18px] font-bold tracking-[-0.6px] text-cardlink-ink sm:text-[19px]">
                Find me online
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-[10px] border border-[#E8EAE8] px-3 py-2.5 text-[11px] font-semibold text-[#3B4A57] transition hover:border-[#B8C3CB] hover:bg-[#FAFBFA] sm:gap-[9px] sm:px-[13px]"
              >
                <Linkedin size={17} />
                LinkedIn
                <ArrowUpRight size={14} className="text-[#98A4AD]" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-[10px] border border-[#E8EAE8] px-3 py-2.5 text-[11px] font-semibold text-[#3B4A57] transition hover:border-[#B8C3CB] hover:bg-[#FAFBFA] sm:gap-[9px] sm:px-[13px]"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={14} className="text-[#98A4AD]" />
              </a>
            </div>
          </section>

          {/* SKILLS */}
          <section className="mt-6 sm:mt-7">
            <div className="mb-4">
              <span className="mb-[7px] block text-[8px] font-bold tracking-[1.4px] text-[#82909C] sm:text-[9px] sm:tracking-[1.7px]">
                03 / EXPERTISE
              </span>

              <h2 className="m-0 font-heading text-[18px] font-bold tracking-[-0.6px] text-cardlink-ink sm:text-[19px]">
                Skills & focus
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-[#F0F2F2] px-3 py-2 text-[10px] font-semibold text-[#52616D] transition hover:bg-[#E6EAEC] sm:py-[9px] sm:text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* QR PANEL */}
          <section className="mt-7 flex flex-col gap-5 rounded-2xl bg-cardlink-navy p-5 text-white min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-4 sm:mt-[34px] sm:p-[25px]">
            <div className="min-w-0 flex-1 min-[480px]:max-w-[360px]">
              <span className="text-[8px] font-bold tracking-[1.4px] text-[#AAB8C3] sm:text-[9px] sm:tracking-[1.7px]">
                SHARE THIS PROFILE
              </span>

              <h2 className="mb-2.5 mt-2.5 font-heading text-[21px] font-bold leading-[1.3] tracking-[-0.6px] text-white sm:text-[23px]">
                One scan.
                <br />
                A meaningful connection.
              </h2>

              <p className="mb-3 text-[10px] leading-[1.7] text-[#C1CBD3] sm:text-[11px] sm:leading-[1.6]">
                Scan the QR code to open this profile on another device.
              </p>

              <div className="inline-flex items-center gap-[7px] break-all text-[10px] text-[#E1E7EB] sm:text-[11px]">
                <QrCode size={15} className="shrink-0" />
                /{profile.username}
              </div>
            </div>

            {/* QR CODE */}
            <div className="grid w-fit shrink-0 place-items-center self-center rounded-[10px] bg-white p-2 sm:p-[9px] min-[480px]:self-auto">
              <QRCodeSVG
                value={profileUrl}
                size={126}
                level="H"
                includeMargin
                className="h-[112px] w-[112px] sm:h-[126px] sm:w-[126px]"
              />
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="flex flex-col gap-2.5 border-t border-[#EFEFEB] px-5 py-4 text-[9px] text-[#8A949B] min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:px-7 sm:py-[17px] sm:text-[10px] md:px-[42px]">
          <span>
            Powered by <strong className="text-[#344655">CardLink</strong>
          </span>

          <span className="inline-flex items-center gap-[5px]">
            <Check size={13} className="text-[#6C9079]" />
            Digital identity, simplified
          </span>
        </footer>
      </section>

      {/* PAGE NOTE */}
      <p className="mt-5 flex flex-wrap items-center justify-center gap-[7px] px-2 text-center text-[9px] text-[#929A9F] sm:mt-[22px] sm:text-[10px]">
        <BriefcaseBusiness size={14} />
        A thoughtful way to share your professional identity.
      </p>
    </main>
  );
}
