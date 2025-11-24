import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { faCaretDown, faGlobe, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();

//   const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
 const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
        >
           <div className='text-md items-center flex'> <FontAwesomeIcon icon={faGlobe} style={{ color: '#00000' }} />{t('Language')}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
        </button>
      </div>

      {isOpen && (
        <div className="absolute  w-48 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {/* {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </button>
            ))} */}
    {/* <div className="flex flex-col items-start"> */}
            <button   onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> English</button>
            <button  onClick={() => changeLanguage('hi')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Europe</button>
            <button  onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> France</button>
{/* </div> */}
          </div>
        </div>
      )}
    </div> 
  );
};

export default DropdownMenu;
