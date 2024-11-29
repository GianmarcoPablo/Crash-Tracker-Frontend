import Link from 'next/link'

interface Props {
    text: string
    url: string
}

export const NavigationUrl = ({ text, url }: Props) => {
    return (
        <nav className="mt-10 flex flex-col space-y-4">
            <Link
                href={url}
                className="text-center text-gray-500"
            >
                {text}
            </Link>
            
        </nav>
    )
}
