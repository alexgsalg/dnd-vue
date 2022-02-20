export interface DefRequest {
  data: DefRes;
}

export interface DefRes {
  count: number;
  results: Record<string, unknown>;
}
