declare module '@apiverve/bible' {
  export interface bibleOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface bibleResponse {
    status: string;
    error: string | null;
    data: BibleData;
    code?: number;
  }


  interface BibleData {
      text:    string;
      book:    string;
      abbr:    string;
      chapter: number;
      verses:  number[];
      version: string;
  }

  export default class bibleWrapper {
    constructor(options: bibleOptions);

    execute(callback: (error: any, data: bibleResponse | null) => void): Promise<bibleResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: bibleResponse | null) => void): Promise<bibleResponse>;
    execute(query?: Record<string, any>): Promise<bibleResponse>;
  }
}
