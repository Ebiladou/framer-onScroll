import Shirt from '../assets/shirt1.jpeg'
import Cap from '../assets/cap.jpeg'
import Attire from '../assets/nerdfit.jpeg'

function Four() {
  return (
    <div className='mt-9 px-4'>
        <h1 className='text-red-500'>04-SISHA DESIGNER</h1>
        <div className='flex gap-4 justify-center items-center'>
            <div className='flex flex-col gap-4'>
                <h1 className='uppercase'>fashionable man wears clothes. The clothes don't wear him</h1>
                <div className='flex items-center gap-3'>
                    <div className='w-[330px]'>
                        <img src={Shirt} alt="clothe" className='w-full'/>
                        <h1 className='flex gap-4'>FORMAL SHIRT <span className='text-green-500'>$39.00</span></h1>
                    </div>
                    <div className='w-[230px]'>
                        <img src={Cap} alt="clothe"className='w-full' />
                        <h1 className='flex gap-4'>BUREY CAP <span className='text-green-500'>$980.00</span></h1>
                    </div>
                </div>
            </div>
            <div className='w-[280px] -mt-3'>
                <img src={Attire} alt="shirt" className='w-full'/>
                <h1 className='flex gap-4'>SUMMER DUMP <span className='text-green-500'>$980.00</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Four