import axios from "axios";
import React, { useState } from "react";
import CardList from "../CardList";
import properties from '../../properties'
import { SearchBuyProperties } from "./components/SearchBuyProperties";
import { BudgetSearch } from "./components/BudgetSearch";






const SearchPage = () => {
  const [city, setCity] = useState();
  const [propertytype, setpropertytype] = useState();
  const [budget, setBudget] = useState();
  const [BHK_1, setBHK_1] = useState(false)
  const [BHK_2, setBHK_2] = useState(false)
  const [BHK_3, setBHK_3] = useState(false)
  const [minprice, setMinPrice] = useState()
  const [maxprice, setMaxPrice] = useState()

  const [searchdata, setSearchData] = useState([]);

  const search = () => {
    const allData = { city: city, propertytype: propertytype, budget: budget, BHK_1:BHK_1,BHK_2:BHK_2,BHK_3:BHK_3,minprice:minprice,maxprice:maxprice };
    console.log(allData);

    // setSearchData([allData]);

    fetchData(allData)

    async function fetchData(allData) {
      const searchData = await axios.get(properties.search_url, { params: allData })
      // console.log(searchData.data.data);
      setSearchData(searchData.data.data);


    }
  }

  return (
    <>

      <div className="d-flex justify-content-center h-100">

        <div className="searchbar">



          <select className="property"

            defaultValue={propertytype}
            onChange={(e) => setpropertytype(e.target.value)}

          >
            <option selected value="">Property Type</option>
            <option value="Flat/Apartment">Flat/Apartment</option>
            <option value="Vila">Vila</option>
            <option value="Pent House">Pent House</option>
            <option value="Residential House">Residential House</option>
          </select>
          <SearchBuyProperties
            BHK_1={BHK_1}
            setBHK_1={setBHK_1}
            BHK_2={BHK_2}
            setBHK_2={setBHK_2}
            BHK_3={BHK_3}
            setBHK_3={setBHK_3}

          />


          <select className="city"
            defaultValue={city}
            onChange={(e) => setCity(e.target.value)}

          >
            <option selected value="">Select City</option>
            <option value="kanpur">kanpur</option>
            <option value="Lucknow">Lucknow</option>
            <option value="unnao">unnao</option>
            <option value="aligarh">aligarh</option>
          </select>

          <select className="budget"

            defaultValue={budget}
            onChange={(e) => setBudget(e.target.value)}

          >
            <option selected value="">Select Budget</option>
            <option value="100000">100000 </option>
            <option value="500000">500000 </option>
            <option value="100000">100000 </option>
            <option value="600000">600000 </option>
          </select>
          <br/>
          <BudgetSearch
          maxprice={ maxprice}
          setMaxPrice={setMaxPrice}
          minprice={ minprice}
          setMinPrice={setMinPrice}
          />
          <button type="button" className="search_icon" onClick={search}>search</button>

        </div>
      </div>




      <div>
        {
          searchdata.map((searchprop, index) => {
            return (
              <CardList
                id={searchprop.id}
                city={searchprop.city}
                location={searchprop.location}
                purpus={searchprop.reason}
                total_price={searchprop.total_price}
                per_sqt_ft={searchprop.per_square_fit}
                type={searchprop.type}
                bedroom={searchprop.bedroom}
                bathroom={searchprop.bathroom}
                balcony={searchprop.balcony}
                BHK_1={searchprop.BHK_1}
                BHK_2={searchprop.BHK_2}
                BHK_3={searchprop.BHK_3}
              />)
          })

        }

      </div>


    </>
  );
}

export default SearchPage;



