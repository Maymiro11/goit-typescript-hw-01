import axios, { AxiosResponse } from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


async function main() {
    try {
      const data = await fetchData<MyDataType>('https://example.com/data');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  main();

  interface MyDataType {
    id: number;
    name: string;
    age: number;
    email: string;
  }