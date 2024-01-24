import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ui/product/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

import { useRouter } from 'next/router';
export const revalidate = 0;

const HomePage = async () => {

    const router = useRouter();
    // Access the store parameter from the query
    const { store } = router.query;

    // POINT D'ENTRE OU IL FAUT GENERER UNE DIFFERENTE BOUTIQUE/NOM DE DOMAINE
    // 1- IDENTIDIER LA BOUTIQUE EN QUESTION
    // 2- RECUPERER LES DONNEES DE LA BOUTIQUE EN QUESTION { BILLBOARD + PRODUITS } 

    const billboard = await getBillboard("d59529b7-1e56-4302-94e3-1aa7a54ba47c")
    const products = await getProducts({ isFeatured: true })

    console.log(store)
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
    );
}

export default HomePage;