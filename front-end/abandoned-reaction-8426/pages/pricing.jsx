import Footer from '../components/Footer';
import Subscription from '../components/Home-Components/Subscription';
import Navbar from '../components/Navbar';
import Early from '../components/Pricing-Components/Early';
import Frequently from '../components/Pricing-Components/Frequently';
import PriceModal from '../components/Pricing-Components/Modal';
import Pricing_Header from '../components/Pricing-Components/Pricing_Header';
const pricing = () => {
    return (
        <>
            <Navbar />
            <Pricing_Header />
            <PriceModal />
            <Early />
            <Frequently />
            <Subscription />
            <Footer />
        </>
    )
}

export default pricing