import { ReviewedCards } from "../constants/cards";

// setReviewedCards?: React.Dispatch<React.SetStateAction<ReviewedCards>>,

export function checkDate(reviewedCards: ReviewedCards): number | undefined {
  const newDate = new Date().getDate();

  const todayDate =
    newDate == reviewedCards.date ? reviewedCards.date : newDate;

  if (todayDate == newDate) {
    return todayDate;
  } else return;
}

export function markCardAsReviewed(
  id: number,
  reviewedCards: ReviewedCards,
): ReviewedCards | undefined {
  const foundID = reviewedCards.reviewedCardIDs.find((e) => e === id);

  if (foundID === undefined) {
    const newReviewedCardsArr: ReviewedCards = { ...reviewedCards };
    newReviewedCardsArr.reviewedCardIDs.push(id);
    return newReviewedCardsArr;
  } else return undefined;
}
