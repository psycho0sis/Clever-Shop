type IGetPriceWithoutDiscount = (price: number, discount: string) => number;

export const getPriceWithoutDiscount: IGetPriceWithoutDiscount = (
  price,
  discount
) => {
  const amountOfDiscountInCurrency = price * ((parseInt(discount) * -1) / 100);

  return price + amountOfDiscountInCurrency;
};
