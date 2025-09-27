//interface
interface Product {
  id: number;        
  name: string;      
  price: number;     
  category: string;  
}
//5 vi du
const products: Product[] = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 30000000,
    category: "Điện tử",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 28000000,
    category: "Điện tử",
  },
  {
    id: 3,
    name: "Bánh quy Oreo",
    price: 25000,
    category: "Thực phẩm",
  },
  {
    id: 4,
    name: "Sữa tươi Vinamilk",
    price: 35000,
    category: "Thực phẩm",
  },
  {
    id: 5,
    name: "Áo thun Uniqlo",
    price: 399000,
    category: "Thời trang",
  },
];


console.log(products);
//ham tim ket qua danh muc
function filterByCategory(productList: Product[], categoryName: string): Product[] {
  return productList.filter((product) => product.category === categoryName);
}


const dienTuProducts = filterByCategory(products, "Điện tử");
console.log(dienTuProducts);



//ham tinh tong gia tri trong danh sach
function calculateTotalPrice(productList: Product[]): number {
  return productList.reduce((total, product) => total + product.price, 0);
}

const totalPrice = calculateTotalPrice(products);
console.log("Tổng giá trị sản phẩm:", totalPrice);
// ham tim ket qua lon nhat nho nhat:
function findMinMax(productList: Product[]): { min: Product; max: Product } {
  if (productList.length === 0) {
    throw new Error("Danh sách sản phẩm rỗng!");
  }

  const { min, max } = productList.reduce(
    (acc, product) => {
      if (product.price < acc.min.price) acc.min = product;
      if (product.price > acc.max.price) acc.max = product;
      return acc;
    },
    { min: productList[0], max: productList[0] }
  );

  return { min, max };
}

const { min, max } = findMinMax(products);
console.log("Sản phẩm rẻ nhất:", min);
console.log(" Sản phẩm đắt nhất:", max);
//
