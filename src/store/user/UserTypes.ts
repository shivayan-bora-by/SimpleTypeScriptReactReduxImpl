export interface IUser {
    username: string | undefined;
    userMessage: string | undefined;
    friendList?: string[] | undefined;
}

export const UserActions = {
    SAVE_USERNAME: 'SAVE_USERNAME',
    SAVE_USER_MESSAGE: 'SAVE_USER_MESSAGE',
    SAVE_FRIENDS: 'SAVE_FRIENDS',
}

interface ISaveUsernameAction {
    type: typeof UserActions.SAVE_USERNAME,
    payload: IUser
}

interface ISaveUserMessageAction {
    type: typeof UserActions.SAVE_USER_MESSAGE,
    payload: IUser
}

interface ISaveFriendsAction {
    type: typeof UserActions.SAVE_FRIENDS,
    payload: string[]
}

export type IUserActionTypes = ISaveUsernameAction | 
    ISaveUserMessageAction |
    ISaveFriendsAction;