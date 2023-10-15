// CategoryId page is the page rendered when user requests for a specifical category info and items 

import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";

export const revalidate = 0;

//  Creating the blueprint for the categoryId page 
interface CategoryPageProps {
    params: {
        categoryId: string
    },

    searchParams: {
        colorId: string,
        sizeId: string
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });

    const category = await getCategory(params.categoryId);
    const sizes = await getSizes();
    const colors = await getColors();

    return (
        <div className="bg-white">
            <Container>

                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* <MobileFilters sizes={sizes} colors={colors} /> */}
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                           
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;