import Link from "next/link";
import Profile from "./profile";

const Layout = ({ children }) => {

    return (
        <>

            <div >
                {children}
            </div>

            <Profile />
            {/* <div className="flex flex-row gap-6 h-48 mt-16 flex-wrap items-center justify-center bg-slate-300 w-full">
                <Link href={'mailto:H.K.Rezapour@gmail.com'}>H.K.Rezapour@gmail.com</Link>
                <Link href={'https://t.me/HosseinRezapour'}>Telegram</Link>
                <Link href={'tel:+989141106794'}>تماس با من</Link>
            </div> */}
        </>
    )

}

export default Layout;
