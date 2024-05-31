import { useState } from "react";
import Carousel from "../../component/Home/carousel";

import Color from "../../hooks/Color"
import ReactHook from "../../hooks/Hook"

const Home = () => {
  const [color, setColor] = useState('');

  return (
    // <div>
    //   <ReactHook />

    //   <div className={`${color} p-20`}>{color}</div>

    //   <Color
    //     buttonName="Change To Blue"
    //     colorChange={() => setColor("bg-blue-500")}
    //     buttonColor = {"bg-blue-500"}
    //   />

    //   <Color
    //     buttonName="Change To Yellow"
    //     colorChange={() => setColor("bg-yellow-500")}
    //     buttonColor = {"bg-yellow-500"}
    //   />
    //   <Color
    //     buttonName="Change To Purple"
    //     colorChange={() => setColor("bg-purple-500")}
    //     buttonColor = {"bg-purple-500"}
    //   />
    //   <Color
    //     buttonName="Change To Red"
    //     colorChange={() => setColor("bg-red-500")}
    //     buttonColor = {"bg-red-500"}
    //   />
    //   <Color
    //     buttonName="Change To Pink"
    //     colorChange={() => setColor("bg-pink-500")}
    //     buttonColor = {"bg-pink-500"}
    //   />
    // </div>

    <div>
      <Carousel />
    </div>
  )
}

export default Home