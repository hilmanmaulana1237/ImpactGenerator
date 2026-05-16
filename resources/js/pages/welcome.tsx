import SeoHead from '@/components/SeoHead';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, Bot, Image, MessageCircle, Quote, Sparkles, Star, Video, Wand2, Zap } from 'lucide-react';

export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage<SharedData>().props;

    const dashboardHref = auth.user ? '/umkm/dashboard' : canRegister ? '/register' : '/login';

    const features = [
        {
            icon: Video,
            title: 'AI Video Generator',
            description: 'Buat video promosi profesional dari foto produk Anda secara otomatis dengan teknologi AI.',
            color: 'from-blue-500 to-cyan-500',
            bg: 'bg-blue-500/10',
        },
        {
            icon: Image,
            title: 'AI Poster Maker',
            description: 'Generate poster promosi menarik untuk media sosial langsung dari template AI.',
            color: 'from-cyan-500 to-teal-500',
            bg: 'bg-cyan-500/10',
        },
        {
            icon: Bot,
            title: 'AI Business Mentor',
            description: 'Konsultasi bisnis dengan AI mentor yang paham strategi pemasaran dan operasional.',
            color: 'from-emerald-500 to-teal-500',
            bg: 'bg-emerald-500/10',
        },
        {
            icon: Wand2,
            title: 'AI Copywriting',
            description: 'Generate deskripsi produk, caption sosial media, dan script video yang menjual.',
            color: 'from-amber-400 to-orange-500',
            bg: 'bg-amber-500/10',
        },
    ];

    const steps = [
        { number: '01', title: 'Daftar Akun', description: 'Buat akun dan masuk ke dashboard bisnis.' },
        { number: '02', title: 'Upload Foto', description: 'Upload foto produk atau bahan visual yang ingin dipromosikan.' },
        { number: '03', title: 'Generate Konten', description: 'Pilih video, poster, atau copywriting sesuai kebutuhan.' },
        { number: '04', title: 'Publish & Promosi', description: 'Download hasilnya dan bagikan ke media sosial.' },
    ];

    const testimonials = [
        {
            name: 'Founder Kuliner',
            role: 'Peserta Inkubator Impact',
            quote: 'Video promosi yang tadinya butuh banyak proses, sekarang bisa dibuat cepat dan tetap terlihat profesional.',
        },
        {
            name: 'Owner Brand Lokal',
            role: 'Peserta Inkubator Impact',
            quote: 'Poster dan caption langsung siap dipakai. Tim kami jadi lebih fokus ke jualan dan validasi pasar.',
        },
        {
            name: 'Pelaku Jasa',
            role: 'Peserta Inkubator Impact',
            quote: 'AI mentor membantu kami menyusun strategi promosi yang lebih rapi dan mudah dieksekusi.',
        },
    ];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Inkubator Impact',
        url: 'https://impactgenerator.my.id',
        description: 'Platform AI Content Generator untuk membantu bisnis membuat konten promosi video, poster, dan copywriting secara otomatis.',
    };

    return (
        <>
            <SeoHead
                title="Inkubator Impact - AI Content Generator"
                description="Buat video promosi, poster, dan copywriting secara otomatis dengan AI bersama Inkubator Impact."
                schema={schema}
            />
            <Head title="Inkubator Impact" />

            <div className="min-h-screen bg-slate-950 text-white" style={{ fontFamily: "'Inter', 'Outfit', system-ui, sans-serif" }}>
                <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/85 backdrop-blur-2xl">
                    <div className="mx-auto max-w-6xl px-5 sm:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <Link href="/" className="flex items-center gap-2.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/20">
                                    <Sparkles className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-lg font-bold tracking-tight">
                                    Inkubator<span className="text-cyan-300">Impact</span>
                                </span>
                            </Link>

                            <div className="flex items-center gap-3">
                                {auth.user ? (
                                    <Link href="/umkm/dashboard" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/login" className="px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white">
                                            Masuk
                                        </Link>
                                        {canRegister && (
                                            <Link href="/register" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                                                Daftar Gratis
                                            </Link>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                <section className="relative overflow-hidden border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-5 py-20 sm:px-8 lg:py-28">
                    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                                <Sparkles className="h-4 w-4" />
                                Powered by Inkubator Impact
                            </div>

                            <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">
                                Buat Konten{' '}
                                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                                    Promosi AI
                                </span>
                                <br className="hidden sm:block" />
                                untuk Bisnis Anda
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
                                Generate video promosi, poster menarik, dan copywriting yang menjual. Semua dibuat otomatis agar bisnis bisa tampil lebih profesional.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link href={dashboardHref} className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-cyan-500/25">
                                    <Zap className="h-5 w-5" />
                                    Mulai Buat Konten AI
                                </Link>
                                <Link href={auth.user ? '/umkm/ai-mentor' : dashboardHref} className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                                    <Bot className="h-5 w-5" />
                                    Chat AI Mentor
                                </Link>
                            </div>

                            <div className="mt-16 flex items-center gap-10 sm:gap-14">
                                {[
                                    { value: 'AI', label: 'Powered' },
                                    { value: 'Cepat', label: 'Siap pakai' },
                                    { value: '24/7', label: 'Tersedia' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">{stat.value}</p>
                                        <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
                                <div className="rounded-[1.4rem] bg-slate-900 p-5">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-400">AI Studio</p>
                                            <p className="text-xl font-black">Inkubator Impact</p>
                                        </div>
                                        <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">Online</div>
                                    </div>

                                    <div className="mt-5 grid gap-4">
                                        {features.slice(0, 3).map((feature) => (
                                            <div key={feature.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}>
                                                    <feature.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">{feature.title}</p>
                                                    <p className="text-sm text-slate-500">Siap generate</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-5">
                                        <p className="text-sm font-semibold text-white/70">Output hari ini</p>
                                        <p className="mt-1 text-3xl font-black">Video, Poster, Caption</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-5 py-20 sm:px-8 lg:py-28">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-14 text-center">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">Fitur Unggulan</p>
                            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Fitur AI yang Powerful</h2>
                            <p className="mx-auto max-w-xl text-base text-slate-400 sm:text-lg">
                                Semua tools AI yang Anda butuhkan untuk membuat konten promosi profesional.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => (
                                <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-cyan-400/30 hover:bg-white/[0.06]">
                                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg}`}>
                                        <feature.icon className="h-7 w-7 text-cyan-300" />
                                    </div>
                                    <h3 className="mb-3 text-lg font-bold">{feature.title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/5 bg-slate-900/55 px-5 py-20 sm:px-8 lg:py-28">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-14 text-center">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">Cara Kerja</p>
                            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Dari foto jadi konten siap promosi</h2>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {steps.map((step) => (
                                <div key={step.number} className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                                    <p className="mb-6 text-4xl font-black text-cyan-400/40">{step.number}</p>
                                    <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/5 bg-slate-900/55 px-5 py-20 sm:px-8 lg:py-28">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-14 text-center">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">Testimoni</p>
                            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Bisnis yang lebih siap promosi</h2>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-3">
                            {testimonials.map((item) => (
                                <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <Quote className="mb-5 h-8 w-8 text-cyan-300" />
                                    <p className="mb-6 leading-relaxed text-slate-300">"{item.quote}"</p>
                                    <div className="flex items-center gap-1 text-amber-300">
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>
                                    <div className="mt-5 border-t border-white/10 pt-5">
                                        <p className="font-bold">{item.name}</p>
                                        <p className="text-sm text-slate-500">{item.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-5 py-20 text-center sm:px-8 lg:py-28">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                            <MessageCircle className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="mb-5 text-3xl font-bold sm:text-5xl">Siap membuat konten promosi dengan AI?</h2>
                        <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-slate-400">
                            Mulai generate video, poster, dan copywriting bersama Inkubator Impact.
                        </p>
                        <Link href={dashboardHref} className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-cyan-500/25">
                            Mulai Sekarang
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </section>

                <footer className="border-t border-white/5 px-5 py-10 sm:px-8">
                    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-bold">
                                Inkubator<span className="text-cyan-300">Impact</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500">&copy; 2026 Inkubator Impact. AI Content Generator.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
