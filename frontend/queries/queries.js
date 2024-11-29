export const GET_TASK_BY_ID = (id) => `
  query  {
    task(id: ${id}) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_TASKS_BY_STATUS = (status) => `
  query {
    tasks(status: "${status}") {
      _id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_TASKS_QUERY = (search) => `
  query {
    tasks(search: "${search}") {
      _id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
