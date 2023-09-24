import Jacket from '../assets/jacket2.jpeg'
import Jackets from '../assets/jacketfur.png'
import Pant from '../assets/pant2.jpeg'

function Newrelease() {
  return (
    <div className='py-5 px-5'>
        <h1 className='mb-4'><span className='text-red-500 text-sm'>01-NEW RELEASE</span> WE ALWAYS GIVE A DIFFERENT IMPRESSION FOR US</h1>
        <div className='flex justify-center align-center space-x-4'>
            <div>
                <h1><span className='text-red-500'>BY</span> LUIOSI TEE</h1>
                <div className='w-[356px]'>
                    <img src={Jacket} alt="men jacket" className='w-full'/>
                </div>
                <div className='flex gap-3 mt-4'>
                    <h1>ONION JACKET</h1>
                    <h1 className='text-green-500'>$280.00</h1>
                </div>
            </div>

            <div>
                <h1><span className='text-red-500'>BY</span> OTAVIO GWEN</h1>
                <div className='w-[240px]'>
                  <img src={Jackets} alt="men jacket" className='w-full'/>  
                </div>
                <div className='flex gap-3 mt-4'>
                    <h1>FURY TAIL</h1>
                    <h1 className='text-green-500'>$87.00</h1>
                </div>
            </div>

            <div className='-mt-9'>
                <h1><span className='text-red-500'>BY</span> ADAMS PRAY</h1>
                <div className='w-[290px]'>
                   <img src={Pant} alt="men pant" className='w-full'/> 
                </div>
                <div className='flex gap-3 mt-4'>
                    <h1>FANTA PANT</h1>
                    <h1 className='text-green-500'>$390.00</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newrelease