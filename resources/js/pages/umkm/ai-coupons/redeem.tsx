import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { AlertCircle, ArrowRight, CheckCircle, Image, Loader2, Ticket, Video } from 'lucide-react';

interface Balance {
    video_credits: number;
    photo_enhance_credits: number;
}

interface Redemption {
    id: number;
    code: string;
    name?: string | null;
    video_credits: number;
    photo_enhance_credits: number;
    redeemed_at: string;
}

interface Props {
    balance: Balance;
    redemptions: Redemption[];
}

export default function RedeemAiCoupon({ balance, redemptions }: Props) {
    const { flash } = usePage().props as any;
    const { data, setData, post, processing, errors, reset } = useForm({
        code: '',
    });

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        post('/umkm/ai-coupons/redeem', {
            preserveScroll: true,
            onSuccess: () => reset('code'),
        });
    };

    return (
        <AppLayout activeTab="dashboard">
            <Head title="Redeem Kupon AI" />

            <div className="min-h-screen bg-slate-50 pb-24">
                <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4 pb-8 pt-6 text-white">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">Paket konten</p>
                            <h1 className="text-2xl font-bold">Kupon AI</h1>
                        </div>
                        <Link href="/umkm/dashboard" className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                            Dashboard
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                            <Video className="mb-3 h-5 w-5 text-blue-200" />
                            <p className="text-3xl font-black">{balance.video_credits}</p>
                            <p className="text-xs text-white/60">Video tersisa</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                            <Image className="mb-3 h-5 w-5 text-pink-200" />
                            <p className="text-3xl font-black">{balance.photo_enhance_credits}</p>
                            <p className="text-xs text-white/60">Foto percantik</p>
                        </div>
                    </div>
                </div>

                <div className="-mt-4 space-y-4 px-4">
                    <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                                <Ticket className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="font-bold text-slate-900">Masukkan kupon</h2>
                                <p className="text-sm text-slate-500">Paket standar: 2 video dan 3 foto percantik.</p>
                            </div>
                        </div>

                        {flash?.success && (
                            <div className="mb-4 flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>{flash.success}</span>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500">Kode kupon</label>
                            <input
                                value={data.code}
                                onChange={(event) => setData('code', event.target.value.toUpperCase())}
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-lg font-black uppercase tracking-wide outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                placeholder="AI20-ABC123"
                                autoComplete="off"
                                required
                            />
                            {errors.code && (
                                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                                    <span>{errors.code}</span>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing || !data.code.trim()}
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {processing ? <Loader2 className="h-5 w-5 animate-spin" /> : <Ticket className="h-5 w-5" />}
                            Pakai Kupon
                        </button>
                    </form>

                    <Link
                        href="/umkm/ai-content"
                        className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                        <div>
                            <p className="font-bold text-slate-900">Buka AI Content Generator</p>
                            <p className="text-sm text-slate-500">Gunakan kuota untuk generate konten.</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-400" />
                    </Link>

                    {redemptions.length > 0 && (
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-3 font-bold text-slate-900">Riwayat kupon</h2>
                            <div className="space-y-3">
                                {redemptions.map((redemption) => (
                                    <div key={redemption.id} className="rounded-xl bg-slate-50 p-3">
                                        <div className="flex items-center justify-between gap-3">
                                            <div>
                                                <p className="font-mono font-black text-slate-900">{redemption.code}</p>
                                                <p className="text-xs text-slate-500">
                                                    {new Date(redemption.redeemed_at).toLocaleDateString('id-ID', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                    })}
                                                </p>
                                            </div>
                                            <div className="text-right text-xs font-semibold text-slate-600">
                                                <p>{redemption.video_credits} video</p>
                                                <p>{redemption.photo_enhance_credits} foto</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
