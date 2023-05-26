import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/Km89RzX/toy-car-rc-sports.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 animate-pulse  text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text"> Adventure with Turbo Cars!</h1>
            <p className="mb-5 text-xl">
            Explore our Sports Toy Collection today and bring the spirit of sports into your playtime. Get ready for endless adventures, friendly competitions, and unforgettable moments with our incredible selection of sports toys.
            </p>
           <Link to="/alltoy"> <button className="btn btn-primary">Explore</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
