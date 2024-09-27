interface Dog {
  id: string
  name: string
}

interface ShiftAssignment {
  id: string
  status: string
  dogId: string
  shiftId: string
  dog: Dog
}

interface Shift {
  id: string
  day: string
  walkerId: string
  shiftAssignments: ShiftAssignment[]
}

interface TransformedDataItem {
  name: string
  status: string
  day: string
  time: string
}
