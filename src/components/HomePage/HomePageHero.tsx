import { CustomLink } from "../CustomLink";
import { HomePageSection } from "./HomePageSection";

export function HomePageHero() {
	return (
		<HomePageSection
			className="min-h-[calc(100svh-80px)] flex  bg-[url('/src/assets/carouselImage2.webp')] bg-center bg-cover bg-no-repeat"
			noPadding
		>
			<div className="flex items-center flex-1 p-4 py-8 bg-gradient-to-tr from-black to-black/80 md:to-black/50 bg-opacity-80 sm:px-10 md:px-16 lg:px-24">
				<div className=" flex flex-col items-center gap-2 lg:gap-4 text-center text-custom-white max-w-[500px] mx-auto sm:items-start sm:mx-0 sm:text-left sm:max-w-[800px] lg:max-w-[1200px]">
					<h1 className="text-3xl font-bold xs:text-4xl text-primary lg:text-5xl">
						Faça Você Mesmo
					</h1>
					<h2 className="text-xl xs:text-2xl lg:text-3xl">
						Compre, alugue e divulgue suas ferramentas
					</h2>
					<p className="sm:text-lg md:text-xl lg:text-2xl">
						A FVM conecta você com vendedores de ferramentas de todo
						o país. Compre, venda e encontre exatamente o que
						precisa para o seu próximo projeto.
					</p>
					<CustomLink href="/products" className="mt-3">
						Ver anúncios
					</CustomLink>
				</div>
			</div>
		</HomePageSection>
	);
}
