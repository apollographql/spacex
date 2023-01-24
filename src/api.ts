import { Capsule } from "./__generated__/resolvers-types";

export default class API {
  baseUrl = 'https://api.spacexdata.com/v4';

  async getCapsules(){
    const response = await this.get('capsules');
    return await response.json() as Array<Capsule>;
  }
  async getCapsule(id: string){
    const response = await this.get(`capsules/${id}`);
    return await response.json() as Capsule;
  }
  private get(slug: string){
    return fetch(`${this.baseUrl}/${slug}`);
  }
}