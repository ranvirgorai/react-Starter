import React, { Component } from 'react'
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CommentList extends Component {
  

    renderComments(){
        return this.props.comments.map(item=><li key={item}>{item}</li>)
    }


    render() {
        return (
          <div>
              <ul>
                  {this.renderComments()}
              </ul>
          </div>
        )
    }
}
function mapStateToProps(state,ownProps){
    return{
        comments:state.comments
    }
}
export default connect(mapStateToProps,actions)(CommentList);