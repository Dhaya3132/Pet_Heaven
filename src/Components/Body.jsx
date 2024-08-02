import React from "react";
import { Content_Data } from "../Data/Content";
import Dog from '../assets/pngwing.com.png'
import Button from "./Button";

function Body() {
    return (
        <div id="Body" className="font-JosefinSans">
            <h3 className="text-6xl font-bold text-center text-black italic">Pet <span className="italic text-6xl font-bold text-center">Heaven</span></h3>
            <p className="text-center font-light text-slate-400 text-xl mt-3">{Content_Data.Slogan}</p>
            <div className="flex justify-center items-center mt-10 gap-10 mx-auto">
                <div>
                    <div className="w-80">
                        <Button>Order now</Button>
                        <p className="font-light text-3xl text-slate-400 mt-1">
                            {Content_Data.Description}
                        </p>
                    </div>
                </div>

                <div id="images" className="w-1/3 h-1/6 rounded-full bg-pink-200">
                    <img src={Dog} alt="image" className="w-full h-full " />
                </div>

                <div className="relative w-80">
                    <div className="absolute bottom-7">
                        <p className="font-light text-2xl text-slate-400 mb-2">
                            {Content_Data.Description}
                        </p>
                        <Button>Shop now</Button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Body;