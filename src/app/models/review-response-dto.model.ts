
export interface ReviewResponseDto {
  id: number;
  userId: number;
  productId: number;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}
