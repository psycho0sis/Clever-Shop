type IGetPriceWithoutDiscount = (price?: number, discount?: string) => number;

export const getPriceWithoutDiscount: IGetPriceWithoutDiscount = (
  price = 0,
  discount = ''
) => {
  const amountOfDiscountInCurrency = price * ((parseInt(discount) * -1) / 100);

  return price + amountOfDiscountInCurrency;
};
