
const tinhTong1 = (
    a: number = 5,        
    b?: number,           
    ...rest: number[]    
): number => {
    const bValue = b ?? 0;
    return [a, bValue, ...rest].reduce((tong, n) => tong + n, 0);
};
console.log(tinhTong1());                
console.log(tinhTong1(10));              
console.log(tinhTong1(10, 20));           
console.log(tinhTong1(10, 20, 30, 40)); 