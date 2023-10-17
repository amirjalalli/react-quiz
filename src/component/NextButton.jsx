function NextButton({ dispatch, answer, index, numQustions }) {
  if (answer === null) return null;
  console.log(+numQustions - 1);
  if (index < +numQustions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === +numQustions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
