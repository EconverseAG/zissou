export default function plus1Month(date) {
  const newDate = new Date(date);
  const newDate2 = new Date(newDate.setMonth(newDate.getMonth() + 2));

  return (
    newDate2.getDate() +
    '/' +
    newDate2.getMonth() +
    '/' +
    newDate2.getFullYear()
  );
}
