import { StarIcon } from "@heroicons/react/24/solid";

const user = [
    {
        name: "Aldi Ananda Prasetya",
        role: "Admin Sekte Nitro",
        des: "Nitro Discord adalah game changer! Emoji kustomnya super keren dan lencana profilnya membuat saya merasa istimewa. Streaming video berkualitas tinggi juga sangat membantu saat saya ingin berbagi momen terbaik saya dengan teman-teman.",
        photo: "./Images/aldi.png",
    },
    {
        name: "Sadam Husein",
        role: "Ceo Sekte Nitro",
        des: "Saya menggunakan Discord untuk berkomunikasi dengan tim saya dan Nitro Discord sangat membantu untuk meningkatkan alur kerja kami. Server boost membantu server kami berjalan lebih lancar dan fitur-fitur lainnya seperti emoji kustom dan lencana profil membuat komunikasi kami lebih menyenangkan dan efisien.",
        photo: "./Images/sadam.gif",
    },
    {
        name: "Josep",
        role: "Admin Sekte Nitro",
        des: "Nitro Discord adalah cara terbaik untuk meningkatkan pengalaman Discord Anda. Fitur-fiturnya yang eksklusif membantu Anda untuk mengekspresikan diri dengan lebih baik, membangun komunitas yang lebih kuat, dan mendapatkan lebih banyak dari Discord.",
        photo: "./Images/josep.png",
    },
];

const Template = ({ name, role, des, photo }) => {
    return (
        <section class="bg-slate-800/50 h-full rounded-lg  shadow-md backdrop-blur-md mx-4">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure class="max-w-screen-md mx-auto">
                    <svg
                        class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    {/* <div className="flex justify-center gap-5 mb-2">
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    </div> */}
                    <blockquote>
                        <p class="text-xl font-medium text-slate-300/50 dark:text-white">{des}</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <img class="w-6 h-6 rounded-full" src={photo} alt="profile picture" />
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div class="pr-3 font-medium text-slate-100/50 dark:text-white">{name}</div>
                            <div class="pl-3 text-sm font-light text-slate-300/50 dark:text-gray-400">{role}</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

const Testimony = () => {
    return (
        <div>
            <div class="mx-auto max-w-screen-md text-center lg:mb-12">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-slate-300 dark:text-white">Testimoni pengguna discord</h2>
                <p class="mb-6 font-light text-slate-300/50 sm:text-xl dark:text-gray-400">
                    Kamu dapat melihat review-review pembeli kami dari sini, kamu dapat melihat bahwa kami sepenuhnya dengan cepat menanggapi hingga
                    selesai ke semua pembeli kami
                </p>
                <div class="flex justify-center w-auto p-2 items-center gap-5 flex-col mx-4 text-white md:flex-row">
                    <div class="h-auto p-2 w-screen rounded-lg bg-slate-800/50">
                        <h1 className="mb-2 text-lg font-medium">Nitro Basic</h1>
                        <div className="flex justify-center gap-5 mb-2">
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        </div>
                        <span className="text-slate-500">3 Terjual</span>
                    </div>
                    <div class="h-auto p-2 w-screen rounded-lg bg-slate-800/50">
                        <h1 className="mb-2 text-lg font-medium">Nitro Boost</h1>
                        <div className="flex justify-center gap-5 mb-2">
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            {/* <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" /> */}
                        </div>
                        <span className="text-slate-500">18 Terjual</span>
                    </div>
                    <div class="h-auto p-2 w-screen rounded-lg bg-slate-800/50">
                        <h1 className="mb-2 text-lg font-medium">Lainnya</h1>
                        <div className="flex justify-center gap-5 mb-2">
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        </div>
                        <span className="text-slate-500">1 Terjual</span>
                    </div>
                </div>
            </div>
            <div id="testimony" className="grid grid-cols-1 md:grid-cols-3 gap-3 py-12 place-items-start">
                {user.map((data, i) => (
                    <Template name={data.name} role={data.role} des={data.des} photo={data.photo} />
                ))}
            </div>
        </div>
    );
};

export default Testimony;
