interface Rect {
  readonly id: string     // private
  color?: string          // optional
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: "#ccc"
}

const rect2: Rect = {
  id: '5678',
  size: {
    width: 10,
    height: 10
  }
}

rect2.color = 'black'
// rect2.id = '444'         // NO, cuz readonly

const rect3 = {} as Rect    // Привидение объекта к типу Rect
const rect4 = <Rect>{}      // Альтернативный старый вариант


// =====================interfaces=============================
interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// ========================================
interface IClock {
  time: Date
  setTime(date:Date): void
}
class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

// =======================================
interface Styles {
  [key: string] : string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}

