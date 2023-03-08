interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string | null;
}
export default LoginSchema
