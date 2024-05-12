import { MetadataRoute } from 'next'
 
const manifest = (): MetadataRoute.Manifest => {
    return {
        name: "My Next.js Application",
        short_name: "Next.js App",
        description: "An application built with Next.js",
        start_url: "/",
        display: "standalone",
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                type: 'image/x-icon',
            },
        ],
    }
}

export default manifest;