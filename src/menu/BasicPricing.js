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
        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-400 z-[100] shadow-md backdrop-blur-md bg-slate-800/50 rounded-lg  dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">{name}</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{des}</p>
            <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">Rp {price}k</span>
                <span class="text-gray-500 dark:text-gray-400">/{anualy}</span>
            </div>
            <ul class="mb-8 space-y-4 text-left">
                {list.map((data) => (
                    <li class="flex items-center space-x-3">
                        <svg
                            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                Get started
            </a>
        </div>
    );
};

const BasicPricing = () => {
    return (
        <section id="pricing" class="bg-slate-900 dark:bg-gray-900 ">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-slate-300 dark:text-white">
                        Layanan nitro yang dirancang untuk kamu
                    </h2>
                    <p class="mb-5 font-light text-slate-300/50 sm:text-xl dark:text-gray-400">
                        Disini kamu dapat memilih layanan nitro sesuai kebutuhan kamu, direkomendasikan yang terbaik dari terbaik, termurah dari yang
                        termurah dan aman terpercaya.
                    </p>
                </div>
                <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {pricing.map((data) => (
                        <Template name={data.name} des={data.des} price={data.price} anualy={data.anualy} list={data.list} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BasicPricing;
