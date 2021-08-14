// import { UserInfo } from 'src/types/login';

export interface ErrorResponse {
  errors: any[];
  message: string;
  status_code: number;
}

export interface ServerResponse<DataType> {
  status: string;
  data: DataType;
  error: ErrorResponse;
}
