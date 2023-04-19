import Button from "@/components/ui/Button";
import Link from "next/link";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";
import { MdSwapHoriz } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed mt-10 gap-3 top-0 flex  w-full flex-col justify-around px-24 text-white ">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-yellow-500">TopTech</h1>
        </Link>
        <div className="flex items-center gap-3 ">
          <Link href="/compare">
            <MdSwapHoriz size={24} className="hover:text-hover" />
          </Link>
          <Button>
            <IoSearchOutline size={24} className="hover:text-hover" />
          </Button>
          <Link href="/wishlist">
            <IoHeartOutline size={24} className="hover:text-hover" />
          </Link>
          <Link href="/cart">
            <IoCartOutline size={24} className="hover:text-hover" />
          </Link>
        </div>
      </div>

      <div className="flex  w-full text-sm justify-center gap-4 py-2 bg-black/50">
        <Link className="hover:text-hover" href="/laptops">
          LAPTOPS
        </Link>
        <Link className="hover:text-hover" href="/desktops">
          DESKTOPS
        </Link>
        <Link className="hover:text-hover" href="/monitors">
          MONITORS
        </Link>
        <Link className="hover:text-hover" href="/graphic-cards">
          GRAPHIC CARDS
        </Link>
        <Link className="hover:text-hover" href="/motherboard">
          MOTHERBOARD
        </Link>
        <Link className="hover:text-hover" href="/gamin-gears">
          GAMING GEARS
        </Link>
        <Link className="hover:text-hover" href="/pc-components">
          PC COMPONENTS
        </Link>
      </div>
    </header>
  );
};

export default Header;
