import gql from 'graphql-tag';

export const GET_USER = gql`
query User {
  auth{
    profile{
      firstName,
      lastName,
      phone
    }
  }
}
`;

export const ALL_GAMES = gql`
query AllGames{
  store {
    games {
      id
    }
  }
}
`;

export const CARD_GAME = gql`
query CardGame($id: ID!) {
  store {
    game(id: $id) {
      __typename
      id
      title
      description
      slug
      media {
        screenshots {
          url
        }
      }
      pricing {
        price
        discount
        currency
      }
      genres{
        name
      }
      platforms
    }
  }
}
`;
