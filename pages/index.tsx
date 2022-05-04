import lists from "../data/lists";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <p className="flex items-center">
                {lists.map((list, i) => (
                    <Link href={`/${i}`}><a className="p-2 bg-gray-100 rounded mr-4">List {i + 1}</a></Link>
                ))}
            </p>
        </div>
    );
}