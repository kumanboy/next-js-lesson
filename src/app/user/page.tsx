import {Roboto} from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: "500"
})
export default function User(){
	return(
		<>
			<h1 className={roboto.className}>Userlar ro'yxati</h1>
			<h2>John</h2>
			<h2>Alex</h2>
			<h2>Doe</h2>
		</>
	)
}

export  const generateMetadata = () => {
	return{
		title: "User Pagega xush kelibsiz",
		description:'User haqida malumot'
	}
}