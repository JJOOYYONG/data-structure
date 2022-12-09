//완전탐색 - 최소 직사각형
function solution(sizes) {
  let row_length = [];
  let column_length = [];
  sizes.forEach((item) => {
    row_length.push(item.sort((a, b) => a - b)[0]);
    column_length.push(item.sort((a, b) => a - b)[1]);
  });
  let answer = Math.max(...row_length) * Math.max(...column_length);
  return answer;
}
