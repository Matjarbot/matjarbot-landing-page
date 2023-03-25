export enum EReserveStatus {
  ALL = -1,
  PENDING = 1,
  ACCEPTED = 2,
  DELAYED = 3,
  REJECTED = 4,
}

export enum EReservePaidStatus {
  ALL = -1,
  UNPAID = 0,
  PAID = 1,
}

export enum EReservationType {
  items = 1,
  reservations = 2,
}
