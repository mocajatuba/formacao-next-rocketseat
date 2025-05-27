import Link from "next/link"
import { Logo } from "../logo"

export const Footer = () => {
    return (
        <footer className="bg-gray-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:flex-row gap-8 py-8">
                    <Logo />
                    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
                        <Link href="/termo-de-uso" className="houver:text-blue-200">Termo de uso</Link>
                        <Link href="/politica-de-privacidade" className="houver:text-blue-200">Política de privacidade</Link>
                        <Link href="/feedback" className="houver:text-blue-200">Feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}