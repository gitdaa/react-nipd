export interface Ward {
  ward: number;
  name: string;
  shortname: string;
  group_name: string | null;
}

export interface LookupWardRequest {
  isFetching: boolean;
  data: Ward[];
  error: boolean;
  errorMessage: string | null;
  expireAt: Date | null;
}
