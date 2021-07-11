const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const number: number = 4.2
const num: number = 3e10

const message: string = 'Hello, TS'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hi', 'TS']

// Tuple
const contact: [string, number] = ['Unity', 1234567]

// Any
let variable: any = 42
variable = 'New String'
variable = []

function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Evgenii')

// Never 
function throwError(message:string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {

  }
}

// Type
type Login = string
const login: Login = 'admin'
// const login2: Login = 2    // NO

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true       // NO

type SomeType = string | null | undefined