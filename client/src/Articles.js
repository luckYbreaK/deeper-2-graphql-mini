import React, { Component } from "react";
import gql from "graphql-tag";
//graphql is similar to Redux connect in how it is implemented
import { graphql } from "react-apollo";

class Articles extends Component {
    render() {
        return (
            <div>
                {/* pulls the GraphQL response from props and displays it */}
                {/* apollo includes loading, can use ifLoading() display loader */}
                {JSON.stringify(this.props.articles)}
            </div>
        );
    }
}

//query tool similar to axios
const getArticles = gql`
{
    articles {
        id
        url
        title
    }
}    
`
//graphql is passed the query and an object that will be passed to props
export default graphql(getArticles, { name: "articles" })(Articles);