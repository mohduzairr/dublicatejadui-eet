import React from "react";

export const DifferentPropertiesBoxes = () => {
  return (
    <div className="body">
      <div class="mb-home__collection-search__card card-shadow card-new-properties">
        <a
          href="https://www.magicbricks.com/property-for-sale/residential-real-estate?proptype=Multistorey-Apartment,Builder-Floor-Apartment,Penthouse,Studio-Apartment&amp;cityName=Chennai"
          id="lastSearchURL"
          target="_blank"
          onclick="fireCollectionGTM(event,'Properties listed for you','1/4');"
        >
          <div class="mb-home__collection-search__card__title">
            <span
              class="mb-home__collection-search__card__title--count"
              id="propertyCount"
            >
              13K+
            </span>
            Properties listed for you
          </div>
          <span class="mb-home__collection-search__card--anchor">
            Continue last search
          </span>
        </a>
      </div>
    </div>
  );
};
