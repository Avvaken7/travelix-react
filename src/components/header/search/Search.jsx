import React from 'react';

import "./search.css"

const Search = () => {

    return (
        <fieldset>
            <form action="#">
                <div className="form_group">
                    <label htmlFor="location">Location<br/>
                        <input type="text" id="location" name="location" />
                    </label>

                    <label htmlFor="in">Check in<br/>
                        <input type="date" id="in" name="in" placeholder="Add dates" />
                    </label>                   
                    <label htmlFor="out">Check out<br/>
                        <input type="date" id="out" name="out" placeholder="Add dates" />
                    </label>                    
                    <input type="submit" />
                </div>
            </form>
        </fieldset>
    )


}

export default Search;