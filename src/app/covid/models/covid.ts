export type List<T> = {
  results: T[];
};

export type Covid = {
  txn_date: string;
  province: string;
  new_case: number;
  total_case: number;
  new_case_excludeabroad: number;
  total_case_excludeabroad: number;
  new_death: number;
  total_death: number;
  new_recovered: number;
  total_recovered: number;
  update_date: string;
};

export function parseList(data : any) : List<unknown> {
  return{
    ...data,
  }
}

export function parseResult(data : any) : any & {
  txn_date: Date,
  update_date: Date }{
    return {
      ...data
    }
  }

//COVID
export function parseCovid(data: any) : Covid {
  return {
    ...parseResult(data),
    total_case: data.total_case,
  }
}

export function parseCovidList(data: any) : List<Covid>{
  return{
    ...parseList(data),
    results: data,
  }
}

