import SearchView from '../searchView';
import React from 'react';
import renderer from 'react-test-renderer';
import { useSearchContext } from '../../../hooks';


describe('Search view', ()=> {

    
    // represents a prop
    const handleUpdate = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log(event.currentTarget.value)
    }


    test('Tests Search View',()=> {
        const el = renderer.create(<SearchView handleUpdate={handleUpdate} value={'My test'}/>);
        let tree = el.toJSON();
        expect(tree).toMatchSnapshot();
    })
})