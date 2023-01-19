export const formatTime = (num: number, lang: string) => {
  return num.toLocaleString(lang, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};

export function padNumber(input: number, size: number) {
  let num = input.toString();
  while (num.length < size) {
    num = '0' + num;
  }
  return num;
}
