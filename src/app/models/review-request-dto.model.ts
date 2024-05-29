export interface ReviewRequestDto {
    userId: number;
    productId: number;
    rating: number;
    comment?: string;
  }
  