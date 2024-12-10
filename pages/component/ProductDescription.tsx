import React from 'react'

const ProductDescription = () => {
    return (
        <div className='w-full grid md:grid-cols-2 gap-2 p-3 py-4 md:w-auto '>

            <div className='flex flex-col gap-3'>
                <div className='text-lg '>
                    Description produit
                </div>

                <div className='md:mr-8  text-lgray'>
                    Festi vous propose à la location un/une &quot;Jewel – grand couteau/10pc&quot; pour votre événement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver toute une série d&apos;autres produits à louer de ce type dans la catégorie &quot;Art de la Table&quot;.
                </div>
            </div>

            <div className='flex flex-col justify-start gap-1 items-center font-space'>
                <div className='flex justify-between items-center w-full bg-beige p-4'>
                    <div className='uppercase'>
                        Livraisons
                    </div>

                    <button className='text-xl hover:cursor-pointer'> + </button>
                </div>

                <div className='flex justify-between items-center w-full bg-beige p-4'>
                    <div className='uppercase'>
                        Livraisons
                    </div>

                    <button className='text-xl hover:cursor-pointer'> + </button>
                </div>
            </div>

        </div>
    )
}

export default ProductDescription