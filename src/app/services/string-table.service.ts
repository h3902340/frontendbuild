import { Injectable } from '@angular/core';
import { Language } from '../utility';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { baseUrl } from '../baseUrl';
import { NgxIndexedDBService } from 'ngx-indexed-db';

export type StringTableEntry = {
  id: number;
  symbol: string;
  english: string;
  french: string;
  german: string;
  hindi: string;
  italian: string;
  japanese: string;
  korean: string;
  malay: string;
  portugueseBrazil: string;
  russian: string;
  simplifiedChinese: string;
  spanish: string;
  traditionalChinese: string;
  turkish: string;
  vietnamese: string;
}

const commonIdStrings: number[] = [
  18129, 18442, 18480, 18682, 18899, 18900, 19038, 19164, 19269, 19813, 19830, 22133, 22205, 22206, 22207, 22301, 22804, 22805, 22806, 22807, 22813, 22814, 22824, 22826, 22829, 22830, 22837, 22841, 22847, 22861, 22862, 22863, 22864, 22865, 22866, 22867, 22868, 22872, 22879, 22914, 22924, 22934, 22935, 22936, 22938, 22940, 22942, 22947, 22948, 22949, 22950, 22951, 22952, 22956, 22958, 22960, 22962, 22963, 22974, 22975, 22979, 23298, 23311, 23322, 23328, 23331, 23452, 23634, 23828, 24098, 24100, 24102, 24118, 24119, 24634, 24635, 24638, 24643, 24644, 24655, 24656, 24664, 24665, 24670, 24671, 24716, 24820, 24824, 24867, 24969, 24970, 24972, 25043, 25150, 25174, 25270, 25340, 25345, 25512, 25628,
  25648, 25708, 25931, 25932, 26021, 26025, 26029, 26042, 26217, 26218, 26307, 27221, 27222, 27329, 27330, 27683, 27684, 27705, 27726, 27738, 27835, 27836, 28185, 28186, 28194, 28195, 28265, 29001, 29004, 29032, 29391, 29450, 29539, 29868, 29869, 30221, 30256, 30260, 30922, 30923, 31112, 31186, 31658, 31659, 31662, 31663, 31763, 31767, 31771, 32721, 32722, 33314, 33315, 33375, 33486, 33487, 33855, 33856, 33999, 34000, 34001, 34002, 34003, 34004, 34010, 34012, 34689, 34690, 34999, 35000, 35002, 35003, 35085, 35122, 35123, 35128, 35129, 35130, 35131, 35132, 35136, 35137, 35140, 35141, 35143, 35144, 35145, 35146, 35153, 35154, 35157, 35158, 35224, 35225, 35298, 35299, 35351, 35352, 35353, 35354,
  35358, 35359, 35362, 35363, 35364, 35365, 35369, 35370, 35373, 35374, 35376, 35379, 35380, 35381, 35382, 35389, 35390, 35587, 35588, 35652, 35655, 35657, 35660, 35661, 35662, 35663, 35708, 35709, 35710, 35711, 35712, 35713, 35714, 35715, 35716, 35717, 35722, 35723, 35724, 35725, 35726, 35727, 35728, 35732, 35733, 35734, 35735, 35736, 35737, 35739, 35740, 35741, 35742, 35743, 35744, 35745, 35754, 35759, 35760, 35825, 35922, 35923, 36107, 36129, 36130, 36131, 36132, 36134, 36368, 36513, 36701, 36702, 36710, 36711, 36823, 36824, 36854, 36855, 36865, 36866, 36905, 36906, 36908, 36910, 36912, 37280, 37281, 37305, 37306, 37307, 37308, 37340, 37342, 37346, 37347, 37354, 37355, 37360, 37361, 37362,
  37363, 38118, 38121, 38127, 38129, 38133, 38135, 38136, 38137, 38142, 38236, 41660, 41668, 41672, 41974, 41976, 41981, 41982, 42003, 42004, 42007, 42009, 42011, 42012, 42020, 42024, 42027, 42032, 42036, 42039, 42044, 42045, 42052, 42056, 42064, 42070, 42071, 42074, 42080, 42089, 42090, 42092, 42093, 42107, 42108, 42110, 42112, 42114, 42115, 42116, 42118, 42120, 42123, 42124, 42126, 42157, 42158, 42169, 42175, 42177, 42178, 42181, 42197, 42198, 42201, 42376, 42873, 43015, 43019, 43294, 43295, 43455, 43492, 43505, 43606, 43609, 43631, 43853, 43897, 43976, 44136, 44152, 44368, 46113, 46321, 46322, 46335, 46341, 46497, 46498, 46499, 46500, 46513, 46517, 46539, 46540, 46541, 46542, 46549, 46620,
  46755, 46799, 46814, 46815, 46822, 46823, 46824, 46845, 46846, 46869, 46870, 46884, 46969, 46984, 46987, 46994, 46995, 47005, 47006, 47024, 47025, 47028, 47029, 47043, 47093, 47094, 48958, 60001, 60002, 60003, 60084, 60204, 60220, 60227, 60231, 60237, 60376, 60381, 60815, 61386, 61838, 62090, 62347, 62364, 62368, 62849, 64606, 65258, 65997, 66323, 66351, 66592, 66595, 68443, 68995, 69109, 69147, 69155, 69200, 69363, 69381, 69415, 69742, 70846, 70880, 70882, 70883, 70884, 70885, 70886, 70887, 70888, 70889, 70890, 70891, 70892, 70893, 70894, 70895, 70896, 71223, 72311, 72561, 72587, 79819, 79863, 79864, 79865, 80001, 80032, 80044, 80140, 80382, 80529, 80907, 90060, 90119, 90120, 90127, 90130,
  90136, 90138, 91500, 91530, 91597, 91760, 91785, 91787, 91851, 101000, 101010, 101068, 101077, 101097, 101115, 101124, 101137, 101140, 101535, 101564, 101566, 102602, 104558, 104844, 104845, 104852, 104855, 104856, 104857, 104859, 104860, 104861, 104862, 104863, 104864, 104865, 104867, 104868, 104869, 104873, 110000, 110165, 110171, 110184, 110212, 110393, 110396, 110565, 110566, 110584, 110591, 112000, 112011, 112040, 112043, 112045, 112065, 112214, 112222, 112254, 112438, 112704, 112916, 113109, 122000, 122010, 122031, 122077, 122079, 122086, 122104, 122108, 122113, 122117, 122210, 122212, 122416, 123076, 124435, 124436, 124437, 124459, 124786, 124787, 124802, 124803, 125108, 125499, 126790, 200110,
]

@Injectable({
  providedIn: 'root'
})
export class StrTableService {
  private apiLocalizedString = "/api/localizedstring";
  private apiLocalizedStringBySymbol = '/api/localizedstringbysymbol';
  private apiLocalizedStrings = "/api/localizedstrings";
  private language: Language;
  private static cache: { [k: number]: string } = {};
  private static cacheSymbol: { [k: string]: string } = {};

  constructor(private httpClient: HttpClient, private dbService: NgxIndexedDBService) { }

  public setLanguage(language: Language): void {
    if (language != this.language) {
      StrTableService.cache = {};
      StrTableService.cacheSymbol = {};
    }
    this.language = language;
  }

  public getLanguage(): Language {
    return this.language;
  }

  public async getCommonLocalizedString() {
    await this.getLocalizedStrings(commonIdStrings);
  }

  private async getLocalizedStringByLanguage(idString: number | string | undefined, language: Language): Promise<string> {
    if (!idString || idString == -1) return Promise.resolve('');
    idString = Number(idString);
    if (StrTableService.cache[idString]) {
      return StrTableService.cache[idString];
    }
    let entry = await firstValueFrom(this.dbService.getByID<StringTableEntry>('string_table', idString));
    if (entry) {
      let string = this.getLocalizedStringFromEntry(entry);
      if (string && string != '') {
        StrTableService.cache[idString] = string;
        return this.getLocalizedStringFromEntry(entry);
      }
    }
    let httpParams: HttpParams = new HttpParams()
      .set('language', language)
      .set('idString', idString);
    let response = await lastValueFrom(
      this.httpClient.get<StringTableEntry>(`${baseUrl}${this.apiLocalizedString}`, {
        params: httpParams,
      })
    );
    let result = this.getLocalizedStringFromEntry(response);
    if (entry) {
      this.setLocalizedStringFromEntry(entry, result);
    } else {
      entry = response;
    }
    await firstValueFrom(this.dbService.update<StringTableEntry>('string_table', entry));
    StrTableService.cache[idString] = result;
    return result;
  }

  public async getLocalizedString(idString: number | string | undefined): Promise<string> {
    return this.getLocalizedStringByLanguage(idString, this.language);
  }

  public async getLocalizedStringBySymbol(symbol: string): Promise<string> {
    if (!symbol) return Promise.resolve('');
    if (StrTableService.cacheSymbol[symbol]) {
      return StrTableService.cacheSymbol[symbol];
    }
    let entry = await firstValueFrom(this.dbService.getByIndex<StringTableEntry>('string_table', 'symbol', symbol));
    if (entry) {
      let string = this.getLocalizedStringFromEntry(entry);
      if (string && string != '') {
        StrTableService.cacheSymbol[symbol] = string;
        return this.getLocalizedStringFromEntry(entry);
      }
    }
    let httpParams: HttpParams = new HttpParams()
      .set('language', this.language)
      .set('symbol', symbol);
    let response = await lastValueFrom(
      this.httpClient.get<StringTableEntry>(`${baseUrl}${this.apiLocalizedStringBySymbol}`, {
        params: httpParams,
      })
    );
    let string = this.getLocalizedStringFromEntry(response);
    if (entry) {
      this.setLocalizedStringFromEntry(entry, string);
    } else {
      entry = response;
    }
    await firstValueFrom(this.dbService.update<StringTableEntry>('string_table', entry));
    StrTableService.cacheSymbol[symbol] = string;
    return string;
  }

  public async getLocalizedStrings(idStringsInput: (number | string | null | undefined)[]): Promise<{ [k: number]: string }> {
    let map: { [k: number]: string } = {};
    let idStrings: number[] = [];
    for (let i = 0; i < idStringsInput.length; i++) {
      if (idStringsInput[i] && idStringsInput[i] != -1) {
        let num: number = Number(idStringsInput[i]);
        if (StrTableService.cache[num]) {
          map[num] = StrTableService.cache[num];
        } else {
          idStrings.push(num);
        }
      }
    }
    if (idStrings.length > 0) {
      let set = new Set<number>(idStrings);
      let entries: StringTableEntry[] = await firstValueFrom(this.dbService.bulkGet<StringTableEntry>('string_table', idStrings));
      for (let i = entries.length - 1; i >= 0; i--) {
        if (!entries[i]) {
          entries.splice(i, 1);
          continue;
        }
        if (set.has(entries[i].id)) {
          let string = this.getLocalizedStringFromEntry(entries[i]);
          if (string && string != '') {
            idStrings.splice(idStrings.indexOf(entries[i].id), 1);
          }
        }
      }
      if (idStrings.length > 0) {
        let httpParams: HttpParams = new HttpParams()
          .set('language', this.language)
          .set('idStrings', idStrings.toString());
        let responseNew = await lastValueFrom(
          this.httpClient.get<{ [k: number]: StringTableEntry }>(`${baseUrl}${this.apiLocalizedStrings}`, {
            params: httpParams
          })
        );
        let keys: string[] = Object.keys(responseNew);

        for (let i = 0; i < keys.length; i++) {
          let key = Number(keys[i]);
          let string = this.getLocalizedStringFromEntry(responseNew[key]);
          let entry = await firstValueFrom(this.dbService.getByID<StringTableEntry>('string_table', key));
          if (entry) {
            this.setLocalizedStringFromEntry(entry, string);
          } else {
            entry = responseNew[key];
          }
          await firstValueFrom(this.dbService.update<StringTableEntry>('string_table', entry));
          entries.push(responseNew[key]);
        }
      }
      for (let i = 0; i < entries.length; i++) {
        let string = this.getLocalizedStringFromEntry(entries[i])
        map[entries[i].id] = string;
        StrTableService.cache[entries[i].id] = string;
      }
    }
    return map;
  }

  private setLocalizedStringFromEntry(entry: StringTableEntry, string: string): void {
    switch (this.language) {
      case Language.English:
        entry.english = string;
        break;
      case Language.French:
        entry.french = string;
        break;
      case Language.German:
        entry.german = string;
        break;
      case Language.Hindi:
        entry.hindi = string;
        break;
      case Language.Italian:
        entry.italian = string;
        break;
      case Language.Japanese:
        entry.japanese = string;
        break;
      case Language.Korean:
        entry.korean = string;
        break;
      case Language.Malay:
        entry.malay = string;
        break;
      case Language.PortugueseBrazil:
        entry.portugueseBrazil = string;
        break;
      case Language.Russian:
        entry.russian = string;
        break;
      case Language.SimplifiedChinese:
        entry.simplifiedChinese = string;
        break;
      case Language.Spanish:
        entry.spanish = string;
        break;
      case Language.TraditionalChinese:
        entry.traditionalChinese = string;
        break;
      case Language.Turkish:
        entry.turkish = string;
        break;
      case Language.Vietnamese:
        entry.vietnamese = string;
        break;
    }
  }

  private getLocalizedStringFromEntry(entry: StringTableEntry): string {
    switch (this.language) {
      case Language.English:
        return entry.english;
      case Language.French:
        return entry.french;
      case Language.German:
        return entry.german;
      case Language.Hindi:
        return entry.hindi;
      case Language.Italian:
        return entry.italian;
      case Language.Japanese:
        return entry.japanese;
      case Language.Korean:
        return entry.korean;
      case Language.Malay:
        return entry.malay;
      case Language.PortugueseBrazil:
        return entry.portugueseBrazil;
      case Language.Russian:
        return entry.russian;
      case Language.SimplifiedChinese:
        return entry.simplifiedChinese;
      case Language.Spanish:
        return entry.spanish;
      case Language.TraditionalChinese:
        return entry.traditionalChinese;
      case Language.Turkish:
        return entry.turkish;
      case Language.Vietnamese:
        return entry.vietnamese;
    }
  }

  public print() {
    let keys = Object.keys(StrTableService.cache);
    for (let i = 0; i < keys.length; i += 100) {
      let endIndex: number = i + 100;
      if (endIndex > keys.length) {
        endIndex = keys.length;
      }
      console.log(keys.slice(i, endIndex));
    }
  }
}
