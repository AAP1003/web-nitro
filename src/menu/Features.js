import { ForwardIcon, CheckBadgeIcon, ListBulletIcon } from "@heroicons/react/20/solid";

const features = [
    {
        name: "Cepat Dilayani.",
        description: "Saat kamu memulai order, proses order akan cepat kami tanggapi hingga selesai.",
        icon: ForwardIcon,
    },
    {
        name: "Terpercaya.",
        description: "Kami terjamin amanah, melakukan proses order dari awal hingga akhir dan terverifikasi aman.",
        icon: CheckBadgeIcon,
    },
    {
        name: "Layanan.",
        description: "Selain berfokus pada Nitro Discord, kami juga menyediakan layanan langganan lainnya",
        icon: ListBulletIcon,
    },
];

export default function Features() {
    return (
        <div id="features" className="overflow-hidden bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Join Discord Kami</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Sekte Discord</p>
                            <p className="mt-6 text-lg leading-8 text-slate-200/50">
                                Join Discord kami untuk mendapatkan informasi up to date dan terkini. Lihat menu-menu layanan yang kami sediakan
                                dengan harga yang dominan terjangkau
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9 ">
                                        <dt className="inline font-semibold text-slate-200/50">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline text-slate-200/50">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="./Images/Discord.png"
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    );
}
