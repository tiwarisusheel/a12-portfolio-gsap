
export const GET_PROJECTS = `
  query GetProjects {
    allProjects {
      id
      title
      description
      projectDate
      client
      tags
      techStack
      projectUrl
      slug
      images {
        id
        url
        alt
        width
        height
      }
    }
  }
`;
