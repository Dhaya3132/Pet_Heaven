import React from "react";
import { Content_Data } from "../Data/Content";
import Dog from '../assets/pngwing.com.png'
import Dog1 from '../assets/image3-removebg-preview.png'
import Dog3 from '../assets/DogFood3.png'
import Button from "./Button";

function Body() {
    return (
        <div id="Body" className="font-JosefinSans">
            <h3 className="text-6xl font-bold text-center text-black italic">Pet <span className="italic text-6xl font-bold text-center">Heaven</span></h3>
            <p className="text-center font-light text-slate-400 text-xl mt-3">{Content_Data.Slogan}</p>
            <div className="flex justify-center items-center mt-10 gap-10 mx-auto">
                <div>
                    <div className="w-80">
                        <p className="font-light text-3xl text-slate-700 mt-1">
                            {Content_Data.Description}
                        </p>
                        <img src={Dog3} alt="image" className="w-44 h-44 mt-2" />
                    </div>
                </div>

                <div id="images" className="w-1/3 h-1/6 rounded-full bg-Star shadow-2xl">
                    <img src={Dog} alt="image" className="w-full h-full " />
                </div>

                <div className="relative w-80">
                    <div className="absolute bottom-4 z-0">
                        <img src={Dog1} alt="image" className="w-44 h-50" />
                        <p className="font-light text-4xl text-slate-900 mb-4">
                            Purr-fect Companions, Paw-some Services
                        </p>
                        <Button>Shop now</Button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Body;