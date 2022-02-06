import React from 'react';

import SearchController from './searchController';
import SearchView from './searchView';

export default function Searchbar() {

    return (
        <>
            <SearchController>
                <SearchView/>
            </SearchController>
        </>
        
    )
}
