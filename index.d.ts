declare module '@apiverve/bible' {
  export interface bibleOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface bibleResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class bibleWrapper {
    constructor(options: bibleOptions);

    execute(callback: (error: any, data: bibleResponse | null) => void): Promise<bibleResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: bibleResponse | null) => void): Promise<bibleResponse>;
    execute(query?: Record<string, any>): Promise<bibleResponse>;
  }
}
