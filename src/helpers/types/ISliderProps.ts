import {IReview} from "./IReview";

export interface ISliderProps{
    reviews: IReview[];
    currentSlide: number,
    reviewsOnSlideCount: number,
}