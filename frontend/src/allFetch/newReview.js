export const newReviewFetch = async (email, review, vacancy) => {
  let response = await fetch("http://localhost:5000/account/newReview", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      email: email,
      review: review,
      vacancy: vacancy
    })
  });
  let result = await response.json();
  return result;
};