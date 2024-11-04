import React, { useState } from 'react'

const Hero = () => {

    const [selectYear, setSelectYear] = useState('')

    const handleChange = (e) => {
        setSelectYear(event.target.value)
    }

    const yearOptions = {
        '1997-2012': 'Gen Z',
        '1981-1996': 'Millennials',
        '1965-1980': 'Gen X',
        '1955-1964': 'Boomers II (a/k/a Generation Jones)*',
        '1946-1954': 'Boomers I*',
        '1928-1945': 'Post War',
        '1922-1927': 'WWII (World War II)',
    };
    
    
  return (
    <div>
        <div className='flex flex-col items-center justify-center text-white'>
        <h1 className='sm:text-4xl text-center m-10 text-2xl'>Find <span className='text-green-500'>Generation</span> Name</h1>
        <select value={selectYear} onChange={handleChange} name="" id="" className='px-7 py-2 border border-black bg-[#414141]'>
            <option value="">Select Year of Birth</option>
            {
                Object.keys(yearOptions).map((year) => (
                    <option value={year} key={year}>{year}</option>
                ))
            }
        </select>

        {
            selectYear && (
                <>
                    <p className='text-2xl m-8'>You are <span className='text-green-500 font-bold text-xl'>{yearOptions[selectYear]}</span></p>
                    
                </>
            )
        }
        </div>

        {/* <div className='flex items-end justify-center'>
            <p className='text-gray-400'>&copy; | Moinuddin</p>
        </div> */}

        <div className='flex items-end justify-center my-4'>
            <p className='text-gray-400'>&copy; | Moinuddin</p>
        </div>

    
    </div>
  )
}

export default Hero