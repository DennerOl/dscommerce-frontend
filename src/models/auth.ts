
export type CredentialsDTO = {

  username: string;
  password: string;
};

export type RoleEnun = "ROLE_ADMIN" | "ROLE_CLIENT";

export type AccessTokenPayloadDTO = {
  exp: number,
  user_name: string,
  authorities: RoleEnun[];
};