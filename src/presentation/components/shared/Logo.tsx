import Image from "next/image"

export const Logo = () => {
    return (
        <Image src={"/logo.svg"} width={400} height={100} alt="Icono" priority className="w-96" />
    )
}