import React from 'react';

import "./search.css"

const Search = () => {

    return (
        <section className="search container">
            <fieldset>
                <form action="#">
                    <div className="form_group">
                        <label htmlFor="location">Location<br />
                            <input type="text" id="location" name="location" placeholder='Where are you going?' />
                        </label>
                        <label htmlFor="in">Check in<br />
                            <input type="date" id="in" name="in" placeholder="Add dates" />
                        </label>
                        <label htmlFor="out">Check out<br />
                            <input type="date" id="out" name="out" placeholder="Add dates" />
                        </label>
                        <button type='submit'>Search
                            <img src="../images/search.svg" alt="search" className="form_group-img" />
                        </button>
                    </div>
                </form>
            </fieldset>
        </section>
    )


}

export default Search;