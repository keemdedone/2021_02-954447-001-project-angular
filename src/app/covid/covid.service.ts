import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  CovidDay,
  CovidProvince,
  List,
  parseTimeLineCasesAll,
  parseCovidDayList,
  parseProvinceList,
  CovidTimelineCasesAll,
  CovidNews,
  parseNewsList,
  Articles,
} from '../models/covid';
import { parseVaccine, Vaccination } from '../models/vaccination';
import { VaccinationFormData } from './vaccine-form/vaccine-form.component';

const urlAllProvinces =
  'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';

const urlAllDay = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';

const urlAll = 'https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all';

const urlNews =
  'https://newsapi.org/v2/everything?q=โควิด&apiKey=14d38d8d7fed4e52ac551060f40bbd16';

const urlVaccinationAll =
  'https://guarded-ridge-75359.herokuapp.com/api/vaccination';

const urlVaccinationCreate =
  'https://guarded-ridge-75359.herokuapp.com/api/vaccination';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private readonly http: HttpClient) {}

  getAllProvinces(): Observable<List<CovidProvince>> {
    return this.http
      .get(urlAllProvinces)
      .pipe(map((data) => parseProvinceList(data)));
  }

  getAllDay(): Observable<List<CovidDay>> {
    return this.http
      .get(urlAllDay)
      .pipe(map((data) => parseCovidDayList(data)));
  }

  timelineCasesAll(): Observable<CovidTimelineCasesAll> {
    return this.http
      .get(urlAll)
      .pipe(map((data) => parseTimeLineCasesAll(data)));
  }

  getAllNews(): Observable<Array<Articles>> {
    return this.http
      .get(urlNews)
      .pipe(map((data) => parseNewsList(data)));
  }

  createVaccination(data: VaccinationFormData): Observable<any> {
    console.log(data)
    return this.http.post(urlVaccinationCreate, data);
  }

  getVaccine(): Observable<List<Vaccination>> {
    return this.http
      .get(urlVaccinationCreate)
      .pipe(map((data) => parseVaccine(data)))
  }
}
