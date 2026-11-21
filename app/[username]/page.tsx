
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
  params: Promise<{ username: string }>;
};

export default async function ProfilePage({ params }: PageProps) {
  const { username } = await params;
  const profile = profiles[username.toLowerCase()];

  if (!profile) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  const profileUrl = siteUrl
    ? `${siteUrl}/${profile.username}`
    : `https://your-cardlink-domain.com/${profile.username}`;

  const whatsappNumber = profile.whatsapp.replace(/\D/g, "");

  return (
    <main className="mx-auto w-[min(100%-40px,1020px)] pb-[42px] pt-7 max-sm:w-[min(100%-24px,1020px)] max-sm:pt-4">
      {/* TOPBAR */}
      <div className="mb-[26px] flex items-center justify-between max-sm:mb-[17px]">
        <a
          href="/"
          aria-label="CardLink home"
          className="inline-flex items-center gap-[10px] font-heading text-[21px] font-extrabold tracking-[-1px]"
        >
          <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-cardlink-navy font-heading text-xl font-extrabold text-white">
            C
          </span>

          <span>
            Card<span className="text-[#8B98A4">Link</span>
          </span>
        </a>

        <span className="flex items-center gap-2 text-[10px] font-bold tracking-[1.8px] text-[#73808D] max-sm:text-[8px] max-sm:tracking-[1px]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#7E9A86]" />
          DIGITAL BUSINESS CARD
        </span>
      </div>

      {/* PROFILE CARD */}
      <section className="mx-auto max-w-[780px] overflow-hidden rounded-[24px] border border-[#E9E7E0] bg-white shadow-profile max-sm:rounded-[18px]">
        {/* COVER */}
        <div className="relative flex h-[190px] items-end justify-between overflow-hidden bg-gradient-to-br from-cardlink-deep via-cardlink-navy to-[#2A4052] px-[34px] py-7 text-white max-sm:h-[150px] max-sm:px-[22px] max-sm:py-[22px]">
          <div className="pointer-events-none absolute -right-[55px] -top-[210px] h-[340px] w-[340px] rounded-full border border-white/[0.12] shadow-[0_0_0_28px_rgba(255,255,255,0.025),0_0_0_58px_rgba(255,255,255,0.025)]" />

          <div className="pointer-events-none absolute -bottom-[175px] right-[120px] h-[210px] w-[210px] rounded-full bg-white/[0.025]" />

          <span className="relative z-10 text-[10px] font-semibold tracking-[2.2px] text-[#C5D0DA]">
            YOUR IDENTITY, CONNECTED.
          </span>

          <div className="relative z-10 font-heading text-[32px] font-extrabold tracking-[-2px]">
            C<span className="text-[#9EAFBE">.</span>
          </div>
        </div>

        {/* PROFILE CONTENT */}
        <div className="px-[42px] pb-9 max-sm:px-5 max-sm:pb-[25px]">
          {/* PROFILE HEADING */}
          <div className="relative z-10 -mt-[42px] flex items-end gap-5 max-sm:-mt-[34px] max-sm:gap-3">
            {/* PROFILE PHOTO */}
            <div className="relative h-[104px] w-[104px] flex-shrink-0 overflow-hidden rounded-full border-[6px] border-white bg-[#DFE5E9] shadow-avatar max-sm:h-[78px] max-sm:w-[78px] max-sm:border-4">
              <Image
                src="/asset/FOTO.jpg"
                alt={`Foto profil ${profile.name}`}
                fill
                priority
                sizes="(max-width: 640px) 78px, 104px"
                className="object-cover"
              />
            </div>

            {/* NAME AND ROLE */}
            <div className="min-w-0 pb-[5px] max-sm:pb-[2px]">
              <p className="mb-[7px] text-[9px] font-bold tracking-[1.7px] text-[#82909C] max-sm:text-[7px] max-sm:tracking-[1px]">
                PROFESSIONAL PROFILE
              </p>

              <h1 className="mb-[7px] font-heading text-[clamp(23px,3vw,31px)] font-extrabold leading-[1.18] tracking-[-1.1px] text-cardlink-ink max-sm:text-[21px] max-sm:tracking-[-0.7px]">
                {profile.name}
              </h1>

              <p className="m-0 text-[13px] text-[#6C7985] max-sm:text-[11px] max-sm:leading-[1.5]">
                {profile.role}
                <span className="px-2 text-[#C0C7CC">/</span>
                {profile.company}
              </p>
            </div>
          </div>

          {/* BIO */}
          <p className="mb-[22px] mt-[27px] max-w-[620px] text-sm leading-[1.8] text-[#65717D] max-sm:mt-[22px] max-sm:text-[13px]">
            {profile.bio}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-[10px]">
            <a
              href={`https://wa.me/message/VM5FQ7HKBA6TI1`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-[9px] rounded-[10px] bg-cardlink-navy px-[17px] text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#203A50] max-sm:flex-1 max-sm:px-[10px] max-sm:text-[11px]"
            >
              <MessageCircle size={17} />
              Contact me
              <ArrowUpRight size={16} />
            </a>

            <SaveContactButton profile={profile} />
          </div>

          {/* DIVIDER */}
          <div className="my-[30px] h-px bg-cardlink-line" />

          {/* DETAILS */}
          <section className="mt-7">
            <div className="mb-4">
              <span className="mb-[7px] block text-[9px] font-bold tracking-[1.7px] text-[#82909C]">
                01 / DETAILS
              </span>

              <h2 className="m-0 font-heading text-[19px] font-bold tracking-[-0.6px] text-cardlink-ink">
                Let&apos;s connect
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
              {/* EMAIL */}
              <a
                href={`mailto:${profile.email}`}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-[#EEEFEC] bg-[#FDFDFC] p-[14px] transition hover:border-[#C6D0DA] hover:bg-[#F7F8F8]"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-[10px] bg-[#EDF1F3] text-[#32495B]">
                  <Mail size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <small className="text-[10px] text-[#89939C]">Email</small>
                  <strong className="truncate text-[11px] font-semibold text-[#2A3946]">
                    {profile.email}
                  </strong>
                </span>

                <ArrowUpRight size={15} className="ml-auto flex-shrink-0 text-[#A0AAB2]" />
              </a>

              {/* PHONE */}
              <a
                href={`https://wa.me/message/VM5FQ7HKBA6TI1`}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-[#EEEFEC] bg-[#FDFDFC] p-[14px] transition hover:border-[#C6D0DA] hover:bg-[#F7F8F8]"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-[10px] bg-[#EDF1F3] text-[#32495B]">
                  <Phone size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <small className="text-[10px] text-[#89939C]">Phone</small>
                  <strong className="truncate text-[11px] font-semibold text-[#2A3946]">
                    {profile.phone}
                  </strong>
                </span>

                <ArrowUpRight size={15} className="ml-auto flex-shrink-0 text-[#A0AAB2]" />
              </a>

              {/* LOCATION */}
              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-[#EEEFEC] bg-[#FDFDFC] p-[14px]">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-[10px] bg-[#EDF1F3] text-[#32495B]">
                  <MapPin size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <small className="text-[10px] text-[#89939C">Location</small>
                  <strong className="truncate text-[11px] font-semibold text-[#2A3946]">
                    {profile.location}
                  </strong>
                </span>
              </div>

              {/* WEBSITE */}
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-[#EEEFEC] bg-[#FDFDFC] p-[14px] transition hover:border-[#C6D0DA] hover:bg-[#F7F8F8]"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-[10px] bg-[#EDF1F3] text-[#32495B]">
                  <Globe size={18} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <small className="text-[10px] text-[#89939C">Website</small>
                  <strong className="truncate text-[11px] font-semibold text-[#2A3946]">
                    {profile.website.replace(/^https?:\/\//, "")}
                  </strong>
                </span>

                <ArrowUpRight size={15} className="ml-auto flex-shrink-0 text-[#A0AAB2]" />
              </a>
            </div>
          </section>

          {/* SOCIAL */}
          <section className="mt-7">
            <div className="mb-4">
              <span className="mb-[7px] block text-[9px] font-bold tracking-[1.7px] text-[#82909C]">
                02 / SOCIAL
              </span>

              <h2 className="m-0 font-heading text-[19px] font-bold tracking-[-0.6px] text-cardlink-ink">
                Find me online
              </h2>
            </div>

            <div className="flex flex-wrap gap-[9px]">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[9px] rounded-[10px] border border-[#E8EAE8] px-[13px] py-[11px] text-[11px] font-semibold text-[#3B4A57] transition hover:border-[#B8C3CB] hover:bg-[#FAFBFA]"
              >
                <Linkedin size={17} />
                LinkedIn
                <ArrowUpRight size={14} className="text-[#98A4AD" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[9px] rounded-[10px] border border-[#E8EAE8] px-[13px] py-[11px] text-[11px] font-semibold text-[#3B4A57] transition hover:border-[#B8C3CB] hover:bg-[#FAFBFA]"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={14} className="text-[#98A4AD" />
              </a>
            </div>
          </section>

          {/* SKILLS */}
          <section className="mt-7">
            <div className="mb-4">
              <span className="mb-[7px] block text-[9px] font-bold tracking-[1.7px] text-[#82909C]">
                03 / EXPERTISE
              </span>

              <h2 className="m-0 font-heading text-[19px] font-bold tracking-[-0.6px] text-cardlink-ink">
                Skills &amp; focus
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-[#F0F2F2] px-3 py-[9px] text-[11px] font-semibold text-[#52616D] transition hover:bg-[#E6EAEC]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* QR PANEL */}
          <section className="mt-[34px] flex items-center justify-between gap-6 rounded-2xl bg-cardlink-navy p-[25px] text-white max-sm:items-start max-sm:gap-3 max-sm:p-[17px] max-[380px]:flex-col">
            <div className="max-w-[360px]">
              <span className="text-[9px] font-bold tracking-[1.7px] text-[#AAB8C3]">
                SHARE THIS PROFILE
              </span>

              <h2 className="mb-[10px] mt-[10px] font-heading text-[23px] font-bold leading-[1.3] tracking-[-0.6px] text-white max-sm:text-[19px]">
                One scan.
                <br />
                A meaningful connection.
              </h2>

              <p className="mb-[13px] text-[11px] leading-[1.6] text-[#C1CBD3] max-sm:text-[10px]">
                Scan the QR code to open this profile on another device.
              </p>

              <div className="inline-flex items-center gap-[7px] text-[11px] text-[#E1E7EB]">
                <QrCode size={15} />
                /{profile.username}
              </div>
            </div>

            <div className="grid flex-shrink-0 place-items-center rounded-[10px] bg-white p-[9px] max-sm:p-[5px] max-[380px]:self-start">
              <QRCodeSVG
                value={profileUrl}
                size={126}
                level="H"
                includeMargin
                className="max-sm:h-[94px] max-sm:w-[94px]"
              />
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="flex justify-between gap-3 border-t border-[#EFEFEB] px-[42px] py-[17px] text-[10px] text-[#8A949B] max-sm:px-5 max-sm:py-[15px] max-sm:text-[9px] max-[380px]:flex-col">
          <span>
            Powered by <strong className="text-[#344655">CardLink</strong>
          </span>

          <span className="inline-flex items-center gap-[5px]">
            <Check size={13} className="text-[#6C9079" />
            Digital identity, simplified
          </span>
        </footer>
      </section>

      {/* PAGE NOTE */}
      <p className="mt-[22px] flex items-center justify-center gap-[7px] text-[10px] text-[#929A9F]">
        <BriefcaseBusiness size={14} />
        A thoughtful way to share your professional identity.
      </p>
    </main>
  );
}
