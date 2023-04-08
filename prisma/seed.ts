import {PrismaClient} from "@prisma/client";
import {slugify} from "../src/support/Helper";
import {randomUUID} from "crypto";

const posts = [
    {
        title: "Hacker News",
        url: "https://news.ycombinator.com",
        site: "news.ycombinator.com",
        content: "Code",
    },
    {
        title: "Reddit",
        url: "https://reddit.com",
        site: "reddit.com",
        content: "The front page of the internet",
    },
    {
        title: "Twitter",
        url: "https://twitter.com",
        site: "twitter.com",
        content: "What's happening?",
    },
    {
        title: "Facebook",
        url: "https://facebook.com",
        site: "facebook.com",
        content: "Connect with friends, family and other people you know.",
    },
    {
        title: "Kampus Twitch",
        url: "https://twitch.tv/usirin",
        site: "twitch.tv/usirin",
        content: "Twitch",
        comments: [{content: "Takip etmeyi unutmayın"}],
    },
    {
        title: "discord.kamp.us",
        url: "discord.kamp.us",
        site: "discord.kamp.us",
        content:
            "kampus: ortamlardaki pek $ukela yazilim toplulugu. bol pozitivite, motivasyon ve beraber gelisme mottolari. discord.kamp.us diye bir discord sunuculari var, icerisi adeta sampiyonlar ligi.",
        comments: [
            {content: "Kampüs discord sunucusu"},
            {content: "Discorda gelin"},
            {
                content:
                    "Kampüsteki yazılımcıların motivasyonu o kadar yüksek ki, bazen hiç uyumuyorlar.",
            },
        ],
    },
    {
        title: "Github",
        url: "https://github.com/kamp-us/monorepo",
        site: "github.com/kamp-us/monorepo",
        content: "Dünyanın en iyi monoreposu",
        comments: [
            {content: "Bu monorepo çok güzel"},
            {content: "Bu monorepo inanılmaz"},
            {content: "Kampüs çoheyi"},
            {content: "!adam"},
        ],
    },
    {
        title: "Yüksek dozajlı şakalar",
        site: "kamp.us",
        content: "aynen öyle",
        comments: [
            {
                content:
                    "'Yarın kampusa gidiyorum' - 'Hangi kampa?' - 'Yok ya, kampus, yazılım topluluğu oraya gidiyorum.'",
            },
            {
                content:
                    "Kampüsün yazılım topluluğu üyeleri arasında bir yarışma düzenlenmiş, ama kazananın ödülü yalnızca daha fazla kod yazmak olmuş.",
            },
            {
                content:
                    "'Aslında bu bir feature, bug değil' diyen yazılımcılar, kampüsün yazılım topluluğu üyeleri tarafından 'bug' olarak kabul edilir.",
            },
        ],
    },
];

type Post = {
    title: string;
    url?: string;
    content?: string;
    site?: string;
    comments?: { content: string }[];
    slug?: string;
};

const prisma = new PrismaClient();

async function seedAll(posts: Post[]) {
    for (const post of posts) {
        const title: string = post.title;
        const url: string | null = post.url || null;
        const site: string | null = post.site || null;
        const slug = slugify(title) as string;
        const content: string | null = post.content || null;
        const comments: any[] = post.comments || [];
        const findPrismaPost = await prisma.post.findFirst({
            where: {
                slug,
            },
            select: {
                id: true,
            },
        });
        if (findPrismaPost) {
            return;
        }
        const prismaPost = await prisma.post.create({
            data: {
                title,
                url,
                site,
                slug,
                content,
                userID: randomUUID(),
                comments: {
                    create: comments.map((comment) => {
                        return {
                            content: comment.content,
                            userID: randomUUID(),
                        };
                    }),
                },
            },
        });
    }
}

seedAll(posts)
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });