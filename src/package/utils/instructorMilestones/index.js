export const hasUnlockedPublished = (publishedLessons) => (
  publishedLessons > 0
)

export const hasUnlockedCoursePublished = (publishedCourses) => (
  publishedCourses > 0
)

export const selfReviewThreshold = 12

export const hasUnlockedSelfReview = (publishedLessons) => (
  publishedLessons >= selfReviewThreshold
)
