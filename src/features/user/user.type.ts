import { UserActions } from "./user.actions";

export type UserDetail = Awaited<ReturnType<typeof UserActions.getById>>;
export type UserList = Awaited<ReturnType<typeof UserActions.getList>>;
