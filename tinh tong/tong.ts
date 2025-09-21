function tinhTong(...numbers: number[]): number {
  return numbers.reduce((tong, so) => tong + so, 0);
}
tinhTong(2,3);

