import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export const SupporSection = () => {
    return (
        <section className="relative pb-8 mb:py-10 to-gray-700">
           {/*<section className="container pb-8 mb:py-10 bg-gradient-to-r from-gray-500 to-gray-700"> */} 
           <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90"/>
           <div className="container flex flex-col items-center gap-12 relative">
                <h2 className= "font-sans text-balance text-center text-heading-lg text-gray-100">Sua loja de afiliados, simples, do jeito que deveria ser</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Primeiro Card*/}
                    <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
                            <div className="flex h12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
                                <PaintbrushVertical className="h6 w-4 text-white"/>
                            </div>
                            <strong className="text-heading-sm text-gray-100">Personalize seu site</strong>
                            <p className="text-body-sm text-gray-200">Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.</p>
                    </div> 
                    {/* Segundo Card*/}
                    <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
                            <div className="flex h12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
                                <Store className="h6 w-4 text-white"/>
                            </div>
                            <strong className="text-heading-sm text-gray-100">Venda de qualquer loja</strong>
                            <p className="text-body-sm text-gray-200">Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.</p>
                    </div> 
                    {/* Terceiro Card*/}
                    <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
                            <div className="flex h12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
                                <HeartHandshake className="h6 w-4 text-white"/>
                            </div>
                            <strong className="text-heading-sm text-gray-100">Receba suporte amigável</strong>
                            <p className="text-body-sm text-gray-200">Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.</p>
                    </div> 
                </div>
           </div>
        </section>
    )
};