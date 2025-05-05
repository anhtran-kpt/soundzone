export class ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: {
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };

  constructor(success: boolean, data?: T, error?: any, meta?: any) {
    this.success = success;
    if (data !== undefined) this.data = data;
    if (error) this.error = error;
    if (meta) this.meta = meta;
  }

  static success<T>(data: T, meta?: any): ApiResponse<T> {
    return new ApiResponse<T>(true, data, undefined, meta);
  }

  static error<T>(code: string, message: string): ApiResponse<T> {
    return new ApiResponse<T>(false, undefined, { code, message });
  }
}
