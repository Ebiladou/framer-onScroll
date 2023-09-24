import Shirt from "../assets/shirt2.jpeg";
import Pant from "../assets/halfpant.jpeg";
import Shorts from "../assets/pant1.jpeg";
import Tee from "../assets/pant2.jpeg";


function Three() {
  return (
    <>
      <div className="mt-6 px-5">
        <h1 className="py-4 text-red-500">03-COLLECTIONS</h1>
        <div className="flex gap-4 items-center justify-center">
          <div className="relative">
            <img src={Pant} alt="shirt" className="w-[500px]"/>
            <div className="absolute top-0">
              <div>
                <h1 className="uppercase">Fanta Pant</h1>
                <p className="uppercase">Charcoal color dark</p>
                <button className="uppercase">Add to cart</button>
              </div>
              <div>
                <h1>$21.00</h1>
              </div>
            </div>
          </div>
          <div>
            <img src={Shirt} alt="pant" className="w-[557px]"/>
            <div>
              <h1 className="uppercase">Fanta Pant</h1>
              <p className="uppercase">Charcoal color dark</p>
            </div>
            <div>
              <h1 className="text-green-500">$21.00</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <div>
            <img src={Shorts} alt="pants" />
            <h1 className="flex gap-3 uppercase">Fanta Pant <span className="text-green-500">$390.00</span></h1>
        </div>
        <div>
            <img src={Tee} alt="pants" />
            <h1 className="flex gap-3 uppercase">Fanta Pant <span className="text-green-500">$390.00</span></h1>
        </div>
        <div>
            <img src={Shorts} alt="pants" />
            <h1 className="flex gap-3 uppercase">Fanta Pant <span className="text-green-500">$390.00</span></h1>
        </div>
        <div>
            <img src={Tee} alt="pants" />
            <h1 className="flex gap-3 uppercase">Fanta Pant <span className="text-green-500">$390.00</span></h1>
        </div>
      </div>
    </>
  );
}

export default Three;
