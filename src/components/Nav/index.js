import React, { useEffect } from "react";
//import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { sections = [], setCurrentCategory, currentCategory } = props;
  useEffect(() => {
    document.title = "Denisse Rivera " + currentCategory;
  }, [currentCategory]);

  return (
    <nav>
      <ul className="flex-row">
        {sections.map((section) => (
          <li
            className={`mx-2 ${currentCategory === section && "navActive"}`}
            key={section}
          >
            <span
              onClick={() => {
                setCurrentCategory(section);
              }}
            >
              {section}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
