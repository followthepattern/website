// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())

    const result = posts.map((post:any) => ({
        slug: post.slug,
    }))

    console.info(result)

    return result
}


export default function Page({ params }: { params: { id: string } }) {
    return (
        <div>{params.id}</div>
    )
}