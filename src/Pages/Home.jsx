import Banner from "../Components/Banner"
import ContactForm from "../Components/ContactForm"
import Discount from "../Components/Discount"


import Gallery2 from "../Components/Gallery2"
import PageTitle from "../Components/PageTitle"
import ToyTabs from "../Components/toyTabs"


const Home = () => {

  return (
    <div>
      <PageTitle title={"Home"}></PageTitle>
      <Banner></Banner>
      <Gallery2></Gallery2>
      <Discount ></Discount>
      <ToyTabs></ToyTabs>
      <ContactForm></ContactForm>
    </div>
  )
}

export default Home
