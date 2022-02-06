import React from 'react';
import renderer from 'react-test-renderer';
import SearchController from '../searchController';
import SearchView from '../searchView';

describe('Search controller', ()=> {

    test('Tests Search Controller',()=> {
        const el = renderer.create(<SearchController><SearchView/></SearchController>);
        let tree = el.toJSON();
        expect(tree).toMatchSnapshot();
    })
})