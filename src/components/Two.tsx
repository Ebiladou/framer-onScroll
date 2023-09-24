import Pants from '../assets/pant1.jpeg'

function Two() {
  return (
    <div className='flex gap-3 justify-center items-center mt-8'>
        <div className='w-[350px]'>
            <img src={Pants} alt="men pant" className='w-full' />
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-red-500'>02-MATERIAL TECHNOLOGY</h1>
            <h1>SEE HOW WE ARE USING MATERIAL TECHNOLOGY TO BUILD THE FUTURE</h1>
        </div>
    </div>
  )
}

export default Two