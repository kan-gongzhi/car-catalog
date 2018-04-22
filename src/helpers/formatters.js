export const formattedMoney = amount => {
  const reversedAmount = getReversedStr(amount + '');
  const processedAmount = reversedAmount.match(/.{1,3}/g) || [];
  const processedLength = processedAmount.length;
  const formattedReversedMoney = processedAmount.map(
    (segment, index) =>
      index + 1 === processedLength
        ? getReversedStr(segment)
        : `,${getReversedStr(segment)}`
  );
  return formattedReversedMoney.reverse().join('');
};

const getReversedStr = str =>
  str
    .split('')
    .reverse()
    .join('');
