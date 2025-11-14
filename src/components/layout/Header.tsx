import Link from "next/link";
import { Dropdown } from "../ui";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="">
      <div className="mx-auto px-4 py-13 sm:px-6 lg:px-12  flex items-center h-16">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/icons/dailyhelplogo.svg"
          alt="DailyHelp Logo"
          width={120}
          height={40}
        />
      </Link>

      {/* Dropdown Button (aligned right) */}
      <div className="ml-auto text-[14px] font-bold text-[#121921]">
        <Dropdown
          buttonContent={
            <Image
              src="/icons/dropdown.svg"
              alt="Menu"
              width={35}
              height={35}
            />
          }
        >
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About us</Link>
          <Link href="/how-it-works" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">How DailyHelp Works</Link>
          <Link href="/founders-corners" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Founders Corner</Link>
          <Link href="/ethics-guide" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Business Ethics & Compliance Guide</Link>
          <Link href="/faqs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">FAQ et Contacts</Link>
        </Dropdown>
      </div>
    </div>

    </header>
  );
};

export default Header;

