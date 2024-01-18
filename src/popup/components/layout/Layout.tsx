import { h, ComponentChildren } from "preact";
import BuyCoffeeButton from "../buyCoffeeButton/BuyCoffeeButton";

interface LayoutProps {
  children: ComponentChildren;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-900 text-white flex flex-col justify-between w-96 p-4">
      <div className="mx-auto">
        <p>testoo</p>
      </div>

      {children}

      <div className="mx-auto">
        <BuyCoffeeButton />
      </div>
    </div>
  )
}
export default Layout