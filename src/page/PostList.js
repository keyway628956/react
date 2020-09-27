import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_POSTS_FOR_AUTHOR = gql`
  query PostsForAuthor {
    posts {
      id
      title
      body
    }
  }
`;

const PostList = () => (
    <Query query={GET_POSTS_FOR_AUTHOR}>
        {({ loading, error, data, refetch }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            const postList = data.posts.map(({ id, title }) => {
                return (
                    <li key={id} className="collection-item">
                        {title}
                    </li>
                );
            });

            return (
                <div>
                    <ul className="collection">{postList}</ul>
                </div>
            );
        }}
    </Query>


);
export default PostList;