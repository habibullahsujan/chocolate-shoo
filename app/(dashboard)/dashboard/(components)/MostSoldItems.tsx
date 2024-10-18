import React from 'react'

const MostSoldItems = ({ products }: { products: {  sold: number, id: number, name: string }[] }) => {
    const totalSales = products.reduce((total, product) => total + product.sold, 0);

    return (
        <div className='col-span-1 bg-white border rounded-md shadow-md p-4'>
            <h2 className="text-xl font-bold">Most Sold Items</h2>

                {products.map((product) => {
                    const salesPercentage = ((product.sold / totalSales) * 100).toFixed(2);

                    return (
                        <div key={product.id} className="mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-sm">{product.name}</span>
                                <span className="font-medium text-sm">{salesPercentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className="bg-blue-500 h-4 rounded-full"
                                    style={{ width: `${salesPercentage}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}

export default MostSoldItems