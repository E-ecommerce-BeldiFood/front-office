import { SubcategoryResponseDto } from "./SubcategoryResponseDto";

export interface CategoryResponseDto {
    id: number;
    name: string;
    imageUrl: string;
    subcategories: SubcategoryResponseDto[];
  }
  