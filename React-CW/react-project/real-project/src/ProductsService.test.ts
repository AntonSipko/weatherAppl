import { productsService } from "./config/products-service-config"
import productsConfig from "./config/products-config.json"
import { getRandomElement } from "./util/random";
import { CategoryType } from "./model/CategoryType";
// test("setProducts test", () => {
//     productsService.setProducts().then(count => {
//         expect(count).toEqual(productsConfig.length);
//     })
// })
const allCategoriesWithDublicates:Array<string>=productsConfig.map(product=>{
    const category=product.name.slice(0,product.name.indexOf("-"))
    return category;
})
const allCategories:Array<string>=[];
allCategoriesWithDublicates.forEach((cat=>{
    if(!allCategories.includes(cat)){
        allCategories.push(cat)
    }
}))




test ("random category exists", () => {
    productsService.isCategoryExist(getRandomElement(allCategories))
    .then(res => expect(res).toBeTruthy());
})
// test ("category kukureku doesn't exist", () => {
//     productsService.isCategoryExist("kukureku")
//     .then(res => expect(res).toBeFalsy());
// })

//console.log(allCategories);
test ("all categories exist",()=>{
    async function testAllCategoriesExist(categories: string[]): Promise<boolean> {
        const promisesArray=allCategories.map(cat=>{
            const promise=productsService.isCategoryExist(cat)
            return promise;
        })
        const results = await Promise.all(promisesArray);
        const allExist = results.every(result => result === true);
        return allExist;
      }
      const res=  testAllCategoriesExist(allCategories)
      expect(res).toBeTruthy
   
})
test ("remove category",()=>{
    productsService.removeCategory("pretzel");
    productsService.isCategoryExist("pretzel").then(res=>expect(res).toBeFalsy());

})
const sportCategory:CategoryType={name:"sport"}
test ("adding category",()=>{
    productsService.addCategory(sportCategory);
    productsService.isCategoryExist("sport").then(res=>expect(res).toBeTruthy());

})
