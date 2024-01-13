'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({children}:{children:string}) {

	return(
		<>
        <Navbar/>
			{children}
		<Footer/>
		</>
	)
}