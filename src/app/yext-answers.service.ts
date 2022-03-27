import { Injectable } from '@angular/core';
import { provideCore, Filter } from '@yext/answers-core';
import { from } from 'rxjs';
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

  universalAutocomplete(input: string){
    return from(this.core.universalAutocomplete({ input }));
  }

  universalSearch(query: string){
    return from(this.core.universalSearch({ query }));
  }

  verticalAutocomplete(input: string, verticalKey: string){
    return from(this.core.verticalAutocomplete({ input, verticalKey}));
  }

  verticalSearch(query: string, verticalKey: string, filter: Filter){
    return from(this.core.verticalSearch({ query, verticalKey }));
  }
}
