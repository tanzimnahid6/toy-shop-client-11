import { useEffect, useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import Card from "./Card"

const ToyTabs = () => {
  const [toys, setToys] = useState([])
  const [sportCar, setSportCar] = useState([])
  const [regularCar, setRegularCar] = useState([])
  const [policeCar, setPoliceCar] = useState([])

  useEffect(() => {
    fetch(`https://toy-shop-server-one.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => setToys(data))
  }, [])

  const handleTab = (car) => {
    console.log(car)
    const car1 = toys.filter((toy) => toy.category == "sports_car")
    setSportCar(car1)
    const car2 = toys.filter((toy) => toy.category == "regular_car")
    setRegularCar(car2)
    const car3 = toys.filter((toy) => toy.category == "mini_police_car")
    setPoliceCar(car3)
  }

  return (
    <div className="text-center mt-12">
    <h1 className="text-center my-8   text-3xl font-bold bg-gradient-to-r from-green-700 to-red-600 text-transparent bg-clip-text">You Can Find Our Toy By Category Wise </h1>
      <Tabs>
        <TabList>
          <Tab>All Toy</Tab>
          <Tab onClick={() => handleTab("sports_car")}>Sports Car</Tab>
          <Tab onClick={() => handleTab("regular_car")}>Regular Car</Tab>
          <Tab onClick={() => handleTab("mini_police_car")}>
            Mini Police Car
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 w-full place-items-center gap-8 my-8  p-8 md:grid-cols-3">
            {toys.slice(0,15).map((toy) => (
              <Card toy={toy} key={toy._id}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 w-full place-items-center gap-8 my-8  p-8 md:grid-cols-3">
            {sportCar.map((toy) => (
              <Card toy={toy} key={toy._id}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 w-full place-items-center gap-8 my-8  p-8 md:grid-cols-3">
            {regularCar.map((toy) => (
              <Card toy={toy} key={toy._id}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 w-full place-items-center gap-8 my-8  p-8 md:grid-cols-3">
            {policeCar.map((toy) => (
              <Card toy={toy} key={toy._id}></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ToyTabs
