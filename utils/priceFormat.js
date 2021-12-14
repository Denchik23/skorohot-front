class PriceFormat {
  numberWithSpaces (e) {
    return e.toLocaleString()
  }
}

export const priceFormat = new PriceFormat()
