function Header() {
  return (
    <>
    <div className="bg-green-400">
        <p className="text-center py-2">Sign up and get 20% off all sisha collection</p>
    </div>
    <nav className="flex justify-between space-x-4 border-b-2 py-5 px-5">
        <ul className="flex gap-4">
            <li>TOP 2023</li>
            <li>COLLECTIONS</li>
            <li>SISHA DESIGNS</li>
        </ul>

        <ul className="flex gap-4">
            <li>MY CART</li>
            <li>WISHLIST</li>
        </ul>
    </nav>
    </>
  )
}

export default Header