export const formatDate = (value: Date) => {
  const dateTime = value.toISOString();
  const [date] = dateTime.split("T");
  return date;
};
