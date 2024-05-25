import React from 'react'



const Webbanner = ({ tittle, subtop, image }) => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${image.src})` }} className='banner-img'>
                <div className='max-w-screen-2xl mx-auto  w-full h-full px-20'>
                    <div className='flex flex-col justify-center items-start  min-h-[420px]'>
                        {subtop && <h5 className='text-white'>{tittle ? subtop : ""}</h5>}
                        <h1 className='text-white text-5xl font-bold'>{tittle ? tittle : "Owings Web"}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Webbanner