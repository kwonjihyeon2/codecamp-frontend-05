export const getMyDate = (myDate: any) => {
  const GetNewDate = new Date(myDate);

  const yyyy = GetNewDate.getFullYear();
  const mm = String(GetNewDate.getMonth() + 1).padStart(2, "0");
  const dd = String(GetNewDate.getDate()).padStart(2, "0");

  return `${yyyy}.${mm}.${dd}`;
};
