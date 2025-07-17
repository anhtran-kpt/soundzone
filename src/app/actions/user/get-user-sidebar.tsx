"use server";

export const getUserSidebar = async (userSlug: string) => {
  try {
  } catch (error) {
    console.error("[GET_USER_SIDEBAR]", error);

    throw new Error("[GET_USER_SIDEBAR]: Something went wrong!");
  }
};
