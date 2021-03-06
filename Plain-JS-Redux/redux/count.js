export function change_count(amount) {
  return {
    type: 'CHANGE_COUNT',
    payload: amount,
  };
}

export default function countReducer(count = 0, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return count + action.payload;
    default:
      return count;
  }
}
