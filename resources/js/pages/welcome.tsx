import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Award,
    BookOpen,
    Building2,
    CalendarDays,
    Check,
    Compass,
    GraduationCap,
    Handshake,
    Landmark,
    Layers,
    Mail,
    MapPin,
    Network,
    Phone,
    Quote,
    Rocket,
    ShieldCheck,
    Target,
    Users,
} from 'lucide-react';

import { type SharedData } from '@/types';

export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage<SharedData>().props;

    const primaryHref = auth.user ? '/umkm/dashboard' : canRegister ? '/register' : '/login';
    const secondaryHref = '#journey';

    const impactHighlights = [
        'Kesiapan Founder',
        'Tim IMPACT',
        'Akses Investor',
        'Go-to-Market',
        'Perjalanan Startup',
        'Visi Kami',
        'Klinik Growth',
        'Portofolio',
        'Jaringan Riset',
        'Workspace',
        'Komunitas',
        'Demo Day',
        'Persiapan Pendanaan',
        'Validasi Pasar',
        'Dukungan Penuh',
    ];

    const reasons = [
        {
            icon: Target,
            title: 'Model impact-first',
            body: 'Fokus pada nilai berkelanjutan, bukan vanity growth.',
        },
        {
            icon: Landmark,
            title: 'Akses investor',
            body: 'Perkenalan hangat ke modal dan angel yang tepat.',
        },
        {
            icon: Users,
            title: 'Mentoring berbasis operator',
            body: 'Founder nyata, playbook nyata, hasil nyata.',
        },
        {
            icon: ShieldCheck,
            title: 'Milestone jelas',
            body: 'Checkpoint berbasis data di tiap fase pertumbuhan.',
        },
    ];

    const workSteps = [
        {
            number: '01',
            title: 'Daftar & Match',
            body: 'Kami memilih founder dengan visi dan DNA eksekusi.',
        },
        {
            number: '02',
            title: 'Validasi & Bangun',
            body: 'Bukti pasar, penguatan produk, dan traksi awal.',
        },
        {
            number: '03',
            title: 'Scale & Pendanaan',
            body: 'Akses investor, playbook pertumbuhan, persiapan pendanaan.',
        },
    ];

    const ecosystem = [
        {
            icon: Network,
            title: 'Jaringan Investor',
            body: 'Akses hangat ke angel dan fund yang sejalan dengan impact.',
        },
        {
            icon: GraduationCap,
            title: 'Dewan Mentor',
            body: 'Operator, founder, dan ahli domain yang siap membantu.',
        },
        {
            icon: Building2,
            title: 'Workspace & Komunitas',
            body: 'Hub hybrid dengan kultur founder berperforma tinggi.',
        },
        {
            icon: Handshake,
            title: 'Dukungan Funding',
            body: 'Perbaikan pitch, akses grant, dan kesiapan demo day.',
        },
    ];

    const team = [
        {
            name: 'Yogi Saputra',
            role: 'Chief Executive Officer',
            body: 'Mengorkestrasi visi besar dan strategi ekosistem IMPACT Inc.',
        },
        {
            name: 'Awang Dody Kardeli',
            role: 'Chief Technology Officer',
            body: 'Arsitek solusi inovatif dan platform teknologi inkubasi.',
        },
        {
            name: 'Hilman Maulana',
            role: 'Core Team',
            body: 'Mendorong operasi program, riset pasar, dan aktivasi founder.',
        },
        {
            name: 'M. Dhaffin Fawwaz',
            role: 'Core Team',
            body: 'Menguatkan eksekusi komunitas, event, dan pendampingan tim.',
        },
        {
            name: 'Satria Agung P.',
            role: 'Core Team',
            body: 'Mendukung koordinasi portofolio dan jalur pertumbuhan startup.',
        },
    ];

    const journey = [
        ['1', 'Spark', 'Validasi ide dan founder-market fit.'],
        ['2', 'Build', 'MVP, pengguna awal, dan kejelasan produk.'],
        ['3', 'Launch', 'Eksekusi go-to-market dan traksi.'],
        ['4', 'Scale', 'Pertumbuhan revenue, sistem operasi, dan hiring.'],
        ['5', 'Fund', 'Fundraising strategis dan ekspansi.'],
    ];

    const portfolios = ['NovaTech', 'AgriPulse', 'EduSpark', 'HealthLink', 'CivicLab', 'RetailFlow'];

    const testimonials = [
        {
            quote: 'IMPACT membuka akses investor yang sebelumnya sulit kami jangkau. Seed round kami selesai dalam 10 minggu.',
            name: 'Darren Satria',
            role: 'CEO, NovaTech',
        },
        {
            quote: 'Struktur sprint memaksa kami fokus. Revenue kami naik dua kali dalam empat bulan.',
            name: 'Maya Lestari',
            role: 'Founder, HealthLink',
        },
    ];

    const events = [
        ['Sprint Validasi Startup', 'Inkubator', 'May 24, 2026'],
        ['Klinik Growth Playbook', 'Pertumbuhan', 'June 7, 2026'],
        ['Meetup Founder & Investor', 'Komunitas', 'June 18, 2026'],
    ];

    return (
        <>
            <Head title="IMPACT Inc. Inkubator Startup">
                <meta
                    name="description"
                    content="IMPACT Inc. adalah inkubator startup untuk founder yang ingin tumbuh cepat, menggalang pendanaan dengan cerdas, dan menciptakan dampak terukur."
                />
            </Head>

            <div className="min-h-screen bg-[#f6fbfb] text-slate-950">
                <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/88 text-white backdrop-blur">
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/images/impact-inc-logo.png" alt="Logo IMPACT Inc." className="h-10 w-10 object-contain" />
                            <div className="leading-tight">
                                <p className="font-black tracking-tight">IMPACT<span className="text-cyan-300">Inc.</span></p>
                                <p className="text-xs font-medium text-white/55">Inkubator Startup</p>
                            </div>
                        </Link>

                        <div className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
                            <a href="#vision" className="hover:text-cyan-200">Visi</a>
                            <a href="#program" className="hover:text-cyan-200">Program</a>
                            <a href="#team" className="hover:text-cyan-200">Tim</a>
                            <a href="#portfolio" className="hover:text-cyan-200">Portofolio</a>
                            <a href="#contact" className="hover:text-cyan-200">Kontak</a>
                        </div>

                        <div className="flex items-center gap-2">
                            {auth.user ? (
                                <Link href="/umkm/dashboard" className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
                                    Dashboard
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            ) : (
                                <>
                                    <Link href="/login" className="hidden rounded-md px-4 py-2 text-sm font-semibold text-white/75 hover:text-white sm:inline-flex">
                                        Masuk
                                    </Link>
                                    {canRegister && (
                                        <Link href="/register" className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
                                            Daftar
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                <main>
                    <section className="relative min-h-[92vh] overflow-hidden bg-slate-950 pt-16 text-white">
                        <img
                            src="/images/impact-inc-logo.png"
                            alt=""
                            className="pointer-events-none absolute right-[-18%] top-20 w-[760px] max-w-none opacity-20 sm:right-[-8%] lg:right-[-2%] lg:top-8 lg:w-[900px]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.94)_40%,rgba(2,6,23,0.56)_100%)]" />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,#f6fbfb_100%)]" />

                        <div className="relative mx-auto grid min-h-[calc(92vh-64px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                            <div className="max-w-3xl">
                                <div className="mb-7 inline-flex items-center gap-2 border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
                                    <Rocket className="h-4 w-4" />
                                    IMPACT Inc. Inkubator Startup
                                </div>
                                <h1 className="text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                                    Kami bukan hanya membangun startup.
                                    <span className="mt-3 block text-cyan-300">Kami membangun perusahaan berdampak.</span>
                                </h1>
                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                                    Inkubator untuk founder yang ingin tumbuh cepat, menggalang pendanaan dengan cerdas, dan menciptakan dampak terukur melalui ekosistem end-to-end.
                                </p>
                                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                    <Link href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 py-3 font-black text-slate-950 shadow-lg shadow-cyan-500/20">
                                        Daftar Sekarang
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                    <a href={secondaryHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 font-bold text-white">
                                        Lihat Perjalanan
                                        <Compass className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="relative hidden min-h-[520px] lg:block">
                                <img
                                    src="/images/impact-inc-logo.png"
                                    alt="Logo IMPACT Inc."
                                    className="absolute left-1/2 top-1/2 w-[520px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_30px_90px_rgba(34,211,238,0.25)]"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="relative -mt-10 px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
                            <div className="grid gap-0 lg:grid-cols-[330px_1fr]">
                                <div className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
                                    <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Portofolio Impact</p>
                                    <h2 className="mt-3 text-2xl font-black">Pencapaian startup dan sorotan ekosistem.</h2>
                                </div>
                                <div className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3 lg:grid-cols-5">
                                    {impactHighlights.map((item) => (
                                        <div key={item} className="bg-white px-4 py-5 text-sm font-bold text-slate-700">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="vision" className="px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                            <div>
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Tentang & Visi</p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Standar baru untuk inkubasi startup.</h2>
                            </div>
                            <div className="space-y-8 text-slate-700">
                                <p className="text-lg leading-8">
                                    IMPACT Inc. adalah inkubator berbasis founder yang menggabungkan akses modal, mentoring strategis, dan ruang kerja berkinerja tinggi untuk membangun perusahaan berdampak.
                                </p>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="border-l-4 border-cyan-500 bg-white p-6 shadow-sm">
                                        <h3 className="font-black text-slate-950">Visi</h3>
                                        <p className="mt-3 leading-7">Menjadi inkubator dampak paling terpercaya di Asia Tenggara, melahirkan founder yang bertumbuh secara bertanggung jawab dan menyelesaikan masalah nyata.</p>
                                    </div>
                                    <div className="border-l-4 border-amber-400 bg-white p-6 shadow-sm">
                                        <h3 className="font-black text-slate-950">Misi</h3>
                                        <p className="mt-3 leading-7">Menyediakan jalur terstruktur dan berkecepatan tinggi dari validasi hingga pendanaan dengan jaringan mentor dan investor global.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-10 max-w-2xl">
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Kenapa founder memilih IMPACT</p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight">Berani, praktis, dan fokus pada traksi terukur.</h2>
                            </div>
                            <div className="grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
                                {reasons.map((reason) => (
                                    <div key={reason.title} className="bg-white p-6">
                                        <reason.icon className="h-8 w-8 text-cyan-700" />
                                        <h3 className="mt-8 text-lg font-black">{reason.title}</h3>
                                        <p className="mt-3 leading-7 text-slate-600">{reason.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="journey" className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                                <div>
                                    <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Cara kerja</p>
                                    <h2 className="mt-4 text-4xl font-black tracking-tight">Satu jalur jelas dari aplikasi hingga pendanaan.</h2>
                                </div>
                                <a href="#program" className="inline-flex w-fit items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-bold">
                                    Lihat Timeline
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                            <div className="grid gap-px bg-white/10 lg:grid-cols-3">
                                {workSteps.map((step) => (
                                    <div key={step.number} className="bg-slate-950 p-7">
                                        <p className="text-5xl font-black text-cyan-300/35">{step.number}</p>
                                        <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
                                        <p className="mt-3 leading-7 text-white/65">{step.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="program" className="px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="bg-slate-950 p-8 text-white">
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Program Inkubasi</p>
                                <h2 className="mt-4 text-4xl font-black">Akselerasi 4-6 bulan untuk product-market fit dan kesiapan investor.</h2>
                                <p className="mt-5 leading-8 text-white/70">
                                    Track Akselerasi Founder menghadirkan modul terstruktur untuk validasi, pertumbuhan, dan pendanaan dengan sprint mingguan yang praktis.
                                </p>
                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <Link href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-black text-slate-950">
                                        Daftar Sekarang
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <a href="#journey" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-bold">
                                        Lihat Timeline
                                    </a>
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {['Penemuan Masalah & Market Fit', 'Go-to-Market & Distribusi', 'Strategi Pendanaan', 'Operasional & Tata Kelola'].map((item) => (
                                    <div key={item} className="border border-slate-200 bg-white p-6 shadow-sm">
                                        <Check className="h-6 w-6 text-cyan-700" />
                                        <p className="mt-5 text-xl font-black">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-10 max-w-3xl">
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Ekosistem</p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight">Ekosistem menyatu, siap bertumbuh.</h2>
                                <p className="mt-4 text-lg leading-8 text-slate-600">Modal, mentoring, workspace, dan komunitas dalam satu ekosistem.</p>
                            </div>
                            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                                {ecosystem.map((item) => (
                                    <div key={item.title} className="border border-slate-200 p-6">
                                        <item.icon className="h-8 w-8 text-cyan-700" />
                                        <h3 className="mt-8 text-lg font-black">{item.title}</h3>
                                        <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="team" className="px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                                <div>
                                    <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Tim IMPACT Inc.</p>
                                    <h2 className="mt-4 text-4xl font-black tracking-tight">Penggerak Perubahan.</h2>
                                </div>
                                <p className="text-lg leading-8 text-slate-600">
                                    Membangun fondasi kuat untuk masa depan ekosistem startup. Kami memadukan visi teknis, strategis, dan operasional.
                                </p>
                            </div>
                            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                                {team.map((member) => (
                                    <div key={member.name} className="border border-slate-200 bg-white p-5 shadow-sm">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-50 font-black text-cyan-800">
                                            {member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
                                        </div>
                                        <h3 className="mt-6 font-black">{member.name}</h3>
                                        <p className="mt-1 text-sm font-bold text-cyan-700">{member.role}</p>
                                        <p className="mt-4 text-sm leading-6 text-slate-600">{member.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 max-w-2xl">
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Timeline Perjalanan Startup</p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight">Roadmap jelas dari ide hingga scale.</h2>
                            </div>
                            <div className="grid gap-px bg-white/10 md:grid-cols-5">
                                {journey.map(([number, title, body]) => (
                                    <div key={title} className="bg-slate-950 p-6">
                                        <p className="text-4xl font-black text-cyan-300">{number}</p>
                                        <h3 className="mt-8 text-xl font-black">{title}</h3>
                                        <p className="mt-3 leading-7 text-white/62">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="portfolio" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                                <div>
                                    <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Portofolio Startup</p>
                                    <h2 className="mt-4 text-4xl font-black tracking-tight">Traksi nyata di sektor kesehatan, finansial, edukasi, dan iklim.</h2>
                                </div>
                                <Award className="h-16 w-16 text-amber-400" />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                                {portfolios.map((name) => (
                                    <div key={name} className="border border-slate-200 p-5 text-center font-black">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-10 max-w-2xl">
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Founder yang melaju lebih cepat</p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight">Suara asli dari tim yang bertumbuh bersama IMPACT.</h2>
                            </div>
                            <div className="grid gap-5 lg:grid-cols-2">
                                {testimonials.map((item) => (
                                    <div key={item.name} className="border border-slate-200 bg-white p-7 shadow-sm">
                                        <Quote className="h-8 w-8 text-cyan-700" />
                                        <p className="mt-6 text-xl font-semibold leading-9 text-slate-800">"{item.quote}"</p>
                                        <div className="mt-8 border-t border-slate-200 pt-5">
                                            <p className="font-black">{item.name}</p>
                                            <p className="text-sm font-semibold text-slate-500">{item.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                            <div>
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Event & Workshop</p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight">Bootcamp startup, klinik growth, dan meetup founder yang fokus pada traksi.</h2>
                            </div>
                            <div className="space-y-4">
                                {events.map(([title, category, date]) => (
                                    <div key={title} className="grid gap-4 border border-slate-200 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">{category}</p>
                                            <h3 className="mt-2 text-xl font-black">{title}</h3>
                                            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                                                <CalendarDays className="h-4 w-4" />
                                                {date}
                                            </p>
                                        </div>
                                        <Link href={primaryHref} className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white">
                                            Daftar Sekarang
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
                            <div className="lg:col-span-1">
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Jurnal & Platform Riset</p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight">Template OJS modern dan sistem jurnal untuk mitra riset.</h2>
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
                                <div className="border border-slate-200 bg-white p-7">
                                    <BookOpen className="h-8 w-8 text-cyan-700" />
                                    <h3 className="mt-8 text-2xl font-black">Template OJS</h3>
                                    <p className="mt-3 leading-7 text-slate-600">Template premium untuk keterbacaan, indexing, dan kredibilitas internasional.</p>
                                </div>
                                <div className="border border-slate-200 bg-white p-7">
                                    <Layers className="h-8 w-8 text-amber-500" />
                                    <h3 className="mt-8 text-2xl font-black">Dukungan Indexing</h3>
                                    <p className="mt-3 leading-7 text-slate-600">Panduan DOAJ dan indexing internasional untuk meningkatkan dampak riset.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
                            <div>
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Siap membangun sesuatu yang berdampak?</p>
                                <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight">Gabung inkubator berbasis founder untuk scale impact.</h2>
                            </div>
                            <Link href={primaryHref} className="inline-flex w-fit items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 font-black text-slate-950">
                                Daftar Sekarang
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </section>

                    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
                        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                            <div>
                                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">Daftar atau Bermitra</p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight">Ceritakan apa yang sedang Anda bangun.</h2>
                                <p className="mt-5 text-lg leading-8 text-slate-600">Tim IMPACT Inc. akan menghubungi Anda segera.</p>
                                <div className="mt-8 space-y-3 text-sm font-semibold text-slate-600">
                                    <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-700" /> hello@impactinc.id</p>
                                    <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-700" /> +62 812 3456 7890</p>
                                    <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-700" /> Startup Workspace, Indonesia</p>
                                </div>
                            </div>
                            <form className="border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="text-sm font-bold text-slate-700">Nama Depan</span>
                                        <input className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Budi" />
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-bold text-slate-700">Nama Belakang</span>
                                        <input className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Santoso" />
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-bold text-slate-700">Email</span>
                                        <input type="email" className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="budi@email.com" />
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-bold text-slate-700">Nomor HP</span>
                                        <input className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="+62 812 3456 7890" />
                                    </label>
                                    <label className="block sm:col-span-2">
                                        <span className="text-sm font-bold text-slate-700">Saya ingin</span>
                                        <select className="mt-2 w-full border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500">
                                            <option>Bergabung Inkubator</option>
                                            <option>Menjadi Mentor</option>
                                            <option>Bermitra Program</option>
                                            <option>Akses Riset & Jurnal</option>
                                        </select>
                                    </label>
                                    <label className="block sm:col-span-2">
                                        <span className="text-sm font-bold text-slate-700">Pesan</span>
                                        <textarea className="mt-2 min-h-32 w-full border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500" placeholder="Ceritakan kebutuhan Anda..." />
                                    </label>
                                </div>
                                <button type="button" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-black text-white">
                                    Kirim Permintaan
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3">
                            <img src="/images/impact-inc-logo.png" alt="Logo IMPACT Inc." className="h-12 w-12 object-contain" />
                            <div>
                                <p className="font-black">IMPACT<span className="text-cyan-700">Inc.</span></p>
                                <p className="text-sm font-medium text-slate-500">Inkubator Startup</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500">2026 IMPACT Inc. Membangun perusahaan berdampak.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
