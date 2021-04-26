import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="relative py-16 sm:p-32 flex flex-col items-center sm:items-start bg-05">
             <h1 className="text-center sm:text-left text-2xl sm:text-4xl lg:text-5xl mb-8">agency.prizm@gmail.com</h1>
            <Link href="/request">
                <a className="sm:ml-8 text-xl sm:text-2xl lg:text-3xl border-b pb-1">Оставить заявку</a>
            </Link>
        </footer>
    )
}
