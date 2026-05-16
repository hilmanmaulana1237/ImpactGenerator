import AdminLayout from '@/layouts/admin-layout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { CheckCircle, Copy, Image, Loader2, Plus, Power, Ticket, Trash2, Video } from 'lucide-react';

interface AiCoupon {
    id: number;
    code: string;
    name?: string | null;
    redeem_type: 'single_use' | 'multi_use';
    video_credits: number;
    photo_enhance_credits: number;
    max_redemptions: number;
    redeemed_count: number;
    redemptions_count: number;
    is_active: boolean;
    expires_at?: string | null;
    created_at?: string | null;
    creator_name?: string | null;
}

interface Props {
    coupons: {
        data: AiCoupon[];
    };
    summary: {
        active_coupons: number;
        total_redemptions: number;
        video_credits_distributed: number;
        photo_credits_distributed: number;
    };
}

export default function AdminAiCoupons({ coupons, summary }: Props) {
    const { flash } = usePage().props as any;
    const { data, setData, post, processing, errors, reset } = useForm({
        code: '',
        name: 'Paket UMKM 20K',
        redeem_type: 'single_use',
        video_credits: '2',
        photo_enhance_credits: '3',
        max_redemptions: '50',
        expires_at: '',
    });

    const generateCode = () => {
        const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
        setData('code', `AI20-${suffix}`);
    };

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        post('/admin/ai-coupons', {
            preserveScroll: true,
            onSuccess: () => reset('code'),
        });
    };

    const copyCode = async (code: string) => {
        await navigator.clipboard.writeText(code);
    };

    return (
        <AdminLayout title="Kupon AI">
            <Head title="Kupon AI - Admin" />

            <div className="space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                            <Ticket className="h-6 w-6 text-primary" />
                            Kupon AI
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Buat kupon paket untuk video dan foto percantik.
                        </p>
                    </div>
                </div>

                {flash?.success && (
                    <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                        <CheckCircle className="h-5 w-5" />
                        {flash.success}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="rounded-2xl border border-border bg-card p-5">
                        <p className="text-sm text-muted-foreground">Kupon Aktif</p>
                        <p className="mt-2 text-3xl font-black">{summary.active_coupons}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5">
                        <p className="text-sm text-muted-foreground">Redeem</p>
                        <p className="mt-2 text-3xl font-black">{summary.total_redemptions}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5">
                        <p className="text-sm text-muted-foreground">Video Tersebar</p>
                        <p className="mt-2 text-3xl font-black">{summary.video_credits_distributed}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5">
                        <p className="text-sm text-muted-foreground">Foto Tersebar</p>
                        <p className="mt-2 text-3xl font-black">{summary.photo_credits_distributed}</p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
                    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                                <Plus className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h2 className="font-bold text-foreground">Buat kupon baru</h2>
                                <p className="text-sm text-muted-foreground">Default paket: 2 video + 3 foto.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium">Nama paket</label>
                                <input
                                    value={data.name}
                                    onChange={(event) => setData('name', event.target.value)}
                                    className="w-full rounded-xl border border-border bg-background px-4 py-2"
                                    placeholder="Paket UMKM 20K"
                                />
                                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">Kode kupon</label>
                                <div className="flex gap-2">
                                    <input
                                        value={data.code}
                                        onChange={(event) => setData('code', event.target.value.toUpperCase())}
                                        className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-2 font-mono font-black uppercase"
                                        placeholder="Kosongkan untuk otomatis"
                                    />
                                    <button
                                        type="button"
                                        onClick={generateCode}
                                        className="rounded-xl border border-border px-3 text-sm font-semibold hover:bg-muted"
                                    >
                                        Acak
                                    </button>
                                </div>
                                {errors.code && <p className="mt-1 text-xs text-red-500">{errors.code}</p>}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">Tipe pemakaian</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setData('redeem_type', 'single_use')}
                                        className={`rounded-xl border p-3 text-left ${data.redeem_type === 'single_use' ? 'border-primary bg-primary/5 text-primary' : 'border-border'}`}
                                    >
                                        <p className="font-bold">Sekali pakai</p>
                                        <p className="text-xs text-muted-foreground">Satu kode untuk satu akun.</p>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setData('redeem_type', 'multi_use')}
                                        className={`rounded-xl border p-3 text-left ${data.redeem_type === 'multi_use' ? 'border-primary bg-primary/5 text-primary' : 'border-border'}`}
                                    >
                                        <p className="font-bold">Banyak orang</p>
                                        <p className="text-xs text-muted-foreground">Satu kode dipakai banyak akun.</p>
                                    </button>
                                </div>
                                {errors.redeem_type && <p className="mt-1 text-xs text-red-500">{errors.redeem_type}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="mb-1 block text-sm font-medium">Kredit video</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={data.video_credits}
                                        onChange={(event) => setData('video_credits', event.target.value)}
                                        className="w-full rounded-xl border border-border bg-background px-4 py-2"
                                    />
                                    {errors.video_credits && <p className="mt-1 text-xs text-red-500">{errors.video_credits}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium">Kredit foto</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={data.photo_enhance_credits}
                                        onChange={(event) => setData('photo_enhance_credits', event.target.value)}
                                        className="w-full rounded-xl border border-border bg-background px-4 py-2"
                                    />
                                    {errors.photo_enhance_credits && <p className="mt-1 text-xs text-red-500">{errors.photo_enhance_credits}</p>}
                                </div>
                            </div>

                            {data.redeem_type === 'multi_use' && (
                                <div>
                                    <label className="mb-1 block text-sm font-medium">Batas pemakaian</label>
                                    <input
                                        type="number"
                                        min="2"
                                        value={data.max_redemptions}
                                        onChange={(event) => setData('max_redemptions', event.target.value)}
                                        className="w-full rounded-xl border border-border bg-background px-4 py-2"
                                    />
                                    {errors.max_redemptions && <p className="mt-1 text-xs text-red-500">{errors.max_redemptions}</p>}
                                </div>
                            )}

                            <div>
                                <label className="mb-1 block text-sm font-medium">Tanggal kedaluwarsa</label>
                                <input
                                    type="date"
                                    value={data.expires_at}
                                    onChange={(event) => setData('expires_at', event.target.value)}
                                    className="w-full rounded-xl border border-border bg-background px-4 py-2"
                                />
                                {errors.expires_at && <p className="mt-1 text-xs text-red-500">{errors.expires_at}</p>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-white disabled:opacity-50"
                        >
                            {processing ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5" />}
                            Simpan Kupon
                        </button>
                    </form>

                    <div className="rounded-2xl border border-border bg-card shadow-sm">
                        <div className="border-b border-border p-5">
                            <h2 className="font-bold text-foreground">Daftar kupon</h2>
                            <p className="text-sm text-muted-foreground">Kode yang siap dibagikan ke peserta acara.</p>
                        </div>

                        {coupons.data.length === 0 ? (
                            <div className="p-10 text-center text-muted-foreground">
                                <Ticket className="mx-auto mb-3 h-10 w-10 opacity-40" />
                                Belum ada kupon AI.
                            </div>
                        ) : (
                            <div className="divide-y divide-border">
                                {coupons.data.map((coupon) => {
                                    const progress = Math.min((coupon.redeemed_count / coupon.max_redemptions) * 100, 100);

                                    return (
                                        <div key={coupon.id} className="p-5">
                                            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                                                <div className="min-w-0">
                                                    <div className="mb-2 flex flex-wrap items-center gap-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => copyCode(coupon.code)}
                                                            className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 font-mono text-lg font-black text-slate-900 hover:bg-slate-200"
                                                        >
                                                            {coupon.code}
                                                            <Copy className="h-4 w-4 text-slate-500" />
                                                        </button>
                                                        <span className={`rounded-full px-2 py-1 text-xs font-bold ${coupon.is_active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                                                            {coupon.is_active ? 'Aktif' : 'Nonaktif'}
                                                        </span>
                                                        <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">
                                                            {coupon.redeem_type === 'single_use' ? 'Sekali pakai' : 'Banyak orang'}
                                                        </span>
                                                    </div>
                                                    <p className="font-semibold text-foreground">{coupon.name || 'Paket AI'}</p>
                                                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                                                        <span className="inline-flex items-center gap-1">
                                                            <Video className="h-4 w-4" />
                                                            {coupon.video_credits} video
                                                        </span>
                                                        <span className="inline-flex items-center gap-1">
                                                            <Image className="h-4 w-4" />
                                                            {coupon.photo_enhance_credits} foto
                                                        </span>
                                                        <span>
                                                            Dipakai {coupon.redeemed_count}/{coupon.max_redemptions}
                                                        </span>
                                                        {coupon.expires_at && (
                                                            <span>
                                                                Exp {new Date(coupon.expires_at).toLocaleDateString('id-ID')}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="mt-3 h-2 w-full max-w-md overflow-hidden rounded-full bg-slate-100">
                                                        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
                                                    </div>
                                                </div>

                                                <div className="flex shrink-0 gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => router.patch(`/admin/ai-coupons/${coupon.id}/toggle`, {}, { preserveScroll: true })}
                                                        className="rounded-xl border border-border p-2 text-muted-foreground hover:bg-muted"
                                                        title={coupon.is_active ? 'Nonaktifkan' : 'Aktifkan'}
                                                    >
                                                        <Power className="h-5 w-5" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => router.delete(`/admin/ai-coupons/${coupon.id}`, { preserveScroll: true })}
                                                        className="rounded-xl border border-red-200 p-2 text-red-600 hover:bg-red-50"
                                                        title="Hapus"
                                                    >
                                                        <Trash2 className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
