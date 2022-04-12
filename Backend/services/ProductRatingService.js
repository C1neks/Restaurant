export class ProductRatingService {
  constructor(repository) {
    this.repository = repository;
  }
  async ratingUpdateAndSaveVotes(productId, inc, user) {
    const updatedRating = await this.repository.updateItem(
      productId,
      null,
      inc,
      user
    );
    return updatedRating;
  }
}
