import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const DifferentPropertiesBoxes = ({titl,title,title1,title2,title3,title4,title5,title6,title7,title8}) => {
  return (
    <div className="bodynew">
      <div class="mb-home__collection-search__card card-shadow card-new-properties">
        <a
          href=""
          id="lastSearchURL"
          target="_blank"
          onclick="fireCollectionGTM(event,'Properties listed for you','1/4');"
        >
          <div class="mb-home__collection-search__card__title">
            <span 
              class="mb-home__collection-search__card__title--count"
              id="propertyCount"
            >
              {title}
            </span>
            {title2}

            {title1}
            {title3}
            {title4}

            {title6} 
            {/* <br/> */}
            {/* {title7} */}

            <br/>
            {title5}
          </div>
          <span class="mb-home__collection-search__card--anchor">
            {titl}
           {title8} <FontAwesomeIcon icon={faArrowRight} />
              </span>
        </a>
      </div>
    </div>
  );
};
