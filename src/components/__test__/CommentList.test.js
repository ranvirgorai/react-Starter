import React from 'react'
import {mount} from 'enzyme'
import CommentList from 'components/CommentList';
import Root from 'Root';
let wrapped;
beforeEach(()=>{
    const initialState={comments:["hello","world"]}
    wrapped=mount(<Root initialState={initialState}>
        <CommentList/>
    </Root>)
})

it("create one LI pre comment",()=>{
 expect(wrapped.find('li').length).toEqual(2);
})

it("create one LI pre comment",()=>{
    expect(wrapped.render().text()).toContain("hello");
    expect(wrapped.render().text()).toContain("world");
   })