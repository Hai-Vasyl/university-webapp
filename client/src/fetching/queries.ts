import { gql } from "@apollo/client"

export const LOGIN_USER = gql`
  query LOGIN_USER($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
    }
  }
`

export const GET_DATA_USER = gql`
  query GET_DATA_USER($userId: String!) {
    getUser(userId: $userId) {
      id
      email
      ava
      color
      firstname
      confirmed
      lastname
      middlename
      phone
      address
      birth
      role
      date
    }
  }
`

export const GET_USERS = gql`
  query GET_USERS {
    getAllUsers {
      id
      email
      ava
      color
      firstname
      lastname
      role
    }
  }
`

export const REGISTER_USER = gql`
  query REGISTER_USER(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $isAdmin: Boolean
    $role: String
    $group: String
  ) {
    register(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      isAdmin: $isAdmin
      role: $role
      group: $group
    ) {
      userId
      token
    }
  }
`

// export const GET_USER_CHATS = gql`
//   query GET_USER_CHATS {
//     userChats {
//       id
//       title
//       channel
//       description
//       date
//       image
//       owner {
//         id
//       }
//       owners {
//         id
//         username
//         ava
//         email
//       }
//       type
//       lastMessage {
//         id
//         content
//         date
//         owner {
//           id
//           username
//           email
//         }
//         chat {
//           id
//         }
//       }
//     }
//   }
// `

// export const GET_USER_CHATS_ONLY = gql`
//   query GET_USER_CHATS_ONLY($userId: ID) {
//     userChats(userId: $userId) {
//       id
//       type
//     }
//   }
// `

// export const GET_USER_NOTIFICATIONS = gql`
//   query GET_USER_NOTIFICATIONS {
//     getNotifications {
//       id
//       title
//       description
//       channel
//       active
//       date
//       type
//       userId {
//         id
//         username
//         email
//         typeUser
//         ava
//       }
//       chatId {
//         id
//         title
//         type
//         image
//       }
//     }
//   }
// `

// export const GET_CHAT_USERS = gql`
//   query GET_CHAT_USERS($chatId: ID!) {
//     getChatUsers(chatId: $chatId) {
//       id
//       username
//       email
//       typeUser
//       ava
//     }
//   }
// `

// export const GET_CHAT_MESSAGES = gql`
//   query GET_CHAT_MESSAGES($chat: ID!) {
//     chatMessages(chat: $chat) {
//       id
//       content
//       date
//       owner {
//         id
//         username
//         ava
//       }
//       chat {
//         id
//       }
//     }
//   }
// `

// export const GET_UNREAD_MESSAGES = gql`
//   query GET_UNREAD_MESSAGES {
//     getUnreadMessages {
//       id
//       content
//       date
//       owner {
//         id
//         username
//         ava
//       }
//       chat {
//         id
//       }
//     }
//   }
// `

// export const SEARCH_CHATS = gql`
//   query SEARCH_CHATS($searchStr: String!) {
//     searchChats(searchStr: $searchStr) {
//       users {
//         id
//         username
//         email
//         ava
//       }
//       chats {
//         id
//         title
//         image
//         type
//         owner {
//           id
//         }
//       }
//     }
//   }
// `
// export const SEARCH_MESSAGES = gql`
//   query SEARCH_MESSAGES($searchStr: String!, $chatId: String!) {
//     searchMessages(searchStr: $searchStr, chatId: $chatId) {
//       id
//       content
//       date
//       owner {
//         id
//         username
//         ava
//       }
//       chat {
//         id
//       }
//     }
//   }
// `
// export const GET_CHAT_INFO = gql`
//   query GET_CHAT_INFO($isChat: Boolean!, $id: ID!) {
//     getChatUserInfo(isChat: $isChat, id: $id) {
//       user {
//         id
//         username
//         email
//         ava
//         firstname
//         lastname
//         date
//         typeUser
//       }
//       chat {
//         id
//         title
//         description
//         date
//         image
//         owner {
//           id
//           username
//           email
//           ava
//           typeUser
//         }
//         type
//       }
//     }
//   }
// `

export const GET_PAGE = gql`
  query GET_PAGE($url: String!) {
    getPage(url: $url) {
      id
      url
      image
      date
    }
  }
`

export const SEARCH_CONTENT = gql`
  query SEARCH_CONTENT($search: String, $tags: String) {
    searchContent(search: $search, tags: $tags) {
      images {
        id
        owner {
          id
        }
        date
        location
        type
      }
      news {
        id
        title
        date
        category
        dateEvent
        links {
          link
          label
        }
        preview {
          id
          location
        }
      }
      events {
        id
        title
        date
        category
        dateEvent
        links {
          link
          label
        }
        preview {
          id
          location
        }
      }
      other {
        id
        page
        url
        title
        content
        date
      }
    }
  }
`

export const GET_IMAGES = gql`
  query GET_IMAGES($from: Int!, $to: Int!, $search: String, $type: String) {
    getImages(from: $from, to: $to, search: $search, type: $type) {
      images {
        id
        owner {
          id
        }
        date
        location
        type
      }
      quantity
    }
  }
`

export const GET_IMAGE = gql`
  query GET_IMAGE($imageId: ID!) {
    getImage(imageId: $imageId) {
      id
      owner {
        id
        email
        ava
        color
        firstname
        lastname
        role
      }
      date
      location
      content
      type
      key
      hashtags
      description
      format
    }
  }
`

export const GET_NEWS_EVENTS = gql`
  query GET_NEWS_EVENTS(
    $search: String
    $type: String!
    $category: String
    $dateFrom: String
    $dateTo: String
    $from: Int!
    $to: Int!
    $exceptId: ID
  ) {
    getNewsEvents(
      search: $search
      type: $type
      category: $category
      dateFrom: $dateFrom
      dateTo: $dateTo
      from: $from
      to: $to
      exceptId: $exceptId
    ) {
      items {
        id
        title
        date
        category
        dateEvent
        links {
          link
          label
        }
        preview {
          id
          location
        }
      }
      quantity
    }
  }
`

export const GET_NEWS_EVENTS_DETAILED = gql`
  query GET_NEWS_EVENTS_DETAILED(
    $search: String
    $type: String!
    $category: String
    $dateFrom: String
    $dateTo: String
    $from: Int!
    $to: Int!
    $exceptId: ID
  ) {
    getNewsEvents(
      search: $search
      type: $type
      category: $category
      dateFrom: $dateFrom
      dateTo: $dateTo
      from: $from
      to: $to
      exceptId: $exceptId
    ) {
      items {
        id
        title
        content
        type
        owner {
          id
          email
          ava
          color
          firstname
          lastname
          role
        }
        date
        category
        dateEvent
        preview {
          id
          location
        }
        links {
          link
          label
        }
      }
      quantity
    }
  }
`

export const GET_NEWS_EVENT = gql`
  query GET_NEWS_EVENT($contentId: ID!, $type: String!) {
    getNewsEvent(contentId: $contentId, type: $type) {
      id
      title
      content
      type
      owner {
        id
        email
        ava
        color
        firstname
        lastname
        role
      }
      date
      category
      dateEvent
      links {
        link
        label
      }
    }
  }
`

export const GET_CONTENT_IMAGES = gql`
  query GET_CONTENT_IMAGES($contentId: ID!) {
    getContentImages(contentId: $contentId) {
      id
      date
      location
      hashtags
      description
      type
      owner {
        id
      }
    }
  }
`

export const GET_PAGE_SECTIONS = gql`
  query GET_PAGE_SECTIONS(
    $search: String
    $url: String!
    $filters: [InputFilter]!
    $from: Int!
    $to: Int
  ) {
    getPageSections(
      search: $search
      url: $url
      filters: $filters
      from: $from
      to: $to
    ) {
      items {
        id
        page
        url
        title
        content
        priority
        date
        uploads {
          id
          location
          content
          type
          hashtags
          description
          format
          owner {
            id
          }
          date
        }
        owner {
          id
        }
        filters {
          id
          url
          section
          keyWord
          value
        }
      }
      quantity
    }
  }
`

export const GET_PAGE_SECTION = gql`
  query GET_PAGE_SECTION($sectionId: ID!) {
    getPageSection(sectionId: $sectionId) {
      id
      page
      url
      title
      content
      priority
      date
      uploads {
        id
        location
        content
        type
        hashtags
        description
        format
        owner {
          id
        }
        date
      }
      owner {
        id
      }
      filters {
        id
        url
        section
        keyWord
        value
      }
    }
  }
`

export const GET_PAGE_SECTIONS_SHORT = gql`
  query GET_PAGE_SECTIONS_SHORT(
    $search: String
    $url: String!
    $filters: [InputFilter]!
    $from: Int!
    $to: Int
    $exceptId: ID
  ) {
    getPageSections(
      search: $search
      url: $url
      filters: $filters
      from: $from
      to: $to
      exceptId: $exceptId
    ) {
      items {
        id
        page
        url
        title
        priority
        date
        uploads {
          id
          location
          content
          type
          hashtags
          description
          format
          owner {
            id
          }
          date
        }
        owner {
          id
        }
        filters {
          id
          url
          section
          keyWord
          value
        }
      }
      quantity
    }
  }
`

export const GET_PAGE_FILTERS = gql`
  query GET_PAGE_FILTERS($url: String!) {
    getFilters(url: $url) {
      id
      url
      keyWord
      value
    }
  }
`
