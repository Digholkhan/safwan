import { useState } from "react";
import Logo from "../../../assets/logo.png";
import Button from "../../Button";
import { Link } from "react-router-dom";


const menuList = [

  {
    link : "",
    name : "Home"
  },
  {
    link : "about",
    name : "About"
  },
  {
    link : "services",
    name : "Services"
  },
  {
    link : "blog",
    name : "Blog"
  },
  {
    link : "contact",
    name : "Contact"
  },
];



const Navbar = () => {
  const [active,setActive] = useState(0)
  const List = () => {
    return menuList.map((item, index) => <Link to={`/${item.link}`} onClick={() => setActive(index)} className={index === active ? 'text-primary': 'text-secondary'} key={index}>{item.name}</Link>);
  };
  return (
    <>
      <nav className="py-5">
        <div className="container flex justify-between items-center">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <ul className="flex gap-10">
              <List />
            </ul>
          </div>
          <div>
            <Button text="Download CV" className='btn'/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
