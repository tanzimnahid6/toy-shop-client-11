import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-slate-300  p-10  text-base-content rounded">
        <div className="grid grid-flow-col gap-4 ">
          <Link to="/">Home</Link>
          <Link to="/alltoy">All Toy</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <div className="flex gap-2 items-center -mt-6">
          <div >
              <img className="rounded-full w-8 h-8 " src="https://i.ibb.co/4Vny0mF/pexels-ruvim-3767673.jpg" />
            </div>
            <h1 className="text-3xl  font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              TurboCar
            </h1>
          </div>
        </div>
        <div className="-mt-6">
          <p>
            © 2023 TurboCar Limited. All rights reserved. Accelerate into the
            future with <br /> TurboCar innovative automotive solutions
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
