import PageIntroHeader from "../Components/PageIntroHeader";
import { GoTriangleDown } from 'react-icons/go';
import ProductCard from "../Components/ProductCard";


const Products = [
    { id: '1', ProductName: "ARCODE", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube.png' },
    { id: '1', ProductName: "ARL 500", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcode-4b14a.png' },
    { id: '1', ProductName: "ARL 700", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube-mrl.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube-slim-mrl.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/13.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcode-4b14a.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube-mrl.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube-slim-mrl.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/13.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcode-4b14a.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube-mrl.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/arcube-slim-mrl.png' },
    { id: '1', ProductName: "ARCUBE MRL", productImg: 'https://arkel.b-cdn.net/UserFiles/Product/13.png' },

];

const sideMenuOptions = [
    { option: 'ARCUBE' },
    { option: 'Lift Controller Cards' },
    { option: 'ARCODE (Intregated Lift Control Unit)' },
    { option: 'ARKEL IoT' },
    { option: 'ADrive VVVF Inverter' },
    { option: 'ARKEL IoT' },
];

const Productpage = () => {



    return (
        <>
            <PageIntroHeader PageName={"Products"} />

            <div className="px-28 flex flex-row bg-green-50">
                <div className="hidden md:block m-4 drop-shadow-2xl h-fit w-1/4 bg-white">
                    <ol className="w-full">
                        {sideMenuOptions.map((options) => (
                            <div className="w-full flex justify-between p-4 border-b border-gray-300">
                                <div className="font-semibold text-gray-500">
                                    {options.option}
                                </div>
                                <div className="w-1/4 flex justify-center items-end">
                                    <GoTriangleDown />
                                </div>
                            </div>
                        ))}
                    </ol>
                </div>

                <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 gap-4 flex-1 m-4 drop-shadow-2xl w-1/2 bg-white p-10">
                    {Products.map((product) => (
                        <ProductCard currentProduct={product} />
                    ))}
                </div>
            </div>

        </>
    );
}

export default Productpage;