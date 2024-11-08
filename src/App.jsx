import { React, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavBar from './components/NavBar'
import Reload from './components/Reload'
import Setting from './components/Setting'
import Preloader from './components/PreLoader'

function App() {
    // New loading state
    const [loading, setLoading] = useState(true);

     // Simulate loading effect
     useEffect(() => {
        setTimeout(() => setLoading(false), 2000); // adjust timing as needed
    }, []);



    // setting parameters
    const [settings, setSettings] = useState({
        lowerBound: 0,
        upperBound: 20,
        theme: 'light',
        origin: 0,
        stepSize: 1
    })

    // base parameters
    const [count, setCount] = useState(settings.origin)
    const [totalClicks, setTotalClicks] = useState(settings.upperBound - settings.lowerBound)
    const [page, setPage] = useState('main')


    if (loading) {

        // Show preloader while loading is true
        return <AnimatePresence>
            <Preloader />;
            </AnimatePresence>
    }

    return <>
        <div className=''>
            <div className={`flex flex-col justify-between w-full h-screen p-10 bg-dark text-${settings.theme}`}>
                {/* nav bar  */}
                <NavBar setPage={setPage} theme={settings.theme} />
                {/* core function  */}
                <div className='flex items-center justify-between '>
                    <div onClick={() => count > settings.lowerBound && setCount(count - settings.stepSize)} className={`relative flex ${count > settings.lowerBound ? 'opacity-100' : 'opacity-0'} items-center justify-center border-[1px] rounded-full size-16 border-${settings.theme}/30`}>
                        <div className={`absolute h-1 w-7 bg-${settings.theme}/30`}></div>
                    </div>
                    <h1 className='text-[240px] '>{count}</h1>
                    <div onClick={() => count < settings.upperBound && setCount(count + settings.stepSize)} className={`relative flex items-center justify-center rounded-full border-[1px] size-16 border-${settings.theme}/30 ${count < settings.upperBound ? 'opacity-100' : 'opacity-0'}`}>
                        <div  className={`absolute h-1 w-7 bg-${settings.theme}`}></div>
                        <div  className={`absolute h-7 w-1 bg-${settings.theme}`}></div>
                    </div>
                </div>
                {/* footer */}
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-4xl opacity-80'>{((totalClicks - count) / settings.stepSize)}</h3>
                    <h4 className='text-sm tracking-widest uppercase opacity-70'>Available</h4>
                </div>
            </div>
        </div>
        < AnimatePresence>
            {page == 'reboot' && <Reload setCount={setCount} setPage={setPage} />}
            {page == 'setting' && <Setting settings={settings} setSettings={setSettings} setCount={setCount} setPage={setPage} />}
        </AnimatePresence>
    </>

}

export default App;
