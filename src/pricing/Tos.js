const pricing = [
    {
        name: "Nitro Basic",
        des: "Pilihan terbaik untuk personal use dan hemat untuk permulaan.",
        price: "30",
        anualy: "bulan",
        list: ["50MB Upload", "Custom Emoji Anywhere", "Unlimited Super Reaction", "Special Nitro Badge on your profile"],
    },
    {
        name: "Nitro Boost",
        des: "Pilihan bagus untuk pengguna lama, tersedia banyak fitur untuk kebutuhan.",
        price: "60",
        anualy: "bulan",
        list: [
            "500MB Upload",
            "Custom Emoji Anywhere",
            "Unlimited Super Reaction",
            "Special Nitro Badge on your profile",
            "2 Server Boost",
            "Custom Profile and more",
        ],
    },
    {
        name: "Special ",
        des: "Khusus akun yang tidak pernah nitro sama sekali dan minimal umur akun 1 bulan.",
        price: "35",
        anualy: "3 bulan",
        list: [
            "500MB Upload",
            "Custom Emoji Anywhere",
            "Unlimited Super Reaction",
            "Special Nitro Badge on your profile",
            "2 Server Boost",
            "Custom Profile",
            "Custom App Icon",
            "Video Background",
            "Custom Sound",
            "Special Sticker Access",
        ],
    },
];

const Template = ({ name, des, price, anualy, list }) => {
    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-400 z-[100] shadow-md backdrop-blur-md bg-slate-800/50 rounded-lg  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{des}</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">Rp {price}k</span>
                <span className="text-gray-500 dark:text-gray-400">/{anualy}</span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
                {list.map((data) => (
                    <li className="flex items-center space-x-3">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span>{data}</span>
                    </li>
                ))}
            </ul>
            <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                Get started
            </a>
        </div>
    );
};

const Tos = () => {
    return (
        <section id="pricing" className="bg-slate-900 dark:bg-gray-900 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-slate-300 dark:text-white">Persyaratan dan Ketentuan</h2>
                    <p className="mb-5 font-light text-slate-300/50 sm:text-xl dark:text-gray-400">
                        Sebelum melakukan order nitro atau layanan lainnya, diharapkan kamu membaca dengan teliti persyaratan dan ketentuan kami yang
                        tertera dibawahi ini.
                    </p>
                </div>
                <div className="grid grid-rows-1 md:grid-rows-3 grid-flow-col gap-4 text-white ">
                    <div className="bg-slate-800/50 p-4 row-span-1 col-span-2 space-y-3 rounded-md ">
                        <h1 className="text-3xl font-bold">Garansi</h1>
                        <ul className="list-disc list-inside mb-4">
                            <li>30 hari untuk Nitro Gift 1 bulan</li>
                            <li>12 bulan untuk Nitro Gift 1 tahun</li>

                            <li>Penuh sesuai durasi</li>
                            <li>Hangus jika terkena revoke massal atau akun boost disable</li>
                            <li>Resiko revoke rendah untuk server boost 3 bulan</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 p-2 row-auto col-span-2  rounded-md ">
                        <h1 className="text-3xl font-bold">Pengembalian Dana</h1>
                        <ul className="list-disc list-inside mb-4">
                            <li>Hanya jika belum dikirim dalam 48 jam</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 p-2 row-auto  rounded-md ">
                        <h1 className="text-3xl font-bold">Persyaratan</h1>
                        <ul className="list-disc list-inside mb-4">
                            <li>Link invite minimal 1 hari expired dan unlimited user join</li>
                            <li>Boost annoucement channel</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 p-2 col-span-2 row-auto rounded-md ">
                        <h1 className="text-3xl font-bold">Stacking</h1>
                        <ul className="list-disc list-inside mb-4">
                            <li>Maksimal 3-5x claim per hari</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 p-2 row-auto rounded-md ">
                        <h1 className="text-3xl font-bold">Revoke</h1>
                        <ul className="list-disc list-inside mb-4">
                            <li>Penggantian/pengembalian dana dengan bukti kuat</li>
                            <li>Bukti tidak valid = garansi hangus</li>
                            <li>Tidak ada garansi untuk revoke massal</li>
                            <li>Bukti claim harus dalam 1x24 jam</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 p-2 row-auto rounded-md ">
                        <h1 className="text-3xl font-bold">Catatan</h1>
                        <ul className="list-disc list-inside mb-4">
                            <li>Nitro gift bisa ditumpuk.</li>
                            <li>Segera claim nitro gift setelah pembelian.</li>
                            <li>Disarankan untuk membaca seluruh ketentuan sebelum membeli.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tos;
