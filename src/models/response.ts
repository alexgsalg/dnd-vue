export interface DefRequest {
  data: DefRes;
}

export interface DefRes {
  results: [] | {};
  count: number | NumberConstructor;
  // results: Record<any>;
}
