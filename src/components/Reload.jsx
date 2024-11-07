import { React } from "react";
import lion from './../assets/lion.png'
import { motion } from "framer-motion";

function Reload({ setCount, setPage }) {
    return <motion.div
        className="absolute top-0 z-10 flex flex-col items-center w-full h-screen gap-5 p-10 bg-dark/20 backdrop-blur-lg text-light"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
        <div className="flex items-center justify-center mx-auto mt-10 size-60">
            <img src={lion} alt="reboot image" />
        </div>
        <h1 className="mt-3 font-semibold text-center text-7xl">Reset Counter ?</h1>
        <div className="flex items-center gap-10 mt-10">
            <motion.button
                whileHover={{
                    backgroundColor: "#f5f5f5", // Light color
                    color: "#333",               // Dark text color
                    transition: { duration: 0.3, ease: "easeInOut" }
                }}
                onClick={() => {
                    setCount(0)
                    setPage('main')
                }}
                className="py-2 text-lg font-semibold border-[1px] rounded-lg px-7 border-light/40">Agree</motion.button>
            <motion.button onClick={() => setPage('main')}
             whileHover={{
                backgroundColor: "#f5f5f5", // Light color
                color: "#333",               // Dark text color
                transition: { duration: 0.3, ease: "easeInOut" }
            }}
                className="py-2 text-lg font-semibold rounded-lg border-[1px] px-7 border-light/40"
            >Cancel</motion.button>
        </div>

    </motion.div>
}

export default Reload;
