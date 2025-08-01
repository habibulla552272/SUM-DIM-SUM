import Banner from "@/component/Banner/Banner";
import ContactPage from "@/component/contact/ContactPage";
import CustomerReview from "@/component/CustomerReview/CustomerReview";
import DiveSumptuous from "@/component/DiveSumptuous/DiveSumptuous";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import OurStory from "@/component/OurStory/OurStory";
import ReserveTable from "@/component/ReserveTable/ReserveTable";
import TasteTradition from "@/component/TasteTradition/TasteTradition";


export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <OurStory />
    <TasteTradition />
    <DiveSumptuous />
    <CustomerReview />
    <ReserveTable />
    <ContactPage />
    <Footer />
    </>
  );
}
