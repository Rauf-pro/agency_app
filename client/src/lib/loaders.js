import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const profilePageLoader = async () => {
    const postPromise = apiRequest("/users/profilePosts");
    const chatPromise = apiRequest("/chats");
    return defer({
      postResponse: postPromise,
      chatResponse: chatPromise,
    });
  };

  