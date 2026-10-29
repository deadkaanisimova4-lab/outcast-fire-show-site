import type {ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import {ROOT_JSON_LD} from "@/lib/rootJsonLd";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import appCss from "@/index.css?url";

const TITLE = "Огненное шоу Челябинск 🔥 Артисты фаер-шоу на праздник, свадьбу, корпоратив | OUTCAST Fire Show";
const DESCRIPTION =
    "⭐ Огненное шоу и артисты фаер-шоу в Челябинске от профессионалов OUTCAST Fire Show. Шоу-программа на свадьбу, корпоратив, день рождения, юбилей и любой праздник. 7+ лет опыта, 500+ выступлений. Цены от 20000₽. Заказать ☎ +7 (908) 574-08-13";
const KEYWORDS =
    "огненное шоу челябинск, файер шоу челябинск, fire show челябинск, заказать огненное шоу, заказать артистов на праздник, артисты фаер-шоу, артисты огненного шоу челябинск, шоу-программа на праздник, выступление артистов с огнём, файер шоу на свадьбу, огненное шоу на корпоратив, шоу на праздник, файершоу на торжество, артисты огненного шоу, outcast fire show, пиротехническое шоу, огненное шоу на день рождения, файер шоу на юбилей, огненное шоу магнитогорск, файер шоу миасс, огненное шоу златоуст, файер шоу копейск, огненное шоу снежинск, файер шоу озерск, огненное шоу троицк, файер шоу сатка, огненное шоу южноуральск, файер шоу коркино, огненное шоу уфа, файер шоу стерлитамак, огненное шоу салават, файер шоу нефтекамск, огненное шоу октябрьский, файер шоу белорецк, огненное шоу туймазы, файер шоу ишимбай, огненное шоу мелеуз, развлечения на свадьбу, шоу программа на праздник, артисты на корпоратив, танцы с огнем, файершоу недорого, огненное шоу башкирия, заказать шоу на любой праздник, профессиональные артисты фаер-шоу";
const OG_TITLE = "Огненное шоу Челябинск — Заказать файер-шоу | OUTCAST Fire Show";
const OG_DESCRIPTION =
    "Профессиональное огненное шоу для вашего праздника. 7+ лет опыта, 500+ выступлений. Цены от 20000₽. ☎ +7 (908) 574-08-13";
const OG_IMAGE = "https://cdn.poehali.dev/files/6542e7b2-83ab-46b5-8dee-6d7f743b92c4.jpg";
const FAVICON = "https://cdn.poehali.dev/files/6542e7b2-83ab-46b5-8dee-6d7f743b92c4.jpg";

const METRIKA = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(105216074, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true, ecommerce:"dataLayer"});`;

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0, user-scalable=yes"},
            {httpEquiv: "Content-Security-Policy", content: "upgrade-insecure-requests"},
            {name: "referrer", content: "strict-origin-when-cross-origin"},
            {name: "yandex-verification", content: "fd98e99109b2704e"},
            {name: "google-site-verification", content: "1sWJE-swSpcGyPMFpfHlpcb920GQfgzXdbeUxMP5hCk"},
            {title: TITLE},
            {name: "description", content: DESCRIPTION},
            {name: "keywords", content: KEYWORDS},
            {name: "author", content: "OUTCAST Fire Show"},
            {name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"},
            {name: "language", content: "Russian"},
            {name: "geo.region", content: "RU-CHE"},
            {name: "geo.placename", content: "Челябинск"},
            {name: "geo.position", content: "55.1644;61.4368"},
            {name: "ICBM", content: "55.1644, 61.4368"},
            {property: "og:type", content: "business.business"},
            {property: "og:url", content: "https://огненное-шоу-74.рф"},
            {property: "og:title", content: OG_TITLE},
            {property: "og:description", content: OG_DESCRIPTION},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:image:width", content: "1200"},
            {property: "og:image:height", content: "630"},
            {property: "og:image:alt", content: "OUTCAST Fire Show — Огненное шоу в Челябинске"},
            {property: "og:locale", content: "ru_RU"},
            {property: "og:site_name", content: "OUTCAST Fire Show"},
            {name: "twitter:card", content: "summary_large_image"},
            {name: "twitter:title", content: "OUTCAST Fire Show — Огненное шоу в Челябинске"},
            {name: "twitter:description", content: "Профессиональное огненное шоу для вашего праздника. 7+ лет опыта, 500+ выступлений."},
            {name: "twitter:image", content: OG_IMAGE},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "preconnect", href: "https://cdn.poehali.dev", crossOrigin: "anonymous"},
            {rel: "preconnect", href: "https://mc.yandex.ru"},
            {rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "anonymous"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
            {rel: "icon", type: "image/jpeg", href: FAVICON},
            {rel: "apple-touch-icon", href: FAVICON},
            {rel: "alternate", href: "https://xn----74-k4dma6dbagfc4ewd.xn--p1ai", hrefLang: "ru"},
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            {children: METRIKA},
            ...ROOT_JSON_LD.map((json) => ({type: "application/ld+json", children: json})),
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <RootDocument>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster/>
                    <Sonner/>
                    <Outlet/>
                </TooltipProvider>
            </QueryClientProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/105216074" style={{position: "absolute", left: "-9999px"}} alt=""/></div>
        </noscript>
        <Scripts/>
        </body>
        </html>
    );
}