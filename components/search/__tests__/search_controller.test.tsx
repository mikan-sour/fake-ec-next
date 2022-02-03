import React from 'react';
import renderer from 'react-test-renderer';
import SearchController from '../searchController';


describe('Search controller', ()=> {

    test('Tests Search Controller',()=> {
        const el = renderer.create(<SearchController/>);
        let tree = el.toJSON();
        expect(tree).toMatchSnapshot();
    })
})