import Image from 'next/image'
import NatureImage from '../../../public/image.jpg'
export default function Profile(){
	return (
		<>
			<h1>My Profile</h1>
			<Image src={NatureImage} alt={'profile photo'} width={500} height={500}/>
		</>

	)
}