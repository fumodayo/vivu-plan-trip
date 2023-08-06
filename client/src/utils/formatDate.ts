export const formatDate = (date?: Date) => {
  if (date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day}/${month}`;
  }
};
