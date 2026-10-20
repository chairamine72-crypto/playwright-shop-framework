import { ApiLogger } from '../../utils/ApiLogger';
import { APIRequestContext, APIResponse } from '@playwright/test';
import { Product } from '../models/Product';

export class ProductApiClient {
  private request: APIRequestContext;

  private readonly baseUrl = process.env.API_BASE_URL!;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getProducts(): Promise<APIResponse> {
    ApiLogger.logRequest('GET', this.baseUrl);

    const response = await this.request.get(this.baseUrl);

    const body = await response.json();

    ApiLogger.logResponse(response.status(), body);

    return response;
  }

  async createProduct(product: Product): Promise<APIResponse> {
    ApiLogger.logRequest('POST', `${this.baseUrl}/add`, product);

    const response = await this.request.post(`${this.baseUrl}/add`, {
      data: product,
    });

    const body = await response.json();

    ApiLogger.logResponse(response.status(), body);

    return response;
  }

  async updateProduct(id: number, product: Product): Promise<APIResponse> {
    ApiLogger.logRequest('PUT', `${this.baseUrl}/${id}`, product);

    const response = await this.request.put(`${this.baseUrl}/${id}`, {
      data: product,
    });

    const body = await response.json();

    ApiLogger.logResponse(response.status(), body);

    return response;
  }

  async deleteProduct(id: number): Promise<APIResponse> {
    ApiLogger.logRequest('DELETE', `${this.baseUrl}/${id}`);

    const response = await this.request.delete(`${this.baseUrl}/${id}`);

    const body = await response.json();

    ApiLogger.logResponse(response.status(), body);

    return response;
  }
}
