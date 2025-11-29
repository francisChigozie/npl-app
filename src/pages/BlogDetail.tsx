import React from 'react';
import {
    Avatar,
    Box,
    Breadcrumbs,
    Chip,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Stack,
    Typography,
    Tooltip,
    Button
} from '@mui/material';
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Author = {
    name: string;
    avatarUrl: string;
};

type Post = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    dateISO: string;
    tags: string[];
    readingMinutes: number;
    author: Author;
    content: string[];
};

const ALL_POSTS: Post[] = [
    {
        id: '1',
        slug: 'kickstarting-your-digital-transformation',
        title: 'Kickstarting Your Digital Transformation',
        excerpt: 'A practical roadmap to modernize your stack without disrupting operations.',
        imageUrl: 'https://picsum.photos/id/1011/1600/900',
        dateISO: '2024-12-01',
        tags: ['Strategy', 'Engineering'],
        readingMinutes: 7,
        author: { name: 'Ada Lovelace', avatarUrl: 'https://i.pravatar.cc/100?img=1' },
        content: [
            'Modernization doesn’t have to be risky. Start by mapping value streams and identifying quick wins.',
            'Incremental rollouts with clear success metrics reduce risk and improve stakeholder confidence.',
            'Pick a pilot domain, automate deployments early, and prioritize observability from day one.'
        ]
    },
    {
        id: '2',
        slug: 'design-systems-that-scale',
        title: 'Design Systems That Scale',
        excerpt: 'How to build design systems that empower teams and ship faster.',
        imageUrl: 'https://picsum.photos/id/1005/1600/900',
        dateISO: '2025-01-10',
        tags: ['Design', 'UI'],
        readingMinutes: 6,
        author: { name: 'Grace Hopper', avatarUrl: 'https://i.pravatar.cc/100?img=2' },
        content: [
            'Codify patterns as composable components with strong accessibility defaults.',
            'Supplement the system with designer kits, documentation, and lint rules.',
            'Adopt “design tokens” to theme across platforms consistently.'
        ]
    },
    {
        id: '3',
        slug: 'measuring-ux-without-guesswork',
        title: 'Measuring UX Without Guesswork',
        excerpt: 'Turn user feedback and analytics into actionable UX metrics.',
        imageUrl: 'https://picsum.photos/id/1036/1600/900',
        dateISO: '2025-02-02',
        tags: ['UX', 'Analytics'],
        readingMinutes: 8,
        author: { name: 'Alan Turing', avatarUrl: 'https://i.pravatar.cc/100?img=3' },
        content: [
            'Define your core journeys and assign a KPI to each (task success rate, time on task, drop-off).',
            'Pair quant with frequent qualitative research to validate hypotheses.',
            'Build dashboards to make UX health visible to the whole org.'
        ]
    }
];

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

export default function BlogDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const post = React.useMemo(
        () => ALL_POSTS.find((p) => p.slug === slug),
        [slug]
    );

    const related = React.useMemo(() => {
        if (!post) return [];
        return ALL_POSTS.filter(
            (p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))
        ).slice(0, 3);
    }, [post]);

    const share = async () => {
        if (!post) return;
        const shareUrl = window.location.href;
        const text = `${post.title} — ${post.excerpt}`;
        if (navigator.share) {
            try {
                await navigator.share({ title: post.title, text, url: shareUrl });
            } catch {
                // user cancelled
            }
        } else {
            window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
                '_blank',
                'noopener,noreferrer'
            );
        }
    };

    if (!post) {
        return (
            <Container sx={{ py: 6 }}>
                <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
                    Go back
                </Button>
                <Typography variant="h5" fontWeight={800} mt={2}>
                    404 — Post not found
                </Typography>
                <Typography color="text.secondary" mt={1}>
                    The article you’re looking for doesn’t exist or was moved.
                </Typography>
                <Button component={RouterLink} to="/blog" variant="contained" sx={{ mt: 2 }}>
                    View all posts
                </Button>
            </Container>
        );
    }

    return (
        <main>
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: 260, md: 420 },
                    backgroundImage: `url(${post.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))'
                    }}
                />
                <Container sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
                    <Stack justifyContent="flex-end" alignItems="flex-start" sx={{ height: '100%', py: 3 }}>
                        <Breadcrumbs sx={{ color: 'common.white', mb: 1 }}>
                            <Link component={RouterLink} to="/" color="inherit" underline="hover">
                                Home
                            </Link>
                            <Link component={RouterLink} to="/blog" color="inherit" underline="hover">
                                Blog
                            </Link>
                            <Typography color="common.white">{post.title}</Typography>
                        </Breadcrumbs>
                        <Typography variant="h3" fontWeight={800} color="common.white">
                            {post.title}
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center" mt={2} sx={{ color: 'rgba(255,255,255,0.9)' }}>
                            <Avatar src={post.author.avatarUrl} alt={post.author.name} sx={{ width: 32, height: 32 }} />
                            <Typography variant="body2">{post.author.name}</Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <CalendarTodayIcon sx={{ fontSize: 16 }} /> {formatDate(post.dateISO)}
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <AccessTimeIcon sx={{ fontSize: 16 }} /> {post.readingMinutes} min read
                            </Typography>
                            <Tooltip title="Share">
                                <IconButton onClick={share} sx={{ color: 'common.white' }} aria-label="Share this article">
                                    <ShareIcon />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            <Container sx={{ py: { xs: 3, md: 6 } }}>
                <Stack spacing={2}>
                    <Typography variant="h6" color="text.secondary">
                        {post.excerpt}
                    </Typography>

                    <Divider sx={{ my: 1 }} />

                    <Stack spacing={2}>
                        {post.content.map((para, idx) => (
                            <Typography key={idx} variant="body1" sx={{ lineHeight: 1.8 }}>
                                {para}
                            </Typography>
                        ))}
                    </Stack>

                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
                        {post.tags.map((t) => (
                            <Chip key={t} label={t} />
                        ))}
                    </Stack>

                    <Divider sx={{ my: 3 }} />

                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar src={post.author.avatarUrl} alt={post.author.name} sx={{ width: 48, height: 48 }} />
                        <Box>
                            <Typography fontWeight={700}>{post.author.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Author
                            </Typography>
                        </Box>
                    </Stack>

                    {related.length > 0 && (
                        <>
                            <Typography variant="h5" fontWeight={800} mt={4}>
                                Recommended
                            </Typography>
                            <Grid container spacing={2} mt={0.5}>
                                {related.map((p) => (
                                    <Grid key={p.id} >
                                        <Box
                                            component={RouterLink}
                                            to={`/blog/${p.slug}`}
                                            sx={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                borderRadius: 2,
                                                overflow: 'hidden',
                                                display: 'block',
                                                border: '1px solid',
                                                borderColor: 'divider'
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={p.imageUrl}
                                                alt={p.title}
                                                loading="lazy"
                                                sx={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
                                            />
                                            <Box sx={{ p: 2 }}>
                                                <Typography fontWeight={700}>{p.title}</Typography>
                                                <Stack direction="row" spacing={1} mt={1}>
                                                    {p.tags.slice(0, 2).map((t) => (
                                                        <Chip key={t} label={t} size="small" />
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    )}
                </Stack>

                <Button
                    startIcon={<ArrowBackIcon />}
                    sx={{ mt: 4 }}
                    onClick={() => navigate(-1)}
                    aria-label="Go back"
                >
                    Back
                </Button>
            </Container>
        </main>
    );
}