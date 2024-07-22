export default function LoginLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-sky-100">{children}</div>
    )
}