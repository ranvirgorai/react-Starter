import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App'
import moxios from 'moxios'

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest("https://jsonplaceholder.typicode.com/comments",{
        status:200,
        response:[{ name:"Hello" },{ name:"world" }]
    })
})

afterEach(()=>{
moxios.uninstall();
})

it('can fetch list of document and display them',(done)=>{
    const wrapped=mount(<Root><App></App></Root>);
    wrapped.find(".fetch-comments").simulate("click");
    moxios.wait(()=>{
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done()
    })
    
})


