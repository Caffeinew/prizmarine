import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full text-gray-300 font-thin p-32 relative z-10 bg-gray-05">
            <h1 className="text-5xl ml-20">agency.prizm@gmail.com</h1>
            <Link href="/request">
                <a className="ml-24 mt-8 text-3xl border-b py-2">Оставить заявку</a>
            </Link>
        </footer>
    )
}
