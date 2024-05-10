type Student = {
  name: string
  class: string
  city: string
}

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type ItemWithChecks = CartItem & {
  checked: boolean
  aaaa: string
  bbbb: string
  cccc: number
}
