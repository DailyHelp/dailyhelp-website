'use client'
import React, { useState, ReactNode, useRef, useEffect } from "react";

interface DropdownProps {
  buttonContent: ReactNode;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  buttonContent,
  children,
  
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* no default styles now */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer border-none">
        {buttonContent}
      </div>

      {isOpen && (
        <div
          className={`absolute mt-2  w-[95vw] bg-white border 
            border-gray-200 rounded-md shadow-lg z-50 right-0 `}
        >
          <div className="py-1 ">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
