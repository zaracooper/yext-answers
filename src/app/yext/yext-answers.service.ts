import { Injectable } from '@angular/core';
import { provideCore, Filter, VerticalSearchRequest } from '@yext/answers-core';
import { from, map, mergeMap, Observable, pluck, toArray } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YextAnswersService {
  private core = provideCore({
    apiKey: environment.yextApiKey,
    experienceKey: environment.yextExperienceKey,
    locale: environment.yextLocale,
    experienceVersion: environment.yextExperienceVersion
  });

  constructor() { }

  universalAutocomplete(input: string): Observable<string[]> {
    return from(this.core.universalAutocomplete({ input }))
      .pipe(
        map(resp => resp.results),
        mergeMap(resp => resp),
        pluck('value'),
        toArray()
      );
  }

  universalSearch(query: string) {
    return from(this.core.universalSearch({ query })).pipe(
      map(resp => resp.verticalResults),
      mergeMap(resp => resp),
      map(resp => ({ verticalKey: resp.verticalKey, results: resp.results.map(rs => (rs.rawData)) })),
      toArray()
    );
  }

  verticalAutocomplete(input: string, verticalKey: string) {
    return from(this.core.verticalAutocomplete({ input, verticalKey }))
      .pipe(
        map(resp => resp.results),
        mergeMap(resp => resp),
        pluck('value'),
        toArray()
      );
  }

  verticalSearch(query: string, verticalKey: string, filter?: Filter) {
    let queryReq: VerticalSearchRequest = { query, verticalKey };

    if (filter) {
      queryReq.staticFilters = filter;
    }

    return from(this.core.verticalSearch(queryReq))
      .pipe(
        map(resp => resp.verticalResults.results),
        mergeMap(resp => resp),
        pluck('rawData'),
        toArray()
      );
  }
}
