import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-to-full mx-auto'>
      
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Your life <span className='text-blue-400'>in order</span></h1>
      </div>
      
      <p className='text-sm md:text-base font-light'>I hereby acknowledge that, by signing up, I may experience an unquenchable thirst for fitness gains and accept all risks of becoming an absolute powerhouse.<br></br> I recognize that this may include, but is not limited to:
        Transforming into a <span className='text-blue-400 font-medium'>locally renowned fitness legend</span>,
        Developing an uncontainable craving for protein,<br></br>
        Requiring increasingly <span className='text-blue-400 font-medium'>larger shirts</span>,
        Causing nearby mortals to tremble at <span className='text-blue-400 font-medium'>your glorious form</span>,
        And, of course, occasional bouts of uncontrollable mirror admiration.<br></br>
        I accept these terms with valor, fully aware that I may one day flex through walls, accidentally intimidate small animals, and forever seek new horizons of gym domination.</p>

        <Button text={"Accept & Begin"}></Button>

    </div>
  )
}
