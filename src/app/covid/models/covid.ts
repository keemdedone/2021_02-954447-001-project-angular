export type List<T> = {
  results: T[];
};

export type Covid = {
  txn_date: Date;
  province: string;
  new_case: number;
  total_case: number;
  new_case_excludeabroad: number;
  total_case_excludeabroad: number;
  new_death: number;
  total_death: number;
  new_recovered: number;
  total_recovered: number;
  update_date: Date;
};

//covid
export function parseProvinceList(data: any): List<Covid> {
  return {
    results: data,
  };
}

export function parseCovid(data: any): Covid {
  return {
    ...data,
  };
}
