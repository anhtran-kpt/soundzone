import { UserActions } from "./user.actions";

export type UserDetail = Awaited<ReturnType<typeof UserActions.getBySlug>>;
export type UserList = Awaited<ReturnType<typeof UserActions.getList>>;
export type UserInfo = Awaited<ReturnType<typeof UserActions.getInfo>>;
