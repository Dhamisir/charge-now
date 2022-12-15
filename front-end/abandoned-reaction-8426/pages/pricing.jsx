import Footer from '../components/Footer';
import Subscription from '../components/Home-Components/Subscription';
import Navbar from '../components/Navbar';
import PriceModal from '../components/Pricing-Components/Modal';
import Pricing_Header from '../components/Pricing-Components/Pricing_Header';
const pricing = () => {
    return (
        <>
            <Navbar />
            <Pricing_Header />
            <PriceModal />
            <Subscription />
            <Footer />
        </>
    )
}

export default pricing