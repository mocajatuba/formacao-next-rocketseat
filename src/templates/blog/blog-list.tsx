'use client';
import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useSearchParams } from "next/navigation";

export type BlogListProps = {
    posts: Post[];
}

export function BlogList( {posts}: BlogListProps) {
    const searchParams = useSearchParams()
    const query = searchParams?.get('q') ?? '';

    const pageTitle = query 
        ? `Resultado de busca para "${query}"` 
        : 'Dicas e estratégias para impulsionar seu negócio'

    const postList = query 
        ? posts.filter((post) => 
            post.title.toLowerCase()?.includes(query.toLowerCase())
        ) 
        : posts; // allPosts vem do contentlayer

    const hasPosts = postList.length > 0;

    return (
        <div className="flex flex-col py-24 flex-grow h-full">
            <header className="pb-14"> {/* pading botton 56px */}
                <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
                    <div className="flex flex-col gap-4 md:px-0">
                        {/* TAG */}
                        <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
                            BLOG
                        </span>

                        {/* Titulo */}
                        <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
                            {pageTitle}
                        </h1>
                    </div>
                    {/* Search */}
                    <Search />
                </div>
            </header>
            {/* Listagem de posts */}
            {/* Primeira Modificação só para deixar funcionando 
            <PostCard 
                title="Tranformando se negócio em uma loja virtual"    
                description="Se você está buscanco uma maneira..."
                date="20/12/2024"
                slug="/Tranformando"
                image="/assets/primeiro-post.png"
                author={{
                    avatar: '/customer-02.png',
                    name: 'Aspen Dokidis'
                }}
            />
            */}
            {/* Segunda Modificação Listagem de posts envolvendo com grid 
            <PostGridCard>
                <PostCard 
                    title="Tranformando se negócio em uma loja virtual"    
                    description="Se você está buscanco uma maneira..."
                    date="20/12/2024"
                    slug="/Tranformando"
                    image="/assets/primeiro-post.png"
                    author={{
                        avatar: '/customer-02.png',
                        name: 'Aspen Dokidis'
                    }}
                />
           </PostGridCard>
           */}
           {/* Listagem de posts */}
           {hasPosts && (
                <PostGridCard>
                    {postList.map((post) => (
                    <PostCard 
                        key={post._id}
                        title={post.title}
                        description={post.description}
                        date={new Date(post.date).toLocaleDateString("pt-BR")}
                        slug={post.slug}
                        image={post.image}
                        author={{
                            avatar: post.author?.avatar,
                            name: post.author?.name,
                        }}
                    />
                    ))}
                </PostGridCard>
            )
           }
           {!hasPosts && (
            <div className="container px-8">
                <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
                    <Inbox className="h-12 w-12 text-cyan-100" />
                    <p className="text-gray-100 text-center">Nenhum post encontrado.</p>
                </div>
            </div>
           )}
        </div>
    )
}