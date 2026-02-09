export interface AuthLoginResponse {
    message: string;
  data: {
    token: string;
    user: {
      id: number;
      email: string;
    };
  };

}