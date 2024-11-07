import { React, useState } from "react";
import cow from './../assets/cow.png'
import { motion } from "framer-motion";

function Setting({settings, setSettings, setCount, setPage }) {

    const [temp, setTemp] = useState(settings)


    const updateSetting = (key, value) => {
            setTemp((prev) => ({...prev, [key]: value }));
    }

    const applySetting = () => {
        setSettings(temp)
        setPage('main')
        setCount(temp.origin)
    }

    return <motion.div
        className="absolute top-0 z-10 flex flex-col items-center w-full h-screen gap-5 p-10 bg-dark/20 backdrop-blur-lg text-light"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >

        <div className="flex items-center justify-center mx-auto mt-10 size-48">
            <img src={cow} alt="cow Image" />
        </div>
        <h1 className="mt-3 font-semibold text-7xl">Settings</h1>
        <div>
            <div className="grid w-full grid-cols-2 grid-rows-2 gap-5 p-5 rounded-xl bg-dark/10 backdrop-blur-md">
                    {/* counter customisation */}
                    <div className="col-span-1 row-span-2 p-5 border-[2px] border-light/50 rounded-xl flex flex-col justify-evenly items-center">
                        {/* <h3 className="text-xl font-medium">Limit</h3> */}
                        <div className="flex items-center justify-around gap-2">
                            <label htmlFor="origin">Start Value</label>
                            <input id="origin" type="text" value={temp.origin} className="rounded-lg bg-dark/50 h-8 w-16 px-2 text-sm border-light/40 border-[1px]" onChange={(e) => updateSetting('origin',Number(e.target.value))} />
                        </div>
                        <div className="flex items-center justify-around gap-2">
                            <label htmlFor="lower">lowerBound</label>
                            <input id="lower" type="text" value={temp.lowerBound} className="rounded-lg bg-dark/50 h-8 w-16 px-2 text-sm border-light/40 border-[1px]" onChange={(e) => updateSetting('lowerBound',Number(e.target.value)) } />
                        </div>
                        <div className="flex items-center justify-around gap-2">
                            <label htmlFor="upper">Upper Limit</label>
                            <input id="upper" type="text" value={temp.upperBound} className="rounded-lg bg-dark/50 h-8 w-16 px-2 text-sm border-light/40 border-[1px]" onChange={(e) => updateSetting('upperBound',Number(e.target.value))} />
                        </div>
                        <div className="flex items-center justify-around w-full gap-2">
                            <label htmlFor="step">Step Size</label>
                            <input id="step" value={temp.stepSize} type="text"  className="rounded-lg bg-dark/50 h-8 w-16 px-2 text-sm border-light/40 border-[1px] "  onChange={(e) => updateSetting('stepSize',Number(e.target.value))} />
                        </div>
                </div>
                {/* theme color */}
                <div className="col-span-1 row-span-1 p-5 border-[2px] border-light/50 rounded-xl flex  flex-col items-center justify-center gap-4">
                    <h3>Theme Color</h3>
                    <div className="inline-flex items-center justify-around gap-4">
                        {['pink', 'rose', 'blue', 'green', 'light'].map((color, index) => (
                        <div className={`rounded-full bg-${color} size-6`} key={index} onClick={() => updateSetting('theme', color)}></div>
                        ))}
                    </div>
                </div>
                {/* Action buttton */}
                <div className="col-span-1 row-span-1 p-5 border-[2px] border-light/50 rounded-xl  flex flex-col items-center justify-center gap-4">
                    <h1>Apply Settings</h1>
                    <div className="flex justify-between gap-4">
                    <motion.button
                        whileHover={{
                            backgroundColor: "#f5f5f5", // Light color
                            color: "#333",               // Dark text color
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                        onClick={() => {
                            applySetting()
                        }}
                        className="py-2 px-5 text-sm  border-[1px] rounded-lg  border-light/40">Apply</motion.button>
                    <motion.button onClick={() => setPage('main')}
                        whileHover={{
                            backgroundColor: "#f5f5f5", // Light color
                            color: "#333",               // Dark text color
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                        className="py-2 px-5 text-sm  border-[1px] rounded-lg  border-light/40"
                    >Cancel</motion.button>
                    </div>
                </div>
            </div>
        </div>

    </motion.div>
}

export default Setting
