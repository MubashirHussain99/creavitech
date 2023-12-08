const initstate = {
  user_id: null,
  user_status: null,
  Project_id: null,
  User_name: null,
  Project_name: null,
  Nav_heading: "Home",
  Page_State: "/",
  team: null,
  teamID: null,
  refershProject: null,
  teamrefresh: null,
  overallRefresh: {},
};
export default function Reducer(state = initstate, action) {
  switch (action.type) {
    case "user_id":
      return { ...state, user_id: action.payload };
    case "user_status":
      return { ...state, user_status: action.payload };
    case "project_id":
      return { ...state, Project_id: action.payload };
    case "project_name":
      return { ...state, Project_name: action.payload };
    case "Nav_heading":
      return { ...state, Nav_heading: action.payload };
    case "page":
      return { ...state, Page_State: action.payload };
    case "username":
      return { ...state, User_name: action.payload };
    case "team":
      return { ...state, team: action.payload };
    case "teamID":
      return { ...state, teamID: action.payload };
    case "refershProject":
      return { ...state, refershProject: action.payload };
    case "overallRefresh":
      return { ...state, overallRefresh: action.payload };
    case "teamrefresh":
      return { ...state, teamrefresh: action.payload };
    default:
      return state;
  }
}
