import Link from "next/link";
import Image from "next/image";
import errorImage from "../../public/assets/2634442.jpg";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md">

                <Image
                    src={errorImage}
                    alt="404 error page"
                    width={800}
                    height={800}
                    className="mx-auto mb-6 "
                />

                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-blue-300 text-white rounded-lg hover:bg-blue-400 transition"
                >
                    Back to HomePage
                </Link>

            </div>
        </div>
    );
}