import React from 'react'

function Search() {
    return (
        <div className="container">
        <div className="mb-search  mb-search-banner ">
            <div className="mb-container">
                <div className="mb-search-container">
                    <div className="mb-search__heading" >Find a home you'll <span>love</span></div>



                    <div className="mb-search__tab container">
                        <div className="mb-search__tab__item active"><span className="text4">Buy</span></div>
                        <div className="mb-search__tab__item active"><span className="text4">Rent</span></div>
                        <div className="mb-search__tab__item active"><span className="text4">PG</span></div>
                        <div className="mb-search__tab__item active"><span className="text4">Plot</span></div>
                        <div className="mb-search__tab__item active"><span className="text4">Commercial</span></div>
                        <div className="mb-search__tab__item overclass"><span className="text4">Post Free Ad</span> </div>

                    </div>

                    <div className="mb-search__wrap">

                        <div className="mb-search__location">
                            <div className="mb-search__location__tag-wrap forFlexView mb-search__compact-view">
                                {/* <input type="text" className="mb-search__input" placeholder="Enter City, Locality, Project" /> */}
                                 <select class="city">
                                   <option selected="" value="">Select City</option>
                                   <option value="kanpur">kanpur</option>
                                   <option value="Lucknow">Lucknow</option>
                                   <option value="unnao">unnao</option>
                                   <option value="aligarh">aligarh</option>
                                 </select>
                            </div>
                        </div>

                        <div className="mb-search__property">
                            <div className="navbar-nav1">


                                <div className="dropdown1">
                                    <a href="#" data-toggle="dropdown">
                                    <select className="property">
                                    <option selected="" value="">Select Property</option>
                                    <option value="kanpur">Flat/Apartment</option>
                                    <option value="Lucknow">Villa</option>
                                    <option value="unnao">Residential House</option>
                                    <option value="aligarh">Pent House</option>
                                    </select>
                                        {/* <span className="text5" onclick="myFunction1()" >Property<i className="bi bi-caret-down-fill"></i></span> */}
                                  </a>
                                    <div id="myDropdown1" className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                        <div className="menu3">


                                            <div className="rtitle">Residential</div>
                                            <div className="contents1">
                                                <label className="items">Flats</label>
                                                <label className="items">House/Villa</label>
                                                <label className="items">Plot</label>
                                            </div>

                                            <div className="rtitle">Commercial</div>
                                            <div className="contents1">
                                                <label className="items">Office Space</label>
                                                <label className="items">Shop/Showroom</label>
                                                <label className="items">Commercial Land</label>
                                            </div>

                                            <div className="rtitle">Other Property Types</div>
                                            <div className="contents1">
                                                <label className="items">Agricultural Land</label>
                                                <label className="items">Farm House</label>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="budget">
                            <div className="navbar-nav1">


                                <div className="dropdown1">
                                    <a href="#" data-toggle="dropdown"><span className="text5" onclick="myFunction()" >Budget<i className="bi bi-caret-down-fill"></i></span></a>
                                    <div id="myDropdown" className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                        <div className="menu3">
                                            <div className="drop-call">
                                                <div className="drop-heading">



                                                    <div className="div3">
                                                        <input className="button1" onclick="switchVisible()" type="text" name="Max" placeholder="max price" size="8" />
                                                        <input className="button1" onclick="switchVisible()" type="text" name="Min" placeholder="min price" size="8" />

                                                        <select name="Max" id="div1">

                                                            <li><option value="1">Max</option></li>
                                                            <li><option value="2">5lac</option></li>
                                                            <li><option value="3">20lac</option></li>
                                                            <li><option value="4">30lac</option></li>
                                                            <li><option value="5">50lac</option></li>
                                                        </select>

                                                        <select name="Min" id="div2">
                                                            <li><option value="1">Min</option></li>
                                                            <li><option value="2">5lac</option></li>
                                                            <li><option value="3">20lac</option></li>
                                                            <li><option value="4">30lac</option></li>
                                                            <li><option value="5">50lac</option></li>
                                                        </select>
                                                    </div>




                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mb-search__btn">
                            <span className="mb-search__btn__icon"> Search</span>
                        </div>
                    </div>



                </div>



            </div>
            <div className="search-payrent-banner card-shadow">
                <a href="#" target="_blank">
                    <img className="img1" src="images/hoamloan.jpg" alt="Home Loan" /></a>

            </div>
        </div>
    </div>
    )
}

export default Search
