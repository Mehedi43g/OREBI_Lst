import Banner from "../Components/Banner"
import Banntw from "../Components/Banntw"
import BanThree from "../Components/BanThree"
import BanTxt from "../Components/BanTxt"
import BigTime from "../Components/BigTime"
 
const Home = () => {
    window.scrollTo(0,0);
     
    return (
        <>
        <Banner/>
        <Banntw/>
        <BanThree/>
        <BigTime/>
        <BanTxt/>
        </>
    )
}

export default Home
