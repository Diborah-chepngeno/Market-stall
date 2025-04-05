import apiClient from "./apiClient";

type entity = {
  id: number;
};

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends entity>(entity: T) {
    return apiClient.put(this.endpoint + "/" + entity.id, entity);
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }
}

export default function create(endpoint: string) {
  return new HttpService(endpoint);
}
